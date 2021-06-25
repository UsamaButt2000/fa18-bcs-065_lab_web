import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "../axios";
import "./MatchesScreen.css";

function MatchesScreen() {
  const [matches, setMatches] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get("http://localhost:4000/api/pslTeams");
      console.log(request.data);
      setMatches(request.data);
      return request;
    }

    fetchData();
  }, []);

  return (
    <div className="matchesScreen">
      <table>
        <tr className="match__table">
          <th>First Team</th>
          <th>Second Team</th>
          <th>CITY</th>
          <th>DATE</th>
        </tr>

        {matches.map((match) => (
          <tr>
            <td>{match.TeamA}</td>
            <td>{match.TeamB}</td>
            <td>{match.City}</td>
            <td>{match.Date}</td>
          </tr>
        ))}
      </table>
      <button onClick={() => history.push('/signin')}>Log in</button>
    </div>
  );
}

export default MatchesScreen;
