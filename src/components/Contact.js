import React from "react";
import instagram from './foto/instagram.png';
import Telephone from './foto/telephone.png';
import Location from './foto/location.png';

const Contact = () => {
    return (
    <div className="Contact" id="Contact">
        <div className="pb5 ph7 pt3 tl">
        <div className="pl3 fb">Контактні дані</div>
        <a className="container2 br2 dark-gray adre pointer ph3 ma2 ba pa2" href="https://www.google.com/maps/place/вулиця+Миру,+11а,+Мукачево,+Закарпатська+область,+89611/@48.4404243,22.7217137,17z/data=!3m1!4b1!4m5!3m4!1s0x4739ac7f23c12e1f:0x711409a9ec78b32f!8m2!3d48.4404243!4d22.7239024" target="_blank">
            <img className="icon pr3" src={Location}/>
            <div className="fm adre borradSmall pa">Адреса</div>
        </a>
        <div className="ph3 ma2 ba br2 adre">
        <a className="container2 dark-gray pb2 pt2">
            <img className="icon pr3" src={Telephone}/>
            <div className="fm adre borradSmall">+380 50 991 7050</div>
        </a>
        <a className="container2 dark-gray pointer" href="https://www.instagram.com/yana_browmaster.18/" target="_blank">
            <img className="icon pr3" src={instagram}/>
            <div className="fm adre borradSmall pa2">@yana_browmaster.18</div>
            </a>
        </div>
    </div>
</div>);
}

export default Contact