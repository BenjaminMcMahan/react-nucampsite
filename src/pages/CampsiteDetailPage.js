import { Container, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import { selectCampsiteById } from "../features/campsites/CampsitesSlice";
import CampsiteDetail from "../features/campsites/CampsiteDetail";

const CampsiteDetailPage = () => {
    // Get the ID passed from the router in App.js
    const { campsiteId } = useParams();
    // Get the corresponding campsite using the ID
    const campsite = selectCampsiteById(campsiteId);

    return (
        <Container>
            <Row>
                <CampsiteDetail campsite={campsite}/>
            </Row>
        </Container>
    )
};

export default CampsiteDetailPage;