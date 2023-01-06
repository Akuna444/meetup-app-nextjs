import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    titles: "A first meetup",
    image:
      "https://eadn-wc04-3972048.nxedge.io/wp-content/uploads/2022/04/santamonica.jpg",
    address: "Some address 10, Los angles",
    description: "This is my first Meetup",
  },
  {
    id: "m2",
    titles: "A second meetup",
    image:
      "https://firehub.eu/wp-content/uploads/2019/07/640px-Hauptwache_Frankfurt_am_Main.jpg",
    address: "Some address 11, Frankfurt",
    description: "This is my second Meetup",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 1,
  };
}

export default HomePage;
