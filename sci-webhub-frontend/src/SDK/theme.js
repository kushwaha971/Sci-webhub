// import { KeyboardArrowDownRounded } from "@mui/icons-material";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export const primary = {
  main: "#3368EB",

  mainText: "#141414",
  secondaryText: "#8D8D8D",
  white: "#ffffff",
  mainGreen: "#37CA03",
  lightBlue:"#3368EB1A"
};

const fontFamilyInfo = `'Inter', sans-serif`;

let themeDef = createTheme({
  typography: {
    fontFamily: fontFamilyInfo,
    color: primary.mainText,
    allVariants: {},
  },

  palette: {
    primary: primary,
  },

  components: {
    MuiPaper: {
      defaultProps: {
        style: {
          fontFamily: fontFamilyInfo,
        },
      },
    },
    MuiInput: {
      defaultProps: {
        disableUnderline: true,
      },
      styleOverrides: {
        fontFamily: fontFamilyInfo,
        fontSize: { md: "24px", sm: "12px" },
        borderRadius: "16px",
        "&.Mui-focused": {
          backgroundColor: "transparent",
          boxShadow: `
          `,
          borderColor: primary.secondary,
        },
      },
    },
    MuiGrid: {
      defaultProps: {
        display: "flex",
        alignItems: "stretch",
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: {
          fontFamily: fontFamilyInfo,
          borderRadius: "8px",
          textTransform: "none",
          color: primary?.white,
          background: primary?.main,
          fontWeight: "500",

          // border: "1px solid #FFFFFF",
          // boxShadow: "0px 4px 4px rgba(232, 52, 94, 0.7)",
          "&:hover": {
            color: primary.main,
          },
        },
        sizeMedium: {
          fontSize: "20px",
        },
      },
    },

    MuiTextField: {
      defaultProps: {
        variant: "filled",
      },
      styleOverrides: {
        root: {
          fontFamily: fontFamilyInfo,
          minHeight: 48,
          borderRadius: "8px",
          textTransform: "none",
          fontWeight: "500",
          "&.Mui-focused": {
            backgroundColor: "transparent",
            boxShadow: `${(primary.light, 0.25)} 0 0 0 2px`,
            borderColor: primary?.main,
          },
        },
        sizeMedium: {
          fontSize: "20px",
          padding: "8px",
        },
      },
    },

    MuiTextareaAutosize: {
      defaultProps: {
        variant: "filled",
      },
      styleOverrides: {
        root: {
          fontFamily: fontFamilyInfo,
          minHeight: 48,

          "&.Mui-focused": {
            backgroundColor: "transparent",
            boxShadow: `${(primary.light, 0.25)} 0 0 0 2px`,
            borderColor: primary?.main,
          },
        },
      },
    },

    MuiSelect: {
      defaultProps: {
        variant: "filled",
        MenuProps: {
          style: {
            maxHeight: 400,
            fontFamily: fontFamilyInfo,
          },
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontFamily: fontFamilyInfo,
        },
      },
    },

    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: primary,
          fontFamily: fontFamilyInfo,
          borderRadius: "16px 16px 0px 0px",
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontFamily: fontFamilyInfo,
          background: "black",
          color: "white",
          margin: 16,
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          fontFamily: fontFamilyInfo,
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          fontFamily: fontFamilyInfo,
        },
      },
    },
  },
});

export const theme = responsiveFontSizes(themeDef);
