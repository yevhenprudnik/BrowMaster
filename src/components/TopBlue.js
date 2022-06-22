import React from "react";
import telegram from './foto/telegram.png';
import bird from './foto/bird.gif';
import eyebrow from './foto/eyebrow-pencil.png';
import { Scrollchor } from 'react-scrollchor';
import instagram from './foto/instagram.png'

const TopBlue = () => {
    return(<div className="TopBlue">
    <nav className="dt dt--fixed w-100 border-box pa3 ph5-ns bb b--black-10">
        <div id="menu" className="static-ns absolute mt5 mt0-ns db dtc-ns v-mid tc">
            <a className="non_line pointer v-mid mid-gray link dim w-third w-25-ns tc tl-ns mb2 mb0-ns ph1">
                <img className="icon ph3" src={eyebrow}/>
                </a>
                <Scrollchor to="#About" animate={{offset: 20, duration: 600}} className="Font b dim dark-gray f3 f5-ns db dib-ns mr3 mr4-ns" href="#About">Про себе</Scrollchor>
                <Scrollchor to="#Work" animate={{offset: -95, duration: 600}} className="Font b dim dark-gray f3 f5-ns db dib-ns mr3 mr4-ns" href="#Work">Мої роботи</Scrollchor>
                <Scrollchor to="#Appointment" animate={{offset: 20, duration: 600}} className="Font b dim dark-gray f3 f5-ns db dib-ns mr3 mr4-ns" href="#Appointment">Запис</Scrollchor>
                <Scrollchor to="#Contact" animate={{offset: 20, duration: 600}} className="Font b dim dark-gray f3 f5-ns db dib-ns mr3 mr4-ns" href="#Contact">Контактні дані</Scrollchor>
                <a className="pointer v-mid mid-gray link dim w-third w-25-ns tc tl-ns mb2 mb0-ns ph1" href="https://www.instagram.com/yana_browmaster.18/" target="_blank">
                <img className="icon" src={instagram}/>
                </a>
                <a className="pointer v-mid mid-gray link dim w-third w-25-ns tc tl-ns mb2 mb0-ns ph1" href="https://t.me/mistess18" target="_blank"  >
                <img className="icon"src={telegram}/>
                </a>
        </div>
            <a href="#" id="menu-btn" className="dtc tr non_line v-mid dn-ns w-third pr2 p0-ns link dim dark-gray">
                Menu
            </a>
    </nav>
        <div className ="container">
            <div className="button_and_ap">
            <div className="Font fxb tl">Здійснити <br/>онлайн-запис</div>
            <Scrollchor to="#Appointment" animate={{offset: 20, duration: 600}} className="b pa3 dim white tc">
                <button className="Font btn-grad tc pointer">Записатися</button></Scrollchor>
            </div>
            <div className="pa3 ph5">
                <img className="borrad grow shadow-2 bird" src={bird}/>
            </div>
        </div>
    </div>);
}

export default TopBlue;