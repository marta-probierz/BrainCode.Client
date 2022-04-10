import styled from "styled-components";
import { StyledInlineErrorMessage } from "components/styles";

export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  align: center;
  width: 365px;
  align-items: center;
`;

export const View = styled.div`
  position: relative;

  & > img {
    position: absolute;
    top: 25%;
    right: 3%;
    cursor: pointer;
  }
`;

export const StyledInlineErrorMessageForm = styled(StyledInlineErrorMessage)`
margin: 10px auto 5px 70px;
`;
