import Stack from "@mui/material/Stack";
import Image from "next/image";
import Box from "@mui/material/Box";
import { LoginFormFiled } from "./_components/LoginFormFiled";

export default function LoginHome() {
    return (
        <Stack
            direction="row"
            alignItems={"center"}
            justifyContent={"center"}
            spacing={2}
            sx={{
                width: "100%",
                boxShadow: "initial",
                borderRadius: "1rem",
                padding: "1rem 3rem"
            }}
        >
            <LoginFormFiled />
            <Box 
                sx={{
                    width: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <Image
                    unoptimized
                    src={"./login.svg"}
                    alt="image"
                    width={500}
                    height={500}
                />
            </Box>
        </Stack>
    )
}
