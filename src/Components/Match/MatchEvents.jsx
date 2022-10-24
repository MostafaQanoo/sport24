import React from "react";
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
import { football, card, exchange } from "./../../assets/icons";
import { teamA, teamB } from "../../assets/images";

const MatchEvents = () => {
  return (
    <Box>
      <Typography variant="h6" sx={{ mt: "30px", textAlign: "center" }}>
        بداية المبارة
      </Typography>
      <Box className="teams">
        <Box className="team-event">
          <img src={teamA} alt="team A" />
          <p>ريال مدريد</p>
        </Box>
        <Box className="team-event">
          <img src={teamB} alt="team B" />
          <p>برشلونة</p>
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
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            كريم بنزيمة ’9
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot>
              <img src={football} alt="football" />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>30</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            جيرارد بيكيه ’18
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot>
              <img src={card} alt="card" />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>45</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            جيرارد بيكيه ’18
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot>
              <img src={exchange} alt="exchange" />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>60</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            جيرارد بيكيه ’18
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot>
              <img src={exchange} alt="exchange" />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>80</TimelineContent>
        </TimelineItem>
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
