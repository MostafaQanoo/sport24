import React, { useEffect, useState } from "react";
import { getCompetitions } from "../../Services";
import { todayDate, tomorrowDate, yesterdayDate } from "../../Utils";
import SingleCompitition from "./SingleCompetition";

const Competitions = () => {
  const [date, setDate] = useState(["today", todayDate()]);
  const [competitions, setCompetitions] = useState([]);

  const fetchCompititions = async () => {
    const response = await getCompetitions("");
    const europComp = await getCompetitions("id=401");
    const champComp = await getCompetitions("id=400");
    setCompetitions([
      ...response?.data?.data?.slice(0, 5),
      europComp?.data?.data[0],
      champComp?.data?.data[0],
    ]);
  };

  useEffect(() => {
    // const interval = setInterval(() => {
    //   fetchCompititions();
    // }, 1000);
    // return () => {
    //   clearInterval(interval);
    // };
    fetchCompititions();
  }, []);

  return (
    <section className="compititions-sec">
      <div className="tabs">
        <button
          className={`btn ${date[0] === "today" ? "active" : ""}`}
          onClick={() => setDate(["today", todayDate()])}>
          اليوم
        </button>
        <button
          className={`btn ${date[0] === "tomorrow" ? "active" : ""}`}
          onClick={() => setDate(["tomorrow", tomorrowDate()])}>
          غداً
        </button>
        <button
          className={`btn ${date[0] === "yesterday" ? "active" : ""}`}
          onClick={() => setDate(["yesterday", yesterdayDate()])}>
          في الأمس
        </button>
      </div>

      <div className="compititons">
        {competitions.length === 0
          ? null
          : competitions?.map((compitition, index) => (
              <SingleCompitition
                key={index}
                compitition={compitition}
                date={date[1]}
              />
            ))}
      </div>
    </section>
  );
};

export default Competitions;
