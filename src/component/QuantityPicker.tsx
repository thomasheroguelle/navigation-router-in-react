import { useEffect, useState } from "react";
import style from "./QuantityPicker.module.css"

const QuantityPicker = () => {
    const [quantity, setQuantity] = useState(0);

    function addOne() {
        setQuantity(quantity + 1);
    }

    function lessOne() {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    }

    useEffect(() => {
        if (quantity === 0) {
            console.log("tu me vois plus");
        }
        else {
            console.log("tu me vois");
        }

    }, [quantity]);

    return (
        <div className={style.wrapper}>
            <button className={style.button} onClick={addOne}>+</button>
            <p>{quantity}</p>
            <button className={style.button}  onClick={lessOne}>-</button>
        </div>
    );
}




export default QuantityPicker;