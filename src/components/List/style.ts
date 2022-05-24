import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  background: #d2d2d2;
  padding: 24px;
  margin-top: 24px;
  border-radius: 24px;

`;

export const ContainerList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
  padding-top: 60px;
  padding-bottom: 60px;

  @media (max-width: 1280px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const ContentList = styled.div`
  width: 300px;
  background: #ffffff;
  border-radius: 12px;
  text-align: center;
  padding: 24px;
`;

export const ContentCompany = styled.div`
  border-bottom: 2px solid; 
  text-align: center;
`;

export const ContentCeoAndCfo = styled.div`
  display: flex; 
  justify-content: space-around; 
  text-align: center;
`;

export const ContentRevenueAndFounded = styled.div`
  display: grid; 
  grid-template-columns: 1fr; 
  align-items: center;
`;

export const Span = styled.span`
  font-size: 22px; 
  font-weight: 600;
`;

