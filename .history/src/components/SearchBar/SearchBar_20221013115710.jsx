import * as React from "react";
import { Box } from "@mui/material";
import CssBaseline from "@mui/material";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

import useStyles from "./styles";
export default function SearchBar() {
  const classes = useStyles();
  return (
    <Box className={classes.Search}>
        <CssBaseline />
      <Box className={classes.SearchIconWrapper}>
        <SearchIcon />
      </Box>
      <InputBase className={classes.StyledInputBase}></InputBase>
    </Box>
  );
}
