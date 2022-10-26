import React, { useContext } from "react";
import { ThemeContext } from "../../App";

import { IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const ThemeToggleButton = () => {
  const { isDarkMode, toggleMode } = useContext(ThemeContext);

  return (
    <IconButton
      sx={{ ml: 1, color: "white" }}
      onClick={toggleMode}
      color="inherit"
    >
      {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
};

export default ThemeToggleButton;
