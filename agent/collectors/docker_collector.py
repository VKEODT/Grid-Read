import docker

client = docker.from_env()

def collect_docker_metrics():
    containers = client.containers.list()

    result = []

    for container in containers:
        result.append({
            "containerId": container.id,
            "containerName": container.name,
            "status": container.status
        })

    return result