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
					
				<button className="btn btn-danger dropdown-toggle m-5" type="button" data-bs-toggle="dropdown" aria-expanded="false">
				<i className="fa fa-heart text-light m-1" />
				 Favoritos
                </button>
				<ul class="dropdown-menu m-3">
                <li><button className="dropdown-item" type="button">favorito </button>🗑️</li>
                <li><button className="dropdown-item" type="button"></button></li>
                </ul>
				</Link>
			</div>
			
		</nav>
	);
};
