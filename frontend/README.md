# Supply Chain Data Hub Assignment - Frontend

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Follow the instructions below to set up and run the project on your local machine.

### Prerequisites

- **Node.js** and **npm** (or yarn) installed on your system. You can download them from [Node.js](https://nodejs.org/).
- **Docker** installed and running. You can download it from [Docker](https://www.docker.com/).

### Installation

1. **Clone the repository**:
   ```
   git clone https://github.com/shreyas-sreedhar/SCDH-FSD
   cd SCDH-FSD/frontend
   ```

2. **Install packages**:
   ```
   npm install
   ```

3. **Running the Application**:
   ```
   npm run dev
   ```

4. **Test the App**:
   ```
   npm run test:watch
   ```

5. **Access the application**:
   - Open your browser and go to `http://localhost:3000`
   - API documentation is available at `http://localhost:3000/docs`


### Components

- **components/**: 1. Maps.tsx - Loads the GoogleMap on to it. \
2. Maps3d.tsx - Loads the 3D Google Maps overview using ThreeJs and WebGL. 
- **UI Components**:
1. Navbar 
2. Company List Card
3. Swagger UI for Documentation

### Pages

- **pages/**: 
1. `/` Home page that shows company listings
2. `/companies/{companyid} - Page that shows the location of comapny by company id


## Endpoints

### Root

**URL**: `/`

- **Method**: `GET`
- **Description**: Lists the companies.

### Companies

**URL**: `/companies`

- **Method**: `GET`
- **Description**: Redirects back to the root (`/`).

### Company Details

**URL**: `/companies/{company_id}`

- **Method**: `GET`
- **Description**: Lists the details of the specified company, including a 3D map and location details.

## Docker Usage

To containerize the application using Docker, follow these steps:

1. **Build the Docker image**:
   ```
   docker build .
   ```

2. **Run the Docker container**:
   ```
   docker run 
   ```

   and 

    ```
   docker-compose build
   ```

## Environment Variables

The application uses environment variables for configuration. Create a `.env` file in the root of the `frontend` directory and add your variables there.

Example: ```NEXT_PUBLIC_GMKEY="sdfdsfdsf"```


## Testing

The application uses [Jest](https://jestjs.io/) for testing. To run tests, use the following command:

```
npm run test:watch
```

This will run tests in watch mode, automatically re-running them when files change.

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React.js Documentation](https://reactjs.org/docs/getting-started.html)
- [Jest Documentation](https://jestjs.io/docs/getting-started)

## Thank you. 


