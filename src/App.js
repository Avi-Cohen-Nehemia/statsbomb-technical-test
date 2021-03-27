import React from "react";
import "./assets/css/main.css";
import Container from "react-bootstrap/Container";
import TopPlayersTable from "./components/TopPlayersTable";
import TopTeamsTable from "./components/TopTeamsTable";
import ComparisonChart from "./components/ComparisonChart";

const App = () => {
  return (
    <Container>
        <h1 className="display-3">{ "StatsBomb" }</h1>
        <section className="d-flex justify-content-between mt-5 mb-5">
            <TopPlayersTable />
            <TopTeamsTable />
        </section>
        <section style={{ height: "450px" }}>
          <ComparisonChart />
        </section>
    </Container>
  );
}

export default App;
