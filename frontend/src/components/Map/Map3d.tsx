import React, { useEffect, useRef, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import {
  AmbientLight,
  Camera,
  DirectionalLight,
  Matrix4,
  Object3D,
  Object3DEventMap,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

interface Map3DComponentProps {
  apiKey: string;
  latitude: number;
  longitude: number;
}
const Map3Dcomponent: React.FC<Map3DComponentProps> = ({
  apiKey,
  latitude,
  longitude,
}) => {
    const mapRef = useRef<HTMLDivElement>(null);
    const [map, setMap] = useState<google.maps.Map | null>(null);

  useEffect(() => {
    const initMap = async () => {
        const loader = new Loader({
          apiKey,
          version: "weekly",
          libraries: ["maps"]
        });
  
        const google = await loader.load();
        const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
  
        const mapDiv = mapRef.current;
        if (!mapDiv) return;


    const mapOptions = {
      tilt: 3,
      heading: 0,
      zoom: 18,
      center: { lat: latitude, lng: longitude },
      mapId: "15431d2b469f209e",
      disableDefaultUI: true,
      gestureHandling: "none",
      keyboardShortcuts: false,
    };

    const map = new Map(mapDiv, mapOptions);
    setMap(map);


    const initWebglOverlayView = (map: google.maps.Map) => {
      let scene: Object3D<Object3DEventMap>,
        renderer: WebGLRenderer,
        camera: Camera,
        loader: GLTFLoader;
      const webglOverlayView = new google.maps.WebGLOverlayView();

      webglOverlayView.onAdd = () => {
        // Set up the scene.

        scene = new Scene();

        camera = new PerspectiveCamera();

        const ambientLight = new AmbientLight(0xffffff, 0.75); // Soft white light.
        scene.add(ambientLight);

        const directionalLight = new DirectionalLight(0xffffff, 0.25);
        directionalLight.position.set(0.5, -1, 0.5);
        scene.add(directionalLight);

        // Load the model.
        loader = new GLTFLoader();
        const source =
          "https://raw.githubusercontent.com/googlemaps/js-samples/main/assets/pin.gltf";
        loader.load(source, (gltf) => {
          gltf.scene.scale.set(10, 10, 10);
          gltf.scene.rotation.x = Math.PI; // Rotations are in radians.
          scene.add(gltf.scene);
        });
      };

      webglOverlayView.onContextRestored = ({ gl }) => {
        // Create the js renderer, using the
        // maps's WebGL rendering context.
        renderer = new WebGLRenderer({
          canvas: gl.canvas,
          context: gl,
          ...gl.getContextAttributes(),
        });
        renderer.autoClear = false;

        // Wait to move the camera until the 3D model loads.
        loader.manager.onLoad = () => {
          renderer.setAnimationLoop(() => {
            webglOverlayView.requestRedraw();
            const { tilt, heading, zoom } = mapOptions;
            map.moveCamera({ tilt, heading, zoom });

            // Rotate the map 360 degrees.
            if (mapOptions.tilt < 67.5) {
              mapOptions.tilt += 0.5;
            } else if (mapOptions.heading <= 360) {
              mapOptions.heading += 0.2;
              mapOptions.zoom -= 0.0005;
            } else {
              renderer.setAnimationLoop(null);
            }
          });
        };
      };

      webglOverlayView.onDraw = ({ gl, transformer }): void => {
        const latLngAltitudeLiteral: google.maps.LatLngAltitudeLiteral = {
          lat: latitude,
          lng: longitude,
          altitude: 100,
        };

        // Update camera matrix to ensure the model is georeferenced correctly on the map.
        const matrix = transformer.fromLatLngAltitude(latLngAltitudeLiteral);
        camera.projectionMatrix = new Matrix4().fromArray(matrix);

        webglOverlayView.requestRedraw();
        renderer.render(scene, camera);

        // Sometimes it is necessary to reset the GL state.
        renderer.resetState();
      };
      webglOverlayView.setMap(map);
    };

    // const initMap = async () => {
    //   const loader = new Loader({
    //     apiKey,
    //     version: "weekly",
    //     libraries: ["maps"],
    //   });

    //   const google = await loader.load();
    //   const { Map } = (await google.maps.importLibrary(
    //     "maps"
    //   )) as google.maps.MapsLibrary;

    //   const mapDiv = mapRef.current;
    //   if (!mapDiv) return;

    //   const map = new Map(mapDiv, mapOptions);
    //   initWebglOverlayView(map);
    // };
    initWebglOverlayView(map);
};

    initMap();
  }, [apiKey,latitude,longitude]);

  return (
    <div ref={mapRef} id="map" style={{ width: "100%", height: "400px" }} />
  );
};

export default Map3Dcomponent;
