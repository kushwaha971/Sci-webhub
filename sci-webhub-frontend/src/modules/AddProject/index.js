import { MemoizedButton } from "@/SDK/button";
import { MemoizedNameField } from "@/SDK/input";
import { primary } from "@/SDK/theme";
import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import useAddProject from "./hooks/useAddProject";
import { MemoizedBackdropLoader } from "@/SDK/Loader";
import { checkError } from "@/utils/validationHelpers";

const AddProjects = () => {
  const { form, loading } = useAddProject();

  return (
    <Box style={{ marginTop: "6em", width: "90%", marginBottom: "1em" }}>
      <MemoizedBackdropLoader isLoading={loading} />
      <Box sx={{ marginLeft: "5em" }}>
        <Typography sx={{ fontSize: "32px", fontWeight: "600" }}>
          Add Project
        </Typography>
        <Divider sx={{ marginTop: "1em" }} />
      </Box>

      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // margin: "0 auto",
          marginLeft: "2em",
        }}
      >
        <Grid item xs={12} sm={12} md={7}>
          {" "}
          <Box
            sx={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <Box sx={{ display: "block", margin: "20px" }}>
              <LazyLoadImage
                src={"/images/pana.svg"}
                style={{ width: "100vw" }}
              />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={5} style={{ width: "100%" }}>
          {" "}
          <Box
            sx={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <Box
              sx={{
                display: "block",
                borderRadius: "8px",
                border: `1px solid ${primary?.lightGrey}`,
                width: "100%",
              }}
            >
              <form onSubmit={form.handleSubmit}>
                <Box>
                  <MemoizedNameField
                    className="input-field"
                    name="name"
                    helperText={form.errors.current_company}
                    placeholder="Project Name"
                    labelText={"Project Name"}
                    error={!!checkError("name", form)}
                    value={form.values.name}
                    onChange={(e) => {
                      form.handleChange(e);
                    }}
                    style={{ width: "100%" }}
                  />
                  <MemoizedNameField
                    className="input-field"
                    name="git_url"
                    helperText={form.errors.current_company}
                    placeholder="Git URL"
                    labelText={"Git URL"}
                    error={!!checkError("git_url", form)}
                    value={form.values.git_url}
                    onChange={(e) => {
                      form.handleChange(e);
                    }}
                    style={{ width: "100%" }}
                  />
                  <MemoizedNameField
                    className="input-field"
                    name="custom_domain"
                    helperText={form.errors.current_company}
                    placeholder="Custom Domain"
                    labelText={"Custom Domain"}
                    value={form.values.custom_domain}
                    onChange={(e) => {
                      form.handleChange(e);
                    }}
                    style={{ width: "100%" }}
                  />

                  <MemoizedButton
                    sx={{ width: "100% !important", marginTop: "20px" }}
                    content={"Deploy"}
                    type="submit"
                    loading={loading}
                    handleClick={(e) => {
                      form.handleSubmit(e);
                    }}
                  />
                </Box>
              </form>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export const MemoizedAddProjects = React.memo(AddProjects);
