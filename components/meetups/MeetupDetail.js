import classes from "./MeetupDetail.module.css";

function MeetupDetails(props) {
  return (
    <section className={classes.details}>
      <img src={props.src} alt={props.alt} />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  );
}

export default MeetupDetails;
