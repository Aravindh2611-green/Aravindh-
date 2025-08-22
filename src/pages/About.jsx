import React from 'react';
import { Typography, Box, Grid, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
  const theme = useTheme();

  // Radium green for paragraph text in dark mode, normal text otherwise
  const paragraphColor =
    theme.palette.mode === 'dark' ? '#39FF14' : theme.palette.text.primary;

  // Heading stays white in dark mode, normal text otherwise
  const headingColor =
    theme.palette.mode === 'dark' ? '#FFFFFF' : theme.palette.text.primary;

  return (
    <Box py={5}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h4"
              gutterBottom
              sx={{ color: headingColor }}
            >
              🙋<strong>ABOUT ME</strong>
            </Typography>

            <Typography
              sx={{
                fontSize: '1.5rem',
                lineHeight: 1.8,
                color: paragraphColor,
              }}
            >
              I’m currently pursuing my <strong>B.E. in Computer Science and Engineering</strong> at
              Grace College of Engineering. I have completed internships in
              <strong> Full Stack Development</strong> and <strong>Artificial Intelligence </strong>
              at <strong>Jesus Redeems Ministries</strong>, where I gained hands-on experience
              with <strong>React.js</strong> and <strong>SQL Databases</strong>.
              I also completed an internship at the
              <strong> Tamil Nadu Advanced Technical Training Institute (TATTI)</strong>,
              working on <strong>economic prediction using machine learning models</strong>.
              <br /><br />
              Beyond my academic and technical work, I enjoy playing chess ♟️
              and drawing 🎨, which help me stay creative and strategic in problem-solving.
              My passion lies in building impactful, user-friendly applications while exploring
              innovative AI solutions.
            </Typography>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
