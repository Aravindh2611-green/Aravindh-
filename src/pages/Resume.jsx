import React, { useState } from "react";
import { Typography, Box, Button, useTheme } from "@mui/material";
import { motion } from "framer-motion";

const Resume = () => {
  const theme = useTheme();
  const [showResume, setShowResume] = useState(false);

  const handleToggleResume = () => {
    setShowResume((prev) => !prev); // toggle open/close
  };

  return (
    <Box textAlign="center" py={5}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h4" gutterBottom>
          <strong>📄 MY RESUME</strong>
        </Typography>
        <Typography paragraph>
          {showResume
            ? "Here is my resume:"
            : "Click the button below to view my resume."}
        </Typography>

        <Button
          variant="contained"
          onClick={handleToggleResume}
          sx={{
            backgroundColor: theme.palette.mode === "dark" ? "#39FF14" : "black",
            color: theme.palette.mode === "dark" ? "black" : "#39FF14",
            fontWeight: "bold",
            textTransform: "none",
            "&:hover": {
              backgroundColor:
                theme.palette.mode === "dark" ? "#32CD12" : "#333333",
            },
            mb: 2,
          }}
        >
          {showResume ? "Close Resume" : "View Resume"}
        </Button>

        {showResume && (
          <Box mt={3}>
            {/* If it's an image resume */}
            <img
              src="https://res.cloudinary.com/dp5gwsru8/image/upload/v1755774994/My_Resume_1__page-0001_1_o4hush.jpg"
              alt="My Resume"
              style={{
                width: "100%",
                maxWidth: "800px",
                borderRadius: "10px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              }}
            />

            {/* If it's a PDF resume, swap img with iframe:
            <iframe
              src="https://res.cloudinary.com/your_resume.pdf"
              width="100%"
              height="600px"
              style={{ border: "none", borderRadius: "10px" }}
              title="My Resume"
            /> */}
          </Box>
        )}
      </motion.div>
    </Box>
  );
};

export default Resume;
