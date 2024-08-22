import React, { useEffect, useRef, useState } from "react";
import {
  Card,
  Stack,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import { useAppContext } from "../../context/AppContext";
import { PizzarItem } from "./pizzaritem";
import { Header } from "../../components/Header";
import { useCheckOutContext } from "../../context/CheckoutContext";
import { OrderModal } from "./orderModal";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { Mousewheel } from "swiper/modules";

const cardItemsArray = [
  {
    name: "Margherita",
    subname: [],
    price: "11.50",
    count: 0,
    addFood: "Tomato, buffalo mozzarella, basilicum",
  },
  {
    name: "Vegan Margherita",
    subname: [],
    price: "11.50",
    count: 0,
    addFood: "Tomato, buffalo mozzarella, basilicum",
  },
  {
    name: "Cheese Onion",
    subname: [],
    price: "11.50",
    count: 0,
    addFood: "Tomato, buffalo mozzarella, basilicum",
  },
  {
    name: "4 Cheeses",
    subname: [],
    price: "10.25",
    count: 0,
    addFood: "Tomato, buffalo mozzarella, basilicum",
  },
  {
    name: "7 Cheeses",
    subname: [],
    price: "12.75",
    count: 0,
    addFood: "Tomato, buffalo mozzarella, basilicum",
  },
  {
    name: "3 Cheeses",
    subname: [],
    price: "12.75",
    count: 0,
    addFood: "Tomato, buffalo mozzarella, basilicum",
  },
  {
    name: "5 Cheeses",
    subname: [],
    price: "12.75",
    count: 0,
    addFood: "Tomato, buffalo mozzarella, basilicum",
  },
];

const titleItemsArray = [
  "PROMOS", "ENTREES", "ENTREES", "Pizzas", "ENTREES", "DESSERTS", "ENTREES"
]

const MenuDetail = ({ children }) => {
  const [context, setContext] = useAppContext();
  const [order, setOrder] = useCheckOutContext();
  const scrollRef = useRef(null);
  const [orderShow, setOrderShow] = useState(false);
  const [checkout, setCheckout] = useState();
  const [checkoutAccount, setCheckoutAccount] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);
  const [flag1, setFlag1] = useState(1);
  const [time, setTime] = useState('');
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [cardItemName, setCardItemName] = useState(titleItemsArray[0]);
  const [selectedSlide, setSelectedSlide] = useState(null); // New state for selected slide

  const slideToLeft = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const slideToRight = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper;

    const handleSlideChange = () => {
      setIsBeginning(swiperInstance.isBeginning);
      setIsEnd(swiperInstance.isEnd);
    };

    swiperInstance.on('slideChange', handleSlideChange);

    // Initial check
    handleSlideChange();

    return () => {
      swiperInstance.off('slideChange', handleSlideChange);
    };
  }, []);

  const handleChangeTime = (event) => {
    setTime(event.target.value);
    setFlag1(0);
  };

  const handleShow = (e, index) => {
    const scrollPosition = scrollRef.current.scrollTop;
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
    scrollRef.current.scrollTop = scrollPosition;
  };

  useEffect(() => {
    setOrder({ orderItem: cardItemsArray });
  }, []);

  useEffect(() => {
    console.log(order);
  }, [order]);

  const changeCardItem = (index) => {
    setCardItemName(titleItemsArray[index]);
    setSelectedSlide(index); // Update the selected slide
  };

  return (
    <Wrap >
      <Header title="La Peria Pizza" />
      <Container ref={scrollRef}>
        <Stack
          sx={{
            padding: "24px",
          }}
        >
          <Stack
            sx={{
              padding: "24px",
              gap: 3,
              borderRadius: "20px",
              border: "1px solid rgba(0, 0, 0, 0.23)",
            }}
          >
            <Stack
              direction={"row"}
              spacing={2}
              sx={{
                borderRadius: "20px",
                justifyContent: "space-between",
              }}
            >
              <Stack
                justifyContent={'center'}
              >
                <svg
                  width="24"
                  height="21"
                  viewBox="0 0 24 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.5 4.5C16.6 4.5 17.5 3.6 17.5 2.5C17.5 1.4 16.6 0.5 15.5 0.5C14.4 0.5 13.5 1.4 13.5 2.5C13.5 3.6 14.4 4.5 15.5 4.5ZM5 11C2.2 11 0 13.2 0 16C0 18.8 2.2 21 5 21C7.8 21 10 18.8 10 16C10 13.2 7.8 11 5 11ZM5 19.5C3.1 19.5 1.5 17.9 1.5 16C1.5 14.1 3.1 12.5 5 12.5C6.9 12.5 8.5 14.1 8.5 16C8.5 17.9 6.9 19.5 5 19.5ZM10.8 9.5L13.2 7.1L14 7.9C15.3 9.2 17 10 19.1 10V8C17.6 8 16.4 7.4 15.5 6.5L13.6 4.6C13.1 4.2 12.6 4 12 4C11.4 4 10.9 4.2 10.6 4.6L7.8 7.4C7.4 7.8 7.2 8.3 7.2 8.8C7.2 9.4 7.4 9.9 7.8 10.2L11 13V18H13V11.8L10.8 9.5ZM19 11C16.2 11 14 13.2 14 16C14 18.8 16.2 21 19 21C21.8 21 24 18.8 24 16C24 13.2 21.8 11 19 11ZM19 19.5C17.1 19.5 15.5 17.9 15.5 16C15.5 14.1 17.1 12.5 19 12.5C20.9 12.5 22.5 14.1 22.5 16C22.5 17.9 20.9 19.5 19 19.5Z"
                    fill="#4D7D6B"
                  />
                </svg>
              </Stack>
              <Typography
                sx={{
                  fontSize: "13px",
                  fontWeight: 400,
                  width: "268px",
                  fontFamily: "DM Sans",
                }}
              >
                {context.storeName}
              </Typography>
              <Stack
                sx={{
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
                onClick={() => {
                  setContext({ ...context, state: '/store_item', })

                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.25 12.9374V15.7499H5.0625L13.3575 7.45492L10.545 4.64242L2.25 12.9374ZM15.5325 5.27992C15.825 4.98742 15.825 4.51492 15.5325 4.22242L13.7775 2.46742C13.485 2.17492 13.0125 2.17492 12.72 2.46742L11.3475 3.83992L14.16 6.65242L15.5325 5.27992Z"
                    fill="#4D7D6B"
                  />
                </svg>
              </Stack>
            </Stack>
            <Stack
              direction={"row"}
              spacing={2}
              sx={{
                borderRadius: "20px",
                justifyContent: "space-between",
              }}
            >
              <Stack justifyContent={'center'}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.6667 2.50016H15.8333V0.833496H14.1667V2.50016H5.83334V0.833496H4.16667V2.50016H3.33334C2.41667 2.50016 1.66667 3.25016 1.66667 4.16683V17.5002C1.66667 18.4168 2.41667 19.1668 3.33334 19.1668H16.6667C17.5833 19.1668 18.3333 18.4168 18.3333 17.5002V4.16683C18.3333 3.25016 17.5833 2.50016 16.6667 2.50016ZM16.6667 17.5002H3.33334V6.66683H16.6667V17.5002Z"
                    fill="#4D7D6B"
                  />
                </svg>
              </Stack>
              <Typography
                sx={{
                  fontSize: "13px",
                  fontWeight: 400,
                  width: "268px",
                  fontFamily: "DM Sans",
                  display: !flag1 ? 'none' : ''
                }}
              >

                Estimated delivery 13:00 - 13:30
              </Typography>
              <Stack
                justifyContent={'center'}
                sx={{
                  cursor: 'pointer'
                }}
                onClick={() => {
                  setContext({ ...context, state: '/store_item', })
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.25 12.9374V15.7499H5.0625L13.3575 7.45492L10.545 4.64242L2.25 12.9374ZM15.5325 5.27992C15.825 4.98742 15.825 4.51492 15.5325 4.22242L13.7775 2.46742C13.485 2.17492 13.0125 2.17492 12.72 2.46742L11.3475 3.83992L14.16 6.65242L15.5325 5.27992Z"
                    fill="#4D7D6B"
                  />
                </svg>
              </Stack>
            </Stack>

          </Stack>
        </Stack>
        <Stack
          direction={"row"}
          sx={{
            height: "46px",
            position: "sticky",
            top: 0,
            background: "white",
            alignItems: "center",
            padding: "8px 24px 8px 24px",
            zIndex: 100,
            borderTop: '1px solid rgba(0, 0, 0, 0.23)',
            borderBottom: '1px solid rgba(0, 0, 0, 0.23)'
          }}
          gap={1}
        >
          <Stack className="swiper-container">
            <Stack className={`swiper-button left`} onClick={slideToLeft} style={{ visibility: isBeginning ? 'hidden' : 'visible' }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20ZM12 5.5L12 14.5L6 10L12 5.5Z" fill="#4D7D6B" />
              </svg>
            </Stack>
            <Swiper
              ref={swiperRef}
              direction={'horizontal'}
              slidesPerView={4}
              spaceBetween={10}
              mousewheel={true}
              modules={[Mousewheel]}
              className="mySwiper"
            >
              {
                titleItemsArray.map((element, index) => (
                  <SwiperSlide key={index}>
                    <MenuButton
                      onClick={() => changeCardItem(index)}
                      style={{ 
                        backgroundColor: selectedSlide === index ? 'rgba(77, 125, 107, 1)' : 'transparent',
                        color: selectedSlide === index ? 'white' : 'rgba(77, 125, 107, 1)',
                      }}
                    >
                      {element}
                    </MenuButton>
                  </SwiperSlide>
                ))
              }
            </Swiper>
            <Stack className={`swiper-button right`} onClick={slideToRight} style={{ visibility: isEnd ? 'hidden' : 'visible' }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8 14.5V5.5L14 10L8 14.5Z" fill="#4D7D6B" />
              </svg>
            </Stack>
          </Stack>
        </Stack>
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
            {cardItemName}
          </Typography>
          <Stack
            sx={{
              padding: "5px 0px 0px 0px",
            }}
          >
            <CardItems spacing={2}>
              {cardItemsArray.map((element, index) => (
                <PizzarItem
                  element={element}
                  index={index}
                  handleShow={handleShow}
                  activeIndex={activeIndex}
                  setCheckout={setCheckout}
                  setCheckoutAccount={setCheckoutAccount}
                  key={index}
                />
              ))}
            </CardItems>
          </Stack>
        </MenuItem>
        {checkout ? (
          <CheckOut direction={"rwo"}>
            <Stack
              gap={'8px'}
              direction={"row"}
              sx={{
                padding: '6px 16px 6px 16px',
                alignItems: "center",
                borderRadius: "100px",
                color: "rgba(77, 125, 107, 1)",
                border: "1px solid rgba(64, 103, 88, 0.5)",
              }}
            >
              <Stack
                sx={{
                  borderRadius: "16px",
                  width: "20px",
                  height: "20px",
                  backgroundColor: "rgba(77, 125, 107, 1)",
                  color: "rgba(255, 255, 255, 1)",
                  justifyContent: "center",
                  alignItems: "center",
                  fontFamily: "Poppins",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                {order.orderItem.reduce((total, item) => total + item.count, 0)}
              </Stack>
              <Stack
                onClick={() => {
                  setOrderShow(true);
                }}
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "14px",
                  fontWeight: 500,
                  cursor: "pointer",
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                VIEW ORDER (€{" "}
                {order.orderItem.reduce(
                  (total, item) => total + item.count * item.price,
                  0
                )}
                )
              </Stack>
            </Stack>
            <Stack
              sx={{
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "100px",
                padding: '6px 16px 6px 16px',
                color: "rgba(255, 255, 255, 1)",
                backgroundColor: "rgba(77, 125, 107, 1)",
                fontFamily: "Poppins",
                fontSize: "14px",
                cursor: "pointer",
                fontWeight: 500,
              }}
              onClick={() => setContext({ ...context, state: "/checkout" })}
            >
              CHECK OUT
            </Stack>
          </CheckOut>
        ) : (
          <></>
        )}
        {orderShow && <OrderModal setOrderShow={setOrderShow} />}
      </Container>
    </Wrap>
  );
};

const Wrap = styled(Card)({
  maxWidth: '430px',
  width: "calc(100% - 40px)",
  borderRadius: "0px 15px 0px 26px",
  position: "fixed",
  right: "20px",
  bottom: "20px",
  paddingBottom: 70,
  maxHeight: "calc(100vh - 100px)",
  height: 900,
  zIndex: 99,
});


const Container = styled(Stack)({
  justifyContent: "space-around",
  overflowY: "auto",
  scrollbarWidth: "none" /* for Firefox */,
  "&::-webkit-scrollbar": {
    display: "none",
  },
  height: "95%",
});


const MenuButton = styled(Stack)(({ theme }) => ({
  width: "80px",
  height: "30px",
  cursor: "pointer",
  borderRadius: "100px",
  border: "1px solid rgba(64, 103, 88, 0.5)",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 500,
  fontSize: "13px",
  fontFamily: "DM Sans",
  [theme.breakpoints.down('425')]: {
    width: 60,  // Sets width to 65px on small screens
    fontSize: "10px",
  }
}));

const MenuItem = styled(Stack)({
  padding: "24px 24px 24px 24px",
});

const CardItems = styled(Stack)({});

const CheckOut = styled(Stack)({
  position: "fixed",
  bottom: "20px",
  maxWidth: 430,
  height: "56px",
  justifyContent: "space-around",
  alignItems: "center",
  width: "calc(100% - 40px)",
  zIndex: 99,
  backgroundColor: "white",
  borderRadius: "0px 0px 26px 26px",
  borderTop: '1px solid rgba(0, 0, 0, 0.42)'
});

export default MenuDetail;
