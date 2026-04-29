import time

from config import INTERVAL, SERVER_ID

from collectors.system_collector import collect_system_metrics
from collectors.app_collector import collect_app_metrics
from collectors.log_collector import collect_logs
from collectors.db_collector import collect_db_metrics
from collectors.docker_collector import collect_docker_metrics
from collectors.trace_collector import collect_traces

from sender import send_payload


def build_payload():
    return {
        "serverId": SERVER_ID,
        "system": collect_system_metrics(),
        "application": collect_app_metrics(),
        "logs": collect_logs(),
        "database": collect_db_metrics(),
        # "containers": collect_docker_metrics(),
        "traces": collect_traces()
    }


def run():
    while True:
        payload = build_payload()

        print(payload)

        send_payload(payload)

        time.sleep(INTERVAL)


if __name__ == "__main__":
    run()