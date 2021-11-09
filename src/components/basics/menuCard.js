import React from 'react';
const MenuCard=(props)=>{
    return (
        <>
        <div className="float">
            {props.menuData.map((curelem,key)=>{
                return (
                <>
                   <div className="next" onClick={()=>props.handle(key)}><img src={curelem.image} width="400px" height="300px"/><div style={{textAlign:"center"}}>{curelem.name}</div> </div>  
                </>                     
                )
            })}
        </div>
        </>
    )
}
export default MenuCard;