import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetup() {
  const onAddMeetupHanler = (enteredData) => {
    console.log(enteredData);
  };
  return <NewMeetupForm onAddMeetup={onAddMeetupHanler} />;
}

export default NewMeetup;
