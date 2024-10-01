"use client";

import React, { ReactNode, useState, useEffect } from "react";
import { Box, Button, createTheme, ThemeProvider } from "@mui/material";
import DarkMode from "@mui/icons-material/DarkMode";
import CssBaseline from "@mui/material/CssBaseline";
import LightModeIcon from "@mui/icons-material/LightMode";
import useMediaQuery from "@mui/material/useMediaQuery";

// Custom theme that supports light and dark mode
const getDesignTokens = (mode: 'light' | 'dark') => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                // Light mode palette options
                background: {
                    default: "#f7f7f5",
                },
            }
            : {
                // Dark mode palette options
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
                    display: "flex",
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    bgcolor: "background.default",
                    color: "text.primary",
                    borderRadius: 1,
                    p: 3,
                    height: "100vh",
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
