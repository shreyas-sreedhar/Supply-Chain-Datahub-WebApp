from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    COMPANIES_URL: str = "https://raw.githubusercontent.com/Supply-Chain-Data-Hub/full-stack-hiring-takehome/main/companies.csv"
    LOCATIONS_URL: str = "https://raw.githubusercontent.com/Supply-Chain-Data-Hub/full-stack-hiring-takehome/main/locations.csv"
    CORS_ORIGINS: list = ["http://localhost:3000"]
    LOG_LEVEL: str = "INFO"

    class Config:
        env_file = ".env"

settings = Settings()