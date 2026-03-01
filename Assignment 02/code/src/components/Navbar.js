import { Link, useNavigate } from "react-router-dom";

function Navbar(){

const navigate = useNavigate();

const logout = ()=>{

localStorage.removeItem("token");

navigate("/login");

};

return(

<div style={{padding:"15px",background:"#eee"}}>

<Link to="/dashboard">Dashboard</Link>

{" | "}

<Link to="/dashboard/water">Water Tracker</Link>

{" | "}

<button onClick={logout}>
Logout
</button>

</div>

);

}

export default Navbar;