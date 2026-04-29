import { useEffect, useState } from "react";
import API from "../services/api";
import { type Metrics } from "../types";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

function MetricsPage() {
  const [metrics, setMetrics] = useState<Metrics[]>([]);

  const fetchMetrics = async () => {
    try {
      const res = await API.get<Metrics[]>("/metrics/server1");
      setMetrics(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchMetrics();

    // 🔁 Auto-refresh every 5 seconds
    const interval = setInterval(fetchMetrics, 5000);
    return () => clearInterval(interval);
  }, []);

  // Format timestamp for graph
  const formattedData = metrics.map((m) => ({
    ...m,
    time: new Date(m.timestamp).toLocaleTimeString(),
  }));

  return (
    <div style={{ padding: "20px" }}>
      <h2>Metrics Dashboard</h2>

      {/* CPU Chart */}
      <h3>CPU Usage</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={formattedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="cpu" />
        </LineChart>
      </ResponsiveContainer>

      {/* Memory Chart */}
      <h3 style={{ marginTop: "40px" }}>Memory Usage</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={formattedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="memory" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default MetricsPage;