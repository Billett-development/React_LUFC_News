import React, { useEffect, useState } from "react";


import '../Styles/_Fixtures.scss';

export default function Fixtures() {

    const [data, setData] = useState([]);
    const [nextdata, setnextData] = useState([]);

    const dataIsLoaded = data.length !== 0 ? true : false;
    const nextDataIsLoaded = nextdata.length !== 0 ? true : false;
  
    useEffect(() => {
      function getData() {
        fetch(
          "https://api-football-v1.p.rapidapi.com/v2/fixtures/team/63/last/20",
          {
            method: "GET",
          }
        )
            .then((response) => response.json())
            .then((data) => setData(data));
        }

        function getNextData() {
            fetch(
              "https://api-football-v1.p.rapidapi.com/v2/fixtures/team/63/next/3",
              {
                method: "GET",
                headers: {
              }
            )
                .then((response) => response.json())
                .then((nextdata) => setnextData(nextdata));
            }
            
      getNextData();
      getData();
    }, [dataIsLoaded, nextDataIsLoaded]);

    const Prevfixtures = data.api;

    if (Prevfixtures !== undefined) {
        const Last20Fixtures = Prevfixtures.fixtures.map(
          (fixture) => (

            <div class="fixture">
            <div class="fixture__teams">

                <div class="fixture__teams-home"> 
                    <div>
                        <img src={fixture.awayTeam.logo} alt="" />
                        {fixture.awayTeam.team_name}
                    </div>
                    <div>
                        <p>{fixture.goalsAwayTeam !== null ? fixture.goalsAwayTeam : "P"}</p>
                    </div>
                </div>

                <div class="fixture__teams-away">
                    <div>
                        <img src={fixture.homeTeam.logo} alt="" />
                        {fixture.homeTeam.team_name}</div>
                        <div>
                        {fixture.goalsHomeTeam !== null ? fixture.goalsHomeTeam : "P"}
                        </div>
                    </div>
                </div>

                <div class="fixture__result">
                    <div>FT</div>
                    <div>{fixture.event_date.slice(0, 10)}</div>
                </div>

            </div>
          )
        );

        const Nextfixtures = nextdata.api;

        if (Nextfixtures !== undefined) {
            const Next2Fixtures = Nextfixtures.fixtures.map(
              (fixture) => (
    
                <div class="fixture">
                <div class="fixture__teams">
    
                    <div class="fixture__teams-home"> 
                        <div>
                            <img src={fixture.awayTeam.logo} alt="" />
                            {fixture.awayTeam.team_name}
                        </div>
                        <div>
                            {fixture.goalsAwayTeam !== null ? fixture.goalsAwayTeam : "P"}
                        </div>
                    </div>
    
                    <div class="fixture__teams-away">
                        <div>
                            <img src={fixture.homeTeam.logo} alt="" />
                            {fixture.homeTeam.team_name}</div>
                            <div>
                            {fixture.goalsHomeTeam !== null ? fixture.goalsHomeTeam : "P"}
                            </div>
                        </div>
                    </div>
    
                    <div class="fixture__result">
                        <div>FT</div>
                        <div>{fixture.event_date.slice(0, 10)}</div>
                    </div>
    
                </div>
              )
            );




    return (
    <section class="section-fixtures container" style={{marginTop: "15rem"}}>
        <h1 class="section-headings">Fixtures & Results</h1>
            <h4 className="fixture fixture__title">Upcoming fixtures:</h4>
                {Next2Fixtures}
            <h4 className="fixture fixture__title">Previous fixtures:</h4>
                {Last20Fixtures}
    </section>
    );
    }
    return null;

    }
    return null;
}


