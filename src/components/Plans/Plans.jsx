import React from "react";
import './Plans.css'
import whiteTick from '../../assets/whiteTick.png'
import {plansData} from '../../data/plansData'
const Plans = () => {
    return(
       <div className="plans-container">
            <div className="programs-header" style={{gap:'2rem'}}>
                <span>Conheça</span>
                <span>Os Nossos</span>
                <span className="stroke-text">Planos</span>
            </div>
            <div className="plans">
                {plansData.map((plan,i) => (
                    <div className="plan" key={i}>
                        {plan.icon}
                        <span>{plan.name}</span><span>R$  {plan.price}</span>
                        <div className="features">
                            {plan.features.map((feature,i) => (
                                    <div className="feature">
                                        <img src={whiteTick} alt="" />
                                        <span key={i}>{feature}</span>
                                    </div>
                            ))}
                        </div>
                        <div>
                            <span>Saiba Mais -></span>
                        </div>
                        <button className="btn">Assinar</button>
                    </div>
                ))}
            </div>
       </div>
    )
}
export default Plans