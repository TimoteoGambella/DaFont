import { Visibility, VisibilityOff } from "@mui/icons-material";
import { TextField } from "@mui/material";

export default function Input({label,helper,pass,showPass,setShowPass,error,handleChange,nameData}){
    return(
        <TextField
            variant="outlined"
            id={`outlined-basic-${label}`}
            error={error}
            label={label}
            helperText={error&&helper}
            type={!pass?"text":showPass?"text":"password"}
            color="grey"
            className={
                `specialInput
                ${!error  && "active"}
                ${error  && "error"}`
            }
            onChangeCapture={(e) => handleChange(e.target.value,nameData)}
            InputProps={{
                endAdornment: 
                    pass?
                        showPass ? <VisibilityOff onClick={()=>setShowPass(!showPass)}/> : <Visibility onClick={()=>setShowPass(!showPass)}/>
                    :<></>
                ,
            }}
        />
    )
}