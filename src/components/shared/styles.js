import styled from "@emotion/styled";
import { colors } from "styles";

export default styled.div`
  height: 100%;
  background: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 5rem;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
  @media (max-width: 500px) {
    padding: 2rem;
  }
`;

export const Formm = styled.form`
  width: 20rem;
  @media (max-width: 550px) {
    width: 100%;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: auto;
`;

export const DivTxtField = styled.div`
  position: relative;
  margin: 1rem 0;
`;

export const DivTxtFieldnumber = styled.div`
  display: flex;
  margin: 1rem 0;
  @media (max-width: 500px) {
    margin: 1rem 0;
  }
`;

export const Span = styled.span`
  text-align: center;
  font-family: "Noto Kufi Arabic", sans-serif;
  color: #213c64;
  font-size: 1.2rem;
  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`;

export const Label = styled.section`
  width: 15rem;
  padding: 0 5px;
  height: 2.1rem;
  font-size: 1rem;
  border: none;
  background: none;
  outline: none;
  text-align: right;
  color: #213c64;
  :focus {
    transition: 0.1s;
    border-bottom: 3px solid orange;
  }
`;

export const FormInput = styled.input`
  width: 20rem;
  @media (max-width: 550px) {
    width: 100%;
  }
  padding: 0 5px;
  height: 2.1rem;
  font-size: 1rem;
  border: none;
  background: none;
  outline: none;
  text-align: var(--text-align);
  color: #213c64;
  border-bottom: 1px solid ${colors.darkGrey};
  :focus {
    transition: 0.1s;
    border-bottom: 3px solid orange;
  }
`;

export const FormInputnumber = styled.input`
  width: 4rem;
  padding: 0 5px;
  height: 2.1rem;
  font-size: 1rem;
  border: none;
  background: linear-gradient(120deg, #2980b9, #2980b9);
  outline: none;
  text-align: center;
  color: white;
  border: 2px solid #2691d9;
  border-radius: 0.5rem;
  :focus {
    transition: 0.1s;
  }
  ::placeholder {
    color: white;
  }
`;

export const InputSubmit = styled.button`
  width: 20rem;
  @media (max-width: 550px) {
    width: 100%;
  }
  height: 3.1rem;
  border: 1px;
  /* background: linear-gradient(120deg, #2980b9, #2980b9); */
  background: ${colors.yellow};
  border-radius: 1.5rem;
  font-size: 1rem;
  /* color: #e9f4fb; */
  color: ${colors.black};
  cursor: pointer;
  outline: none;
  margin-top: 1rem;
  :hover {
    background: orange;
    height: 3.2rem;
    transition: 0.3s;
  }
`;

export const DropdownDiv = styled.div`
  margin-bottom: 0rem;
  margin-top: 0rem;
  @media (max-width: 500px) {
    margin-bottom: 2rem;
    margin-top: 2rem;
  }
`;

export const DropdownDivSelect = styled.div`
  padding: 1rem;
  border-radius: 1rem;
  background-color: white;
  margin-top: 3rem;
  display: flex;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  cursor: pointer;
  margin-bottom: 0.5rem;
  @media (max-width: 500px) {
    padding: 0.8rem;
    margin-bottom: 0rem;
  }
`;

export const DivForDropdownList = styled.div`
  width: 25rem;
  margin: auto;
  justify-content: center;
  font-family: "Noto Kufi Arabic", sans-serif;
  color: #213c64;
  font-size: 1.3rem;
  /* box-shadow: 1px 3px 12px 0px #0000007a; */
  border-radius: 4px;
  background-color: white;
`;

export const DropdownListStanderd = styled.select`
  text-align: center;
  width: 20rem;
  @media (max-width: 550px) {
    width: 100%;
  }
  font-family: "Noto Kufi Arabic", sans-serif;
  color: white;
  font-size: 1rem;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 4px;
  /* box-shadow: 1px 1px 2px 0px #0000007a; */
  outline: none;
  border: none;
  background: linear-gradient(120deg, #2980b9, #2980b9);
  :hover {
    outline: none;
  }
  :focus {
    outline: none;
    color: #213c64;
  }
`;

export const DropdownListItemStanderd = styled.option`
  padding: 1rem;
  text-align: center;
  align-items: flex-start;
  border-bottom: 1px solid silver;
  :hover {
    background-color: orange;
    color: white;
  }
`;

export const I = styled.i`
  margin-right: 0.5rem;
  text-align: left;
`;

export const DivForDropdownListItem = styled.div`
  padding: 1rem;
  text-align: center;
  align-items: flex-start;
  /* border-bottom: 1px solid silver; */
`;

