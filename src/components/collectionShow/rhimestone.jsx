import './rhimestone.css'
import React from 'react';
import mainRhineImg from '../../imgs/mirrors/mirror.jpg'
/* images for rhine */
import rhineChairImg1 from '../../imgs/chairs/v2blueseat.jpg'
import rhineChairImg2 from '../../imgs/chairs/v2greenseat.jpg'
import rhineChairImg3 from '../../imgs/chairs/v2orangeseat.jpg'
import rhineTableImg from '../../imgs/tables/bandwcrystal.jpg'

function rhineStoneCollection(){

    return (
        <div className="rhine-full">
            <div className="rhine-main-img">
                <img src={mainRhineImg} alt="" />
            </div>

        
        </div>
    )
}

export default rhineStoneCollection;

// previous code for collections page.
/* 
    <div className="rhine-details-holder">
                <div className="rhine-img-holder">
                    <img src={rhineChairImg1} alt="" />
                    <img src={rhineChairImg2} alt="" />
                    <img src={rhineChairImg3} alt="" />
                    <img src={rhineTableImg} alt="" />
                </div>
                <div className="rhine-story-holder">
                    <div className="rhine-text">
                        <h1>RHINESTONE COLLECTION</h1>
                        <p>The Rhinestone collection is a custom made collection design with x in the year 2017. Every piece drawn and visualized in what would be the perfect piece for the modern extravogent client.</p>
                        <div className="question-answer-rhine">
                            <div className="rhine-question">
                                <i class="far fa-comment-alt"></i>
                                <p>What was the hardest part of this project</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
*/