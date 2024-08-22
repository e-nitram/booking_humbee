import React from 'react';
import { Card, Stack, Box, Typography, Button, Divider } from '@mui/material';
import styled from '@emotion/styled';
import { useAppContext } from '../context/AppContext';
import { Header } from '../components/Header/index'


const OrderContainer = ({ children }) => {
    const [context, setContext] = useAppContext();

    const handleClickDelivery = () => {
        setContext({ ...context, state: '/delivery_address' })
    }

    const handleClick = () => {
        setContext({ ...context, state: '/pickup_store' })
    }

    return (
        <Wrap>
            <Header title='La Peria Pizza' />
            <Landing direction={'column'}>
                <Item>
                    <svg width="20" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 0.5C3.0975 0.5 0.75 2.8475 0.75 5.75C0.75 9.6875 6 15.5 6 15.5C6 15.5 11.25 9.6875 11.25 5.75C11.25 2.8475 8.9025 0.5 6 0.5ZM6 7.625C4.965 7.625 4.125 6.785 4.125 5.75C4.125 4.715 4.965 3.875 6 3.875C7.035 3.875 7.875 4.715 7.875 5.75C7.875 6.785 7.035 7.625 6 7.625Z" fill="black" fillOpacity="0.54" />
                    </svg>
                    <IconText>Tweede Tuindwarsstraat 53, 1015 RZ Amsterdam, Netherlands</IconText>
                </Item>
                <Item>
                    <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 0.5C3.875 0.5 0.5 3.875 0.5 8C0.5 12.125 3.875 15.5 8 15.5C12.125 15.5 15.5 12.125 15.5 8C15.5 3.875 12.125 0.5 8 0.5ZM11.15 11.15L7.25 8.75V4.25H8.375V8.15L11.75 10.175L11.15 11.15Z" fill="black" fill-opacity="0.54" />
                    </svg>
                    <IconText>Open until: 12:00 - 22:00</IconText>
                </Item>
                <Item>
                    <svg width="18" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.2501 0.75H4.75008C3.92508 0.75 3.25008 1.425 3.25008 2.25V4.5H4.75008V3H12.2501V15H4.75008V13.5H3.25008V15.75C3.25008 16.575 3.92508 17.25 4.75008 17.25H12.2501C13.0751 17.25 13.7501 16.575 13.7501 15.75V2.25C13.7501 1.425 13.0751 0.75 12.2501 0.75ZM3.25758 10.1025L1.34508 8.19L0.392578 9.1425L3.25008 12L8.64258 6.6075L7.69008 5.655L3.25758 10.1025Z" fill="black" fill-opacity="0.54" />
                    </svg>
                    <IconText>Order until 21:59 02/09/2024</IconText>
                </Item>
            </Landing>
            <Divider />
            <ButtonGroup>
                <CompleteButton
                    onClick={handleClickDelivery}
                    disableElevation
                >
                    <Stack>
                        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.9167 3.58333C13.8333 3.58333 14.5833 2.83333 14.5833 1.91667C14.5833 1 13.8333 0.25 12.9167 0.25C12 0.25 11.25 1 11.25 1.91667C11.25 2.83333 12 3.58333 12.9167 3.58333ZM4.16667 9C1.83333 9 0 10.8333 0 13.1667C0 15.5 1.83333 17.3333 4.16667 17.3333C6.5 17.3333 8.33333 15.5 8.33333 13.1667C8.33333 10.8333 6.5 9 4.16667 9ZM4.16667 16.0833C2.58333 16.0833 1.25 14.75 1.25 13.1667C1.25 11.5833 2.58333 10.25 4.16667 10.25C5.75 10.25 7.08333 11.5833 7.08333 13.1667C7.08333 14.75 5.75 16.0833 4.16667 16.0833ZM9 7.75L11 5.75L11.6667 6.41667C12.75 7.5 14.1667 8.16667 15.9167 8.16667V6.5C14.6667 6.5 13.6667 6 12.9167 5.25L11.3333 3.66667C10.9167 3.33333 10.5 3.16667 10 3.16667C9.5 3.16667 9.08333 3.33333 8.83333 3.66667L6.5 6C6.16667 6.33333 6 6.75 6 7.16667C6 7.66667 6.16667 8.08333 6.5 8.33333L9.16667 10.6667V14.8333H10.8333V9.66667L9 7.75ZM15.8333 9C13.5 9 11.6667 10.8333 11.6667 13.1667C11.6667 15.5 13.5 17.3333 15.8333 17.3333C18.1667 17.3333 20 15.5 20 13.1667C20 10.8333 18.1667 9 15.8333 9ZM15.8333 16.0833C14.25 16.0833 12.9167 14.75 12.9167 13.1667C12.9167 11.5833 14.25 10.25 15.8333 10.25C17.4167 10.25 18.75 11.5833 18.75 13.1667C18.75 14.75 17.4167 16.0833 15.8333 16.0833Z" fill="white" />
                        </svg>
                    </Stack>
                    <DeliveryText>
                        Delivery
                    </DeliveryText>
                </CompleteButton>
                <CompleteButton1
                    onClick={handleClick}
                    disableElevation
                >
                    <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.2498 5.40833L16.3748 1.76667C16.1914 1.01667 15.5414 0.5 14.7831 0.5H3.2081C2.4581 0.5 1.79976 1.025 1.62476 1.76667L0.749761 5.40833C0.549761 6.25833 0.733095 7.125 1.26643 7.80833C1.33309 7.9 1.42476 7.96667 1.49976 8.05V13.8333C1.49976 14.75 2.24976 15.5 3.16643 15.5H14.8331C15.7498 15.5 16.4998 14.75 16.4998 13.8333V8.05C16.5748 7.975 16.6664 7.9 16.7331 7.81667C17.2664 7.13333 17.4581 6.25833 17.2498 5.40833ZM14.7581 2.15833L15.6331 5.8C15.7164 6.15 15.6414 6.5 15.4248 6.775C15.3081 6.925 15.0581 7.16667 14.6414 7.16667C14.1331 7.16667 13.6914 6.75833 13.6331 6.21667L13.1498 2.16667L14.7581 2.15833ZM9.8331 2.16667H11.4664L11.9164 5.93333C11.9581 6.25833 11.8581 6.58333 11.6414 6.825C11.4581 7.04167 11.1914 7.16667 10.8498 7.16667C10.2914 7.16667 9.8331 6.675 9.8331 6.075V2.16667ZM6.07476 5.93333L6.53309 2.16667H8.16643V6.075C8.16643 6.675 7.7081 7.16667 7.09143 7.16667C6.80809 7.16667 6.54976 7.04167 6.34976 6.825C6.14143 6.58333 6.04143 6.25833 6.07476 5.93333ZM2.36643 5.8L3.2081 2.16667H4.84976L4.36643 6.21667C4.29976 6.75833 3.86643 7.16667 3.35809 7.16667C2.94976 7.16667 2.69143 6.925 2.58309 6.775C2.35809 6.50833 2.28309 6.15 2.36643 5.8ZM3.16643 13.8333V8.80833C3.23309 8.81667 3.29143 8.83333 3.35809 8.83333C4.08309 8.83333 4.74143 8.53333 5.22476 8.04167C5.72476 8.54167 6.39143 8.83333 7.14976 8.83333C7.87476 8.83333 8.52476 8.53333 9.0081 8.05833C9.49976 8.53333 10.1664 8.83333 10.9164 8.83333C11.6164 8.83333 12.2831 8.54167 12.7831 8.04167C13.2664 8.53333 13.9248 8.83333 14.6498 8.83333C14.7164 8.83333 14.7748 8.81667 14.8414 8.80833V13.8333H3.16643Z" fill="#4D7D6B" />
                    </svg>
                    <TakeawayText>
                        TAKE AWAY
                    </TakeawayText>
                </CompleteButton1>
            </ButtonGroup>
        </Wrap>
    );
};


