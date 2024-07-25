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
print("company details")
print(companies_data.head())  
print("location details")
print(locations_data.head())  



@app.get("/")
def read_root():
    return {"message": "Welcome to the Supply Chain Hub Assignment"}

@app.get("/api/companies")
def get_all_companies():
    companies = companies_details.to_dict(orient="records")
    return companies

@app.get("/api/companies/{company_id}")
def get_company(company_id: int):
    # companies_details = companies_data()
    company = companies_details[companies_details['company_id'] == company_id]
    if company.empty:
        raise HTTPException(status_code=404, detail="Company not found")
    return company.to_dict(orient="records")[0]

@app.get("/api/companies/{company_id}/location")
def get_companylocation(company_id: int):
    # companies_details = companies_data()
    locations_details = locations_data()
    # Filter locations by company_id
    locations = locations_details[locations_details['company_id'] == company_id]
    # company = companies_details[companies_details['company_id'] == company_id]
    if locations.empty:
        raise HTTPException(status_code=404, detail="Location not found")
    return locations.to_dict(orient="records")



@app.get("/health")
def health_check():
    return {"status": "healthy"}