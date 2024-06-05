import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";
import { primary } from "./theme";

const CheckBox = ({ handleChange, checked, label }) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          size="small"
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
          sx={{
            fontSize: 20,
            color: "secondary", // Use your theme color or define it inline
          }}
        />
      }
      label={label}
      sx={{
        color: primary?.secondaryText, // Ensure the label text is styled and visible
      }}
    />
  );
};

export const MemoizedCheckBox = React.memo(CheckBox);
