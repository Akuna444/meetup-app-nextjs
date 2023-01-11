import { Fragment } from "react";

import Head from "next/head";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";

function NewMeetup() {
  const router = useRouter();

  const onAddMeetupHandler = async (enteredData) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredData),
      "Content-Type": "application/json",
    });

    const data = await response.json();
    console.log(data);

    router.push("/");
  };
  return (
    <Fragment>
      <Head>
        <title>Add new meetups</title>
        <meta name="description" content="Add your own amazing meetups" />
      </Head>
      <NewMeetupForm onAddMeetup={onAddMeetupHandler} />
    </Fragment>
  );
}

export default NewMeetup;
