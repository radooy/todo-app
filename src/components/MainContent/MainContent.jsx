import { Container } from "react-bootstrap";
import TodoItems from "../TodoItems/TodoItems";

const MainContent = () => {
    return (
        <Container className="border border-secondary rounded p-3">
            <TodoItems />
        </Container>
    )
}

export default MainContent;
