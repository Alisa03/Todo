import { ThemeProvider } from "styled-components"

import { useDarkMode } from "./hooks/useDarkMode";

import { lightTheme, darkTheme } from "./assets/styles/theme"
import GlobalStyled from "./assets/styles/globalStyled"
import { Apps } from "./assets/styles/stylesComponents";

import Todo from "./components/layout/Todo";
import Navbar from "./components/layout/Navbar";

function App() {
  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyled />
      <Apps>
        <Navbar theme={theme} onClick={themeToggler} />
        <Todo />
      </Apps>
    </ThemeProvider>
  )
}

export default App
