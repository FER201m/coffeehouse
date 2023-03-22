import { NavLink } from "react-router-dom";
import './Notfound.scss'

function Notfound() {
  return (
    <div className="wrapper">
      <h1>Not Found Page</h1>
      <NavLink to="/">Back to home page</NavLink>
    </div>
  );
}

export default Notfound;
