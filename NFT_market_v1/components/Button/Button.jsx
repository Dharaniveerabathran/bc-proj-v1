import Rwact from "react";

//INTERNAL IMPORT
import style from "./Button.module.css"
const Button = ({btnName , handleClick}) => {
    return(
         <div className={StylePropertyMap.box}>
            <button className={Style.button} onClick={()=>handleClick()}></button>
            {btnName}
         </div>
         )
};

export default Button;