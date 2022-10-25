import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useEffect, useState } from "react";
import { getMatches } from "../../Services";
import SingleMatch from "./SingleMatch";

const SingleCompetition = ({ compitition, date }) => {
  const currentSeason = compitition?.currentSeason?.id;
  const [matches, setMatches] = useState([]);

  const fetchMatches = async () => {
    const response = await getMatches(
      `season_id=${currentSeason}&date_from=${date}&date=${date}`
    );
    setMatches(response?.data?.data);
  };

  useEffect(() => {
    fetchMatches();
  }, [date]);

  const setMatchesComponent = (matches) => {
    if (matches.length === 0) {
      return <h1>لا يوجد مباريات</h1>;
    }
    return matches?.map((match, index) => (
      <div key={index}>
        <SingleMatch match={match} compitition={compitition} key={match?.id} />
      </div>
    ));
  };

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <div className="compitition">
          <img
            src={`https://cdn.so3ody.com/scores/competitions/100x130/${compitition?.id}.png`}
            alt={compitition?.name}
            className="comp-image"
          />
          <p className="comp-name">{compitition?.name}</p>
        </div>
      </AccordionSummary>
      <AccordionDetails>{setMatchesComponent(matches)}</AccordionDetails>
    </Accordion>
  );
};

export default SingleCompetition;
