import styled from "styled-components";

export const TaskBarSection = styled.section`
max-width: 100%;
min-height: 44px;
max-height: auto;
margin: 0 24px;
`;

export const Wrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`;
export const TextArea = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`;

export const Title = styled.h2`
margin-bottom: 4px;
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 22px;
letter-spacing: -0.625px;
text-transform: capitalize;
color: "#0C0E16";
`;

export const SubTitle = styled.h2`
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 15px;
letter-spacing: -0.25px;
color: #888eb0;
`;

export const Button = styled.div`
height: 44px;
width: 90px;
border-radius: 24px;
background-color: #7c5dfa;
display: flex;
justify-content: space-between;
align-items: center;
cursor: pointer;
`;

export const IconContainer = styled.div`
width: 32px;
height: 32px;
display: flex;
justify-content: center;
align-items: center;
background-color: white;
border-radius: 100%;
margin: 6px 0 6px 6px;
`;

export const ButtonText = styled.p`
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 15px;
letter-spacing: -0.25px;
color: #ffffff;
margin: 0 15px 0;
`;

export const FilterContainer = styled.div`
position: relative;
width: 192px;
height: auto;
display: flex;
justify-content: flex-end;
align-items: center;
margin-left: auto;
margin-right: 18px;
cursor: pointer;
`;

export const FilterText = styled.div`
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 15px;
text-align: right;
letter-spacing: -0.25px;
color: #0c0e16;
margin-right: 12px;
`;

export const FilterMenu = styled.div`
position: absolute;
top: 50px;
right: 0;
width: 192px;
height: auto;
padding: 24px;
background: #ffffff;
box-shadow: 0px 10px 20px rgba(72, 84, 159, 0.25);
border-radius: 8px;
background-color: "red";
`;
