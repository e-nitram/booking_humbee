import React, { useRef } from "react";
import {
  Card,
  Stack,
  Typography,
  Divider,
} from "@mui/material";
import styled from "@emotion/styled";
import { useAppContext } from "../../context/AppContext";
import { useCheckOutContext } from "../../context/CheckoutContext";
import { AddNote } from "../checkout/addNote";


export const OrderModal = ({ setOrderShow, children }) => {
  const [context, setContext] = useAppContext();
  const [order, setOrder] = useCheckOutContext();
  const scrollRef = useRef(null);

  const handleDelete = (ele) => {
    let data = order;
    data.orderItem = [
      ...data.orderItem.map((item, id) =>
        item.name === ele.name ? { ...item, count: 0 } : item
      ),
    ];
    setOrder({ ...data });
  };

  return (
    <ModalWrapper>
      <OrderModalContainer>
        <Container ref={scrollRef}>
          <MenuItem>
            <Stack
              sx={{
                padding: "6px 0px 12px 0px",
              }}
            >
              <Typography
                sx={{
                  marginBottom: "10px",
                  fontWeight: 600,
                  fontSize: "18px",
                  fontFamily: "Poppins",
                  color: "rgba(0, 0, 0, 0.87)",
                }}
              >
                Your order
              </Typography>

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
                            color: "rgba(0, 0, 0, 0.87)",
                            fontFamily: "Poppins",
                          }}
                        >
                          {ele.count} x {ele.name}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: 14,
                            fontWeight: 600,
                            color: "rgba(0, 0, 0, 0.87)",
                            fontFamily: "Poppins",
                          }}
                        >
                          € {ele.price}
                        </Typography>
                      </Stack>
                      <Typography sx={{
                        fontSize: 14,
                        fontStyle: 'italic'
                      }}>
                        {ele?.subname.map(ele => ele + ', ')}
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
              </Stack>
              <Divider />
              <TotalContainer>
                <Stack
                  sx={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: 'center'
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
              </TotalContainer>
            </Stack>
          </MenuItem>
          <ButtonArea>
            <Stack
              onClick={() => { setOrderShow(false) }}
              sx={{
                //   width: "109px",
                fontSize: "14px",
                fontWeight: 500,
                padding: "4px 10px 4px 10px",
                border: "1px solid #0000003B",
                height: "30px",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "100px",
                fontFamily: "Poppins",
                cursor: "pointer",
                flexDirection: 'row',
                gap: '8px'
              }}
            >
              <Stack sx={{
                width: 20,
                height: 20,
                background: 'rgba(77, 125, 107, 1)',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '50px',
                color: 'white'
              }}>1</Stack>
              CONTINUE SHOPPING
            </Stack>
            <Stack
              onClick={() => setContext({ ...context, state: "/checkout" })}
              sx={{
                width: "86px",
                fontSize: "13px",
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
              CHECK OUT
            </Stack>
          </ButtonArea>
        </Container>
      </OrderModalContainer>
    </ModalWrapper>
  );
};

const ModalWrapper = styled(Stack)({
  position: "absolute",
  top: 0,
  height: '97vh',
  background: '#00000061',
  zIndex: 1000,
  width: '100%',
})

const OrderModalContainer = styled(Card)({
  width: "100%",
  bottom: '0px',
  position: "absolute",
  zIndex: 999,
});

const TotalText = styled(Typography)({
  fontWeight: 600,
  fontSize: "14px",
  fontFamily: "Poppins",
  color: "rgba(0, 0, 0, 0.87)",
  alignItems: 'center'
});

const TotalContainer = styled(Stack)({
  paddingTop: 10,
});

const TotalAmount = styled(Typography)({
  fontWeight: 600,
  fontSize: "14px",
  fontFamily: "Poppins",
  color: "rgba(0, 0, 0, 0.87)",
  alignItems: 'center'
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
  padding: "12px 24px 0px 24px",
});


const Item = styled(Stack)({
  direction: "row",
  justifyContent: "space-between",
  color: "rgba(0, 0, 0, 0.6)",
  fontSize: "14px",
  fontFamily: "DM Sans",
  padding: "8px 0",
  paddingBottom: 20,
  gap: 1,
});

const ButtonArea = styled(Stack)({
  padding: "10px 0",
  borderTop: '1px solid rgba(0, 0, 0, 0.23)',
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: 'center',
  marginBottom: '8px'
});
