import React, { useState } from "react";
import "./Banner.css";
import axios from "./axios";

function Banner() {
  const [team, setTeam] = useState(false);
  const [teamA, setTeamA] = useState("");
  const [teamB, setTeamB] = useState("");
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");

  const teamArray = [
    "Karachi Kings",
    "Lahore Qalanders",
    "Peshawar Zalmi",
    "Multan Sultans",
    "Quetta Gladiators",
    "Islamabad United",
  ];
  const [tempTeam, setTempTeam] = useState(teamArray);
  let tempARR = [];
  const handleTeamA = (arr) => {
    setTeamA(arr);
    tempARR = [...teamArray];
    tempARR = tempARR.filter((item) => item !== arr);
    setTempTeam(tempARR);
    console.log(tempTeam);
  };
  const handleTeamB = (arr) => {
    setTeamB(arr);
  };
  const save = () => {
    axios({
      method: "post",
      url: "http://localhost:4000/api/pslTeams",
      data: {
        City: city,
        Date: date,
        TeamA: teamA,
        TeamB: teamB,
      },
    });
    setTeam(false);
  };
  console.log(teamA);
  console.log(teamB);
  return (
    <header className="banner">
      {team ? (
        <>
          <div className="teams__container">
            <div>
              {teamArray.map((arr) => (
                <h1 className="team__text" onClick={() => handleTeamA(arr)}>
                  {arr}
                </h1>
              ))}
              <input
                onChange={(event) => setCity(event.target.value)}
                placeholder="City"
                className="input"
              />
              <input
                onChange={(event) => setDate(event.target.value)}
                placeholder="Date"
                className="input"
              />
            </div>
            <div>
              {tempTeam.map((arr) => (
                <h1 className="team__text" onClick={() => handleTeamB(arr)}>
                  {arr}
                </h1>
              ))}

              <button className="cancel__button" onClick={() => setTeam(false)}>
                Cancel
              </button>
              <button className="save__button" onClick={() => save()}>
                Save
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="text__container">
          <h1>PSL 2022</h1>
          <button className="search__btn" onClick={() => setTeam(true)}>
            Schedule a Match
          </button>
        </div>
      )}

      <div className="img__container">
        <img
          className="img__banner"
          src="https://dailytimes.com.pk/assets/uploads/2018/03/10/PSL.jpg"
          alt="Banner"
        />
      </div>
    </header>
  );
}

export default Banner;
