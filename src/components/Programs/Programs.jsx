import React from "react";
import './Programs.css'
import {programsData} from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'
const Programs = () => {
    return  (
        <div className="programs" id="programs">
            <div className="programs-header">
                <span className="stroke-text">Confira </span>
                <span> os Nossos</span>
                <span > novos Programas</span>
            </div>
            <div className="programs-categories">
                {programsData.map(program => (
                    <div className="category">
                        {program.image}
                        <span>{program.heading}</span><span>{program.details}</span>
                        <div className="join-now">
                            <span>Assinar</span>
                            <img src={RightArrow} alt="" />
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )

}

export default Programs