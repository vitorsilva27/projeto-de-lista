import React from 'react';

  import { Container } from "./style"

import { mockList } from '../../mock';

const Home: React.FC = () => {
  return (
    <Container>
      <h1>Big Companies</h1>
      {mockList.map(list => (
        <div>
          <p>Company: {list.company}</p>
          <p>Ceo: {list.ceo}</p>
          <p>Cfo: {list.cfo}</p>
          <p>Revenue: {list.revenue}</p>
          <p>Founded: {list.founded}</p>
          <hr/>
        </div>
      ))}
    </Container>
  );
}

export default Home;
