# Supply Chain Hub Assignment Backend Documentation

## Overview

This document provides an overview of the backend structure for the FastAPI backend of the Supply Chain Hub application. The application is structured using FastAPI and follows OpenAPI 3.1.0 specifications. The backend serves multiple endpoints to manage company and location data.

## Table of Contents

- [Supply Chain Hub Assignment Backend Documentation](#supply-chain-hub-assignment-backend-documentation)
  - [Overview](#overview)
  - [Table of Contents](#table-of-contents)
  - [General Information](#general-information)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
  - [Endpoints](#endpoints)
    - [Root](#root)
    - [Health Check](#health-check)
    - [Companies](#companies)
    - [Company Details](#company-details)
    - [Company Locations](#company-locations)
  - [Schemas](#schemas)
    - [Company](#company)
    - [Location](#location)

## General Information

- **Title**: FastAPI
- **Version**: 0.1.0
- **OpenAPI Version**: 3.1.0


## Installation

1. **Clone the repository**:
   ```
   git clone <[github.com/shreyas-sreedhar/SCDH-FSD](https://github.com/shreyas-sreedhar/SCDH-FSD)>
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

**Endpoint**: `/`

- **Method**: `GET`
- **Summary**: Read Root

### Health Check

**Endpoint**: `/health`

- **Method**: `GET`
- **Summary**: Health Check

### Companies

**Endpoint**: `/api/companies`

- **Method**: `GET`
- **Summary**: Get All Companies

### Company Details

**Endpoint**: `/api/companies/{company_id}`

- **Method**: `GET`
- **Summary**: Get Company
- **Parameters**: `company_id` (path, integer, required)

### Company Locations

**Endpoint**: `/api/companies/{company_id}/location`

- **Method**: `GET`
- **Summary**: Get Company Locations
- **Parameters**: `company_id` (path, integer, required)

## Schemas

### Company

- **Type**: object
- **Required**:
  - `company_id` (integer)
  - `name` (string)
  - `address` (string)
  - `latitude` (number)
  - `longitude` (number)

### Location

- **Type**: object
- **Required**:
  - `location_id` (integer)
  - `company_id` (integer)
  - `name` (string)
  - `address` (string)
  - `latitude` (number)
  - `longitude` (number)
