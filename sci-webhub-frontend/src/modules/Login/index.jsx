import { primary } from "@/SDK/theme";
import {
  Box,
  Card,
  Checkbox,
  FormControlLabel,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import { MemoizedPasswordInput } from "@/SDK/input/passwordInput";
import useLoginDetails from "./hooks/useLoginDetails";
import { useRouter } from "next/router";
import { MemoizedEmailField } from "@/SDK/input/emailField";
import { MemoizedButton } from "@/SDK/button";
import { checkError } from "@/utils/validationHelpers";
import { MemoizedCheckBox } from "@/SDK/checkBox";

const CustomLogin = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  // marginTop: "-60px",
  ".heading": {
    fontSize: "24px",
    fontWeight: "500",
  },

  ".subHeading": {
    fontSize: "14px",
    fontWeight: "400",
    color: primary?.secondaryText,
  },

  [theme.breakpoints.down("sm")]: {
    ".heading": {
      fontSize: "1.2em",
    },
    ".subHeading": {
      fontSize: "0.8em",
      fontWeight: "400",
    },
  },
}));
const WaveBackground = styled(Box)(({ theme }) => ({
  position: "absolute",
  width: "100%",
  height: "66vh",
  bottom: 0,
  left: 0,
  backgroundImage: `url('images/background.png')`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
}));

const CardWrapper = styled(Box)({
  // marginTop:"60px",
  position: "relative",
  width: "100%",
  maxWidth: "500px",
  margin: "10px",
  zIndex: 1,
});
const Login = () => {
  const { form, loading } = useLoginDetails();
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const navigate = useRouter();

  return (
    <CustomLogin>
      <WaveBackground />

      <CardWrapper>
        <Card
          sx={{
            display: "block",
            borderRadius: "8px",
            border: `1px solid ${primary?.lightGrey}`,
            width: "100%",
            padding: { xs: "20px", sm: "30px", md: "40px" },
            backgroundColor: "#fff",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            marginTop: "4em",
          }}
        >
          <Typography className="heading">Log In</Typography>
          <Typography className="subHeading">
            Please sign in to you account below
          </Typography>

          <form onSubmit={form.handleSubmit}>
            <Box>
              <MemoizedEmailField
                labelText={"Email address"}
                style={{ width: "100%" }}
                name="email"
                error={!!checkError("email", form)}
                helperText={form.errors.email}
                placeholder="Enter your email id"
                value={form.values.email}
                onChange={(e) => {
                  form.handleChange(e);
                }}
              />

              <MemoizedPasswordInput
                labelText={"Password"}
                style={{ width: "100%" }}
                name="password"
                showPassword={!checked}
                error={!!checkError("password", form)}
                helperText={form.errors.password}
                placeholder="Enter your password"
                value={form.values.password}
                onChange={(e) => {
                  form.handleChange(e);
                }}
              />
              <Box sx={{marginTop:"-20px"}}>
                <MemoizedCheckBox
                  handleChange={handleChange}
                  checked={checked}
                  label={"Show Password"}
                />
              </Box>
              <MemoizedButton
                sx={{ width: "100% !important", marginTop: "20px" }}
                content={"Submit"}
                type="submit"
                loading={loading}
                handleClick={(e) => {
                  form.handleSubmit(e);
                }}
              />
            </Box>
          </form>

          <Typography
            style={{
              marginTop: "10px",
              color: primary?.secondaryText,
              fontSize: "14px",
              fontWeight: 400,
              textAlign: "left",
            }}
          >
            Dont have an account?
            <span
              style={{
                color: primary?.main,
                fontWeight: "600",
                cursor: "pointer",
              }}
              onClick={() => {
                navigate.push("/signup");
              }}
            >
              {" "}
              Create Account
            </span>
          </Typography>
        </Card>
      </CardWrapper>
    </CustomLogin>
  );
};

export const MemoizedLogin = React.memo(Login);
