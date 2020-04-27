import React from "react";

import '../Styles/_Teamsheet.scss';

const DEFAULT_CLASSNAME = "teamsheet";

export default function Teamsheet(data) {

    const teamsheet = data.Teamsheet;

    if (teamsheet !== undefined) {

        const goalkeepers = teamsheet.goalkeepers.map((post) => (
                <div className="teamsheet__item">
                <img className="teamsheet__item-image" src={post.player_image.url} alt={post.player_image.alt}/>
                <div className="teamsheet__item-info">
                    <div>{post.player_number}</div>
                    <div>{post.player_name}</div>
                </div>
            </div>
        ));

        const defenders = teamsheet.defenders.map((post) => (
            <div className="teamsheet__item">
            <img className="teamsheet__item-image" src={post.player_image.url} alt={post.player_image.alt} />
            <div className="teamsheet__item-info">
                <div>{post.player_number}</div>
                <div>{post.player_name}</div>
            </div>
        </div>
        ));

        const midfielders = teamsheet.midfielders.map((post) => (
            <div className="teamsheet__item">
            <img className="teamsheet__item-image" src={post.player_image.url} alt={post.player_image.alt} />
            <div className="teamsheet__item-info">
                <div>{post.player_number}</div>
                <div>{post.player_name}</div>
            </div>
        </div>
        ));

        const attackers = teamsheet.attackers.map((post) => (
            <div className="teamsheet__item">
            <img className="teamsheet__item-image" src={post.player_image.url} alt={post.player_image.alt} />
            <div className="teamsheet__item-info">
                <div>{post.player_number}</div>
                <div>{post.player_name}</div>
            </div>
        </div>
        ));
    
    
    return(
        <section class="section-fixtures container" style={{marginTop: "15rem"}}>
            <h1 class="section-headings">Team sheet</h1>

            <div className="teamsheet">

            <div className="teamsheet__title">Goalkeepers</div>
                <div className="teamsheet__goalkeeper">
                    {goalkeepers}
                </div>
                <div className="teamsheet__title">Defenders</div>
                <div className="teamsheet__defender">
                    {defenders}
                </div>

                <div className="teamsheet__title">Midfielders</div>
                <div className="teamsheet__midfielder">
                    {midfielders}
                </div>

                <div className="teamsheet__title">Attackers</div>
                <div className="teamsheet__attacker">
                    {attackers}
                </div>

            </div>
        </section>
        
        );
    }
    return null;
}