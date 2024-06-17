import React, { useEffect, useRef, useState } from 'react'
import './home.css'
import Sofa1 from './assets/sofa1.png'
import light1 from './assets/light1.png'

function Home() {
    // const [light,setlight] = useState(false)
    // const lightref = useRef(null)
    // useEffect(()=>{
    //     window.addEventListener('load',()=>{
    //         if(lightref.current){

    //         }
    //     })
    // })

    return (
        <div className='main-container'>
            <div className="m-landing-cont">

                {/* ==========aside=========== */}
                <div className="aside">
                    <div className="as-nv-li">
                        <ul>
                            <li>Process</li>
                            <li>material</li>
                            <li>designers</li>
                        </ul>
                    </div>
                    <div className="bt-as-nv">
                        <ul>
                            <li>fb</li>
                            <li>pi</li>
                            <li>li</li>
                        </ul>
                    </div>
                </div>

                {/* =========== landing page ========= */}
                <div className="m-box">
                    <div className="m-b-left-box">
                        <div className="m-b-title">
                            Designed by Adam
                        </div>

                        <div className="mb-head">
                            <h1>LuxeRooms</h1>
                        </div>

                        <div className="mb-desc">
                        Inviting, plush sofa with sleek design. Crafted for comfort and style, 
                        featuring premium upholstery and sturdy construction. A statement piece for any home.
                        </div>
                        <div className="mb-sizes">
                            <h5>Sizes</h5>
                            <input type="radio" id='black' name='size' />
                            <label for='black'>Black</label>

                            <input type="radio" id='wood' name='size' />
                            <label for='wood'>Wood</label>
                        </div>
                        <hr />
                        <div className="mb-cart-btn">
                            <button>Add to cart</button>
                        </div>
                    </div>
                    <div className="mb-right-box">

                        <div className="mb-fr-name">
                            LuxeRooms
                        </div>

                        <div className="mb-light-img">
                            <img src={light1} alt='light' />
                        </div>
                        <div className="mb-rt-furn-img">
                            <img src={Sofa1} alt="furniture" />
                        </div>
                    </div>
                </div>

            </div>

            <div className="second-container">

            </div>
        </div>
    )
}

export default Home