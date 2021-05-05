import React from "react";
import NewMeetupForm from "../components/meetups/NewMeetUpForm";

export default function NewMeetup() {
  const addMeetupHandler = (meetupData) => {
    fetch(
      "https://react-meetups-7f546-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        header: {
          "Content-Type": "application/json",
        },
      }
    );
  };
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}
