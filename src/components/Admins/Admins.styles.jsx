import styled from "styled-components";

// import AddNewAdmindefault,{ Wird, DivPass, DivCenter, H3Login, InputSubmit, Form, FormInput, H1Login, DivTxtField, FormLabel, Span } from "./AddNewAdmin.styles"

// addNewAdmin 
export default styled.div`
width: 100%;
/* background: #fff; */
height:calc(100vh - 80px);
display: flex;
justify-content: center;
align-items: flex-start;
/* padding: 5rem; */
/* flex-direction: column; */

@media (max-width:1000px) {
flex-direction: column;
}
@media (max-width:500px) {
padding: 1rem;
}
`;



export const DivCenter = styled.div`

 margin: auto;
 margin-top: 2rem;
 padding: 2rem;
 width: 25rem;
 background: white;
 border-radius: 10px;
 box-shadow: 1px 3px 12px 0px #0000007a;
 
`;


export const H3Login = styled.h3`
text-align: center;
/* margin-bottom: .5rem; */
padding: 0 0 20px 0;
border-bottom: 1px solid silver;
font-family: 'Noto Kufi Arabic', sans-serif;
font-size: 1.5rem;
color: #213C64;
@media (max-width:500px) {
 font-size: 1rem;
 padding: 0 0 10px 0;
}
`;

export const Form = styled.form`
width:100%
display: flex;
flex-direction: column;
justify-content: space-between;
margin: auto;

`;

export const DivTxtField = styled.div`
position: relative;
/* border-bottom: 2px solid #adadad; */
margin: 1rem 0;

@media (max-width:500px) {
margin: 1rem 0;
}
`;

export const Span = styled.span`

text-align:center;
font-family: 'Noto Kufi Arabic', sans-serif;
color: #213C64;
font-size: 20px;
width: 80%;

`;

export const FormInput = styled.input`
width: 100%;
padding: 0 5px;
height: 2.1rem;
font-size: 1rem;
border: none;
background: none;
outline: none;
text-align:right;
color: orange;
border-bottom: 2px solid #2691d9;
:focus{
transition: .1s;
border-bottom: 3px solid orange;
}


`;

export const InputSubmit = styled.button`
width:20rem;
height: 3.1rem;
border: 1px;
background: linear-gradient(120deg, #2980b9, #2980b9);
border-radius: 1.5rem;
font-size: 1rem;
color: #e9f4fb;
cursor: pointer;
outline: none;
margin-top: 1rem;
:hover{
background: orange;
height: 3.2rem;
transition: .3s;
}

`;

export const DropdownDiv = styled.div`
width: 25rem;
margin: 25px auto;
/* box-shadow: 1px 3px 12px 0px #0000007a; */

margin-bottom: 0rem;
margin-top: 0rem;

@media (max-width:500px) {
margin-bottom: 2rem;
margin-top: 2rem;
}
`;


export const DropdownDivSelect = styled.div`

padding: 1rem;
border-radius: 6px;
background-color: white;
margin-top: 3rem;

box-shadow: 1px 3px 12px 0px #0000007a;

/* width: fit-content; */
/* border: 2px;
border-bottom-color: blue; */

justify-content: center;
cursor: pointer;
margin-bottom: .5rem;
@media (max-width:500px) {
  padding: .8rem;
  margin-bottom: 0rem;
}
`;

export const DropdownList = styled.div`
position: relative;
max-height:700px;
overflow: auto;
width: 25rem;
@media (max-width:500px) {
    margin: 10px 0;
    max-height:350px;
}

margin: 100px auto;
/* display: flex; */
justify-content: center;
font-family: 'Noto Kufi Arabic', sans-serif;
color: #213C64;
font-size: 1.3rem;
box-shadow: 1px 3px 12px 0px #0000007a;
border-radius: 4px;
background-color: white;
.title{
    background-color: #e9e9e9;
    border-bottom: 2px solid #fda400;
}
.title span{
    width:100%;   
    color: #000; 
}
`;

export const DropdownListItem = styled.div`

padding: 12px ;
text-align:center;
display: flex;
align-items: flex-start;
border-bottom: 1px solid silver;
#deleteBtn {
    background-color: crimson;
}
`;

export const I = styled.i`

margin-right: 2rem;
text-align:left;
/* padding: 1rem ; */ 


`;


export const DivPass = styled.h3`

display: flex;
justify-content: center;
align-items: flex-start;
word-break: break-word;
direction: rtl;

width: 100%;
padding: 0 5px;
height: 40px;
font-size: 16px;
color: silver;
border: none;
background: none;
outline: none;
text-align: center;
  :focus{
    border:0.2px solid #213C64;
  }
`;


export const Checkboxes = styled.input `
/* display: flex;
justify-content: center;
align-items: flex-start; */

margin: auto;
display: block;
margin-bottom: 0rem;
width: 1.5rem;
padding: 0 5px;
height: 40px;
margin-top: .5rem;
font-size: 16px;
flex-direction: column;

:scope{
  background-color: orange;

}
`;

export const LabelSuper = styled.section `
text-align: center;
display: flex;
justify-content: center;
align-items: flex-start;
display: block;

margin: auto;
flex-direction: column;

`;

export const Button = styled.button`
    width: 45px;
    height: 30px;
    max-width: 150px;
    border: none;
    font-size: 15px;
    background-color: cornflowerblue;
    color: white;
    border-radius: 8px;
`;