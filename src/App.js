import { useState } from "react";
import "./App.css";
import { Typography, styled, Box } from "@mui/material";
import Balance from "./components/Balance";
import ExpenseCard from "./components/ExpenseCard";
import NewTranjactions from "./components/NewTranjactions";
import Tranjactions from "./components/Tranjactions";

const Header = styled(Typography)`
  font-size: 36px;
  color: grey;
  text-transform: uppercase;
`;
const Component = styled(Box)`
  display: flex;
  background: white;
  width: 800px;
  padding: 10px;
  border-radius: 20px;
  margin: auto;
  & > div {
      height: 70vh;
      width: 50%;
      padding: 10px;
  }
`;

function App() {
  const [tranjactions, setTranjactions] = useState([
    { id: 1, text: "Momos", amount: -20 },
    { id: 2, text: "Salary", amount: 2000 },
    { id: 3, text: "pen", amount: -50 },
  ]);

  return (
    <div className="App">
      <Header>Expense Tracker</Header>
      <Component>
        <Box>
          <Balance tranjactions={tranjactions} />
          <ExpenseCard tranjactions={tranjactions}/>
          <NewTranjactions setTranjactions={setTranjactions} />
        </Box>
        <Box>
          <Tranjactions tranjactions={tranjactions} setTranjactions={setTranjactions} />
        </Box>
      </Component>
    </div>
  );
}

export default App;
