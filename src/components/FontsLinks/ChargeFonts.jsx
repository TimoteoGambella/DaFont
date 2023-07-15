import { Fragment, useContext } from "react"
import { UseWebContext } from "../../context/WebContext"
import FontsLinks from "./FontsLinks"

export default function ChargeFonts(){

    const {fonts,setLoader,pagination}=useContext(UseWebContext)

    return(
        <>
            {fonts && fonts.map((obj,i)=>{
                if(i===fonts.length-1){
                    setTimeout(() => {
                        setLoader(false)
                    }, 3000);
                }
                if(i<pagination){
                    return(
                        <Fragment key={i}>
                            <FontsLinks font={obj}/>
                        </Fragment>
                    )
                }else{
                    return(
                        <Fragment key={i}></Fragment>
                    )
                }
            })}
        </>
    )
}