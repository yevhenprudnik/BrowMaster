import React from "react";
import yana from "./foto/yana.jpeg";


const AboutMe = () => {
    return(
    <div className ="container">
                <div>
                <div className="container pl5" id='About'>
                    <div className="w-75">
                    <div className="Font about_top pb3 fb">Про себе</div>
                    <div className="Font About fm">Привітик я Яна ❤️ ️твій Brow master. В цій сфері вже рік, бачила безліч брів тому думаю і з твоїми справлюсь 🤞🏻
        Допоможу тобі відростити гарні та натуральні брови. Чекаю твій запис на процедурку ❤️</div>
                    </div>
                    <div className="Yana">
                        <img className="borrad w-70 grow shadow-2" src={yana}/>
                    </div>
                    </div> 
                    </div>
            </div>);
}
export default AboutMe;