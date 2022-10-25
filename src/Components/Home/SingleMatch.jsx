import React from 'react';
import { Link } from 'react-router-dom';

const SingleMatch = ({
  match: {
    id,
    teamA: { id: aId, name: aName },
    teamB: { id: bId, name: bName },
    scoreA,
    scoreB,
  },
  compitition,
}) => {
  return (
    <div className='single-match'>
      <Link to={`/match/${id}`} key={id}>
        <div className='compitition'>
          <img
            src={`https://cdn.so3ody.com/scores/competitions/100x130/${compitition?.id}.png`}
            alt={compitition?.name}
            className='comp-image'
          />
          <p className='comp-name'>{compitition?.name}</p>
        </div>
        <div className="teams">
          <div className="team f-team">
            <img src={`https://cdn.so3ody.com/scores/teams/50x50/${aId}.png`} alt={aName} />
            <p className="team-name">{aName}</p>
          </div>
          <div className="teams-score">
            <p className="socre"><span>{scoreA}</span> : <span>{scoreB}</span></p>
            <p className="note">وقت كامل</p>
          </div>
          <div className="team s-team">
            <img src={`https://cdn.so3ody.com/scores/teams/50x50/${bId}.png`} alt={bName} />
            <p className="team-name">{bName}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SingleMatch;
