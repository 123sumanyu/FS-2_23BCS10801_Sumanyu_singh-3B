import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const login = () => {
    localStorage.setItem("token", "user-login");
    navigate("/dashboard");
  };

  const goToDashboard = () => {

    const token = localStorage.getItem("token");

    if (token) {
      navigate("/dashboard");
    } else {
      alert("Please login first!");
    }

  };

  return (

    <div style={{ textAlign: "center", marginTop: "100px" }}>

      <h2>EcoTrack Login</h2>

      <button onClick={login} style={{ marginRight: "10px" }}>
        Fake Login
      </button>

      <button onClick={goToDashboard}>
        Go To Dashboard
      </button>

    </div>

  );
}

export default Login;