import { Box, TextField, InputAdornment, styled, alpha } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import { primary } from "../theme";

const CustomSearchInput = styled(Box)(({ theme }) => ({
  ".search": {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
}));

const CustomNumberField = styled(TextField)(({ theme }) => ({
  width: "100%",
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: primary?.mainGreen,
    },
  },
  "& .Mui-error": {
    color: "red",
  },
  "& .MuiFormHelperText-root": {
    color: "red",
  },
}));

const SearchInputField = () => {
  return (
    <CustomSearchInput>
      <Box className="search">
        <CustomNumberField
          variant="outlined"
          type="text"
          placeholder="Search"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </CustomSearchInput>
  );
};

export const MemoizedSearchInputField = React.memo(SearchInputField);