export const H3Pass = styled.h3`
  &.green {
    color: #088444;
  }
  &.red {
    color: #eb2b2b;
  }
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding: 0 5px;
  height: 40px;
  font-size: 16px;
  color: silver;
  border: none;
  background: none;
  outline: none;
  text-align: center;
  :focus {
    border: 0.2px solid #213c64;
  }
`;

export const Checkboxes = styled.input`
  margin: auto;
  display: block;
  margin-bottom: 0rem;
  width: 1.5rem;
  padding: 0 5px;
  height: 40px;
  margin-top: 0.5rem;
  font-size: 16px;
  flex-direction: column;
  :scope {
    background-color: orange;
  }
`;

export const LabelSoper = styled.section`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  display: block;
  margin: auto;
  flex-direction: column;
`;

export const IntroductionSection = styled.section`
  margin: auto;
  margin-top: 5rem;
  justify-content: center;
  align-items: flex-start;
  display: flex;
  padding-bottom: 4rem;
  flex-direction: column;
`;

export const IntroductionSectionDiv = styled.section`
  width: 35rem;
  justify-content: center;
  align-items: flex-start;
  margin: auto;
`;

export const IntroductionDiv = styled.div`
  justify-content: center;
  margin-top: -55rem;
  flex-direction: column;
  display: flex;
  margin-right: -50rem;
`;

export const WirdLogoInHome = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const WirdMinIntroduction = styled.div`
  margin-top: 1.5rem;
  padding-right: 2rem;
  text-align: right;
  font-weight: bolder;
  font-family: "Noto Kufi Arabic", sans-serif;
  font-size: 1.8rem;
  color: #2980b9;
`;

export const Introduction = styled.div`
  margin-top: 2rem;
  text-align: right;
  font-family: "Noto Kufi Arabic", sans-serif;
  font-size: 1.4rem;
  color: orange;
`;

export const BorderBottom = styled.div`
  width: 40rem;
  height: 0.3rem;
  background-color: #e94f57;
  margin: auto;
  margin-top: 4rem;
  border-radius: 20px;
  margin-right: -7rem;
`;

export const Form = styled.form`
  width: 20rem;
  @media (max-width: 550px) {
    width: 100%;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: auto;
`;

export const DivPass = styled.div`
  &.green {
    color: #088444;
  }
  &.red {
    color: #eb2b2b;
  }
  width: 100%;
  padding: 0 5px;
  height: 40px;
  font-size: 16px;
  border: none;
  background: none;
  outline: none;
  color: gray;
  margin-top: 0.3rem;
  text-align: center;
`;

export const DropdownListItem = styled.option`
  padding: 1rem;
  text-align: center;
  &:hover {
    background-color: orange;
    color: white;
  }
`;

export const DropdownList = styled.select`
  text-align: center;
  font-family: "Noto Kufi Arabic", sans-serif;
  color: #213c64;
  font-size: 1.3rem;
  padding: 1rem;
  border-radius: 4px;
  background-color: white;
  /* box-shadow: 1px 3px 12px 0px #0000007a; */
  :hover {
    outline: none;
    border: none;
  }
  :focus {
    outline: none;
    border: none;
  }
`;

export const Wird = styled.h1`
  margin-top: 0.2rem;
  text-align: center;
  font-family: "Noto Kufi Arabic", sans-serif;
  font-size: 2.3rem;
  color: orange;
`;

export const Logo = styled.h1`
  color: orange;
  font-size: 1.5rem;
  border: 3px solid white;
  border-radius: 2rem;
  width: 3.5rem;
`;

export const HedarNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
`;

export const Ul = styled.ul`
  display: inline-block;
  margin-right: 1rem;
`;

export const Li = styled.li`
  font-weight: 500;
  color: white;
  text-decoration: none;
  display: inline-block;
  padding: 0.5rem 0 0;
  transition: all 0.3s ease 0s;
  :hover {
    transition: all 0.3s ease 0s;
    color: orange;
  }
`;

export const ButtonLogout = styled.button`
  width: 8rem;
  height: 2.4rem;
  background: orange;
  font-weight: bold;
  border-radius: 1.5rem;
  font-size: 0.9rem;
  color: #e9f4fb;
  cursor: pointer;
  outline: none;
  margin-left: 2rem;
  border: 2px solid orange;
  transition: all 0.3s ease 0s;
  /* box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2); */
  :hover {
    background: #2980b9;
    border: 3px solid orange;
    transition: 0.3s;
    /* box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.3); */
  }
`;
