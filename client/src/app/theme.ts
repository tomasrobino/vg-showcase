import createTheme from "@mui/material/styles/createTheme";
import { PaletteOptions } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#510129"
        },
        secondary: {
            main: "#385F71",
            light: "#A1B5D8",
            dark: "2B4162"
        },
        text: {
            primary: "#A1B5D8",
            secondary: "#A1B5D8"
        }
    }
})
export default theme;