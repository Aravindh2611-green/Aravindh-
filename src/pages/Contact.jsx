// src/pages/Contact.jsx
import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  useTheme,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import emailjs from "emailjs-com";
import { Mail, Phone, GitHub, LinkedIn } from "@mui/icons-material";

export default function Contact() {
  const SERVICE_ID = "service_khemm9n";
  const TEMPLATE_ID = "template_5d1ad93";
  const PUBLIC_KEY = "1MJ9AwUAZNQ1QqU6Q";

  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const buttonStyle = {
    mt: 2,
    backgroundColor: isDark ? "#32CD32" : "black",
    color: isDark ? "black" : "#32CD32",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: isDark ? "#28a428" : "#222",
    },
  };

  return (
    <Box>
      <Typography variant="h4" mb={3} textAlign="center">
        <strong>CONTACT</strong>
      </Typography>

      <Box display="flex" justifyContent="center">
        <Grid container spacing={3} maxWidth="md">
          {/* Top: Contact Form */}
          <Grid item xs={12}>
            <Card sx={{ p: 3, width: "100%" }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  <strong>Get in touch</strong>
                </Typography>

                <Formik
                  initialValues={{ name: "", email: "", message: "" }}
                  validate={(values) => {
                    const errors = {};
                    if (!values.name) errors.name = "Required";
                    if (!values.email) errors.email = "Required";
                    else if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                      errors.email = "Invalid email";
                    }
                    return errors;
                  }}
                  onSubmit={(values, { resetForm }) => {
                    const templateParams = {
                      name: values.name,
                      email: values.email,
                      message: values.message,
                    };

                    emailjs
                      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
                      .then(() => {
                        alert("✅ Your message has been sent successfully!");
                        resetForm();
                      })
                      .catch((error) => {
                        console.error("Error sending message:", error);
                        alert("❌ Failed to send message. Please try again later.");
                      });
                  }}
                >
                  {({ errors, touched, isSubmitting }) => (
                    <Form>
                      <Field
                        as={TextField}
                        name="name"
                        label="Name"
                        fullWidth
                        margin="normal"
                        helperText={touched.name && errors.name}
                        error={Boolean(touched.name && errors.name)}
                      />
                      <Field
                        as={TextField}
                        name="email"
                        label="Email"
                        fullWidth
                        margin="normal"
                        helperText={touched.email && errors.email}
                        error={Boolean(touched.email && errors.email)}
                      />
                      <Field
                        as={TextField}
                        name="message"
                        label="Message"
                        fullWidth
                        margin="normal"
                        multiline
                        rows={6}
                      />
                      <Button
                        type="submit"
                        variant="contained"
                        sx={buttonStyle}
                        disabled={isSubmitting}
                      >
                        Send
                      </Button>
                    </Form>
                  )}
                </Formik>
              </CardContent>
            </Card>
          </Grid>

          {/* Bottom: Other ways */}
          <Grid item xs={12}>
            <Card sx={{ p: 3, width: "100%" }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  <strong>Other ways</strong>
                </Typography>

                <Box display="flex" alignItems="center" mb={2}>
                  <Mail sx={{ mr: 1, color: "#32CD32" }} />
                  <Typography>Email: aravindharavindh9342@gmail.com</Typography>
                </Box>

                <Box display="flex" alignItems="center" mb={2}>
                  <Phone sx={{ mr: 1, color: "#32CD32" }} />
                  <Typography>Phone: +91 9342283580</Typography>
                </Box>

                <Box display="flex" alignItems="center" mb={2}>
                  <LinkedIn sx={{ mr: 1, color: "#32CD32" }} />
                  <a
                    href="https://www.linkedin.com/in/aravindh-r-205ab3353"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#32CD32",
                      fontWeight: "bold",
                      textDecoration: "none",
                    }}
                  >
                    LinkedIn
                  </a>
                </Box>

                <Box display="flex" alignItems="center" mb={2}>
                  <GitHub sx={{ mr: 1, color: "#32CD32" }} />
                  <a
                    href="https://github.com/Aravindh2611-green"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#32CD32",
                      fontWeight: "bold",
                      textDecoration: "none",
                    }}
                  >
                    GitHub
                  </a>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