const Wrap = styled(Card)({
    maxWidth: '430px',
    width: 'calc(100% - 40px)',
    borderRadius: '15px 15px 26px 26px',
    position: 'fixed',
    right: '20px',
    bottom: '20px',
    paddingBottom: 70,
    maxHeight: 'calc(100vh - 60px)',
    zIndex: 99
});


const Landing = styled(Stack)({
    padding: '12px 16px 12px 16px',
})

const Item = styled(Stack)({
    alignItems: 'center',
    flexDirection: 'row',
    display: 'flex',
    height: '44px'
});
const IconText = styled(Stack)({
    fontSize: 14,
    fontFamily: 'Poppins',
    fontWeight: 500,
    lineHeight: '21.98px',
    marginLeft: '5px',
    height: 50,
    justifyContent: 'center'
});

const DeliveryText = styled(Typography)(({ theme }) => ({
    alignContent: 'center',
    fontSize: 14,
    fontWeight: 500,
    fontFamily: 'Poppins',
    color: '#FFFFFF',
    width: 97,
    height: 30,
    alignItems: 'center',
    [theme.breakpoints.down('425')]: {
        width: 80,  // Sets width to 65px on small screens
    }
}))

const TakeawayText = styled(Typography)(({ theme }) => ({
    alignContent: 'center',
    fontSize: 14,
    fontWeight: 500,
    fontFamily: 'Poppins',
    color: '#4D7D6B',
    width: 97,
    height: 30,
    alignItems: 'center',
    [theme.breakpoints.down('425')]: {
        width: 80,  // Sets width to 65px on small screens
    }
}))

const CompleteButton = styled(Button)(({ theme }) => ({
    padding: '8px 24px 8px 24px',
    fontSize: 14,
    fontWeight: 600,
    height: 52,
    textTransform: 'none',
    backgroundColor: '#4D7D6B',
    color: '#000000',
    borderRadius: 26,
    display: 'flex',
    justifyContent: 'space-evenly',
    '&:hover': {
        backgroundColor: '#4D7D6B',
    },
    '&:disabled': {
        backgroundColor: '#CEDED8',
        color: 'white',
    },
    ':focus': {
        outline: 'none'
    },
}))

const CompleteButton1 = styled(Button)({
    padding: '8px 24px 8px 24px',
    fontSize: 14,
    border: '1px solid #406758',
    fontWeight: 600,
    height: 52,
    textTransform: 'none',
    color: '#406758',
    borderRadius: 26,
    display: 'flex',
    justifyContent: 'space-evenly',
    '&:hover': {
        backgroundColor: 'white',
    },
    '&:disabled': {
        backgroundColor: '#CEDED8',
        color: 'white',
    },
    ':focus': {
        outline: 'none'
    }
})


const ButtonGroup = styled(Box)({
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '70px',
    justifyContent: 'space-around',
    display: 'flex',
    alignItems: 'center'
})

export default OrderContainer;
