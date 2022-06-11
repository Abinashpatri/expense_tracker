import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

const BalanceText = styled(Typography)`
  font-size: 25px;
  margin-bottom: 20px;
`;

const Balance = ({tranjactions}) => {

  const amount = tranjactions.map(tranjaction => tranjaction.amount)
  const total = amount.reduce((amount, item) => (amount += item), 0).toFixed(2)


  return (
    <Box>
      <BalanceText>Balance: ₹{total} </BalanceText>
    </Box>
  );
};

export default Balance;
