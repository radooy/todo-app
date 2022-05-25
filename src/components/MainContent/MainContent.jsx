import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import TodoItems from "../TodoItems/TodoItems";
import TemperatureViewer from "../TemperatureViewer/TemperatureViewer";
import TodoInput from "../TodoInput/TodoInput";

const MainContent = () => {
    const [todos, setTodos] = useState([
        { id: "1", text: "code" },
        { id: "2", text: "sport" },
        { id: "3", text: "party" }
    ]);

    const removeTodo = (id) => {
        const todosAfterRemove = todos.filter(td => td.id !== id);
        setTodos(todosAfterRemove);
    }

    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    }
    return (
        <Container className="border border-secondary rounded p-5">
            <Row className="mb-3">
                <Col lg="8">
                    <TodoItems todos={todos} removeTodo={removeTodo} />
                </Col>
                <Col lg="4">
                    <TemperatureViewer />
                </Col>
            </Row>
            <TodoInput addTodo={addTodo} />
        </Container>
    )
}

export default MainContent;
