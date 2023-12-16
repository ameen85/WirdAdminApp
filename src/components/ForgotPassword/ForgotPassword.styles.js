import styled from "@emotion/styled";
import {
    TitleLogin as DefaultTitleLogin,
    DivCenter as DefaultDivCenter
} from "../Login/login.styles";

import {
    DivPass as DefaultDivPass,
} from "../shared/styles";

export default styled.div`
display:flex;
margin: 0;
padding: 0;
font-family: 'Noto Kufi Arabic', sans-serif;
background: #FDFDFB;
height: 100vh;
overflow: hidden;
`;
export const DivCenter = styled(DefaultDivCenter)`
 height: 30rem;

@media (max-width:43.75rem) {
 height: 25rem;
}
`;

export const TitleLogin = styled(DefaultTitleLogin)`
@media (max-width:43.75rem) {
    font-size: 1.4375rem;
}
`;

export const DivPass = styled(DefaultDivPass)`
  margin-bottom: 1rem;
`;