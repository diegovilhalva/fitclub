import React, { useRef } from "react";
import "./Join.css"
import emailjs from "@emailjs/browser"
const Join = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm('','',form.current,'')
        .then((result) => {
            console.log(result.text)
        })
        .catch((error) => {
            console.log(error.text)
        })
    } 
    return (
        <div className="join" id="join-us">
            <div className="left-j">
                <hr />
                <div>
                    <span>Pronto </span>
                    <span>Para </span>
                </div>
                <div>
                    <span className="stroke-text">Mudar </span>
                    <span>A sua vida?</span>
                </div>
            </div>
            <div className="right-j">
                    <form action={form} className="email-container" onSubmit={sendEmail}>
                        <input type="email" name="user_email" id="" placeholder="E-mail" />
                        <button className="btn btn-j">Assine Agora</button>
                    </form>
            </div>
        </div>
    )
}

export default Join