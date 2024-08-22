import React, { useRef } from "react";
import {
  Card,
  Stack,
  Typography,
  Divider,
  FormControlLabel,
  Radio,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Button,
  Link
} from "@mui/material";
import styled from "@emotion/styled";
import { Header } from "../../components/Header";
import { Confirm } from "./confirm";
import { Success } from "./success";
import { useCheckOutContext } from "../../context/CheckoutContext";
import { AddNote } from "./addNote";
import { useAppContext } from "../../context/AppContext";
import DeliveryDetails from "../delivery/deliveryDetails";
import ContactDetails from "../contact/contactDetails";
import PaymentDetail from "./paymentDetails";


const Checkout = ({ children }) => {
  const [context, setContext] = useAppContext();
  const [order, setOrder] = useCheckOutContext();
  const [apply, setApply] = React.useState(0);
  const scrollRef = useRef(null);
  const [promo, setPromo] = React.useState('')

  const handleDelete = (ele) => {
    let data = order;
    data.orderItem = [
      ...data.orderItem.map((item, id) =>
        item.name === ele.name ? { ...item, count: 0 } : item
      ),
    ];
    setOrder({ ...data });
  };

  const handleConfirm = () => {
    if (context.paymentmethod === 'Credit Card') {
      setContext({ ...context, state: '/credit' })
    } else {
      setContext({ ...context, state: '/success' })
    }
  }

  return (
    <Wrap>
      <Header title={"Checkout"} />
      {!apply ? (
        <Container ref={scrollRef}>
          <MenuItem>
            <Typography
              sx={{
                marginBottom: "10px",
                fontWeight: 600,
                fontSize: "21px",
                fontFamily: "Poppins",
                color: "rgba(0, 0, 0, 0.87)",
              }}
            >
              Your order
            </Typography>
            <Stack
              sx={{
                padding: "5px 0px 0px 0px",
              }}
            >
              <CardItems>
                <CardItem>
                  <Stack>
                    <Typography
                      sx={{
                        marginBottom: "10px",
                        fontWeight: 600,
                        fontSize: "18px",
                        fontFamily: "Poppins",
                        color: "rgba(0, 0, 0, 0.87)",
                      }}
                    >
                      Order summary
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: 12,
                        fontWeight: 400,
                        color: "#00000099",
                        fontFamily: "Poppins",
                      }}
                    >
                      Please review your order below
                    </Typography>
                  </Stack>
                  <Stack
                    sx={{
                      padding: "10px 0",
                    }}
                  >
                    {order.orderItem.map((ele, index) =>
                      ele.count ? (
                        <Item key={index}>
                          <Stack
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "space-between",
                            }}
                          >
                            <Typography
                              sx={{
                                fontSize: 14,
                                fontWeight: 600,
                                color: "#000",
                                fontFamily: "Poppins",
                              }}
                            >
                              {ele.count} x {ele.name}
                            </Typography>
                            <Typography
                              sx={{
                                fontSize: 14,
                                fontWeight: 600,
                                color: "#000",
                                fontFamily: "Poppins",
                              }}
                            >
                              € {ele.price * ele.count}
                            </Typography>
                          </Stack>
                          <Typography
                            sx={{
                              fontSize: 14,
                              fontStyle: "italic",
                            }}
                          >
                            {ele?.subname}
                          </Typography>
                          <AddNote colorSet={true} element={ele} />
                          <Stack
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              width: "100%",
                            }}
                          >
                            <Stack
                              sx={{
                                display: "flex",
                                flexDirection: "row",
                                width: "100%",
                                alignItems: "center",
                                justifyContent: "space-between",
                              }}
                            >
                              <Stack
                                direction={"row"}
                                spacing={1}
                                justifyContent={"center"}
                              >
                                <Stack
                                  onClick={() => {
                                    if (ele.count > 0) {
                                      let data = order;
                                      data.orderItem = [
                                        ...data.orderItem.map((item, id) =>
                                          item.name === ele.name
                                            ? { ...item, count: ele.count - 1 }
                                            : item
                                        ),
                                      ];
                                      setOrder({ ...data });
                                    }
                                  }}
                                >
                                  <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM15 11H5V9H15V11Z"
                                      fill="#4D7D6B"
                                    />
                                  </svg>
                                </Stack>
                                <Stack
                                  sx={{
                                    fontFamily: "Poppins",
                                    fontSize: "14px",
                                    fontWeight: 600,
                                  }}
                                  alignItems={"center"}
                                >
                                  {ele.count}
                                </Stack>
                                <Stack
                                  onClick={() => {
                                    let data = order;
                                    data.orderItem = [
                                      ...data.orderItem.map((item, id) =>
                                        item.name === ele.name
                                          ? { ...item, count: ele.count + 1 }
                                          : item
                                      ),
                                    ];
                                    setOrder({ ...data });
                                  }}
                                >
                                  <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM15 11H11V15H9V11H5V9H9V5H11V9H15V11Z"
                                      fill="#4D7D6B"
                                    />
                                  </svg>
                                </Stack>
                              </Stack>
                              <Stack
                                onClick={() => {
                                  handleDelete(ele);
                                }}
                                sx={{
                                  cursor: "pointer",
                                }}
                              >
                                <svg
                                  width="14"
                                  height="18"
                                  viewBox="0 0 14 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM3 6H11V16H3V6ZM10.5 1L9.5 0H4.5L3.5 1H0V3H14V1H10.5Z"
                                    fill="#4D7D6B"
                                  />
                                </svg>
                              </Stack>
                            </Stack>
                          </Stack>
                        </Item>
                      ) : null
                    )}
                    <Stack
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1px",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: 14,
                          fontWeight: 600,
                          color: "#000",
                          fontFamily: "Poppins",
                        }}
                      >
                        Container
                      </Typography>
                      <Stack
                        sx={{
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <Stack
                          sx={{
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                        >
                          <FormControlLabel
                            sx={{
                              '& span .css-hyxlzm svg': {
                                width: '14px',
                                height: '14px'
                              },
                              '& span.css-vqmohf-MuiButtonBase-root-MuiRadio-root': {
                                color: 'rgba(77, 125, 107, 1)'
                              },
                              '& span.css-ahj2mt-MuiTypography-root': {
                                fontSize: 12,
                                fontFamily: 'Poppins',
                                fontWeight: 500
                              },
                              '& .MuiTypography-root': {
                                fontFamily: 'DM Sans',
                                fontSize: '14px',
                                fontWeight: 400,
                              },
                            }}
                            value="surcharge"
                            control={<Radio />}
                            label="Plastic surcharge €0, 25"
                          />
                        </Stack>
                        <ToolTip>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V11H13V17ZM13 9H11V7H13V9Z"
                              fill="black"
                              fill-opacity="0.54"
                            />
                          </svg>
                          <Stack
                            sx={{
                              display: "none",
                              backgroundColor: "#616161",
                              borderRadius: "4px 0px 4px 4px",
                              color: "white",
                              fontSize: "10px",
                              fontFamily: "poppins",
                              padding: "4px",
                              position: "absolute",
                              top: "28px",
                              width: "294px",
                              right: "2px",
                            }}
                          >
                            A deposit system has been introduced for disposable
                            takeaway and delivery meal packages as well as
                            drinks to go.
                          </Stack>
                        </ToolTip>
                      </Stack>
                    </Stack>
                  </Stack>
                  <Divider />
                  <TotalContainer>
                    <Stack
                      sx={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <TotalText>Total</TotalText>
                      <TotalAmount>
                        €{" "}
                        {order.orderItem.reduce(
                          (total, item) => total + item.count * item.price,
                          0
                        )}
                      </TotalAmount>
                    </Stack>
                    <Stack
                      sx={{
                        gap: "5px",
                      }}
                    >
                      <AmoutArea>
                        <Subtitle>Subtotal</Subtitle>
                        <Amout>
                          €{" "}
                          {order.orderItem.reduce(
                            (total, item) => total + item.count * item.price,
                            0
                          )}
                        </Amout>
                      </AmoutArea>
                      <AmoutArea>
                        <Subtitle>Surcharges and fees</Subtitle>
                        <Amout>
                          €{" "}
                          {order.orderItem.reduce(
                            (total, item) => total + item.count * item.price,
                            0
                          )}
                        </Amout>
                      </AmoutArea>
                      <AmoutArea>
                        <Subtitle>Service fee</Subtitle>
                        <Amout>
                          €{" "}
                          {order.orderItem.reduce(
                            (total, item) => total + item.count * item.price,
                            0
                          )}
                        </Amout>
                      </AmoutArea>
                      <AmoutArea>
                        <Subtitle>Tax fee</Subtitle>
                        <Amout>€ 2</Amout>
                      </AmoutArea>
                      <AmoutArea>
                        <Subtitle>Delivery fee</Subtitle>
                        <Amout>€ 2.15</Amout>
                      </AmoutArea>
                    </Stack>
                  </TotalContainer>
                  <Divider />
                  <ButtonArea>
                    <FormInput
                      required
                      placeholder="Promo Code"
                      value={promo}
                      onChange={(e) => {
                        setPromo(e.target.value)
                      }}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton edge="end" >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill="black" fill-opacity="0.54" />
                            </svg>
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                    <Button
                      disabled={!promo ? true : false}
                      sx={{
                        backgroundColor: (theme) => theme.palette.action.disabledBackground,
                        color: (theme) => theme.palette.action.disabled,
                        '&.Mui-disabled': {
                          backgroundColor: 'rgba(0, 0, 0, 0.12)', // Override background color when disabled
                          color: 'rgba(0, 0, 0, 0.26)' // Override text color when disabled
                        },
                        '&:hover': {
                          backgroundColor: '#4D7D6B',
                        },
                        width: "86px",
                        fontSize: "13px",
                        fontWeight: 500,
                        padding: "4px 1px 4px 1px",
                        backgroundColor: "rgba(77, 125, 107, 1)",
                        color: "rgba(255, 255, 255, 1)",
                        height: "40px",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "100px",
                        fontFamily: "Poppins",
                      }}
                    >
                      Apply
                    </Button>
                  </ButtonArea>
                </CardItem>
                <DeliveryDetails />
                <ContactDetails />
                <PaymentDetail />
                <Stack direction={'row'} justifyContent={'space-between'}>
                  <Link
                    sx={{
                      alignItems: 'center',
                      display: 'flex',
                      justifyContent: 'center',
                      textDecoration: 'none',
                      color: 'rgba(77, 125, 107, 1)',
                      gap: 1,
                      ':focus': {
                        outline: 'none'
                      }
                    }}
                    component="button"
                    variant="body2"
                    onClick={() => {
                      setContext({ ...context, state: '/open' });
                    }}
                  >
                    <Stack>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" fill="#4D7D6B" />
                      </svg>
                    </Stack>
                    <Typography
                      sx={{
                        fontFamily: 'Poppins',
                        fontSize: '14px',
                        fontWeight: 600,
                      }}
                    >
                      BACK
                    </Typography>
                  </Link>
                  <Button
                    direction={'row'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    sx={{
                      borderRadius: '100px',
                      border: '1px solid rgba(64, 103, 88, 0.5)',
                      height: '36px',
                      cursor: 'pointer',
                      width: '163px',
                      backgroundColor: 'rgba(77, 125, 107, 1)',
                      ':hover': {
                        backgroundColor: 'rgba(77, 125, 107, 1)',
                      },
                      ':focus': {
                        outline: 'none'
                      },
                      '&.Mui-disabled': {
                        backgroundColor: 'rgba(0, 0, 0, 0.12)', // Override background color when disabled
                        border: 'none'
                      },
                    }}
                    onClick={handleConfirm}
                  // disabled={postCodeError}
                  >
                    <Stack
                      direction={'row'}
                      alignItems={'center'}
                      gap={2}
                    >
                      <Typography
                        sx={{
                          fontSize: '14px',
                          color: 'rgba(255, 255, 255, 1)',
                          fontWeight: 600,
                        }}
                      >
                        CONFIRM & PAY €15
                      </Typography>
                    </Stack>
                  </Button>
                </Stack>
                <Divider />
                <Stack sx={{
                  padding: '12px',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <Typography sx={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                    By placing an order you agree to our
                  </Typography>
                  <Typography sx={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'rgba(77, 125, 107, 1)',
                    fontWeight: 600,
                    fontSize: 14,
                    fontFamily: 'Poppins'
                  }}>Terms & Conditions</Typography>
                </Stack>
                <Divider />
                <Stack sx={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                  <svg width="245" height="36" viewBox="0 0 245 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M64.0126 23.46V22.62C64.0126 22.37 64.0126 22.15 63.9926 21.92C63.9526 21.06 63.7726 20.22 63.4726 19.42C63.2126 18.71 62.8126 18.05 62.3226 17.48C61.8926 16.99 61.3626 16.6 60.7826 16.31C60.1526 16.01 59.4626 15.83 58.7726 15.77C58.3626 15.73 57.9426 15.73 57.5326 15.75H57.5026C57.4326 15.75 57.3726 15.76 57.3026 15.77C57.2326 15.77 57.1226 15.79 57.0326 15.8C53.4326 16.22 51.4626 18.84 51.4626 21.84V35.18H44.6226V0H51.4426V13.23C51.4426 13.23 53.3026 10.29 57.7126 9.69C58.0626 9.65 58.4226 9.61001 58.7626 9.60001C60.5126 9.52001 62.2626 9.82 63.8826 10.5C65.4826 11.16 66.8925 12.21 67.9825 13.54C68.9425 14.73 69.6726 16.09 70.1226 17.55C70.5326 18.87 70.7626 20.25 70.8126 21.63L70.8426 35.17H64.0126V28.47L64.0326 23.44L64.0126 23.46Z" fill="#444254" />
                    <path d="M101.284 10.0703V35.2003H94.4535V32.0303C94.4535 32.0303 92.6035 34.9803 88.2035 35.5703C87.8535 35.6103 87.4935 35.6503 87.1535 35.6603C85.4035 35.7403 83.6535 35.4403 82.0435 34.7703C80.4435 34.1003 79.0335 33.0603 77.9435 31.7303C76.9835 30.5403 76.2535 29.1803 75.8035 27.7203C75.3935 26.3903 75.1635 25.0203 75.1135 23.6303L75.0835 10.0903H81.9135V22.6603C81.9135 22.9103 81.9135 23.1303 81.9335 23.3603C81.9735 24.2203 82.1435 25.0603 82.4435 25.8603C82.7035 26.5703 83.1035 27.2303 83.6035 27.8003C84.0335 28.2903 84.5635 28.6803 85.1435 28.9703C85.7735 29.2703 86.4635 29.4603 87.1535 29.5003C87.5635 29.5403 87.9835 29.5403 88.3935 29.5203H88.4235C88.4935 29.5203 88.5535 29.5103 88.6235 29.5003C88.6835 29.5003 88.8035 29.4803 88.8935 29.4703C92.4935 29.0503 94.4635 26.4403 94.4635 23.4303V10.1003H101.284V10.0703Z" fill="#444254" />
                    <path d="M147.158 35.1906H140.328C140.248 30.8006 140.288 26.4106 140.328 22.0106V20.4406C140.338 20.0206 140.308 19.6106 140.248 19.2006C140.188 18.8206 140.098 18.4506 139.978 18.0806C139.868 17.7406 139.708 17.4206 139.528 17.1106C139.228 16.5806 138.808 16.1406 138.308 15.8006C137.768 15.4406 137.138 15.2206 136.488 15.1706C136.268 15.1406 136.038 15.1306 135.818 15.1206H135.508C135.198 15.1206 134.888 15.1606 134.578 15.2106C131.778 15.6706 130.298 17.9106 130.288 20.8006C130.288 20.8706 130.268 20.9306 130.268 21.0006V35.1806H123.458C123.378 30.7906 123.418 26.4006 123.458 22.0006V20.4306C123.458 20.0106 123.438 19.6006 123.368 19.1906C123.308 18.8106 123.218 18.4406 123.098 18.0706C122.988 17.7306 122.838 17.4106 122.648 17.1006C122.348 16.5706 121.928 16.1306 121.428 15.7906C120.878 15.4306 120.258 15.2206 119.608 15.1606C119.368 15.1306 119.148 15.1206 118.938 15.1106H118.638C118.338 15.1106 118.038 15.1406 117.738 15.2006C114.888 15.6506 113.398 17.9106 113.398 20.8406V35.1906H106.568V10.0506H113.398V13.2306C113.398 13.2306 114.838 10.2306 119.068 9.75064C119.248 9.73064 119.428 9.71062 119.618 9.70062C120.478 9.66062 121.348 9.71063 122.188 9.87063C123.068 10.0406 123.928 10.3306 124.728 10.7206C126.258 11.4906 127.558 12.6606 128.468 14.1106C128.628 14.3506 128.758 14.6006 128.888 14.8506C128.898 14.8206 128.908 14.7906 128.918 14.7706C129.498 13.3506 130.478 12.1306 131.738 11.2606C133.078 10.3106 134.858 9.79063 136.488 9.71063C137.348 9.67063 138.218 9.72064 139.058 9.88064C139.938 10.0506 140.788 10.3406 141.588 10.7306C143.108 11.5006 144.398 12.6706 145.308 14.1206C145.718 14.7606 146.048 15.4506 146.318 16.1606C146.568 16.8406 146.758 17.5406 146.888 18.2506C147.008 18.9206 147.078 19.6006 147.098 20.2906L147.118 22.0106C147.178 26.4006 147.208 30.8006 147.138 35.1906" fill="#444254" />
                    <path d="M174.982 22.62C174.962 21.72 174.762 20.84 174.392 20.02C174.002 19.2 173.452 18.46 172.772 17.86C171.372 16.62 169.582 15.89 167.712 15.79C166.732 15.73 165.752 15.81 164.802 16.03C163.782 16.26 162.812 16.67 161.932 17.24C161.032 17.83 160.272 18.62 159.722 19.56C158.622 21.46 158.622 23.81 159.722 25.71C160.272 26.64 161.032 27.43 161.932 28.02C162.812 28.59 163.782 29 164.802 29.22C165.752 29.43 166.732 29.51 167.712 29.44C169.582 29.34 171.362 28.61 172.762 27.37C173.442 26.77 174.002 26.04 174.382 25.21C174.762 24.4 174.962 23.51 174.972 22.61M181.772 22.61C181.772 26.09 180.342 29.41 177.822 31.81C176.502 33.08 174.932 34.07 173.222 34.72C171.462 35.39 169.582 35.7 167.702 35.65C165.852 35.59 164.032 35.15 162.362 34.34C161.062 33.7 159.882 32.84 158.882 31.8V35.19H152.052V0H158.882V13.44C159.892 12.39 161.072 11.53 162.372 10.89C164.042 10.09 165.852 9.64 167.702 9.59C169.582 9.54 171.462 9.84998 173.222 10.51C174.932 11.16 176.502 12.15 177.822 13.42C180.332 15.81 181.762 19.13 181.772 22.6" fill="#444254" />
                    <path d="M204.544 18.4902C202.874 16.3002 199.874 15.2302 196.904 16.0302C193.934 16.8302 191.874 19.2502 191.504 21.9702L204.544 18.4802V18.4902ZM211.134 21.8502L192.834 26.7502C194.644 28.9002 197.964 29.8702 201.304 28.9902C203.574 28.3802 205.454 27.0102 206.554 25.2602L213.494 26.0402C211.794 30.2602 207.854 33.6502 202.904 34.9802C194.914 37.1202 186.904 33.2102 185.044 26.2702C183.184 19.3302 187.774 12.0502 195.274 10.0402C202.774 8.03015 210.394 12.0402 212.254 18.9902C212.464 19.8002 212.594 20.6202 212.634 21.4502L211.124 21.8402L211.134 21.8502Z" fill="#444254" />
                    <path d="M235.614 18.4902C233.934 16.3002 230.934 15.2302 227.964 16.0302C225.004 16.8302 222.934 19.2502 222.564 21.9702L235.614 18.4802V18.4902ZM242.204 21.8502L223.904 26.7502C225.714 28.9002 229.034 29.8702 232.374 28.9902C234.644 28.3802 236.524 27.0102 237.624 25.2602L244.564 26.0402C242.854 30.2602 238.924 33.6502 233.974 34.9802C225.984 37.1202 217.974 33.2102 216.114 26.2702C214.254 19.3302 218.844 12.0502 226.344 10.0402C233.844 8.03015 241.464 12.0402 243.324 18.9902C243.534 19.8002 243.664 20.6202 243.704 21.4502L242.194 21.8402L242.204 21.8502Z" fill="#444254" />
                    <path d="M18.075 35.2595C17.415 35.2595 16.755 35.2195 16.105 35.1495C15.535 35.0895 15.125 34.5695 15.195 34.0095C15.265 33.4495 15.7751 33.0296 16.3351 33.0996C16.9151 33.1696 17.495 33.1995 18.075 33.1995C26.655 33.1995 33.635 26.2195 33.635 17.6395C33.635 9.05954 26.655 2.07954 18.075 2.07954C9.49504 2.07954 2.51505 9.05954 2.51505 17.6395C2.51505 18.2495 2.55505 18.8495 2.61505 19.4495C2.68505 20.0195 2.27505 20.5296 1.70505 20.5996C1.13505 20.6696 0.625054 20.2596 0.555054 19.6896C0.475054 19.0096 0.435059 18.3295 0.435059 17.6395C0.435059 7.90954 8.32503 0.00954073 18.065 0.0195407C22.735 0.0195407 27.2251 1.87954 30.5251 5.17954C37.4051 12.0595 37.4051 23.2195 30.5251 30.1095C27.2151 33.4195 22.735 35.2695 18.065 35.2695" fill="#444254" />
                    <path d="M26.0627 8.88024C23.6127 6.56024 20.2727 5.42021 16.9127 5.76021C16.3727 5.82021 15.9827 6.30023 16.0427 6.84023C16.0627 7.03023 16.1427 7.21022 16.2627 7.36022C17.9627 9.43022 19.7927 11.3902 21.7427 13.2202C23.7627 15.1202 25.9127 16.8802 28.1627 18.5002C28.6027 18.8202 29.2227 18.7102 29.5427 18.2702C29.6527 18.1102 29.7227 17.9202 29.7227 17.7202C29.8327 14.3802 28.5027 11.1602 26.0627 8.87023" fill="#444254" />
                    <path d="M20.4633 27.0699C17.8733 25.1799 15.4232 23.1199 13.1232 20.8899C11.3932 19.2199 9.75327 17.4499 8.21328 15.6099C7.86328 15.1899 7.24326 15.1398 6.82326 15.4798C6.62326 15.6498 6.50325 15.8799 6.47325 16.1399C6.18325 18.9599 6.92327 21.7799 8.55327 24.0899L10.2233 29.2999C10.2933 29.4999 10.5133 29.5999 10.7033 29.5299C10.7933 29.4999 10.8733 29.4299 10.9133 29.3399L11.9133 27.2499C14.3333 28.7499 17.2233 29.3099 20.0333 28.8299C20.5733 28.7399 20.9332 28.2299 20.8432 27.6899C20.8032 27.4299 20.6633 27.2099 20.4533 27.0499" fill="#444254" />
                    <path d="M27.7541 22.0901C24.5941 19.9201 21.6241 17.4801 18.8641 14.8101C16.6641 12.6801 14.6141 10.4101 12.7241 8.01008C12.4041 7.60008 11.8141 7.5101 11.3841 7.8101C10.7341 8.2701 10.1341 8.79009 9.59412 9.36009C9.34412 9.62009 9.11414 9.89009 8.90414 10.1701C8.62414 10.5201 8.62413 11.0101 8.89413 11.3701C11.0341 14.2201 13.4141 16.8701 16.0141 19.3101C18.6941 21.8301 21.5941 24.1101 24.6741 26.1201C25.0441 26.3601 25.5341 26.3301 25.8741 26.0301C26.1141 25.8101 26.3441 25.5901 26.5741 25.3501C27.1341 24.7601 27.6241 24.1101 28.0541 23.4101C28.3241 22.9601 28.2041 22.3801 27.7741 22.0801" fill="#444254" />
                  </svg>
                </Stack>
              </CardItems>
            </Stack>
          </MenuItem>
        </Container>
      ) : apply === 1 ? (
        <Confirm setApply={setApply} />
      ) : (
        <Success />
      )}
    </Wrap>
  );
};

const Wrap = styled(Card)({
  maxWidth: '430px',
  width: "calc(100% - 40px)",
  borderRadius: "15px 15px 26px 26px",
  position: "fixed",
  right: "20px",
  bottom: "20px",
  paddingBottom: 70,
  maxHeight: "calc(100vh - 100px)",
  height: 1000,
  zIndex: 99,
});

const TotalText = styled(Typography)({
  marginBottom: "10px",
  fontWeight: 600,
  fontSize: "18px",
  fontFamily: "Poppins",
  color: "rgba(0, 0, 0, 0.87)",
});

const TotalContainer = styled(Stack)({
  paddingTop: 24,
  paddingBottom: 24,
  gap: 24,
});

const ToolTip = styled(Stack)({
  position: "relative",
});

const TotalAmount = styled(Typography)({
  marginBottom: "10px",
  fontWeight: 600,
  fontSize: "18px",
  fontFamily: "Poppins",
  color: "rgba(0, 0, 0, 0.87)",
});

const Subtitle = styled(Typography)({
  fontWeight: 500,
  fontSize: "14px",
  fontFamily: "DM Sans",
  color: "#00000099",
});

const Amout = styled(Typography)({
  fontWeight: 600,
  fontSize: "14px",
  fontFamily: "Poppins",
  color: "rgba(0, 0, 0, 0.87)",
});

const AmoutArea = styled(Stack)({
  flexDirection: "row",
  justifyContent: "space-between",
});

const Container = styled(Stack)({
  overflowY: "auto",
  scrollbarWidth: "none" /* for Firefox */,
  "&::-webkit-scrollbar": {
    display: "none",
  },
  height: "100%",
});

const MenuItem = styled(Stack)({
  padding: "24px 24px 12px 24px",
});

const CardItem = styled(Card)({
  padding: "16px 24px 16px 24px",
  borderRadius: "15px",
  backgroundColor: "white",
  border: '1px solid rgba(0, 0, 0, 0.23)'
});

const CardItems = styled(Stack)({
  gap: 16
});

const Item = styled(Stack)({
  direction: "row",
  justifyContent: "space-between",
  color: "rgba(0, 0, 0, 0.6)",
  fontSize: "14px",
  fontFamily: "DM Sans",
  padding: "12px 0",
  paddingBottom: 20,
  gap: 2
});

const ButtonArea = styled(Stack)({
  padding: "12px 0",
  flexDirection: "row",
  justifyContent: "space-between",
});

const FormInput = styled(OutlinedInput)({
  height: "40px",
  width: "150px",
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


export default Checkout;
