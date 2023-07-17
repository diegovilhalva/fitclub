import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from '../../assets/hero_image.png';
import hero_image_back from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calories from '../../assets/calories.png';
const Hero = () => {
    return (
        <div className="hero">
            <div className="left-h">
                <Header/>
                <div className="the-best-ad">
                    <div></div>
                    <span>A solução Fitness para você</span>
                </div>
                <div className="hero-text">
                    <div>
                        <span>Tenha </span>
                        <span>Aquele </span>
                    </div>
                    <div>
                        <span className='stroke-text'>Shape </span>
                        <span>Ideal </span>
                    </div>
                    <div className="span">
                        <span>
                            Nós ajudaremos a você  ter aquele sonhado shape e uma qualidade vida melhor
                        </span>
                    </div>
                </div>
                <div className="figures">
                    <div>
                        <span>+ 140 </span>
                        <span>Instrutores</span>
                    </div>
                    <div>
                        <span>+978</span>
                        <span>Novos Membros</span>
                    </div>
                    <div>
                        <span>+50</span>
                        <span>Programas Fit</span>
                    </div>
                </div>
                <div className="hero-buttons">
                    <buttom className="btn">Assine Agora</buttom>
                    <buttom className="btn">Saiba Mais</buttom>
                </div>
            </div>
            <div className="right-h">
               <button className='btn'>Entrar</button>
               <div className="heart-rate">
                <img src={heart} alt="" />
                <span>Heart Rate</span>
                <span>116 bpm</span>

               </div>
               <img src={hero_image} alt="" className="hero-image" />
               <img src={hero_image_back} alt="" className="hero-image-back" />
               <div className="calories">
                    <img src={calories} alt="" />
                   <div>
                    <span>Calories Burned</span>
                    <span>200kcal</span>
                   </div>
               </div>
            </div>
        </div>
    )
}

export default Hero