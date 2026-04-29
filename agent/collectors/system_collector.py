import psutil
import time
import socket

BOOT_TIME = psutil.boot_time()

def collect_system_metrics():
    memory = psutil.virtual_memory()
    disk = psutil.disk_usage('/')
    network = psutil.net_io_counters()

    return {
        "hostname": socket.gethostname(),
        "cpuUsage": psutil.cpu_percent(interval=1),
        "memoryUsage": memory.percent,
        "memoryTotal": memory.total,
        "diskUsage": disk.percent,
        "diskTotal": disk.total,
        "networkInBytes": network.bytes_recv,
        "networkOutBytes": network.bytes_sent,
        "uptime": int(time.time() - BOOT_TIME)
    }