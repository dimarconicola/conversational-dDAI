import React from "react";
import Section from "./Section";
import styled from "styled-components";

const Text = styled.span`
  font-size: 3em;
  color: black;
  font-weight: 700;
  margin-right: 15px;
  margin-top: 15px;
`;

const APR = styled.span`
  font-size: 3em;
  font-weight: 700;
  margin-right: 15px;
  color: #60E71F;
  margin-top: 15px;  
`;

const Container = styled.span`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  background-color: #f2f2f2;
  text-align: right;
  margin-right: 15px;
  margin-top: 15px;


  @media (max-width: 800px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #e0e0e0;
    border-radius: 5px;
    background-color: #f2f2f2;
    text-align: right;
  }
`;

const Input = styled.input`
  display: flex;
  background-color: #f2f2f2;
  padding: 20px 15px;
  border: none;
  font-size: 1rem;

  ::placeholder,
  ::-webkit-input-placeholder {
    font-size: 1.2rem;
    font-weight: 300;
    color: #000000;
  }

  :focus {
    outline: none;
  }

  :focus::placeholder {
    color: transparent;
  }
`;

const Select = styled.select`
  border: 0px solid #f2f2f2;
  border-radius: 5px;
  background-color: #f2f2f2;
  text-align: right;
  width: 100px;
  font-size: 1.2rem;
  margin: 0 10px;
  height: 60px;

  :focus {
    outline: none;
  }
`;

const Recipes = styled.select`
  border: 0px solid #f2f2f2;
  border-radius: 5px;
  background-color: #f2f2f2;
  text-align: right;
  width: 220px;
  font-size: 1.2rem;
  margin: 0 10px;
  height: 60px;

  :focus {
    outline: none;
  }
`;

const Option = styled.option`
  background-repeat: no-repeat;
  background-position: cover;
`;

const Space = styled.span`
  width: 20px;
`;

const DaiLogo = styled.img`
  width: 50px;
  margin-right: 15px;
`;

function Conversation(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <Container>
          <Text>I </Text>
          <Text>want </Text>
          <Text>to </Text>
          <Text>gain </Text>
          <Text>🤑 </Text>
          <APR>9,5% </APR>
          <Text>per year </Text>
          <Text>by depositing </Text>
          <Text>🏦 </Text>
          <Form>
            <Input
              type="number"
              value={props.amount}
              onChange={props.onChange}
              placeholder="100"
            ></Input>
          </Form>
          <DaiLogo src='../images/daiIcon.svg'></DaiLogo>
          <Text>DAI </Text>
          {/* <Form>
            <Select name="token" id="currencies" className="icon-menu">
              <Option>DAI</Option>
              <Option>ETH</Option>
            </Select>
          </Form> */}
          <Text>and </Text>
          <Text>automatically </Text>
          <Text>reinvest </Text>
          <Text>my </Text>
          <Text>earnings </Text>
          <Text>in</Text>
          <Form>
            <Recipes name="token" id="currencies" className="icon-menu">
              <Option>ETH + BTC</Option>
              <Option>Repay Compound Loan</Option>
            </Recipes>
          </Form>
        </Container>
      </div>
    </Section>
  );
}

export default Conversation;
