import React from "react";
import TalkCard from "./talkCard";

const Schedule = ({ talks }) => {
  return (
    <>
      {talks.map((talk) => {
        return <TalkCard talk={talk.node} key={talk.node.name} />;
      })}
    </>
  );
};

export default Schedule;
