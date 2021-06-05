import React from 'react'
import { LeftHome } from './LeftHome'
import { RightHome } from './RightHome'


export const HomeScreen = () => {
    return (
        <>
        <section className="home__division">
            <div className="home__left-screen home__center-item">
                <LeftHome/>
            </div>
            <div className="home__right-screen ">
                <RightHome />
            </div>
            <div className="home__float-div">
                <button className="test-btn ">Comienza</button>
            </div>
        </section> 
        </>
    )
}
