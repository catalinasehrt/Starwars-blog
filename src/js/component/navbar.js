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


			<div className="dropdown">
            <button className="btn btn-danger dropdown-toggle m-4" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Favoritos  ♥
  </button>



  <ul className="dropdown-menu text-dark">
  {store.favoritos.map((value,index)=>{
								return (<li key={index} className="dropdown-item">{value} 
								<button className="btn btn-warning m-1"
								  onClick={()=>{ actions.deleteFav(index);
								  }}>🗑️</button> </li>)
							})}

				
  </ul>
</div>
				
				
					
              
                
               
				
			</div>
			
		</nav>
	);
};
