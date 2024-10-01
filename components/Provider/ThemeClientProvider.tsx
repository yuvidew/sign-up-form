"use client";

import React, { ReactNode, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {ThemeProvider , createTheme} from "@mui/material";
import DarkMode from "@mui/icons-material/DarkMode";
import CssBaseline from "@mui/material/CssBaseline";
import LightModeIcon from "@mui/icons-material/LightMode";
import useMediaQuery from "@mui/material/useMediaQuery";


const getDesignTokens = (mode: 'light' | 'dark') => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                background: {
                    default: "#f7f7f5",
                },
            }
            : {
                background: {
                    default: "#121212",
                },
            }),
    },
});

export const ThemeClientProvider = ({ children }: { children: ReactNode }) => {
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
    const [mode, setMode] = useState<"light" | "dark">(
        prefersDarkMode ? "dark" : "light"
    );

    useEffect(() => {
        setMode(prefersDarkMode ? "dark" : "light");
    }, [prefersDarkMode]);

    const theme = createTheme(getDesignTokens(mode));

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box
                sx={{
                    position: "relative",
                    width : "100%",
                    height : "100%"
                }}
            >
                {children}
                <Button 
                    variant="outlined"  
                    onClick={() => setMode((prevMode) => (prevMode === "light" ? "dark" : "light"))} 
                    style={{
                        position: "absolute",
                        right : "1rem",
                        bottom : "2rem"
                    }}
                    endIcon={mode === "light" ? <DarkMode /> : <LightModeIcon/>}
                >
                    {mode == "light" ? "Dark" : "Light"}
                </Button>
            </Box>
        </ThemeProvider>
    );
};
