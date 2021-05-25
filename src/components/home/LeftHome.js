import React from 'react'
import Logo1 from '../images/poridentidad.png'

export const LeftHome = () => {
    return (
        <section className="home__division">
            <div className="home__center-item">
                <img src={Logo1} alt="Logo1" className="Logo1 mr-5"></img>
            </div>
            <div className="home__center-item">
            <div className="home__center-item-logo">
                <img src={Logo1} alt="Logo2" className="Logo2"></img>
                <img src={Logo1} alt="Logo3" className="Logo3 mt-5 "></img>
            </div>
            </div>
        </section>
    )
}
