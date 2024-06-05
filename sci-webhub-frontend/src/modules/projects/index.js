import { MemoizedBackdropLoader } from "@/SDK/Loader";
import { MemoizedButton } from "@/SDK/button";
import { MemoizedProjectCard } from "@/SDK/cards/ProjectCard";
import { MemoizedSearchInputField } from "@/SDK/input/searchInputField";
import { projectsByUserId } from "@/apiService/projectService";

import {
  Backdrop,
  Box,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

import React, { useEffect, useState } from "react";

const Projects = () => {
  const [loading, setLoading] = useState(false);
  const [projectData, setProjectData] = useState([]);
  const token = Cookies.get("token");
  const id = Cookies.get("userId");
  useEffect(() => {
    setLoading(true);
    projectsByUserId(id)
      .then((res) => {
        setProjectData(res?.data?.data?.projects);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log("Error fetching auditor data:", error);
      });
  }, []);
  const router = useRouter();
  return (
    <Box sx={{ marginTop: "6em" }}>
      <MemoizedBackdropLoader isLoading={loading} />
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <Box width={"74%"}>
          <MemoizedSearchInputField />
        </Box>

        <MemoizedButton
          sx={{ width: "10% !important" }}
          content={"Add Project"}
          type="submit"
          handleClick={() => {
            router.push(`/add-project`);
          }}
        />
      </Box>
      <Box sx={{ marginLeft: "5em", marginTop: "2em" }}>
        <Typography
          sx={{ fontSize: "20px", fontWeight: "500", marginBottom: "1em" }}
        >
          Projects
        </Typography>
        <Grid container spacing={4}>
          {projectData.map((item) => {
            return (
              <Grid item lg={4} md={4} sm={6} xs={12} key={item?.id}>
                <MemoizedProjectCard
                  item={item}
                  handleClick={() => {
                    router.push(
                      `/projects/${item.name}?id=${encodeURIComponent(item.id)}`
                    );
                  }}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export const MemoizedProjects = React.memo(Projects);
