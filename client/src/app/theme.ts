import createTheme from "@mui/material/styles/createTheme";

const theme = createTheme({
    palette: {
        primary: {
            main: "#510129" //Tyrian purple
        },
        secondary: {
            main: "#385F71", //Payne's gray
            light: "#A1B5D8", //Powder blue
            dark: "2B4162" //Indigo dye
        },
        text: {
            primary: "#A1B5D8", //Powder blue
            secondary: "#A1B5D8" //Powder blue
        }
    }
})
export default theme;