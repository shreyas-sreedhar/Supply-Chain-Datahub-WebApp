// // components/SwaggerUI.tsx
import React, { useEffect, useState } from 'react';
// import SwaggerUI from 'swagger-ui-react/';
// import 'swagger-ui-react/swagger-ui.css';
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"


const SwaggerUIComponent: React.FC = () => {
  const [swaggerSpec, setSwaggerSpec] = useState<any>(null);

  useEffect(() => {
    const fetchSwaggerJSON = async () => {
      const response = await fetch('http://localhost:8000/openapi.json');
      const json = await response.json();
      setSwaggerSpec(json);
    };

    fetchSwaggerJSON();
  }, []);

  if (!swaggerSpec) {
    return <div>Loading...</div>;
  }

  return <SwaggerUI spec={swaggerSpec} />;
};

export default SwaggerUIComponent;




// export default App = () => <SwaggerUI url="https://petstore.swagger.io/v2/swagger.json" />