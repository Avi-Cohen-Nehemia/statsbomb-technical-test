import React from "react";
import Container from "react-bootstrap/Container";
import TopPlayersTable from "./components/TopPlayersTable";

const App = () => {
  return (
    <Container>
      <h1>StatsBomb</h1>
      <TopPlayersTable />
    </Container>
  );
}

export default App;
