
import { object } from "prop-types";
import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Card2 } from "../component/cards";
import { Context } from "../store/appContext";




export const Personajes= ()=>{
    const {store, actions}= useContext(Context);

    console.log(store.personajes)

    return <div className="container">
    <h1>Personajes</h1>
    
    
    <div className="row">
        {store.personajes.map((objeto,index)=>{
            return  <Card2 
        
        img="https://www.latercera.com/resizer/FI4p5m12tYx731lGJxPVapPvXUo=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/F6MGM2EP5NGS7M4XZEPJPXRUF4.png"
        route={`/detalle/personajes/${objeto.uid}`}
        titulo = {objeto.name}
        
        
        /> 
        })
        }
       
     
       
    </div>
    

</div>


}

 