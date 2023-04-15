import { faAudioDescription } from "@fortawesome/free-solid-svg-icons";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {Context} from "../store/appContext";


export const Cards= (props)=>{
 
    return <div classNameName="container text-center m-5"> 
   
        
    <div classNameName="cards m-5">
      <img src={props.img} className="rounded-circle" width={"360px"} alt="..."/>
      <div classNameName="card-body">
       
        <p classNameName="card-text m-8" >{props.descripcion} </p>
      </div>
      <div classNameName="card-footer">
        <Link to= {props.route}>
        <button type="button" className="btn btn-warning fw-bolder text-danger pb-9">{props.titulo} </button>
        </Link>
     
      
      </div>
    </div>
  </div> 
 
}

export const Card2=(props)=>{
  const {actions}= useContext(Context)
  return <div className="card2" style={{width: "18rem"}}>
  <img src= {props.img} className="card-img-top" alt="..."/>
  <div className="card-body ">
    <h5 className="card-title text-light">{props.titulo} </h5>
    <p className="card-text">{props.descripcion} </p>
    
    
    <div className=" row">
      <div className="col">

        

      <Link to={props.route}>  
                <button className="btn btn-warning" onClick={props.action}>Ver detalle</button> 
                </Link>
                
    
                <button className="btn btn-danger m-2" onClick={()=>{
                  actions.agregarFavoritos(props.titulo)
                }}>{props.favoritos} ♥︎</button>
      

      </div>            
    </div>   
  </div>
</div>



}
