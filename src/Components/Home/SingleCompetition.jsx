import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useEffect, useState } from 'react';
import { getMatches } from '../../Services';
import { Link } from 'react-router-dom';

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

  console.log(matches);

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        {compitition?.name}
      </AccordionSummary>
      <AccordionDetails>
        {matches?.map((match) => (
          <div>
            <Link to={`/match/${match?.id}`}>
              {match?.teamA?.name} & {match?.teamB?.name}
            </Link>
          </div>
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default SingleCompetition;
