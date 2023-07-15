export default function FontCard({font}){
    return(
        <div>
            <p style={{fontFamily:`${font.family},${font.category}`}}>{font.family}</p>
        </div>
    )
}