import { createContext, useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';

export const UseWebContext = createContext();

export const WebContext = ({ children }) => {

    const [fonts,setFonts]=useState(null)
    const [loader,setLoader]=useState(true)
    const [pagination,setPagination]=useState(10)
    const [textVisual,setTextVisual]=useState("")

    useEffect(() => {
        if(!fonts){
            apiFetch()
        }

        window.addEventListener("scroll",()=>onScroll())
        window.removeEventListener("scroll",()=>onScroll())
    }, [])

    const onScroll=()=>{
        const documentHeight = document.documentElement.scrollHeight;
        const viewportHeight = window.innerHeight;

        const scrollPosition = window.scrollY;
        
        const endOfPage = documentHeight - viewportHeight;
        
        if (scrollPosition >= endOfPage) {
            
        }
    }

    const apiFetch= async()=>{
        await fetch(`https://www.googleapis.com/webfonts/v1/webfonts?key=${process.env.REACT_APP_PASSWORDGOOGLE}`).then(res=>{
            res.json().then(res=>{
                setFonts(res.items)
            }).catch((error)=>{
                return error
            })
        }).catch((error)=>{
            return error
        })
    }

    const emailJS = async (data) => {
        // VALIDAR PREVIAMENTE QUE EXISTE EL MAIL EN LA BASE DE DATOS
        // API NECESARIA PARA ENVIAR UN CORREO ELECTRONICO A CIERTO MAIL.

        // ARRAY NECESARIO DE "data"
        // const array= {
        //     nombre:"",
        //     contrasena:"",
        //     toMail:""
        // }

        emailjs.send('service_rkbguuj', 'template_7y8c547', data, process.env.EMAILJSKEY).then(
            function (response) {
                return true;
            },
            function (error) {
                return false;
            }
        );
    };
    
    return (
        <UseWebContext.Provider
            value={{
                fonts,
                loader,
                setLoader,
                pagination,
                setPagination,
                textVisual,
                setTextVisual
            }}
        >
            {children}
        </UseWebContext.Provider>
    );
};
