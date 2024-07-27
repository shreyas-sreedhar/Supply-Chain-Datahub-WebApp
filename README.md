# Supply Chain Datahub - Assignment 


## Table of Contents
- [Supply Chain Datahub - Assignment](#supply-chain-datahub---assignment)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
- [Supply Chain Hub Company Viewer](#supply-chain-hub-company-viewer)
  - [Project Structure](#project-structure)
  - [Prerequisites](#prerequisites)
  - [Features](#features)
  - [Docker](#docker)
    - [Build and Run with Docker](#build-and-run-with-docker)
  - [Prerequisites](#prerequisites-1)

## Introduction

# Supply Chain Hub Company Viewer

This project is a full-stack application that displays company information and their locations. It uses FastAPI for the backend, Next.js + TailwindCSS for the frontend, SwaggerUI for documentation, Pytest and Jest for Testing, and is containerized using Docker.

## Project Structure
/backend - has all files for the backend.
/frontend - has all the files for the frontend with their own tests
/data - has the CSVs required for this assignment 
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

## Docker

### Build and Run with Docker
 Docker scripts runs both frontend and backend at the same time. Can be viewed at `docker-compose.yml`
1. Build the Docker image:

   ```docker-compose build .
   ```

2. Run the Docker image:

   ```docker-compose up --build .
   ```

The API will be available at `http://localhost:8000`.

## Prerequisites

- Docker and Docker Compose
  ```
- Node.js and npm (for local development)
- Python 3.8+ (for local development)

