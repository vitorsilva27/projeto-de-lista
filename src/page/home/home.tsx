import React from "react";

import { Container } from "./style";

import { mockList } from "../../mock";
import { List } from "../../components/List";

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <h1>Big Companies</h1>
        <List />
      </Container>
    </>
  );
};

export default Home;
