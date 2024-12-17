import React, { ComponentProps } from 'react'

type TVariant = "primary" | "secondary" | "danger" | "warning" | "seccess"

type TButton = ComponentProps<"button"> & {
    variant : TVariant
}

function Button({children ,variant,...rest}:TButton) {
   
    console.log(checkVariant(variant))

  return (
    <button {...rest} style={{...checkVariant(variant)}}>
{children}
    </button>
  )
}

export default Button

function checkVariant ( variant: TVariant){
    if (variant === "primary"){
        return {background:"blue",color:"white"};
    }else if (variant === "secondary"){
        return {background:"gray", color:"black"};
    }else if (variant === "danger"){
        return {background :"red", color: "white"};
    }else if (variant === "warning"){
        return {background : "yellow", color: "black"}
    }
}