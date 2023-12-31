import { Fragment, useContext } from "react";
import Filtros from "../components/Filtros/Filtros";
import { UseWebContext } from "../context/WebContext";
import FontCard from "../components/FontCard/FontCard";
import Loader from "../components/Loader/Loader";
import Navbar from "../components/Navbar/Navbar";
import ChargeFonts from "../components/FontsLinks/ChargeFonts";

export default function Home(){
    const {fonts,loader,loader2,pagination}=useContext(UseWebContext)

    return(
        <>
            <Navbar/> 
            <ChargeFonts/>
            <div className="home-container">

                <Filtros text={"Últimas agregadas"} filters={true}/>

                {loader ? 
                    <Loader/>
                    :
                    <div className="cards-container">
                        {fonts && fonts.map((obj,i)=>{
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
                {!loader && loader2 &&
                    <div style={{marginBottom:"40px"}}>
                        <Loader/>
                    </div>
                }
            </div>
        </>
    )
}