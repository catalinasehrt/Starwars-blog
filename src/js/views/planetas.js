import React, {useContext} from "react";
import { object } from "prop-types";
import { Card2 } from "../component/cards";
import { Context } from "../store/appContext";




export const Planetas= ()=>{
    const {store, actions}= useContext(Context);
    
return <div className="container">
<h1>Planetas</h1>

<div className="row">
        {store.planetas.map((objeto,index)=>{
            return  <Card2 
        
        img="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d71e379b-3f09-42b2-b3fe-26548591a750/devocdi-7a1e57d0-8bac-40d5-a70b-daea80cc8d57.png/v1/fill/w_894,h_894,q_70,strp/star_wars_planet_collection__1_by_ericwhitted_devocdi-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2Q3MWUzNzliLTNmMDktNDJiMi1iM2ZlLTI2NTQ4NTkxYTc1MFwvZGV2b2NkaS03YTFlNTdkMC04YmFjLTQwZDUtYTcwYi1kYWVhODBjYzhkNTcucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.BIy_1uGX86db9SWB8a01LDv3xzUP1OlA9OwnyEqflQc"
        route={`/detalle/planetas/${objeto.uid}`}
        titulo = {objeto.name}
        

/> 
        })
        }

</div>
</div>



}
