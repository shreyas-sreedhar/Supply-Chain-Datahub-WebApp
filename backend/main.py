from typing import Union
import pandas as pd
from fastapi import FastAPI, HTTPException

app = FastAPI()



def companies_data():
    return pd.read_csv("../data/companies.csv")

def locations_data():
    return pd.read_csv("../data/locations.csv")


companies_details = companies_data()
location_details = locations_data()

print("company details")
print(companies_details.head())  
print("location details")
print(location_details.head())  



@app.get("/")
def read_root():
    return {"Hello": "World"}

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