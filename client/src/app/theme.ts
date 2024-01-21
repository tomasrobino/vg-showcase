import createTheme from "@mui/material/styles/createTheme";

const tyrianPurple = "#510129";
const paynesGray = "#385F71";
const powderBlue = "#A1B5D8";
const indigoDye = "#2B4162";


const theme = createTheme({
    components: {
        MuiSelect: {
            styleOverrides: {
                root: {
                    backgroundColor: powderBlue,
                    borderRadius: "10px"
                }
            }
        }
    },
    palette: {
        primary: {
            main: tyrianPurple
        },
        secondary: {
            main: paynesGray,
            light: powderBlue,
            dark: indigoDye
        },
        text: {
            primary: tyrianPurple,
            secondary: powderBlue
        }
    },
    typography: {
        button: {
            textTransform: "none",
            justifyContent: "left"
        }
    }
})
export default theme;