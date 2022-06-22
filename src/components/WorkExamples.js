import React from "react";
import Images from './images'

const WorkExamples = ({Links}) => {
    return (
    <div className="My_work1 ph5 pa3 tl" id="Work">
        <div className="Font pl3 fb pb3">Мої роботи</div>
        <div className="My_work">
            <div className="gridscroll">
                <Images links ={Links}/>
            </div>
        </div>
    </div>);
}
export default WorkExamples;