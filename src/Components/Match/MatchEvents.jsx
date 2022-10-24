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

const MatchEvents = () => {
  return (
    <Box>
      <Typography variant="h6" sx={{ my: "30px", textAlign: "center" }}>
        بداية المبارة
      </Typography>
      <Timeline>
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
          <TimelineContent>90</TimelineContent>
        </TimelineItem>
      </Timeline>
      <Typography variant="h6" sx={{ my: "30px", textAlign: "center" }}>
        نهاية المبارة
      </Typography>
    </Box>
  );
};

export default MatchEvents;
