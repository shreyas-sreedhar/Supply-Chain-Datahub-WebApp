from typing import Union
from fastapi.responses import JSONResponse
import pandas as pd
from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from .config import settings
from .utils import load_data, setup_logger
from .models import Company, Location


# Create an instance of FastAPI
app = FastAPI()

# Set up logging
logger = setup_logger()

# Configure CORS (Cross-Origin Resource Sharing) middleware to allow requests from the specified origin
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"], 
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"],  
    
)



# Global error handler for uncaught exceptions
@app.exception_handler(Exception)
async def global_exception_handler(request: Request, exc: Exception):
    logger.error(f"Unhandled exception: {str(exc)}", exc_info=True)
    return JSONResponse(
        status_code=500,
        content={"message": "An unexpected error occurred. Please try again later."}
    )

try:
    companies_data = load_data(settings.COMPANIES_URL)
    locations_data = load_data(settings.LOCATIONS_URL)
except Exception as e:
    logger.critical(f"Failed to load initial data: {str(e)}", exc_info=True)
    raise

from typing import Union
import pandas as pd
from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from .config import settings
from .utils import load_data, setup_logger
from .models import Company, Location

app = FastAPI()
logger = setup_logger()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Global error handler
@app.exception_handler(Exception)
async def global_exception_handler(request: Request, exc: Exception):
    logger.error(f"Unhandled exception: {str(exc)}", exc_info=True)
    return JSONResponse(
        status_code=500,
        content={"message": "An unexpected error occurred. Please try again later."}
    )

try:
    companies_data = load_data(settings.COMPANIES_URL)
    locations_data = load_data(settings.LOCATIONS_URL)
except Exception as e:
    logger.critical(f"Failed to load initial data: {str(e)}", exc_info=True)
    raise


# Route to return a welcome message
@app.get("/")
async def read_root():
    logger.info("Root point visited")
    return {"message": "Welcome to the Supply Chain Hub Assignment"}

# Route to check the health of the API
@app.get("/health")
def health_check():
    logger.info("Health check endpoint visited")
    return {"status": "API Healthy"}


# Route to get all companies
@app.get("/api/companies", response_model=list[Company])
def get_all_companies():
    logger.info("Fetching all companies")
    try:
        return companies_data
    except Exception as e:
        logger.error(f"Error fetching all companies: {str(e)}", exc_info=True)
        raise HTTPException(status_code=500, detail="Internal server error")
    

# Route to get a specific company by its ID
@app.get("/api/companies/{company_id}", response_model=Company)
def get_company(company_id: int):
    logger.info(f"Fetching company with id: {company_id}")
    try:
        company = next((c for c in companies_data if c['company_id'] == company_id), None)
        if not company:
            logger.warning(f"Company not found: {company_id}")
            raise HTTPException(status_code=404, detail="Company not found")
        return Company(**company)
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error fetching company {company_id}: {str(e)}", exc_info=True)
        raise HTTPException(status_code=500, detail="Internal server error")


# Route to get locations for a specific company by its ID
@app.get("/api/companies/{company_id}/location", response_model=list[Location])
def get_company_locations(company_id: int):
    logger.info(f"Fetching Locations for Company id: {company_id}")
    try:
        locations = [location for location in locations_data if location['company_id'] == company_id]
        if not locations:
            logger.warning(f"No locations found for company: {company_id}")
            raise HTTPException(status_code=404, detail="Locations not found")
        return locations
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error fetching locations for company {company_id}: {str(e)}", exc_info=True)
        raise HTTPException(status_code=500, detail="Internal server error")



