import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLogs } from "./features/logsSlice";

function App() {
  const dispatch = useDispatch();


  const { logs, status, error } = useSelector((state) => state.logs);


  useEffect(() => {
    dispatch(fetchLogs());
  }, [dispatch]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>EcoTrack Dashboard</h1>

      {/* Loading State */}
      {status === "loading" && <p>Loading data...</p>}

      {/* Error State */}
      {status === "failed" && (
        <p style={{ color: "red" }}>Error: {error}</p>
      )}

      {/* Success State */}
      {status === "succeeded" && (
        <ul>
          {logs.map((log) => (
            <li key={log.id}>
              {log.activity} - {log.carbonFootprint} kg CO₂
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;