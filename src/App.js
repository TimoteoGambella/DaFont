import { useEffect, useState } from "react";

function App() {

  const [fonts,setFonts]=useState(null)

  useEffect(() => {
    fetch(`https://www.googleapis.com/webfonts/v1/webfonts?key=${"AIzaSyByh9oYEi6K-CuARl_9bwe4sBiYtHED37c"}`).then((res)=>res.json().then((res)=>setFonts(res.items)))
  }, []);

  return (
    <div>
      {fonts && fonts.map((obj,i)=>{
        return(
          <link
            key={obj.family}
            rel="stylesheet"
            href={`https://fonts.googleapis.com/css?family=${obj.family.replace(/ /g, '+')}`}
          />
        )
      })}
      <h1>Hola soy timoteo</h1>
    </div>
  );
}

export default App;

// 