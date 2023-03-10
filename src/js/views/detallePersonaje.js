import React, {useState,useEffect,useContext} from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";

export const DetallePersonaje= ()=>{
   
const { id } = useParams();
const [personajes, setPersonajes] = useState({});

useEffect(() => {
    fetch("https://www.swapi.tech/api/people/" + id)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPersonajes(data.result);
      })
      .catch((error) => console.log(error));
  }, []);

  

return <>
<div className="container-fluid m-5">
 
<div className="text-center text-light">
<img src="http://www.alucine.es/wp-content/uploads/2015/07/162.jpg" width={500}/>

</div>
<div className="col">
<h1>{personajes?.properties?.name}</h1>
<p>{personajes?.description}</p>


</div>

</div>
<table className="container text-warning m-5">
<tr>
    <td>height</td>
    <td>mass</td>
    <td>hair_color</td>
    <td>skin_color</td>
    <td>eye_color</td>
    <td>birth_yea</td>
    <td>gender</td>
</tr>
<tr>
    <td>{personajes?.properties?.height}</td>
    <td>{personajes?.properties?.mass}</td>
    <td>{personajes?.properties?.hair_color}</td>
    <td>{personajes?.properties?.skin_color}</td>
    <td>{personajes?.properties?.eye_color}</td>
    <td>{personajes?.properties?.birth_year}</td>
    <td>{personajes?.properties?.gender}</td>
</tr>
</table>

</>


}


    
    
    
