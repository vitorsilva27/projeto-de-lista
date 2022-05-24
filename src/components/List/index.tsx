import React from "react";

import { Container, ContentList, P } from "./style";

import { mockList } from "../../mock";

export const List: React.FC = () => {
  return (
    <Container>
      {mockList.map((list, index) => (
        <ContentList key={index}>
          <P size={1.3}>Company: {list.company}</P>
          <P size={1.3}>Ceo: {list.ceo}</P>
          <P size={1.3}>Cfo: {list.cfo}</P>
          <P size={1.3}>Revenue: {list.revenue}</P>
          <P size={1.3}>Founded: {list.founded}</P>
        </ContentList>
      ))}
    </Container>
  );
};
