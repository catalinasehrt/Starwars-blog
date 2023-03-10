import React, {useContext, useEffect} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Cards } from "../component/cards";
import { Context } from "../store/appContext";







export const Home = () => {
	const {store,actions} = useContext(Context);
	return <div className="container text-center m-5 ">
		
		<h1 className="fst-oswald">Personajes</h1>
		
		<Cards
			titulo="Buscar personajes"
			route="/personajes"
			img="https://www.giantfreakinrobot.com/wp-content/uploads/2021/05/star-wars-cancelled-1200x675.jpg"
		
		/>

		
		<h1>Planetas</h1>
		<Cards
		 titulo="Buscar planetas" 
		 route="/planetas"
		 img= "https://sm.ign.com/t/ign_nordic/gallery/e/every-plan/every-planet-and-location-in-star-wars-battlefront-2s-multip_34bd.1080.jpg"
		 
		 />	
			
		
	</div>
	

	
	
}
