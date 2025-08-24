import { Button, Stack } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import "./PortfolioSelection.css";
import Dev from "../Dev/Dev";
import Music from "../Music/Music";
import Photo from "../Photo/Photo";

const theme = createTheme({
  palette: {
    primary: {
      main: "#5f9ea0",
    },
  },
});

function PortfolioSelection() {
  return (
    <>
      <div className="buttons">
        <ThemeProvider theme={theme}>
          <Stack
            spacing={{ xs: 2, md: 6 }}
            direction={{ xs: "column", md: "row" }}
          >
            <Link to="/portfolio/dev">
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={(e) => ViewPortfolio("dev")}
              >
                Development
              </Button>
            </Link>
            <Link to="/portfolio/photo">
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={(e) => ViewPortfolio("photography")}
              >
                Photography
              </Button>
            </Link>
            <Link to="/portfolio/music">
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={(e) => ViewPortfolio("music")}
              >
                Music
              </Button>
            </Link>
          </Stack>
        </ThemeProvider>
      </div>
      <div className="activePortfolio" id="testing">
        <Routes>
          <Route path="/dev" element={<Dev />} />
          <Route path="/photo" element={<Photo />} />
          <Route path="/music" element={<Music />} />
        </Routes>
      </div>
    </>
  );
}

export function ViewPortfolio(page: string) {
  if (page === "dev") {
    console.log("dev!");
  } else if (page === "photography") {
    console.log("photo!");
  } else if (page === "music") {
    console.log("music!");
  }

  var x = document.getElementById("testing");

  x!.style.display = "inline";
}

export default PortfolioSelection;
