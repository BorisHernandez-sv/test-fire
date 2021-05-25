import React from 'react'
import { LeftHome } from './LeftHome'
import { RightHome } from './RightHome'
import { Sidebar } from './Sidebar'

export const HomeScreen = () => {
    return (
        <>
        <Sidebar /> 
        <section className="home__division">
            <div className="home__left-screen home__center-item">
                <LeftHome/>
            </div>
            <div className="home__right-screen home__center-item">
                    <RightHome />
            </div>
        </section> 
        </>
    )
}
