import {useState} from "react";
import thumbs from './assets/thumbs.jpg'
import shock from './assets/shock.jpg'
import './members.css'

function Members() {
    return (
        <>
            <div className={"wrapper-left"}>
                <div className={"member"}>
                    <img src={thumbs} alt={"picture of stephen giving thumbs up"}/>
                    <p>addicted to cream</p>
                </div>
            </div>

            <div className={"wrapper-right"}>
                <div className={"member"}>
                    <p className={"neenaText"}>demonic wench</p>
                    <img src={shock} alt={"picture of sabeena, shocked"}/>
                </div>
            </div>
        </>
    )
}

export default Members