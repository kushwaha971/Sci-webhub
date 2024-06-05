import React, { useEffect, useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Link,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { MemoizedButton } from "@/SDK/button";
import IosShareIcon from "@mui/icons-material/IosShare";
import { primary } from "@/SDK/theme";
import { MemoizedBuildLogs } from "../AddProject/BuildLogs";
import { useRouter } from "next/router";
import { projectsById } from "@/apiService/projectService";
import { MemoizedBackdropLoader } from "@/SDK/Loader";

const ProjectDetails = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [deploymentId, setDeploymentId] = useState("");

  const { projectName, id } = router.query;
  console.log("Name-->", projectName, id);
  useEffect(() => {
    setLoading(true);
    projectsById(id)
      .then((res) => {
        setData(res?.data?.data?.project);
        setDeploymentId(res?.data?.data?.project?.project_deployment[0]?.id);

        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log("Error fetching auditor data:", error);
      });
  }, [id]);
  const status = "Ready";
  const domains = [
    `http://${data?.custome_domain}.${process.env.NEXT_PUBLIC_PROXY_SERVER_URL}`,
  ];

  return (
    <Box style={{ marginTop: "120px", width: "88%", marginLeft: "6em" }}>
      <MemoizedBackdropLoader isLoading={loading} />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography sx={{ fontSize: "32px", fontWeight: "600" }}>
          {projectName}
        </Typography>

        <MemoizedButton
          sx={{ width: "10% !important" }}
          content={"Visit"}
          type="submit"
          handleClick={() => {
            const url = `http://${data?.custome_domain}.${process.env.NEXT_PUBLIC_PROXY_SERVER_URL}`;
            window.open(url, "_blank", "noopener,noreferrer");
          }}
        />
      </Box>
      <Card
        sx={{
          display: "flex",
          padding: "8px",
          borderRadius: "8px",
          marginTop: "2em",
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: 500, borderRadius: "8px" }}
          image="/images/img.svg"
          alt="Deployment image"
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "2em",
          }}
        >
          <CardContent>
            <Typography
              sx={{ fontSize: "16px", fontWeight: "400" }}
              color="textSecondary"
              gutterBottom
            >
              Deployment
            </Typography>
            <Typography
              sx={{
                wordBreak: "break-all",
                fontWeight: "500",
                fontSize: "16px",
              }}
            >
              {data?.id}
            </Typography>

            <Typography
              sx={{ fontSize: "16px", fontWeight: "400", marginTop: "10px" }}
              color="textSecondary"
              gutterBottom
            >
              Status
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                color: "green",
                marginBottom: "16px",
              }}
            >
              <CheckCircleIcon sx={{ marginRight: "8px" }} />
              <Typography variant="body2">{status}</Typography>
            </Box>
            <Typography
              sx={{ fontSize: "16px", fontWeight: "400", marginTop: "10px" }}
              color="textSecondary"
              gutterBottom
            >
              Domains
            </Typography>
            {domains.map((domain, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "8px",
                }}
              >
                <Link
                  href={`${domain}`}
                  target="_blank"
                  rel="noopener"
                  sx={{
                    marginRight: "8px",
                    color: primary?.mainText,
                    fontWeight: "500",
                    fontSize: "16px",
                    textDecoration: "none",
                  }}
                >
                  {domain}{" "}
                  <IosShareIcon
                    sx={{
                      cursor: "pointer",
                      color: primary?.main,
                      alignContent: "center",
                    }}
                  />
                </Link>
              </Box>
            ))}
          </CardContent>
        </Box>
      </Card>
      {deploymentId && <MemoizedBuildLogs deploymentId={deploymentId} />}
    </Box>
  );
};

export const MemoizedProjectDetails = React.memo(ProjectDetails);
