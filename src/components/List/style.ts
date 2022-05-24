import styled from "styled-components";

import { TypesThisComp } from "./types";

export const Container = styled.div`
    margin: auto;
    padding: 24px;
    border: 3px solid #d2d2d2;
`;

export const ContentList = styled.div`
    padding: 24px;
    border: 1px solid;
    margin-bottom: 24px;
`;

export const P = styled.p<TypesThisComp>`
  font-size: ${({ size }) => (size ? size : '1')}rem;
`;