import logo from "../../assets/logowhite.svg"

export default function Navbar(){
    return(
        <div className="navbar-container">
            <img src={logo} alt="LOGO" />
            
            <div 
                id="inputContainer" 
                className={`
                    containerInput
                `}
            >
                <input
                    type="text"
                    placeholder={"Prueba buscando “manuscrito”"}
                    // onChangeCapture={(e)=>setData(e.target.value)}
                />
            </div>
        </div>
    )
}