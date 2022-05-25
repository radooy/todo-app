import { Container } from "react-bootstrap";
import TodoItems from "../TodoItems/TodoItems";
import TemperatureViewer from "../TemperatureViewer/TemperatureViewer";

const MainContent = () => {
    return (
        <Container className="d-flex border border-secondary rounded p-3">
            <TodoItems />
            <TemperatureViewer />
        </Container>
    )
}

export default MainContent;
