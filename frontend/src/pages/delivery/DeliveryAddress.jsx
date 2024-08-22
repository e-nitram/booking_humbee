import React from 'react';
import { Card, Stack, Typography, Link, } from '@mui/material';
import styled from '@emotion/styled';
import { useAppContext } from '../../context/AppContext'
import { Header } from "../../components/Header";


const Wrap = styled(Card)({
    maxWidth: '430px',
    width: 'calc(100% - 40px)',
    borderRadius: '15px 15px 26px 26px',
    position: 'fixed',
    right: '20px',
    bottom: '20px',
    paddingBottom: 70,
    maxHeight: 'calc(100vh - 100px)',
    height: 647,
    zIndex: 99,
});


const Landing = styled(Stack)({
    padding: "32px 40px 16px 40px"
})


const DeliveryAddress = ({ children }) => {
    const [context, setContext] = useAppContext();


    return (
        <Wrap>
            <Header title="Delivery" />
            <Landing direction={'column'} spacing={3}>
                <Stack>
                    <Typography sx={{
                        fontWeight: 600,
                        fontFamily: 'Poppins',
                        fontSize: 21,
                    }}>
                        Delivery Address
                    </Typography>
                    {context.state === '/item_address' ? (<Typography sx={{
                        fontFamily: 'DM Sans',
                        fontWeight: 400,
                        fontSize: 14,
                        color: 'rgba(0, 0, 0, 0.6)'
                    }}>
                        This is your current delivery location
                    </Typography>) : context.state === '/delivery_address' ? (<Typography sx={{
                        fontFamily: 'DM Sans',
                        fontWeight: 400,
                        fontSize: 14,
                        color: 'rgba(0, 0, 0, 0.6)'
                    }}>
                        Please choose an option below
                    </Typography>) : (<Typography sx={{
                        fontFamily: 'DM Sans',
                        fontWeight: 400,
                        fontSize: 14,
                        color: 'rgba(0, 0, 0, 0.6)'
                    }}>
                        Please fill in the form below
                    </Typography>)}


                </Stack>
                {children}
                {context.state === '/delivery_address' ? (<Card sx={{
                    display: 'flex',
                    borderRadius: '15px',
                    padding: '16px 20px 16px 16px',
                    backgroundColor: 'rgba(248, 248, 248, 1)',
                }}>
                    <Stack sx={{ marginRight: 2 }}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM14.2 14.2L9 11V5H10.5V10.2L15 12.9L14.2 14.2Z" fill="#4D7D6B" />
                        </svg>
                    </Stack>
                    <Stack
                        spacing={1}
                        sx={{
                            width: '200px',
                            cursor: 'pointer'
                        }}
                        onClick={() => {
                            setContext({ ...context, state: '/add_address' })
                        }}
                    >
                        <Typography sx={{
                            fontWeight: 600,
                            fontSize: 14,
                            fontFamily: 'Poppins',
                        }}>
                            Van Slingelandtstraat 8d, 1051 CH Amsterdam
                        </Typography>
                        <Typography sx={{
                            fontWeight: 400,
                            fontSize: 14,
                            fontFamily: 'DM Sans',
                            color: 'rgba(0, 0, 0, 0.6)',
                            height: 20
                        }}>
                            Last address
                        </Typography>
                    </Stack>
                </Card>) : (<></>)}
                {context.state === '/delivery_address' ? (<Stack direction={'row'} justifyContent={'space-between'}>
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
                            setContext({ ...context, state: '/open' })
                        }}
                    >
                        <Stack>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" fill="#4D7D6B" />
                            </svg>
                        </Stack>
                        <Typography sx={{
                            fontFamily: 'Poppins',
                            fontSize: '14px',
                            fontWeight: 600,
                        }}>BACK</Typography>
                    </Link>
                    <Stack
                        direction={'row'}
                        alignItems={'center'}
                        sx={{
                            borderRadius: '100px',
                            border: '1px solid rgba(64, 103, 88, 0.5)',
                            height: '38px',
                            cursor: 'pointer',
                        }}
                        onClick={() => {
                            setContext({ ...context, state: '/add_address' })
                        }}
                    >
                        <Stack
                            direction={'row'}
                            alignItems={'center'}
                            sx={{
                                padding: '8px 22px 8px 22px'
                            }}
                            gap={2}
                        >
                            <Typography sx={{
                                fontFamily: 'Poppins',
                                fontSize: '14px',
                                fontWeight: 600,
                                color: 'rgba(77, 125, 107, 1)',
                            }}>
                                ADD NEW
                            </Typography>
                            <Stack>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17 13H13V17H11V13H7V11H11V7H13V11H17V13Z" fill="#4D7D6B" />
                                </svg>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>) : (<></>)}
            </Landing>
        </Wrap >
    );
};

export default DeliveryAddress;
