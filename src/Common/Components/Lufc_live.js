import React from 'react';

import '../Styles/_Lufclive.scss';

const DEFAULT_CLASSNAME = "live";

export default function Lufclive(){
    return(
        <div class="section-live">  
        <div className={DEFAULT_CLASSNAME}>
            <div className={`${DEFAULT_CLASSNAME}__heading`}>
                <h3 class="section-headings">lufc live</h3>
            </div>
            <div className={`${DEFAULT_CLASSNAME}__score`}>
                <div className={`${DEFAULT_CLASSNAME}__score-info`}>
                    <div>Championship 21/08/2019</div>
                    <div>Full Time</div>
                </div>

                <div className={`${DEFAULT_CLASSNAME}__score-teams`}>
                    <div className={`${DEFAULT_CLASSNAME}__score-teams--leeds`}>
                        <img src="img/west-brom-logo.jpg" alt="" />
                        <div>Leeds United</div>
                    </div>
                    
                    <div>1</div>
                    <div>-</div>
                    <div>0</div>
                    <div className={`${DEFAULT_CLASSNAME}__score-teams--opposition`}>
                        <img src="img/west-brom-logo.jpg" alt="" />
                        <div>Brentford</div>
                    </div>
                </div>

                <div className={`${DEFAULT_CLASSNAME}__score-scorers`}>
                    <div>Eddie Nketiah  81'</div>
                    <div>goal-logo</div>
                    <div>Brentford scorer</div>
                </div>
            </div>

            <div className={`${DEFAULT_CLASSNAME}__stats`}>
                <div className={`${DEFAULT_CLASSNAME}__stats-leeds`}>
                    <div><img src="img/west-brom-logo.jpg" alt="" /></div>
                    <div>11</div>
                    <div>4</div>
                    <div>71%</div>
                    <div>601</div>
                    <div>81%</div>
                    <div>8</div>
                    <div>2</div>
                    <div>0</div>
                    <div>3</div>
                    <div>8</div>
                </div>

                <div className={`${DEFAULT_CLASSNAME}__stats-static`}>
                    <div>Team stats</div>
                    <div>Shots</div>
                    <div>Shots on target</div>
                    <div>Possesion</div>
                    <div>Passes</div>
                    <div>Pass accuracy</div>
                    <div>Fouls</div>
                    <div>Yellow cards</div>
                    <div>Red cards</div>
                    <div>Offsides</div>
                    <div>Corners</div>
                </div>


                <div className={`${DEFAULT_CLASSNAME}__stats-opposition`}>
                    <div><img src="img/west-brom-logo.jpg" alt="" /></div>
                    <div>11</div>
                    <div>4</div>
                    <div>71%</div>
                    <div>601</div>
                    <div>81%</div>
                    <div>8</div>
                    <div>2</div>
                    <div>0</div>
                    <div>3</div>
                    <div>8</div>
                </div>
            </div>
        </div>
    </div>

    );
}