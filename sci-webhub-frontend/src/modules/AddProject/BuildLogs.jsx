import React, { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Divider,
  Stack,
  CircularProgress,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { primary } from "@/SDK/theme";
import { logInfo } from "@/apiService/projectService";

const BuildLogs = ({ deploymentId }) => {
  const [logs, setLogs] = useState([]);
  const [isPolling, setIsPolling] = useState(true);
  const intervalRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchLogs = () => {
      setIsLoading(true);
      logInfo(deploymentId)
        .then((res) => {
          const newLogs = res?.data?.logs;
          console.log("DDD", newLogs);
          if (!Array.isArray(newLogs)) {
            throw new Error("Received logs data is not an array");
          }

          setLogs((prevLogs) => [...prevLogs, ...newLogs]);

          if (newLogs.some((log) => log.log.includes("Done"))) {
            setIsPolling(false);
            clearInterval(intervalRef.current);
          }
        })
        .catch((error) => {
          console.error("Error fetching logs:", error);
          setIsPolling(false);
          clearInterval(intervalRef.current);
        });
    };

    if (isPolling) {
      intervalRef.current = setInterval(fetchLogs, 5000);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [deploymentId, isPolling]);
  return (
    <Box
      sx={{
        width: "100%",
        marginTop: "20px",
      }}
    >
      <Accordion sx={{ padding: "0.4em 1em" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: primary?.main }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{ fontSize: "24px", fontWeight: 500 }}>
            Build Logs
          </Typography>
          <Stack
            sx={{ color: "grey.500", marginLeft: "1em", marginTop: "0.8em" }}
            spacing={2}
            direction="row"
          >
            {isPolling && <CircularProgress color="success" size={20} />}
          </Stack>
        </AccordionSummary>
        <Divider />
        <AccordionDetails>
          {logs.map((log) => (
            <Typography
              key={log?.event_id}
              sx={{ marginTop: "1em", background: primary?.lightBlue }}
            >
              {`${log?.timestamp} -  ${log?.log}`}
            </Typography>
          ))}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

// export default BuildLogs;
export const MemoizedBuildLogs = React.memo(BuildLogs);
