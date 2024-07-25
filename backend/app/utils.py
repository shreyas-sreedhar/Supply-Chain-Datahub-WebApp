
import pandas as pd
from io import StringIO


import logging
import requests


def setup_logger():
    logging.basicConfig(level=logging.INFO)
    return logging.getLogger(__name__)

logger = setup_logger()

def load_data(url: str) -> list[dict]:
    try:
        response = requests.get(url)
        response.raise_for_status()
        df = pd.read_csv(StringIO(response.text))
        return df.to_dict(orient="records")
    except Exception as e:
        logger.error(f"Error loading data from {url}: {str(e)}")
        return []