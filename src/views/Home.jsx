import { Fragment, useContext } from "react";
import Filtros from "../components/Filtros/Filtros";
import { UseWebContext } from "../context/WebContext";
import FontCard from "../components/FontCard/FontCard";
import Loader from "../components/Loader/Loader";

export default function Home(){
    const {fonts}=useContext(UseWebContext)

    return(
        <div>
            <Filtros/>

            {/* <div className="cards-container">
                {fonts && fonts.map((obj,i)=>{
                    return(
                        <Fragment key={i}>
                            <FontCard font={obj}/>
                        </Fragment>
                    )
                })}
            </div> */}

            <Loader/>
        </div>
    )
}