
import Stack from"@mui/material/Stack";
import { FormFiled } from "@/components/FormFiled";
import Button from "@mui/material/Button";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Image from "next/image";
import img from "../public/img.jpg"
import { ThemeClientProvider } from "@/components/Provider/ThemeClientProvider";
import { Card } from "@mui/material";

export default function Home() {
  

  return (
    <ThemeClientProvider>
        <Card
          style={{
            width : "80%",
            height : "80%",
          }}
        >
          <Stack 
            direction="row" 
            spacing={2}
            sx={{
                width : "100%",
                boxShadow : "initial",
                borderRadius : "1rem",
                padding : "2rem 3rem"
            }} 
          >
            <FormFiled/>
            <div style={{
              width : "50%",
              display : "flex",
              alignItems : "center",
              justifyContent : "center"
            }}>
              <Image 
                src = {img}
                alt="image"
                width={500}
                height={500}
                style={{
                  borderRadius : "20rem"
                }}
              />
            </div>
          </Stack>
          <div style={{display : "flex" , alignItems: "center" , justifyContent : "end" , gap : "1rem" , padding: "1rem 2rem"}}>
            <Button 
              variant="outlined" 
              endIcon = {<ErrorOutlineIcon/>} 
              sx={{
                border : " 1px solid #88898a",
                color : "#88898a"
              }}
            >
              Need Help
            </Button>
            <Button variant="outlined" >
              Privacy Policy
            </Button>
          </div>
          <div style={{paddingBottom : "1rem"}} />
        </Card>
    </ThemeClientProvider>
  );
}
