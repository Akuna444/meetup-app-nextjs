import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      src="https://eadn-wc04-3972048.nxedge.io/wp-content/uploads/2022/04/santamonica.jpg"
      alt="first meetup place"
      title="First Meetup Place"
      address="Some Address 10"
      description="The most visted place in the world"
    />
  );
}

export function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  console.log(meetupId);
  return {
    props: {
      meetupData: {
        src: "https://eadn-wc04-3972048.nxedge.io/wp-content/uploads/2022/04/santamonica.jpg",
        alt: "first meetup place",
        title: "First Meetup Place",
        address: "Some Address 10",
        description: "The most visted place in the world",
      },
    },
  };
}

export default MeetupDetails;
