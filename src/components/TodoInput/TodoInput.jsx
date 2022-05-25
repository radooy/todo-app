import { useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import { BsPlusLg } from 'react-icons/bs';
import { v4 as uuidv4 } from 'uuid';

const TodoInput = ({ addTodo }) => {
    const [todo, setTodo] = useState({ id: '', text: '' });

    const handleChange = (e) => {
        setTodo((prevState) => ({
            ...prevState,
            text: e.target.value
        }));
    };

    const handleBlur = () => {
        setTodo((prevState) => ({
            ...prevState,
            id: uuidv4()
        }));
    };

    return (
        <Row className="w-50">
            <Col lg="12" className="d-flex">
                <Form.Control type="text" placeholder="Add todo item here" onChange={handleChange} onBlur={handleBlur} />
                <BsPlusLg style={{ cursor: 'pointer' }} className="my-auto mx-3" size='30px' onClick={() => addTodo(todo)} />
            </Col>
        </Row>
    )
}

export default TodoInput;
