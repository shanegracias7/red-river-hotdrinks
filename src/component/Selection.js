import React from 'react'
import Typography from '@mui/material/Typography';
import { FormControl,RadioGroup,FormControlLabel,Radio,FormLabel, Box,Paper } from '@mui/material';
import LemonTea from './LemonTea';
import Coffee from './Coffee'
import Chocolate from './Chocolate';
import { useState } from 'react'

export default function Selection() {

    const [selection,setSelection] = useState('')

    return (
        <Paper elevation={5} sx={{ mb: 2, p: 2 }}>
        <Box >
            <Typography variant="h3" component="h2">
                Red River Technical test
            </Typography>
            <Paper elevation={5} sx={{ mb: 2, p: 2 }}>
            <FormControl>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="Lemon Tea" control={<Radio />} label="Lemon Tea" onClick={()=>setSelection("Lemon Tea")} />
                    <FormControlLabel value="Coffee" control={<Radio />} label="Coffee" onClick={()=>setSelection("Coffee")} />
                    <FormControlLabel value="Chocolate" control={<Radio />} label="Chocolate" onClick={()=>setSelection("Chocolate")} />
                </RadioGroup>
            </FormControl>
            </Paper>
            <Paper elevation={5} sx={{ mb: 2, p: 2 }}>
            { selection==="Lemon Tea"?<LemonTea/>:""}
            { selection==="Coffee"?<Coffee/>:""}
            { selection==="Chocolate"?<Chocolate/>:""}
            { selection===""?<div>Please Select a Drink</div>:""}
            </Paper>
        </Box>  
        </Paper>
    )
}
