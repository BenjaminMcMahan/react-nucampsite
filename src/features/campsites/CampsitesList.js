import {Col, Container, Row} from "reactstrap";
import CampsiteCard from "./CampsiteCard";
import { selectAllCampsites } from "./CampsitesSlice";

const CampsitesList = () => {
    const campsites = selectAllCampsites();
    return (
        // Added a container here because otherwise I was getting a horizontal
        // scrollbar...?
        <Container>
            <Row className='ms-auto'>
                {campsites.map((campsite) => {
                    return (
                        <Col md='5' className='m-4' key={campsite.id}>
                            <CampsiteCard campsite={campsite} />
                        </Col>
                    );
                })}
            </Row>
        </Container>
    )
};

export default CampsitesList;