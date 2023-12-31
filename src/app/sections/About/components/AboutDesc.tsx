import React, { useState, useEffect } from "react";
import { Container, Grid, Typography } from "@mui/material";
import useResponsive from "@/app/hooks/useResponsive";

function AboutDesc() {
  const isMobile = useResponsive("down", "lg");

  return (
    <Container
      disableGutters
      sx={{
        padding: "24px",
        paddingX: "32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid sx={{}}>
        <Typography
          sx={{
            fontFamily: "Laviossa",
            fontSize: "42px",
            paddingTop: "24px",
            userSelect: "none",
          }}
        >
          Hi,
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "100",
            fontFamily: "Roboto Flex, sans-serif",
            userSelect: "none",
          }}
        >
          I am an Android Developer and Mobile UI/UX Designer currently pursuing
          a major in Informatics Engineering at the University of Muhammadiyah
          Malang. With a passion for creating innovative isMobile applications,
          I possess strong skills in Java programming languages, along with
          proficiency in Android Development. My design background enables me to
          develop visually appealing and user-friendly interfaces. Committed to
          continuous learning and staying updated with industry trends, I bring
          a combination of technical expertise, design proficiency, and a strong
          educational foundation to my work.
        </Typography>
        <Typography
          sx={{
            fontFamily: "Prestige",
            fontSize: "6rem",
            textAlign: "right",
            paddingRight: isMobile ? 0 : "32px",
          }}
        >
          xyzuan
        </Typography>
      </Grid>
    </Container>
  );
}

export default AboutDesc;
