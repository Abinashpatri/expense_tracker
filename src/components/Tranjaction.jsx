import React from "react";
import { ListItem, ListItemText, styled, ListItemIcon } from "@mui/material";

import { Delete } from "@mui/icons-material";

const Detail = styled(ListItem)`
  margin-top: 10px;
`;

const Tranjaction = ({ tranjaction,tranjactions, setTranjactions }) => {
  const color = tranjaction.amount > 0 ? "Green" : "Red";

  const deleteTranjaction = (id) => {
    setTranjactions(tranjactions.filter(tranjaction => tranjaction.id !== id))
  }

  return (
    <Detail style={{ background: `${color}`, color: "white" }}>
      <ListItemIcon><Delete onClick={() => deleteTranjaction(tranjaction.id)} /></ListItemIcon>
      <ListItemText> {tranjaction.text} </ListItemText>
      <ListItemText> {tranjaction.amount} </ListItemText>
    </Detail>
  );
};

export default Tranjaction;
