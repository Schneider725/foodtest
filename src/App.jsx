import {useState} from 'react'
import Header from "./Header.jsx";
import Restaurants from "./Restaurants.jsx";
import Members from "./Members.jsx";
import About from "./About.jsx";
import './App.css'

function App() {
    const [tab, setTab] = useState('home')

    function handleNavChange(value) {
        setTab(value)
        console.log(value)
    }

    return (
        <>
            <Header handleNavChange={handleNavChange} tab={tab}/>
            {tab === 'home' && <Restaurants/>}
            {tab === 'members' && <Members />}
            {tab === 'about' && <About />}

        </>
    )

}

export default App
