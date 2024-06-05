import {
  Box,
  InputAdornment,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import { primary } from "../theme";

const CustomPasswordInput = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: primary?.mainGreen,
    },
  },
}));

const PasswordInput = ({
  labelText,
  onChange,
  helperText,
  showPassword,
  ...rest
}) => {
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
      <CustomPasswordInput
        helperText={helperText}
        type={showPassword ? "password" : "text"}
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
        onChange={(e) => {
          if (onChange) {
            onChange(e);
          }
        }}
      />
    </Box>
  );
};

export const MemoizedPasswordInput = React.memo(PasswordInput);
