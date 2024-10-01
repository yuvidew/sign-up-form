import Typography from '@mui/material/Typography'
import React from 'react'
import { FormInput } from './FormInput'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { GitHub, Google, Key, Mail } from '@mui/icons-material';
import Checkbox from '@mui/material/Checkbox';
import Link from 'next/link';
import Button from '@mui/material/Button';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import IconButton from '@mui/material/IconButton';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const FormFiled = () => {
    return (
        <div style={{
            width: "50%",
        }}>
            <Typography
                variant="h1"
                component={"h1"}
                sx={{
                    fontSize: "3rem",
                    fontWeight: "bold",
                    textAlign: "center"
                }}
            >
                Create Your Account
            </Typography>

            <div
                style={{
                    width: "65%",
                    margin: "auto",
                    padding: "1rem 0rem",
                    marginTop: "1rem"
                }}
            >

                <FormInput
                    type={"text"}
                    label='Full name'
                    icon={<AccountCircleIcon />}
                    placeholder='Enter your full name..'
                />

                <div style={{ marginTop: "1rem" }}></div>
                <FormInput
                    type={'email'}
                    label='Email'
                    icon={<Mail />}
                    placeholder='Enter your email..'
                />

                <div style={{ marginTop: "1rem" }}></div>
                <FormInput
                    type={"password"}
                    label='Password'
                    icon={<Key />}
                    placeholder='Enter your password..'
                />

                <div style={{ marginTop: "1rem" }}></div>

                <div style={{ marginTop: "1rem", display: "flex", alignItems: "center" }} >
                    <Checkbox {...label} />
                    <Typography sx={{ fontSize: ".9rem" }}> I agree to all <Link href={"#"} style={{ color: "blue" }}>Terms & condition</Link></Typography>
                </div>

                <div style={{ marginTop: "1.4rem", gap: "1rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Button
                        variant="contained"
                        endIcon={<ChevronRightIcon />}
                        sx={{
                            borderRadius: "2rem",
                            paddingX: "1.5rem"
                        }}
                    >
                        Sign Up
                    </Button>
                    <Typography variant='h1' component={"h1"}
                        sx={{ fontSize: "1rem", fontWeight: "bold", color: "#88898a" }}
                    >
                        OR
                    </Typography>
                    <IconButton aria-label="delete">
                        <Google />
                    </IconButton>
                    <IconButton aria-label="delete">
                        <GitHub />
                    </IconButton>
                </div>

                <Typography 
                    sx={{textAlign : "center" , fontSize : ".9rem" , marginTop : "1.5rem" , color: "#88898a" }} 
                >
                    Already have an account? <Link href={"#"} style={{color : "blue"}} >Login</Link> 
                </Typography>
            </div>
        </div>
    )
}
