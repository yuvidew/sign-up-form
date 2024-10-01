import React from 'react'
import Typography from '@mui/material/Typography'
import { FormInput } from '@/components/FormInput'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Key, Mail } from '@mui/icons-material';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Image from 'next/image';
import Link from 'next/link';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const SignUpFormFiled = () => {
    return (
        <Box sx={{
            width: "50%",
        }}>
            <Typography
                variant="h1"
                component={"h1"}
                sx={{
                    fontSize: "3rem",
                    fontWeight: "bold",
                    textAlign: "center",
                    marginBottom : "2.3rem"
                }}
            >
                Create Your Account
            </Typography>

            <Stack
                direction={"column"}
                gap={"1.5rem"}
                sx={{
                    width: "63.5%",
                    margin: "auto",
                }}
            >

                <FormInput
                    type={"text"}
                    label='Full name'
                    icon={<AccountCircleIcon />}
                    placeholder='Enter your full name..'
                />

                <FormInput
                    type={'email'}
                    label='Email'
                    icon={<Mail />}
                    placeholder='Enter your email..'
                />

                <FormInput
                    type={"password"}
                    label='Password'
                    icon={<Key />}
                    placeholder='Enter your password..'
                />


                <Stack direction={"row"} alignItems={"center"} justifyContent={"start"}  style={{ marginTop: ".7rem"}} >
                    <Checkbox {...label} />
                    <Typography sx={{ fontSize: ".9rem" }}> I agree to all <Link href={"#"} >Terms & condition</Link></Typography>
                </Stack>

                <Stack 
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    gap={"1rem"}
                    style={{ marginTop: "1.4rem"}}
                >
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
                    <IconButton aria-label="google" size="small" >
                        <Image
                            src={"./google.svg"}
                            alt='google'
                            width={25}
                            height={25}
                        />
                    </IconButton>
                    <IconButton aria-label="github" size="small" >
                        <Image
                            src={"./github.svg"}
                            alt='github'
                            width={25}
                            height={25}
                        />
                    </IconButton>
                </Stack>

                <Typography 
                    sx={{textAlign : "center" , fontSize : ".9rem" , marginTop : "1.5rem" , color: "#88898a" }} 
                >
                    Already have an account? <Link href={"/"} style={{color : "#1571c2"}} >Login</Link> 
                </Typography>
            </Stack>
        </Box>
    )
}
