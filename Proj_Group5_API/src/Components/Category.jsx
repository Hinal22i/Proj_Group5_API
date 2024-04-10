import Chip from "@mui/material/Chip";
// import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

const theme = createTheme({
    palette: {
        primary: {
            main: "#222831",
        },
        secondary: {
            main: "#eaeaea",
        },
        warning: {
            main: "#EEEEEE",
        },
        error: {
            main: "#76ABAE",
        },
    },
});

const Category = () => {
    const handleClick = () => {
        console.log("hi");
    };
    return (
        <ThemeProvider theme={theme} sx={{ marginTop: '2rem'  }}>
           
            <Box sx={{ flexGrow: 1, marginTop: '4rem' }}>
                <AppBar position="static" sx={{ backgroundColor: '#92b8ff' }} >
                    <div>
                        <div style={{ textAlign: "center", marginTop: "1rem", fontWeight:'bolder' }}>
                            <Chip
                                color="secondary"
                                size="small"
                                label="Biography"
                                onClick={handleClick}
                            />{" "}
                            <Chip
                                color="secondary"
                                size="small"
                                label="History"
                                onClick={handleClick}
                            />{" "}
                            <Chip
                                color="secondary"
                                size="small"
                                label="Home Decor"
                                onClick={handleClick}
                            />{" "}
                            <Chip
                                color="secondary"
                                size="small"
                                label="Action & Adventure"
                                onClick={handleClick}
                            />{" "}
                            <Chip
                                color="secondary"
                                size="small"
                                label="Horror"
                                onClick={handleClick}
                            />{" "}
                            <Chip
                                color="secondary"
                                size="small"
                                label="Beauty & Wellness"
                                onClick={handleClick}
                            />{" "}
                            <Chip
                                color="secondary"
                                size="small"
                                label="Thrill"
                                onClick={handleClick}
                            />{" "}
                            <Chip
                                color="secondary"
                                size="small"
                                label="Fantasy"
                                onClick={handleClick}
                            />{" "}
                            <Chip
                                color="secondary"
                                size="small"
                                label="Mistery"
                                onClick={handleClick}
                            />{" "}
                        </div>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                margin: "0.5rem",
                            }}
                        >
                            {/* <TextField
                                sx={{ color: "#EEE" }}
                                color="warning"
                                id="standard-search"
                                label="Search your news"
                                type="search"
                                focused
                            /> */}
                        </div>
                    </div>
                </AppBar>
            </Box>
        </ThemeProvider>
    );
};

export default Category;
