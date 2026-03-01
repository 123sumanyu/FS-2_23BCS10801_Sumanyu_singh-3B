import { useState, useEffect, useCallback } from "react";

import Navbar from "../components/Navbar";

import CounterDisplay from "../components/CounterDisplay";

function WaterTracker() {

  // WATER STATES
  const [count, setCount] = useState(0);
  const [goal, setGoal] = useState(8);

  // API STATES
  const [tip, setTip] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // LOAD PREVIOUS COUNT FROM LOCALSTORAGE
  useEffect(() => {

    const saved = localStorage.getItem("waterCount");

    if (saved) {
      setCount(Number(saved));
    }

  }, []);

  // SAVE COUNT IN LOCALSTORAGE
  useEffect(() => {

    localStorage.setItem("waterCount", count);

  }, [count]);


  // FETCH HEALTH TIP FUNCTION
  const fetchHealthTip = useCallback(async () => {

    try {

      setLoading(true);
      setError("");
      setTip("");

      const response = await fetch(
        "https://api.adviceslip.com/advice",
        {
          cache: "no-cache" // avoid cached same advice
        }
      );

      if (!response.ok) {
        throw new Error("API Failed");
      }

      const data = await response.json();

      setTip(data.slip.advice);

    } catch (err) {

      setError("Failed to fetch health tip");

    } finally {

      setLoading(false);

    }

  }, []);

  // AUTO FETCH WHEN PAGE LOADS
  useEffect(() => {

    fetchHealthTip();

  }, [fetchHealthTip]);


  // CALLBACK FUNCTIONS (OPTIMIZED)

  const addWater = useCallback(() => {

    setCount(prev => prev + 1);

  }, []);

  const removeWater = useCallback(() => {

    setCount(prev => (prev > 0 ? prev - 1 : 0));

  }, []);

  const reset = useCallback(() => {

    setCount(0);

  }, []);


  return (

    <div>

      <Navbar />

      <div
        style={{
          margin: "20px auto",
          padding: "20px",
          border: "1px solid black",
          width: "400px"
        }}
      >

        <h2>Daily Water Tracker</h2>

        <CounterDisplay count={count} goal={goal} />

        <button onClick={addWater}> + </button>

        <button onClick={removeWater}> - </button>

        <button onClick={reset}> Reset </button>

        <br /><br />

        <label>Daily Goal : </label>

        <input
          type="number"
          value={goal}
          onChange={(e) =>
            setGoal(Number(e.target.value))
          }
        />

        {count >= goal && (

          <p>Goal Reached 🎉</p>

        )}

        <hr />

        <h3>Health Tip</h3>

        <button onClick={fetchHealthTip}>
          Get New Tip
        </button>

        {loading && (

          <p>Loading health tip...</p>

        )}

        {error && (

          <p style={{ color: "red" }}>
            {error}
          </p>

        )}

        {tip && (

          <p>
            Today’s Health Tip: {tip}
          </p>

        )}

      </div>

    </div>

  );
}

export default WaterTracker;