import Typography  from '@mui/material/Typography';
import TextField from "@mui/material/TextField";
import React from 'react'
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';

interface props {
    label: string,
    icon: React.ReactNode,
    placeholder: string,
    type : string
}

export const FormInput = ({
    label,
    icon,
    placeholder,
    type
}: props) => {
    return (
        <Box sx={{
            display : "flex",
            flexDirection : "column"
        }}>
            <Typography 
                variant='body1' 
                component={"span"} 
            >
                    {label} <span style={{color : "red"}}>*</span>
            </Typography>
            <div style={{marginTop : ".7rem"}}></div>
            <TextField
                id="input-with-icon-textfield"
                size="small"
                type={type}
                slotProps={{
                    input: {
                        startAdornment: (
                            <InputAdornment position="start">
                                {icon}
                            </InputAdornment>
                        ),
                    },
                }}
                variant="outlined"
                placeholder={placeholder}
            />
        </Box>
    )
}
