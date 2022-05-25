import { Card, Container } from "react-bootstrap";
import { BsXSquare } from "react-icons/bs"

const TodoItem = () => {
    return (
        <Container className="d-flex justify-content-start p-1">
            <Card className="w-75 border-secondary">
                <Card.Body className="text-center">This is a todo text!</Card.Body>
            </Card>
            <BsXSquare style={{ cursor: 'pointer' }} className="my-auto mx-3" size='30px' />
        </Container>
    )
}

export default TodoItem;
