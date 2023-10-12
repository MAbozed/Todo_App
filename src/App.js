import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TodoList from "./components/TodoList";
import { blue } from "@mui/material/colors";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Alexandria"],
    },
    palette: {
      primary: {
        main: "#1a237e",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div
        className="App"
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#191A1D",
          direction: "rtl",
        }}
      >
        <TodoList />
      </div>
    </ThemeProvider>
  );
}

export default App;
