import psycopg2

def collect_db_metrics():
    try:
        conn = psycopg2.connect(
            dbname="mydb",
            user="postgres",
            password="password",
            host="localhost"
        )

        cursor = conn.cursor()

        cursor.execute("""
            SELECT count(*) 
            FROM pg_stat_activity
        """)

        active_connections = cursor.fetchone()[0]

        cursor.close()
        conn.close()

        return {
            "dbActiveConnections": active_connections
        }

    except Exception as e:
        return {
            "dbError": str(e)
        }