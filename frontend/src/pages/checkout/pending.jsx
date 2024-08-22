import { Stack, Typography } from "@mui/material";
import React from "react";

export const PendingComponent = () => {
  return (
    <Stack
      sx={{
        padding: "0 52px",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "8px",
        height: '90vh'
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          fontWeight: 600,
          fontSize: "18px",
          fontFamily: "Poppins",
          color: "rgba(0, 0, 0, 0.87)",
        }}
      >
        We are processing your order. You will be redirected to the payment
        provider.
      </Typography>
      <Typography
        sx={{
          fontWeight: 500,
          fontSize: "14px",
          fontFamily: "Poppins",
          color: "#71727A",
        }}
      >
        This page will update in a few seconds...
      </Typography>
    </Stack>
  );
};
