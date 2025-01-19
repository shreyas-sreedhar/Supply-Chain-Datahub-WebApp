# Supply Chain Datahub - Interactive Dashboard 

## Introduction

### Supply Chain Hub Company Listing 

This project is a full-stack application that displays company information and their locations. It uses FastAPI for the backend, Next.js + TailwindCSS for the frontend, SwaggerUI for documentation, Pytest and Jest for Testing, and is containerized using Docker.

## Project Structure
(/backend)[/backend] - has all files for the backend.
(/frontend)[/frontend] - has all the files for the frontend with their own tests
(/data)[/data] - has the CSVs required for this assignment 
.env.example - has a template required for API keys required to run this application. 
## Prerequisites

Before you begin, ensure you have the following installed:
- Python 3.8+ ([Download](https://www.python.org/downloads/))
- Node.js 14+ and npm ([Download](https://nodejs.org/en/download/))
- Docker (optional, for containerization) ([Download](https://www.docker.com/products/docker-desktop))

## Features

- Backend API (FastAPI) with endpoints for: \ 
  - Getting all companies 
  ```/``` and  ```/companies``` gives the list of companies. 

  - ```/companies/{company_id}```  Getting company details by ID
  - Getting all locations for a specific company ID
- Frontend (Next.js) with:
  - Company List Page (with search/filter functionality)
  - Company Details Page (with map integration)
- Responsive design for desktop and mobile
- Docker containerization for both backend and frontend
- ```docker-compose up --build``` to build the app 



## Frontend - Getting Started 
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

1.  **components/**: 
    - Maps.tsx - Loads the GoogleMap on to it.
    - Maps3d.tsx - Loads the 3D Google Maps overview using ThreeJs and WebGL. 
2. **UI Components**:
    - Navbar 
   - Company List Card
   - Swagger UI for Documentation

### Pages

1  **pages/**: 
    - `/` Home page that shows company listings
    -`/companies/{companyid} - Page that shows the location of comapny by company id



## Backend - Getting Started

1. **Clone the repository**:
   ```
   git clone https://github.com/shreyas-sreedhar/SCDH-FSD
   cd <SCDH-FSD/backend>
   ```

2. **Create a virtual environment**:
   ```
   python -m venv venv
   source venv/bin/activate   # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**:
   ```
   pip install -r requirements.txt
   ```

## Running the Application

1. **Start the FastAPI server**:
   ```
   uvicorn main:app --reload
   ```
 or 
 ```
  fastapi dev app/main.py 
   ```
2. **Access the application**:
   - Open your browser and go to `http://localhost:8000`
   - API documentation available at `http://localhost:8000/docs`
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
   ```bash
   docker build
    ```

2. **Run the Docker container**:
   ```bash
   docker run 
   ```

   and 

    ```bash
   docker-compose build
   ```

## Environment Variables

The application uses environment variables for configuration. Create a `.env` file in the root of the `frontend` directory and add your variables there.

Example: ```NEXT_PUBLIC_GMKEY="helloimunderthewater"```


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
- [Google Maps Documentation](https://developers.google.com/maps/documentation)

## Thank you. 


