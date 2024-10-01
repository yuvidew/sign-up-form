
import Stack from"@mui/material/Stack";
import { SignUpFormFiled } from "./_components/SignUpFormFiled";
import Image from "next/image";
import Box from "@mui/material/Box";

export default function SignUpHome() {
  
  return (
        <Stack 
          direction="row" 
          alignItems={"center"}
          justifyContent={"center"}
          spacing={2}
          sx={{
              width : "100%",
              boxShadow : "initial",
              borderRadius : "1rem",
              padding : "1rem 3rem"
          }} 
        >
          <SignUpFormFiled/>
          <Box sx={{
            width : "50%",
            display : "flex",
            alignItems : "center",
            justifyContent : "center"
          }}>
            <Image 
              unoptimized
              src = {"./signup.svg"}
              alt="image"
              width={500}
              height={500}
            />
          </Box>
        </Stack>
  );
}
