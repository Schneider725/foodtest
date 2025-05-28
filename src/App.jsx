import {useState} from 'react'
import Header from "./Header.jsx";
import Robertas from "./Robertas.jsx";
import './App.css'

function App() {
    const [tab, setTab] = useState('home')

    function handleNavChange(value) {
        setTab(value)
        console.log(value)
    }

    return (
        <>
            <Header handleNavChange={handleNavChange}/>
            <Robertas/>
        </>
    )

}

export default App
