import { useState } from "react";

const ItemListContainer = (props) => {
    const [contador, setContador] = useState(0);

    const handleClick = () => {
        setContador(contador + 1);
    }

    const subtractClick = () => {
        setContador(contador - 1);
    }

    return (
        <div>
            {props.greeting}
            <p>Contador : {contador}</p>
            <button onClick={handleClick}>Sumar</button>
            <button onClick={subtractClick}>Restar</button>
        </div>
    );
}

export default ItemListContainer;