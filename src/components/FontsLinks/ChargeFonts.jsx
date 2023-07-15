import { Fragment, useContext } from "react"
import { UseWebContext } from "../../context/WebContext"
import FontsLinks from "./FontsLinks"

export default function ChargeFonts(){

    const {fonts,setLoader}=useContext(UseWebContext)

    return(
        <div>
            {fonts && fonts.map((obj,i)=>{
                if(i===fonts.lenght-1){setLoader(false)}
                return(
                    <Fragment key={i}>
                        <FontsLinks font={obj}/>
                    </Fragment>
                )
            })}
        </div>
    )
}