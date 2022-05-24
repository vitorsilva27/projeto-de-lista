import React from "react";

import {Container ,ContainerList, ContentList, ContentCompany, ContentCeoAndCfo, ContentRevenueAndFounded, Span} from "./style";

import { mockList } from "../../mock";

export const List: React.FC = () => {
  return (
    <Container>
      <h1>Big Companies</h1>
      <ContainerList>
        {mockList.map((list, index) => (
          <ContentList key={index}>
            <ContentCompany>
              <h1>{list.company}</h1>
            </ContentCompany>

            <ContentCeoAndCfo>
              <div>
                <h2>CEO</h2>
                <p>{list.ceo}</p>
              </div>

              <div>
                <h2>CFO</h2>
                <p>{list.cfo}</p>
              </div>
            </ContentCeoAndCfo>

            <ContentRevenueAndFounded>
              <p><Span>Revenue:</Span> {list.revenue}</p>
              <p><Span>Founded:</Span> {list.founded}</p>
            </ContentRevenueAndFounded>
          </ContentList>
        ))}
      </ContainerList>
    </Container>
  );
};
