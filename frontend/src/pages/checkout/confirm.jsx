import { Divider, Input, Stack, Typography, OutlinedInput, Card } from "@mui/material";
import React from "react";
import { useAppContext } from "../../context/AppContext";
import styled from "@emotion/styled";
import { Header } from "../../components/Header";

export const Confirm = ({ setApply }) => {
  const [context, setContext] = useAppContext();
  const [promo, setPromo] = React.useState('')
  const [promo1, setPromo1] = React.useState('')
  const [promo2, setPromo2] = React.useState('')
  const [promo3, setPromo3] = React.useState('')
  return (
    <Wrap>
      <Header title={'Checkout'}/>
      <Stack
        sx={{
          padding: "24px 52px",
          alignItems: "center",
          flexDirection: "column",
          gap: "8px",
          height: "90vh",
        }}
      >
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: "14px",
            fontFamily: "Poppins",
            color: "#71727A",
          }}
        >
          Order La Perla
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: 600,
            fontSize: "24px",
            fontFamily: "Poppins",
            color: "rgba(0, 0, 0, 0.87)",
          }}
        >
          Shylock B.V.
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: 600,
            fontSize: "24px",
            fontFamily: "Poppins",
            color: "rgba(0, 0, 0, 0.87)",
          }}
        >
          € 34.50
        </Typography>
        <CardItem>
          <InputItem>
            <Title>Card Number</Title>
            <FormInput
              required
              value={promo1}
              onChange={(e) => {
                setPromo1(e.target.value)
              }}

            />
          </InputItem>
          <InputItem>
            <Title>Card Holder</Title>
            <FormInput
              required
              value={promo2}
              onChange={(e) => {
                setPromo2(e.target.value)
              }}

            />
          </InputItem>
          <Stack
            sx={{
              flexDirection: 'row',
              gap: 2
            }}
          >
            <InputItem>
              <Title>Expiry Date</Title>
              <FormInput1
                required
                value={promo3}
                onChange={(e) => {
                  setPromo3(e.target.value)
                }}
              />
            </InputItem>
            <InputItem>
              <Title>CVV</Title>
              <FormInput1
                required
                value={promo}
                onChange={(e) => {
                  setPromo(e.target.value)
                }}

              />
            </InputItem>
          </Stack>
        </CardItem>
        <Stack
          onClick={() => setContext({...context, state: '/success'})}
          sx={{
            width: "178px",
            fontSize: "13px",
            marginTop: '20px',
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
            marginBottom: '20px'
          }}
        >
          CONFIRM PAYMENT
        </Stack>
        <Divider width={'115%'} />
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: "14px",
            fontFamily: "Poppins",
            color: "#71727A",
            margin: '6px 0',
            textAlign: 'center',
            width: '100vw'
          }}
        >
          Payment secured and provided externally
        </Typography>
        <Divider width={'115%'} />

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

const CardItem = styled(Stack)({
  border: '1px solid #0000003B',
  width: '100%',
  padding: 24,
  borderRadius: 20,
  gap: '12px'
});

const InputItem = styled(Stack)({
  gap: '8px'
});

const Title = styled(Typography)({
  fontFamily: 'Poppins',
  fontSize: '12px',
  fontWeight: 500,
  color: 'rgba(0, 0, 0, 0.87)'
});


const FormInput = styled(OutlinedInput)(({theme}) => ({
  // [theme.breakpoints.down('425')] : {
  //   width: 170
  // },
  // [theme.breakpoints.down('425')] : {
  //   width: 170
  // },
  height: "40px",
  // width: "300px",
  borderRadius: "20px",
  backgroundColor: "#F8F8F8",
  "& .MuiInputBase-root:focus": {
    outline: "none",
  },
  "& input": {
    border: "none",
  },
  "& input::placeholder": {
    fontSize: "14px",
    fontFamily: "DM Sans",
  },
  "& input:focus": {
    outline: "none",
  },
  "&:focus": { outline: "none" },
}));

const FormInput1 = styled(OutlinedInput)({
  height: "40px",
  // width: "140px",
  borderRadius: "20px",
  backgroundColor: "#F8F8F8",
  "& .MuiInputBase-root:focus": {
    outline: "none",
  },
  "& input": {
    border: "none",
  },
  "& input::placeholder": {
    fontSize: "14px",
    fontFamily: "DM Sans",
  },
  "& input:focus": {
    outline: "none",
  },
  "&:focus": { outline: "none" },
});
