import requests
from config import BACKEND_URL, SERVER_ID, TOKEN

def send_payload(payload):
    try:
        response = requests.post(
            BACKEND_URL,
            json=payload,
            headers={
                "Authorization": TOKEN
            }
        )

        print("Sent:", response.status_code)

    except Exception as e:
        print("Send error:", e)