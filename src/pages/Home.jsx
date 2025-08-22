import React, { useState } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Dialog,
  DialogContent,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";

export default function Home() {
  const theme = useTheme();
  const [openCard, setOpenCard] = useState(null);

  const certificates = [
    {
      src: "https://res.cloudinary.com/dqhylblrx/image/upload/v1755519265/1754735122562_ARAVINDH_Internship_Certificate_page-0001_qgxm2z.jpg",
      title: "MACHINE LEARNING",
      subtitle: "Internship • Economic Prediction",
    },
    {
      src: "https://res.cloudinary.com/dqhylblrx/image/upload/v1755518757/WhatsApp_Image_2025-08-12_at_21.09.21_cff1eb2a_k0ifws.jpg",
      title: "FULLSTACK DEVELOPMENT",
      subtitle: "Internship • React • Node.js • SQL",
    },
  ];

  return (
    <Box>
      {/* Profile Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "60vh",
            textAlign: "center",
          }}
        >
          <Box
            component="img"
            src="https://res.cloudinary.com/dqhylblrx/image/upload/v1755517255/Aravindh_R_tfvmyi.jpg"
            alt="profile"
            sx={{
              width: 200,
              height: 200,
              borderRadius: "50%",
              objectFit: "contain",
              backgroundColor: "white",
              border: `3px solid ${
                theme.palette.mode === "dark" ? "#00FF00" : "black"
              }`,
            }}
          />
          <Typography variant="h4" mt={2}>
            Hi, I'm <strong>Aravindh R</strong> 👋
          </Typography>
          <Typography color="text.secondary" mt={1}>
            Fullstack Developer • React Enthusiast
          </Typography>
          <Button
            variant="contained"
            href="https://www.linkedin.com/in/aravindh-r-205ab3353"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              mt: 2,
              backgroundColor:
                theme.palette.mode === "dark" ? "#00FF00" : "black",
              color: theme.palette.mode === "dark" ? "black" : "#00FF00",
              fontWeight: "bold",
              textTransform: "none",
              "&:hover": {
                backgroundColor:
                  theme.palette.mode === "dark" ? "#00cc00" : "#333333",
              },
            }}
          >
            <strong>Visit my LinkedIn</strong>
          </Button>
        </Box>
      </motion.div>

      {/* Certificates Section */}
      <Grid
        container
        spacing={3}
        px={2}
        pb={8} // give extra space so footer won't cover last row
        justifyContent="center"
        alignItems="stretch"
      >
        {certificates.map((cert, index) => (
          <Grid item xs={12} md={5} key={index}>
            <Card
              onClick={() => setOpenCard(index)}
              sx={{
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                height: "100%",
                borderRadius: "16px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                transition: "transform 0.2s ease",
                "&:hover": { transform: "scale(1.02)" },
              }}
            >
              <CardMedia
                component="img"
                image={cert.src}
                alt={cert.title}
                sx={{
                  height: 250,
                  objectFit: "cover",
                  borderTopLeftRadius: "16px",
                  borderTopRightRadius: "16px",
                }}
              />
              <CardContent sx={{ flexGrow: 1, textAlign: "center" }}>
                <Typography variant="h6" fontWeight="bold">
                  {cert.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {cert.subtitle}
                </Typography>
              </CardContent>
            </Card>

            {/* Full Page Dialog */}
            <Dialog
              fullScreen
              open={openCard === index}
              onClose={() => setOpenCard(null)}
            >
              <DialogContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  p: 2,
                }}
              >
                <img
                  src={cert.src}
                  alt={cert.title}
                  style={{
                    width: "100%",
                    maxHeight: "90vh",
                    objectFit: "contain",
                    borderRadius: "8px",
                  }}
                />
                <Button
                  variant="contained"
                  onClick={() => setOpenCard(null)}
                  sx={{
                    mt: 2,
                    backgroundColor:
                      theme.palette.mode === "dark" ? "#00FF00" : "black",
                    color: theme.palette.mode === "dark" ? "black" : "#00FF00",
                    fontWeight: "bold",
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor:
                        theme.palette.mode === "dark" ? "#00cc00" : "#333333",
                    },
                  }}
                >
                  Close
                </Button>
              </DialogContent>
            </Dialog>
          </Grid>
        ))}
      </Grid>

      {/* Bottom Note for Mobile */}
      { <Box
        sx={{
          display: { xs: "flex", md: "none" }, // only show on mobile
          justifyContent: "center",
          alignItems: "center",
          py: 1.5,
          backgroundColor:
            theme.palette.mode === "dark" ? "#111" : "#f5f5f5",
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          boxShadow: "0 -2px 6px rgba(0,0,0,0.1)",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            fontWeight: "bold",
            color: theme.palette.mode === "dark" ? "#00FF00" : "black",
          }}
        >
          📌 Click menu icon for more (or) slide L &lt;= =&gt; R
        </Typography>
      </Box> }
    </Box>
  );
}
