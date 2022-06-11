import React, { useState } from "react";
import { Box, Typography, TextField, Button, styled } from "@mui/material";

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  & > h5, & > div, & > button{
    margin-top: 30px;
  }
`;

const NewTranjactions = ({setTranjactions}) => {

  const [text, setText] = useState('');
  const [amount, setAmount] = useState();

  const addTranjaction = () => {
    const tranjaction = {
      id: Math.floor(Math.random() * 1000000),
      text: text,
      amount: +amount
    }
    setTranjactions(prevState => [tranjaction, ...prevState]);

  }


  return (
    <Container>
      <Typography variant="h5">New Tranjaction </Typography>
      <TextField value={text} label="Enter Expense" onChange={(e) => setText(e.target.value)}/>
      <TextField value={amount} label="Enter Amount" onChange={(e) => setAmount(e.target.value)}/>
      <Button variant="contained" onClick={() => addTranjaction()}>Add Tranjaction</Button>
    </Container>
  );
};

export default NewTranjactions;
