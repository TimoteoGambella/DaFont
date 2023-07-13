import { Fragment, useContext } from "react"
import { UseWebContext } from "../context/WebContext"
import FontsLinks from "../components/FontsLinks/FontsLinks"

export default function Home(){

    const {fonts}=useContext(UseWebContext)

    return(
        <div>
            {fonts && fonts.map((obj,i)=>{
                return(
                    <Fragment key={obj.family}>
                        <FontsLinks font={obj}/>
                    </Fragment>
                )
            })}
        </div>
    )
}