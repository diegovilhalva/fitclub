import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
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
            </div>
            <div className="right-h">
                Direita
            </div>
        </div>
    )
}

export default Hero