import { Fragment, useContext } from "react";
import Filtros from "../components/Filtros/Filtros";
import { UseWebContext } from "../context/WebContext";
import FontCard from "../components/FontCard/FontCard";
import Loader from "../components/Loader/Loader";

export default function Home(){
    const {fonts,loader,pagination}=useContext(UseWebContext)

    return(
        <div className="home-container">
            <Filtros/>

            {/* {loader ? 
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
                            return(<></>)
                        }
                    })}
                </div>
            } */}
        </div>
    )
}