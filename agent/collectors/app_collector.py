import requests

ACTUATOR_URL = "http://localhost:8081/actuator/metrics"

def collect_app_metrics():
    try:
        response = requests.get(ACTUATOR_URL)
        data = response.json()

        return {
            "applicationMetrics": data
        }

    except Exception as e:
        return {
            "applicationMetricsError": str(e)
        }