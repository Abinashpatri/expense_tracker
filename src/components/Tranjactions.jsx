import React from 'react'
import {Box, Typography, Divider, List} from '@mui/material'
import Tranjaction from './Tranjaction'


const Tranjactions = ({tranjactions, setTranjactions}) => {
  return (
    <Box>
        <Typography variant='h5'>Tranjaction History</Typography>
        <Divider/>
        <List>
             {
                tranjactions.map(tranjaction => (
                    <Tranjaction tranjaction={tranjaction} tranjactions={tranjactions} setTranjactions={setTranjactions}/>
                ))
             }
        </List>
    </Box>
  )
}

export default Tranjactions