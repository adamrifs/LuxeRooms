import React, { useContext, useEffect, useRef, useState } from 'react'
import './home.css'
import Sofa1 from './assets/sofa1.png'
import light1 from './assets/light1.png'
import { mycontext } from './context'

function Home() {
    // const [light,setlight] = useState(false)
    // const lightref = useRef(null)
    // useEffect(()=>{
    //     window.addEventListener('load',()=>{
    //         if(lightref.current){

    //         }
    //     })
    // })

    const { furniture, setfurniture } = useContext(mycontext)

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
                    <div className="m-sub-box">

                        {
                            furniture.map((dt) =>
                                <>
                                    <div className="m-b-left-box">
                                        <div className="m-b-title">
                                            {dt.title}
                                        </div>

                                        <div className="mb-head">
                                            <h1>{dt.heading}</h1>
                                        </div>

                                        <div className="mb-desc">
                                            {dt.description}
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
                                            {dt.frname}
                                        </div>

                                        <div className="mb-light-img">
                                            <img src={dt.lightimg} alt='light' />
                                        </div>
                                        <div className="mb-rt-furn-img">
                                            <img src={dt.furimage} alt="furniture" />
                                        </div>
                                    </div>
                                </>
                            )
                        }

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home