import React, { ComponentProps } from 'react'

type TVariant = "primary" | "secondary" | "danger" | "warning" | "seccess"

type TButton = ComponentProps<"button"> & {
    variant : TVariant
}

function Button({children ,style , variant,...rest}:TButton) {
   
    console.log(checkVariant(variant))

  return (
    <button {...rest} style={{...style , ...checkVariant(variant)}}>
{children}
    </button>
  )
}

export default Button

function checkVariant ( variant: TVariant){
    if (variant === "primary"){
        return {background:"blue",color:"white", padding:"5px",borderRadius:"5px", margin:"10px",paddingLeft:"10px",paddingRight:"10px"};
    }else if (variant === "secondary"){
        return {background:"gray", color:"black", padding:"5px",borderRadius:"5px", margin:"10px",paddingLeft:"10px",paddingRight:"10px"};
    }else if (variant === "danger"){
        return {background :"red", color: "white", padding:"5px",borderRadius:"5px", margin:"10px",paddingLeft:"10px",paddingRight:"10px"};
    }else if (variant === "warning"){
        return {background : "yellow", color: "black", padding:"5px",borderRadius:"5px", margin:"10px",paddingLeft:"10px",paddingRight:"10px"}
    }
}