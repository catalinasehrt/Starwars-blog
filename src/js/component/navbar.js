import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark ">
			<Link to="/">
				<span className="navbar-brand m-5 h1"> <img src="https://www.freepnglogos.com/uploads/star-wars-logo-png-8.png"  width={"120px"}/>     </span>
				
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-danger m-3"> <i className="fa fa-heart text-light m-1" />Favorites</button>
				</Link>
			</div>
			
		</nav>
	);
};
