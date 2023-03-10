import React, {useState,useEffect,useContext} from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";


export const DetallePlaneta=()=>{

    const { id } = useParams();
    const [planetas, setPlanetas] = useState({});

    useEffect(() => {
        fetch("https://www.swapi.tech/api/planets/" + id)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setPlanetas(data.result);
          })
          .catch((error) => console.log(error));
      }, []);

      

return <>
<div className="container-fluid m-5">
<div className="row tex-center text-light"> 
<div className="col-5">
<img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d71e379b-3f09-42b2-b3fe-26548591a750/devocdi-7a1e57d0-8bac-40d5-a70b-daea80cc8d57.png/v1/fill/w_894,h_894,q_70,strp/star_wars_planet_collection__1_by_ericwhitted_devocdi-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2Q3MWUzNzliLTNmMDktNDJiMi1iM2ZlLTI2NTQ4NTkxYTc1MFwvZGV2b2NkaS03YTFlNTdkMC04YmFjLTQwZDUtYTcwYi1kYWVhODBjYzhkNTcucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.BIy_1uGX86db9SWB8a01LDv3xzUP1OlA9OwnyEqflQc" width={500}/>

</div>
<div className="col">
    <h1>{planetas?.properties?.name}</h1>
    <p>{planetas?.description}</p>

</div>
</div>

</div>
<table className="container m-5 text-warning">
    <tr>
        <td>diameter</td>
        <td>rotation_period</td>
        <td>orbital_period</td>
        <td>gravity</td>
        <td>population</td>
        <td>climate</td>
        <td>terrain</td>
        <td>surface_water</td>
    </tr>
    <tr>
        <td>{planetas?.properties?.diameter}</td>
        <td>{planetas?.properties?.rotation_period}</td>
        <td>{planetas?.properties?.orbital_period}</td>
        <td>{planetas?.properties?.gravity}</td>
        <td>{planetas?.properties?.population}</td>
        <td>{planetas?.properties?.climate}</td>
        <td>{planetas?.properties?.terrain}</td>
        <td>{planetas?.properties?.surface_water}</td>
    </tr>
</table>

</>


}