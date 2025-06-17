import {Col, Container, Row} from "react-bootstrap";
import ArtCard from "./ArtCard.jsx";

function ArtObjectList(props) {

    const {artList} = props;

    console.log("ArtList received:", artList);

    if (!artList || artList.length === 0) {
        return <p>No items found</p>;
    }

    return (
        <Container>
            <Row>
                {artList.map((art) => {
                    return (
                        <Col xs={12} md={6} lg={4} className="mb-4" key={art.id}>
                            <ArtCard
                                id={art.id}
                                title={art.title}
                                imageUrl={art.imageUrl}
                                location={art.location}
                                artCategory={art.artCategory}
                                artObjectType={art.artObjectType}
                            />
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
}

export default ArtObjectList;