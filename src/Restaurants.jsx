import {useState} from "react";
import restaurantlist from "./restaurantlist.js";
import './members.css'

function Restaurants(){
    const [selected, setSelected] = useState('robertas')
    let displayed = restaurantlist.filter((item) => item.name === selected)

    function handleChange(target){
        setSelected(target)
        displayed = restaurantlist.filter((item) => item.name === selected)
    }

    return(
        <>
            <div className={"wrapper"}>
            {restaurantlist.map((item,index) => (
                <li className={selected === item.name ? "selected-restaurant" : ""} onClick={(() => handleChange(item.name))} key={index} value={item.name}>{item.name}</li>
            ))}
            </div>
            <div className={"content"}>
            <h1>{displayed[0].name}</h1>
            <p>{displayed[0].food}</p>
            </div>
        </>

    )
}
export default Restaurants