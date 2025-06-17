import Card from "react-bootstrap/Card";
import "./ArtCard.css";

function ArtCard({title, imageUrl, location, artCategory, artObjectType}) {

    return (
        <Card
            className="ArtCard h-100 d-flex flex-column justify-content-between align-items-center rounded-2 shadow-sm">
            <Card.Img variant="top" src={imageUrl} alt={title}/>
            <Card.Body className="title">
                <Card.Title className="text-center">{title}</Card.Title>
                <Card.Text>
                    <strong>Location: </strong>{location}<br/>
                    <strong>Category: </strong>{artCategory}<br/>
                    <strong>Type: </strong>{artObjectType}<br/>
                </Card.Text>
            </Card.Body>
        </Card>
    );

}

export default ArtCard;