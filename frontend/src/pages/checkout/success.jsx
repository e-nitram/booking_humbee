import { Stack, Typography, styled, Card } from "@mui/material";
import React from "react";
import { useAppContext } from "../../context/AppContext";
import { Header } from "../../components/Header";

export const Success = () => {
  const [context, setContext] = useAppContext();
  return (
    <Wrap>
      <Header title={'Checkout'} />
      <Stack
        sx={{
          padding: "0 52px",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "8px",
          height: "80vh",
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
          Your payment was succesful!
        </Typography>
        <Typography
          sx={{
            fontWeight: 500,
            textAlign: 'center',
            fontSize: "14px",
            fontFamily: "Poppins",
            color: "#71727A",
          }}
        >
          You will receive your order details in the email provided.
        </Typography>
        <Stack
          onClick={() => {
            setContext({ ...context, state: "/open" });
          }}
          sx={{
            width: "86px",
            fontSize: "13px",
            marginTop: '10px',
            fontWeight: 500,
            padding: "4px 1px 4px 1px",
            backgroundColor: "rgba(77, 125, 107, 1)",
            color: "rgba(255, 255, 255, 1)",
            height: "30px",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "100px",
            fontFamily: "Poppins",
            cursor: "pointer",
          }}
        >
          HOME
        </Stack>
      </Stack>
    </Wrap>
  );
};


const Wrap = styled(Card)({
  maxWidth: '430px',
  width: 'calc(100% - 100px)',
  borderRadius: '15px 15px 26px 26px',
  position: 'fixed',
  right: '20px',
  bottom: '20px',
  paddingBottom: 70,
  maxHeight: 'calc(100vh - 100px)',
  height: '700px',
  zIndex: 99,
});