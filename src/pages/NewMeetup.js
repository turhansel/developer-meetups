import React from "react";
import NewMeetupForm from "../components/meetups/NewMeetUpForm";
import { useHistory } from "react-router-dom";

export default function NewMeetup() {
  const history = useHistory();

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
    ).then(() => {
      history.replace("/");
    });
  };
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}
