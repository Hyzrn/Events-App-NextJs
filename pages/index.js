import React from "react";
import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/EventList";

const HomePage = () => {
  const featuredevents = getFeaturedEvents();
  return (
    <div>
      <EventList items={featuredevents} />
    </div>
  );
};

export default HomePage;
