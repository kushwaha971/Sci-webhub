import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import { MemoizedButton } from "../button";
import { primary } from "../theme";

const ProjectCard = ({ item, handleClick }) => {
  return (
    <Card sx={{ maxWidth: 400, width: "100%" }}>
      <CardContent sx={{ display: "flex", alignItems: "center" }}>
        <Avatar
          sx={{
            bgcolor: primary?.lightBlue,
            mr: 2,
            color: primary?.main,
          }}
        >
          {item?.name[0].toUpperCase()}
        </Avatar>

        <div>
          <Typography variant="h6">{item?.name}</Typography>
          <a
            href={`http://${item?.custome_domain}.${process.env.NEXT_PUBLIC_PROXY_SERVER_URL}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Typography variant="body2" color="text.secondary">
              {`http://${item?.custome_domain}.${process.env.NEXT_PUBLIC_PROXY_SERVER_URL}`}
            </Typography>
          </a>
        </div>
      </CardContent>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <CardContent
          sx={{
            display: "flex",
            alignItems: "center",
            flex: 1,
          }}
        >
          <Box
            sx={{
              background: primary?.lightBlue,
              display: "flex",
              borderRadius: "8px",
              padding: "8px",
            }}
          >
            <GitHubIcon sx={{ mr: 1, color: primary?.main }} />
            <a href={item?.git_url} target="_blank" rel="noopener noreferrer">
              <Typography
                variant="body2"
                sx={{
                  maxWidth: "150px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  color: primary?.main,
                }}
              >
                {item?.git_url.replace(/^https:\/\/github\.com\//, "")}
              </Typography>
            </a>
          </Box>
        </CardContent>
        <CardActions>
          <MemoizedButton
            sx={{ width: "100% !important", fontSize: "14px" }}
            content={"View Details"}
            type="submit"
            handleClick={handleClick}
          />
        </CardActions>
      </Box>
    </Card>
  );
};

export const MemoizedProjectCard = React.memo(ProjectCard);
