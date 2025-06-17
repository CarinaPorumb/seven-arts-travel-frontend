import {Link} from "react-router-dom";
import {getArtObjectTypeEndpoint} from "../api/endpoints.jsx";
import {useFetch} from "../hooks/useFetch.js";
import {getArtObjectsList} from "../api/adaptors.js";
import {Container} from "react-bootstrap";
import ArtObjectList from "../components/ArtObjectList.jsx";
import "./Home.css"

function Home() {

    const workObjectEndpoint = getArtObjectTypeEndpoint("WORK", 0, 3);
    const venueObjectEndpoint = getArtObjectTypeEndpoint("VENUE", 0, 3);
    const eventObjectEndpoint = getArtObjectTypeEndpoint("EVENT", 0, 3);

    let workData = useFetch(workObjectEndpoint);
    let venueData = useFetch(venueObjectEndpoint);
    let eventData = useFetch(eventObjectEndpoint);

    const adaptedWorkData = getArtObjectsList(workData);
    const adaptedVenueData = getArtObjectsList(venueData);
    const adaptedEventData = getArtObjectsList(eventData);


    return (
        <div>
            <h1>Welcome to Seven Arts Travel</h1>

            <section className="work my-5">
                <Container>
                    <h1 className="my-5 pt-5 mx-2 category">Work</h1>
                    <ArtObjectList artList={adaptedWorkData}/>
                    <p className="textStyle">
                        See all works in the Work section{" "}
                        <Link to="/art-object-type/WORK" className="linkStyle">Work</Link>
                        .
                    </p>
                </Container>
            </section>

            <section className="venue my-5">
                <Container>
                    <h1 className="my-5 pt-5 mx-2 category">Venue</h1>
                    <ArtObjectList artList={adaptedVenueData}/>
                    <p className="textStyle">
                        See all venues in the Venue section{" "}
                        <Link to="/art-object-type/VENUE" className="linkStyle">Venue</Link>
                        .
                    </p>
                </Container>
            </section>


            <section className="event my-5">
                <Container>
                    <h1 className="my-5 pt-5 mx-2 category">Event</h1>
                    <ArtObjectList artList={adaptedEventData}/>
                    <p className="textStyle">
                        See all events in the Event section{" "}
                        <Link to="/art-object-type/EVENT" className="linkStyle">Event</Link>
                        .
                    </p>
                </Container>
            </section>
        </div>
    );
}

export default Home;