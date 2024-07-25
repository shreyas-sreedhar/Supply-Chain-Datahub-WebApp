from fastapi.testclient import TestClient
from app.main import app

import pytest

client = TestClient(app)

# @pytest.mark.parametrize("input_value, expected_result", [
#     (1, 2),
#     (2, 4),
#     (3, 6),
#     (4, 8),
#     (5, 10),
# ])

def test_read_root():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"message": "Welcome to the Supply Chain Hub Assignment API"}

def test_get_all_companies():
    response = client.get("/api/companies")
    assert response.status_code == 200
    assert len(response.json()) > 0

def test_get_company():
    response = client.get("/api/companies/1")
    assert response.status_code == 200
    assert "company_id" in response.json()

def test_get_company_not_found():
    response = client.get("/api/companies/9999")
    assert response.status_code == 404

def test_get_company_locations():
    response = client.get("/api/companies/1/locations")
    assert response.status_code == 200
    assert len(response.json()) > 0

def test_health_check():
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json() == {"status": "healthy"}

@pytest.mark.parametrize("company_id", [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
def test_get_company(company_id, company_data):
    response = client.get(f"/api/companies/{company_id}")
    assert response.status_code == 200
    expected_company = next((company for company in company_data if company["company_id"] == company_id), None)
    assert response.json() == expected_company
