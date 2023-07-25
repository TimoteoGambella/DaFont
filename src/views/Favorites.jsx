import { Fragment, useContext } from "react";
import Filtros from "../components/Filtros/Filtros";
import { UseWebContext } from "../context/WebContext";
import FontCard from "../components/FontCard/FontCard";
import Loader from "../components/Loader/Loader";
import Navbar from "../components/Navbar/Navbar";
import ChargeFonts from "../components/FontsLinks/ChargeFonts";
import { UseUserContext } from "../context/UserContext";

export default function Favorites(){
    const {fonts,loader,pagination}=useContext(UseWebContext)
    const {user}=useContext(UseUserContext)
    console.log(user)
    return(
        <>
            <Navbar/> 
            <ChargeFonts/>
            <div className="home-container">

                <Filtros text={"Favoritos"}/>

                {loader ? 
                    <Loader/>
                    :
                    user.favs.length===0 ? <h2>No tienes favoritos</h2> :
                    <div className="cards-container">
                        {fonts && user.favs.map((obj,i)=>{
                            if(i<pagination){
                                return(
                                    <Fragment key={i}>
                                        <FontCard font={obj}/>
                                    </Fragment>
                                )
                            }else{
                                return(<Fragment key={i}></Fragment>)
                            }
                        })}
                    </div>
                }
            </div>
        </>
    )
}