export default function FontsLinks({font}){
    return(
        <link
            rel="stylesheet"
            href={`https://fonts.googleapis.com/css?family=${font.family.replace(/ /g, '+')}`}
        />
    )
}