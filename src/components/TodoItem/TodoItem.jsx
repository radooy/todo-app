import { useState } from "react";
import { Card, Container, Form } from "react-bootstrap";
import { BsXSquare } from "react-icons/bs";

const TodoItem = ({ todo, removeTodo, editTodo }) => {
    const [isEditing, setIsEditing] = useState(false);

    const handleOnChange = (e) => {
        todo.text = e.target.value;
    }

    const handleOnBlur = () => {
        editTodo(todo);
        setIsEditing(false);
    };

    return (
        <Container className="d-flex justify-content-start p-1">
            {isEditing ?
                <Form.Control type="text" onChange={handleOnChange} onBlur={handleOnBlur} /> :
                <>
                    <Card onDoubleClick={() => setIsEditing(true)} className="w-75 border-secondary">
                        <Card.Body className="text-center">{todo.text}</Card.Body>
                    </Card>
                    <BsXSquare style={{ cursor: 'pointer' }} className="my-auto mx-3" size='30px' onClick={() => removeTodo(todo.id)} />
                </>
            }
        </Container>
    )
}

export default TodoItem;
