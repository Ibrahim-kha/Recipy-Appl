import React from "react";
import Restaurant from "./Restaurants";
import Menu from "../menuApi";

const Newpage=(props)=>{
    let v=props.recipy;
    return (
        <>
        <div className="float">
            {props.menuData.map((curelem,key)=>{
                if(v===key)
                return (
                <>
                   <div className="next1" ><div className="img" ><img  src={curelem.image} width="400px" height="300px"></img><div>{curelem.name}</div></div></div><div className="showElement">{curelem.description1}</div><div  className="showElement">{curelem.description2}</div>  
                </>                     
                )
            })}
        </div>
        </>
    )
}
export default Newpage;