import React, { ComponentProps } from 'react'

type TVariant = "primary" | "secondary" | "danger" | "warning" | "success"

type TButton = ComponentProps<"button"> & {
    variant?: TVariant
}

function Button({children ,style , variant,...rest}:TButton) {
   

  return (
    <button {...rest} style={{  ...style , ...checkVariant(variant)}}>
{children}
    </button>
  )
}

export default Button

function checkVariant ( variant?: TVariant){
    if (variant === "primary"){
        return {background:"#0055ff",color:"white", padding:"5px",borderRadius:"5px", margin:"10px ",paddingLeft:"2rem",paddingRight:"2rem"};
    }else if (variant === "secondary"){
        return {background:"gray", color:"black", padding:"5px",borderRadius:"5px", margin:"10px"};
    }else if (variant === "danger"){
        return {background :"#ff2200", color: "white", padding:"5px",borderRadius:"5px", margin:"10px",paddingLeft:"2rem",paddingRight:"2rem"};
    }else if (variant === "warning"){
        return {background : "yellow", color: "black", padding:"5px",borderRadius:"5px", margin:"10px"}
    }else if (variant === "success"){
            return {background:"green",color:"white", padding:"5px" , borderRadius:"5px", margin:"10px"}
        }
    }
