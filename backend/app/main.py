from typing import Union
import pandas as pd
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
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

#todo-Changemiddlewearlater

# def companies_data():
#     return pd.read_csv("../data/companies.csv")

# def locations_data():
#     return pd.read_csv("../data/locations.csv")

companies_data = load_data(settings.COMPANIES_URL)
locations_data = load_data(settings.LOCATIONS_URL)


# companies_details = companies_data()
# location_details = locations_data()
#Todo remvoe later
# print("company details")
# print(companies_data.head())  
# print("location details")
# print(locations_data.head())  



@app.get("/")
def read_root():
    return {"message": "Welcome to the Supply Chain Hub Assignment"}


@app.get("/health")
def health_check():
    return {"status": "API Healthy"}


@app.get("/api/companies", response_model=list[Company])
def get_all_companies():
    # companies = companies_data.to_dict(orient="records")
    logger.info("Fethcing all the companies list")
    return companies_data

# @app.get("/api/companies/{company_id}",response_model=list[Company])
# def get_company(company_id: int):
#     # companies_details = companies_data()
#     logger.info(f"Fethcing Company id: {company_id} data")
#     for company in companies_data:
#         if company['company_id'] == company_id:
#             return company
#     if not company:
#         logger.warning(f"Company not found: {company_id}")
#         raise HTTPException(status_code=404, detail="THe company you're looking for doesn't exist")
#     return company

@app.get("/api/companies/{company_id}", response_model=Company)
def get_company(company_id: int):
    logger.info(f"Fetching company with id: {company_id}")
    company = next((c for c in companies_data if c['company_id'] == company_id), None)
    if not company:
        logger.warning(f"Company not found: {company_id}")
        raise HTTPException(status_code=404, detail="Company not found")
    return Company(**company)

@app.get("/api/companies/{company_id}/location",response_model=list[Location])
def get_company_locations(company_id: int):
    logger.info(f"Fetching Locations for Company id: {company_id}")
    locations = []
    for location in locations_data:
        if locations['company_id'] == company_id:
            locations.append(location)
    if not locations:
        logger.warning(f"Company not found: {company_id}")
        raise HTTPException(status_code=404, detail="Location not found")
    
    return locations



