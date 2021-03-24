import React from "react";
import Container from "react-bootstrap/Container";
import PlayersTable from "./components/PlayersTable";

const App = () => {
  return (
    <Container>
      <h1>StatsBomb</h1>
      <PlayersTable />
    </Container>
  );
}

export default App;
