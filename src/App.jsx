import { Container } from "react-bootstrap";

function App() {
  const headerMsg = 'Radostin Kirilov\'s task';
  return (
    <Container>
      <h1 className="text-center text-success mt-5">{headerMsg}</h1>
    </Container>
  );
}

export default App;
