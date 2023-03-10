import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const {store,actions}=useContext(Context)
	return (
		<nav className="navbar navbar-dark bg-dark ">
			<Link to="/">
				<span className="navbar-brand m-5 h1"> <img src="https://www.freepnglogos.com/uploads/star-wars-logo-png-8.png"  width={"120px"}/>     </span>
				
			</Link>
			<div className="ml-auto">
				
					
				<button className="btn btn-danger dropdown-toggle m-5" type="button" data-bs-toggle="dropdown" aria-expanded="false">
				<i className="fa fa-heart text-light m-1" />
				 Favoritos
                </button>
				<ul class="dropdown-menu m-3">
					{store.favorito.map((value,index)=>{
						return ( <li><button className="dropdown-item" type="button">{value}</button>🗑️</li>)

					})}
              
                
                </ul>
				
			</div>
			
		</nav>
	);
};
