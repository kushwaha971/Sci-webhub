import {
  Box,
  InputAdornment,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import { primary } from "../theme";

const CustomPhoneField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: primary?.mainGreen,
    },
  },
}));

const PhoneField = ({ labelText, onChange, helperText, ...rest }) => {
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
      <CustomPhoneField
        helperText={helperText}
        variant="outlined"
        type={"tel"}
        InputProps={{
          startAdornment: <InputAdornment position="start">+91</InputAdornment>,
        }}
        sx={{
          "& .Mui-error": {
            color: "red",
          },
          "& .MuiFormHelperText-root": {
            color: "red",
          },
        }}
        {...rest}
        onChange={(e) => {
          if (
            !isNaN(Number(e.target.value)) &&
            e.target.value?.length <= 10 &&
            onChange
          ) {
            onChange(e);
          }
        }}
      />{" "}
    </Box>
  );
};

export const MemoizedPhoneField = React.memo(PhoneField);
