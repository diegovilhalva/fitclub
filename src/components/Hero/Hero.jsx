import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from '../../assets/hero_image.png';
import hero_image_back from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calories from '../../assets/calories.png';
import { motion } from 'framer-motion';
import NumberCounter from "number-counter"
const Hero = () => {
    const transition = {type:'spring',duration:3}
    const mobile = window.innerWidth <=768 ? true :false
    return (       
        <div className="hero">
            <div className="blur hero-blur"></div>
            <div className="left-h">
                <Header/>
                <div className="the-best-ad">
                    <motion.div
                    initial ={{left: mobile ? "178px" : "238px"}}
                    whileInView={{left:'9px'}}
                    transition={{...transition,type:"tween"}}      >                               
                    </motion.div>
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
                        <span><NumberCounter end={140} start={100} dalay={'4'}preFix={"+"} /></span>
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
               <motion.div className="heart-rate"
               initial={{right:"-1rem"}}
               whileInView={{right:"4rem"}}
               transition={transition}>
                <img src={heart} alt="" />
                <span>Heart Rate</span>
                <span>116 bpm</span>

               </motion.div>
               <img src={hero_image} alt="" className="hero-image" />
               <motion.img src={hero_image_back} initial={{right:"11rem"}} whileInView={{right:"20rem"}} transition={transition}  alt="" className="hero-image-back" />
               <motion.div className="calories"
               initial={{right:"37rem"}}
               whileInView={{right:"28rem"}}
               transition={transition}>
                    <img src={calories} alt="" />
                   <div>
                    <span>Calories Burned</span>
                    <span>200kcal</span>
                   </div>
               </motion.div>
            </div>
        </div>
    )
}

export default Hero