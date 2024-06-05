import { primary } from "@/SDK/theme";
import { Box, Card, Typography, styled } from "@mui/material";
import React from "react";
import { MemoizedEmailField } from "@/SDK/input/emailField";
import { MemoizedPasswordInput } from "@/SDK/input/passwordInput";
import { MemoizedButton } from "@/SDK/button";
import { MemoizedPhoneField } from "@/SDK/input";
import { useRouter } from "next/router";
import useSignUpDetails from "./hooks/useSignupDetails";
import { checkError } from "@/utils/validationHelpers";
import { MemoizedNameField } from "@/SDK/input/nameInput";
import { MemoizedCheckBox } from "@/SDK/checkBox";

const CustomSignup = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  ".heading": {
    fontSize: "24px",
    fontWeight: "500",
  },

  ".subHeading": {
    fontSize: "14px",
    fontWeight: "400",
    color: primary?.secondaryText,
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
  position: "relative",
  width: "100%",
  maxWidth: "500px",
  margin: "10px",
  zIndex: 1,
});

const Signup = () => {
  const { form, loading } = useSignUpDetails();
  const navigate = useRouter();

  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <CustomSignup>
      <WaveBackground />
      <CardWrapper>
        <Card
          sx={{
            display: "block",
            borderRadius: "8px",
            border: `1px solid ${primary?.lightGrey}`,
            width: "100%",
            padding: { xs: "20px", sm: "30px", md: "20px 40px" },
            backgroundColor: "#fff",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            marginTop: "10px",
          }}
        >
          <Typography variant="h5" className="heading">
            Create Account
          </Typography>
          <Typography className="subHeading">
            Please create your account below
          </Typography>

          <form onSubmit={form.handleSubmit}>
            <Box>
              <MemoizedNameField
                className="input-field"
                name="name"
                helperText={form.errors.current_company}
                placeholder="Name"
                labelText={"Name"}
                value={form.values.name}
                onChange={(e) => {
                  form.handleChange(e);
                }}
                style={{ width: "100%" }}
              />

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
              <MemoizedPhoneField
                labelText={"Mobile number"}
                style={{ width: "100%" }}
                error={!!checkError("mobile", form)}
                helperText={form.errors.mobile}
                name="mobile"
                placeholder="Your Mobile"
                value={form.values.mobile}
                onChange={(e) => {
                  form.handleChange(e);
                }}
              />
              <MemoizedPasswordInput
                labelText={"Password"}
                style={{ width: "100%" }}
                name="password"
                error={!!checkError("password", form)}
                showPassword={!checked}
                helperText={form.errors.password}
                placeholder="Enter your password"
                value={form.values.password}
                onChange={(e) => {
                  form.handleChange(e);
                }}
              />
              <Box sx={{ marginTop: "-14px" }}>
                <MemoizedCheckBox
                  handleChange={handleChange}
                  checked={checked}
                  label={"Show Password"}
                />
              </Box>
              <MemoizedButton
                sx={{ width: "100%" }}
                content={"Create Account"}
                type="submit"
                loading={loading}
                handleClick={(e) => {
                  form.handleSubmit(e);
                }}
              />
            </Box>
          </form>
        </Card>
      </CardWrapper>
    </CustomSignup>
  );
};

export const MemoizedSignup = React.memo(Signup);
