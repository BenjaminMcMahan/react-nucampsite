import {Container, Row} from "reactstrap";
import {useParams} from "react-router-dom";
import {selectCampsiteById} from "../features/campsites/campsitesSlice";
import CampsiteDetail from "../features/campsites/CampsiteDetail";
import CommentsList from "../features/comments/CommentsList";
import SubHeader from "../components/SubHeader";

const CampsiteDetailPage = () => {
    // Get the ID passed from the router in App.js
    const {campsiteId} = useParams();
    // Get the corresponding campsite using the ID
    const campsite = selectCampsiteById(campsiteId);

    return (
        <Container>
            <SubHeader current={campsite.name} detail={true}/>
            <Row>
                <CampsiteDetail campsite={campsite}/>
                <CommentsList campsiteId={campsiteId}/>
            </Row>
        </Container>
    )
};

export default CampsiteDetailPage;