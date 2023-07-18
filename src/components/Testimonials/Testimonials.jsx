import React, { useState } from "react";
import "./Testimonials.css"
import {testimonialsData} from "../../data/testimonialsData"
import leftArrow from "../../assets/leftArrow.png"
import rightArrow from "../../assets/rightArrow.png"
const Testimonials = () => {
    const [selected,setSelected] = useState(0)
    const tLength =  testimonialsData.length
    return (
       <div className="testimonials">
        <div className="left-t">
            <span>Depoimentos</span>
            <span className="stroke-text">O que dizem</span>
            <span>Sobre a gente</span>
            <span>
                "{testimonialsData[selected].review}"
            </span>
            <span>
                <span style={{color:'var(--orange)'}}>{testimonialsData[selected].name} </span>
                - {testimonialsData[selected].status}
            </span>
        </div>
        <div className="right-t">
            <div></div>
            <div></div>
           <img src={testimonialsData[selected].image} alt="" />
           <div className="arrows">
                <img src={leftArrow} onClick={() => {
                    selected === 0 
                    ? setSelected(tLength -1)
                    : setSelected((prev)=> 
                        prev - 1
                    )
                }} alt="" />
                <img src={rightArrow} onClick={() => {
                    selected === tLength - 1 
                    ? setSelected(0) 
                    : setSelected((prev) => prev + 1)
                }} alt="" />
           </div>
        </div>
       </div>
    )
}

export default Testimonials