import React, { useEffect, useState } from "react";
import { IoIosFootball  } from "react-icons/io";
import "../Styles/_Lufclive.scss";

const DEFAULT_CLASSNAME = "live";

export default function Lufclive() {

  const [data, setData] = useState([]);
  const [dataStats, setDataStats] = useState([]);
  const [fixture, setFixture] = useState([]);

  const dataIsLoaded = data.length !== 0 ? true : false;
  const statsDataIsLoaded = dataStats.length !== 0 ? true : false;

  useEffect(() => {
    function getData() {
      fetch(
        "https://api-football-v1.p.rapidapi.com/v2/fixtures/team/63/last/10",
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
            "x-rapidapi-key":
              "1d27eeb197mshf2f51e3de3b9f73p125222jsndb892b3f927e",
          },
        }
      )
        .then((response) => response.json())
        .then((data) => setData(data));

      if (data.api !== undefined) {
        let i = 0;
        let fixture = data.api.fixtures[i];
        while (fixture.status === "Match Postponed") {
          fixture = data.api.fixtures[i++];
          setFixture(fixture);
        }
        if (fixture.status !== "Match Postponed") {
          const fixtureId =
            data.api.fixtures[i > 0 ? i - 1 : i === 0].fixture_id;
          getLastFixture(fixtureId);
        }
      }
      function getLastFixture(fixtureId) {
        fetch(
          `https://api-football-v1.p.rapidapi.com/v2/statistics/fixture/${fixtureId}`,
          {
            method: "GET",
            headers: {
              "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
              "x-rapidapi-key":
                "1d27eeb197mshf2f51e3de3b9f73p125222jsndb892b3f927e",
            },
          }
        )
          .then((response) => response.json())
          .then((dataStats) => setDataStats(dataStats));
      }
    }
    getData();
  }, [dataIsLoaded, statsDataIsLoaded]);

  if (statsDataIsLoaded) {
    return (
      <div class="section-live container">
        <div className={DEFAULT_CLASSNAME}>
          <div className={`${DEFAULT_CLASSNAME}__heading`}>
            <h1 class="section-headings">lufc live</h1>
          </div>
          <div className={`${DEFAULT_CLASSNAME}__score`}>
            <div className={`${DEFAULT_CLASSNAME}__score-info`}>
              <div>Referee: {fixture.referee} <br/> {fixture.venue} <br/> {fixture.event_date.slice(0, 10)} {fixture.event_date.slice(11, 16)}</div>
              <div>{fixture.statusShort}</div>
            </div>

            <div className={`${DEFAULT_CLASSNAME}__score-teams`}>
              <div className={`${DEFAULT_CLASSNAME}__score-teams--leeds`}>
                <img src={fixture.homeTeam.logo} alt={fixture.homeTeam.team_name} />
                <div>{fixture.homeTeam.team_name}</div>
              </div>

              <div>{fixture.goalsHomeTeam}</div>
              <div>-</div>
              <div>{fixture.goalsAwayTeam}</div>
              <div className={`${DEFAULT_CLASSNAME}__score-teams--opposition`}>
                <img src={fixture.awayTeam.logo} alt={fixture.awayTeam.team_name} />
                <div>{fixture.awayTeam.team_name}</div>
              </div>
            </div>

            <div className={`${DEFAULT_CLASSNAME}__score-scorers`}>
              <div>Eddie Nketiah 81'</div>
              <div><IoIosFootball  className="football-logo"/></div>
              <div>Brentford scorer</div>
            </div>
          </div>

          <div className={`${DEFAULT_CLASSNAME}__stats`}>
            <div className={`${DEFAULT_CLASSNAME}__stats-leeds`}>
              <div>
                <img src="img/west-brom-logo.jpg" alt="" />
              </div>
              <div>{dataStats.api.statistics["Total Shots"].home}</div>
              <div>{dataStats.api.statistics["Shots on Goal"].home}</div>
              <div>{dataStats.api.statistics["Ball Possession"].home}</div>
              <div>{dataStats.api.statistics["Passes accurate"].home}</div>
              <div>{dataStats.api.statistics["Passes %"].home}</div>
              <div>{dataStats.api.statistics["Fouls"].home}</div>
              <div>{dataStats.api.statistics["Yellow Cards"].home}</div>
              <div>{dataStats.api.statistics["Red Cards"].home !== null ? dataStats.api.statistics["Red Cards"].home : "0"}</div>
              <div>{dataStats.api.statistics["Offsides"].home}</div>
              <div>{dataStats.api.statistics["Corner Kicks"].home}</div>
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
              <div>
                <img src="img/west-brom-logo.jpg" alt="" />
              </div>
              <div>{dataStats.api.statistics["Total Shots"].away}</div>
              <div>{dataStats.api.statistics["Shots on Goal"].away}</div>
              <div>{dataStats.api.statistics["Ball Possession"].away}</div>
              <div>{dataStats.api.statistics["Passes accurate"].away}</div>
              <div>{dataStats.api.statistics["Passes %"].away}</div>
              <div>{dataStats.api.statistics["Fouls"].away}</div>
              <div>{dataStats.api.statistics["Yellow Cards"].away}</div>
              <div>{dataStats.api.statistics["Red Cards"].away !== null ? dataStats.api.statistics["Red Cards"].away : "0"}</div>
              <div>{dataStats.api.statistics["Offsides"].away}</div>
              <div>{dataStats.api.statistics["Corner Kicks"].away}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return null;
}
