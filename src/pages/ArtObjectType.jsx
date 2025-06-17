import {useParams, useSearchParams} from "react-router-dom";
import {Container} from "react-bootstrap";
import {getArtObjectTypeEndpoint} from "../api/endpoints.jsx";
import {useFetch} from "../hooks/useFetch.js";
import {getArtObjectsList} from "../api/adaptors.js";
import ArtObjectList from "../components/ArtObjectList.jsx";

function ArtObjectType() {

    const [searchParams] = useSearchParams();
    const currentPage = Number(searchParams.get('page')) || 0;

    const {artObjectType} = useParams();
    const endpoint = getArtObjectTypeEndpoint(artObjectType, currentPage);
    const data = useFetch(endpoint);

    if (!data) {
        return <p>Loading...</p>
    }

    const adaptedArtList = getArtObjectsList(data);
    console.log("Fetched data: ", data);
    console.log("Adapted list: ", adaptedArtList)


    let title = "";
    switch (artObjectType.toUpperCase()) {
        case "WORK":
            title = "Work";
            break;
        case "EVENT":
            title = "Event";
            break;
        case "VENUE":
            title = "Venue";
            break;
        default:
            break;
    }

    return (
        <Container className="my-5">
            <h1 className="artObjectType">{title}</h1>
            <ArtObjectList artList={adaptedArtList}/>
        </Container>
    );

}

export default ArtObjectType;