import React, { useState }  from "react";
import "./style.css";
import Menu from "../menuApi";
import MenuCard from "./menuCard";
import Newpage from "./newpage";
const Restaurant=()=>{
    const [v,setV]=useState(0);
    const [recipy,setRecipy]=useState("");
    const [menuData,setmenuData]=useState(Menu);

    const filterItem=(Name)=>{
        setV(0);
        const updatedList=Menu.filter((curelem)=>{
            return curelem.category===Name;
        });
        if(Name==="all") {
            setmenuData(Menu);
        }
        else {
        setmenuData(updatedList);
        }
    };
    const handle = (g) => {
        setRecipy(g);
        setV(1);
      };
    if(v==0){
        return(
        <>
        <div style={{textAlign:"center",backgroundColor:"brown",height:"106px"}}>
        <h1 style={{textAlign:"center"}}>Delicious Vegetarian Recipies </h1>
        <nav>
            <div style={{textAlign:"center"}}>
                <button className="button"  onClick={()=>filterItem("indian")}>Indian</button>
                <button className="button"  onClick={()=>filterItem("russian")}>Russian</button>
                <button className="button"  onClick={()=>filterItem("turkish")}>Turkish</button>
                <button className="button"  onClick={()=>filterItem("all")}>All</button>
            </div>
        </nav>
        </div>
        <div>Click the image to get follow recipy</div>
        <MenuCard menuData={menuData} handle={handle}/>
        
        </>
    )
    }
    else {
        return(
            <>
            <div style={{textAlign:"center",backgroundColor:"brown",height:"106px"}}>
        <h1 style={{textAlign:"center"}}>Delicious Vegetarian Recipies </h1>
        <nav>
            <div style={{textAlign:"center"}}>
                <button className="button" onClick={()=>filterItem("indian")}>Indian</button>
                <button className="button" onClick={()=>filterItem("russian")}>Russian</button>
                <button className="button" onClick={()=>filterItem("turkish")}>Turkish</button>
                <button className="button" onClick={()=>filterItem("all")}>All</button>
            </div>
        </nav>
        </div>
        <div>Click the image to get follow recipy</div>
        <Newpage recipy={recipy} menuData={menuData} />
        
            </>
        )
    }
   
}

export default Restaurant
