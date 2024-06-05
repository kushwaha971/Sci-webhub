import { TextField, styled, Box, Typography } from "@mui/material";
import React from "react";
import { primary } from "../theme";

const CustomNameField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: primary.mainGreen,
    },
  },
}));

const NameField = ({ labelText, onChange, helperText, ...rest }) => {
  const ALPHA_REGEX = /^[a-zA-Z0-9\s]+$/i;

  return (
    <Box
      sx={{
        marginTop: { xs: "10px", sm: "20px", md: "20px", lg: "20px" },
        marginBottom: { xs: "10px", sm: "20px", md: "20px", lg: "20px" },
      }}
    >
      {labelText && (
        <Typography
          sx={{
            fontSize: " 14px",
            fontWeight: "400",
            color: primary?.secondaryText,
          }}
        >
          {labelText}
        </Typography>
      )}
      <CustomNameField
        variant="outlined"
        sx={{
          "& .Mui-error": {
            color: "red",
          },
          "& .MuiFormHelperText-root": {
            color: "red",
          },
        }}
        {...rest}
        helperText={helperText}
        onChange={(e) => {
          const value = e.target.value;
          // if (value !== "" && !ALPHA_REGEX.test(value)) {
          //   return;
          // }
          if (onChange) {
            onChange(e);
          }
        }}
      />
    </Box>
  );
};

export const MemoizedNameField = React.memo(NameField);
