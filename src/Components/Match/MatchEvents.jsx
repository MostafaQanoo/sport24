import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import {
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import { goal, yellow_card, red_card } from "./../../assets/icons";
import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getFormation, getEvents } from "./../../Services";

const MatchEvents = () => {
  const { pathname } = useLocation();
  const [matchId, setMatchId] = useState(0);
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const matchId = pathname.split("/")[2];
    setMatchId(matchId);
  }, [pathname]);

  const { data: formationData, isLoading } = useQuery(
    ["formation", matchId],
    () => getFormation(matchId)
  );

  const { data: eventData, isLoading: isLoadingEvent } = useQuery(
    ["events", matchId],
    () => getEvents(matchId)
  );

  useEffect(() => {
    const array = eventData?.data?.data?.filter(
      (item) =>
        item?.type === "goal" ||
        item?.type === "yellow_card" ||
        item?.type === "red_card"
    );

    setMatches(array);
  }, [eventData]);

  if (isLoading || isLoadingEvent) return <div>تحميل...</div>;

  return (
    <Box>
      <Typography variant="h6" sx={{ mt: "30px", textAlign: "center" }}>
        بداية المبارة
      </Typography>
      <Box className="teams">
        <Box className="team-event">
          <img
            src={`https://cdn.so3ody.com/scores/teams/50x50/${formationData?.data?.data?.teamA?.team?.id}.png`}
            alt="team A"
          />
          <p>{formationData?.data?.data?.teamA?.team?.name}</p>
        </Box>
        <Box className="team-event">
          <img
            src={`https://cdn.so3ody.com/scores/teams/50x50/${formationData?.data?.data?.teamB?.team?.id}.png`}
            alt="team B"
          />
          <p>{formationData?.data?.data?.teamB?.team?.name}</p>
        </Box>
      </Box>
      <Timeline>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary"></TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot className="timeline-dot">0</TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent></TimelineContent>
        </TimelineItem>
        {matches?.map((item, index) => (
          <TimelineItem key={item?.player_id}>
            <TimelineOppositeContent color="text.secondary">
              {item?.player?.first_name} {item?.player?.last_name}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot>
                {item?.type === "goal" ? (
                  <img src={goal} alt="goal" />
                ) : item?.type === "yellow_card" ? (
                  <img src={yellow_card} alt="yellow_card" />
                ) : (
                  <img src={red_card} alt="red_card" />
                )}
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>{item?.minute}</TimelineContent>
          </TimelineItem>
        ))}
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary"></TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot className="timeline-dot">90</TimelineDot>
          </TimelineSeparator>
          <TimelineContent></TimelineContent>
        </TimelineItem>
      </Timeline>
      <Typography variant="h6" sx={{ mb: "30px", textAlign: "center" }}>
        نهاية المبارة
      </Typography>
    </Box>
  );
};

export default MatchEvents;
