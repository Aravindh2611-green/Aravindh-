import React from "react";
import {
  Box,
  Button,
  TextField,
} from "@mui/material";
import { Field, Form, Formik } from "formik";
import emailjs from "emailjs-com";
import GitHub from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Mail from "@mui/icons-material/Mail";
import Phone from "@mui/icons-material/Phone";

const SERVICE_ID = "service_zet0rxw";
const TEMPLATE_ID = "template_5d1ad93";
const PUBLIC_KEY = "XdCFJ3qPfHS040ye6";

function validate(values) {
  const errors = {};
  const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) errors.email = "Please enter your email address.";
  else if (!emailPattern.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.subject.trim()) errors.subject = "Please add a subject.";
  if (!values.message.trim()) errors.message = "Please enter a message.";

  return errors;
}

export default function Contact() {
  return (
    <section aria-labelledby="contact-title">
      <header className="page-heading">
        <p className="eyebrow">Contact</p>
        <h1 className="page-title" id="contact-title">Let’s start a conversation.</h1>
        <p className="page-description">
          Send a note using the form, or reach me directly by email or on social media.
        </p>
      </header>

      <div className="contact-layout">
        <article className="surface-card contact-card">
          <h2>Send a message</h2>
          <p>All fields are required. I’ll reply to the email address you provide.</p>

          <Formik
            initialValues={{ name: "", email: "", subject: "", message: "" }}
            validate={validate}
            onSubmit={async (values, { resetForm, setStatus }) => {
              setStatus(undefined);
              try {
                await emailjs.send(
                  SERVICE_ID,
                  TEMPLATE_ID,
                  {
                    name: values.name.trim(),
                    email: values.email.trim(),
                    message: `Subject: ${values.subject.trim()}\n\n${values.message.trim()}`,
                  },
                  PUBLIC_KEY,
                );

                resetForm();
                setStatus({
                  type: "success",
                  message: "Your message was sent successfully. Thank you for reaching out.",
                });
              } catch (error) {
                console.error("Contact form submission failed:", error);
                setStatus({
                  type: "error",
                  message: "Your message could not be sent. Please try again or email me directly.",
                });
              }
            }}
          >
            {({ errors, touched, isSubmitting, status }) => (
              <Form className="contact-form" noValidate>
                <Field
                  as={TextField}
                  name="name"
                  label="Name"
                  autoComplete="name"
                  fullWidth
                  required
                  inputProps={{ maxLength: 80 }}
                  error={Boolean(touched.name && errors.name)}
                  helperText={touched.name && errors.name}
                />
                <Field
                  as={TextField}
                  name="email"
                  label="Email"
                  type="email"
                  autoComplete="email"
                  fullWidth
                  required
                  inputProps={{ maxLength: 254 }}
                  error={Boolean(touched.email && errors.email)}
                  helperText={touched.email && errors.email}
                />
                <Field
                  as={TextField}
                  name="subject"
                  label="Subject"
                  fullWidth
                  required
                  inputProps={{ maxLength: 120 }}
                  error={Boolean(touched.subject && errors.subject)}
                  helperText={touched.subject && errors.subject}
                />
                <Field
                  as={TextField}
                  name="message"
                  label="Message"
                  fullWidth
                  required
                  multiline
                  minRows={5}
                  inputProps={{ maxLength: 5000 }}
                  error={Boolean(touched.message && errors.message)}
                  helperText={touched.message && errors.message}
                />
                {status?.message && (
                  <p
                    className={`form-status ${status.type}`}
                    role="status"
                    aria-live="polite"
                    aria-atomic="true"
                  >
                    {status.message}
                  </p>
                )}
                <Button
                  className="contact-submit"
                  type="submit"
                  variant="contained"
                  disabled={isSubmitting}
                  sx={{
                    justifySelf: "start",
                    minHeight: 46,
                    px: 2.5,
                    color: "#102015",
                    backgroundColor: "primary.main",
                    fontWeight: 700,
                    textTransform: "none",
                    "&:hover": { backgroundColor: "primary.dark" },
                  }}
                >
                  {isSubmitting ? "Sending…" : "Send message"}
                </Button>
              </Form>
            )}
          </Formik>
        </article>

        <aside className="surface-card contact-card">
          <h2>Other ways to connect</h2>
          <p>Prefer a direct message? These links are always available.</p>
          <Box className="contact-methods">
            <a className="contact-method" href="mailto:aravindharavindh9342@gmail.com">
              <Mail />
              <span>
                <strong>Email</strong>
                <small>aravindharavindh9342@gmail.com</small>
              </span>
            </a>
            <a className="contact-method" href="tel:+919342283580">
              <Phone />
              <span>
                <strong>Phone</strong>
                <small>+91 9342283580</small>
              </span>
            </a>
            <a
              className="contact-method"
              href="https://www.linkedin.com/in/aravindh-r-205ab3353"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn />
              <span>
                <strong>LinkedIn</strong>
                <small>Connect with me</small>
              </span>
            </a>
            <a
              className="contact-method"
              href="https://github.com/Aravindh2611-green"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub />
              <span>
                <strong>GitHub</strong>
                <small>View my profile</small>
              </span>
            </a>
          </Box>
        </aside>
      </div>
    </section>
  );
}
