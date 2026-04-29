import os

LOG_FILE = "./logs/app.log"

def collect_logs():
    if not os.path.exists(LOG_FILE):
        return []

    with open(LOG_FILE, "r") as file:
        lines = file.readlines()

    return lines[-20:]