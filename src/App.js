import React from "react";
import "./assets/css/main.css";
import Container from "react-bootstrap/Container";
import TopPlayersTable from "./components/TopPlayersTable";
import TopTeamsTable from "./components/TopTeamsTable";

const App = () => {
  return (
    <Container>
        <h1 className="display-3">StatsBomb</h1>
        <section className="d-flex justify-content-between">
            <TopPlayersTable />
            <TopTeamsTable />
        </section>
    </Container>
  );
}

export default App;
