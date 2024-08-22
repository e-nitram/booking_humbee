import React from 'react';
import { Card, Stack, FormControl, MenuItem, Typography, OutlinedInput, InputAdornment, IconButton, Link, Button } from '@mui/material';
import styled from '@emotion/styled';
import { useAppContext } from '../../context/AppContext';
import Select from '@mui/material/Select';
import "@fontsource/dm-sans"
import { Header } from '../../components/Header/index'


const ConfirmButton = styled(Button)(({theme}) => ({
    [theme.breakpoints.down('500')]: {
        width: '120px',
        fontSize: '12px'
    },
    borderRadius: "100px",
    width: 163,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    fontWeight: 600,
    color: 'rgba(255, 255, 255, 1)',
    cursor: 'pointer',
    backgroundColor: 'rgba(77, 125, 107, 1)',
    '&:hover': {
        backgroundColor: '#4D7D6B',
    },
    '&:disabled': {
        backgroundColor: '#CEDED8',
        color: 'rgba(0, 0, 0, 0.12)',
    }
}))

const Wrap = styled(Card)({
    maxWidth: '430px',
    width: 'calc(100% - 40px)',
    borderRadius: '15px 15px 26px 26px',
    position: 'fixed',
    right: '20px',
    bottom: '20px',
    paddingBottom: 70,
    maxHeight: 'calc(100vh - 100px)',
    height: '670px',
    zIndex: 99,
    overflow: 'auto'
});



const Landing = styled(Stack)({
    padding: "32px 40px 16px 40px"
});

const FormInput = styled(OutlinedInput)({
    padding: '24px',
    height: '72px',
    borderRadius: '20px',
    '&:disabled': {
        color: 'red'
    },
    '& .MuiInputBase-input': {
        padding: '14px 14px 14px 3px',
    },
    '& input:focus': {
        outline: 'none',
    },
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
    // '& .Mui-disabled': {
    //     color: 'red', // Text color set to red when disabled
    // },
    fontSize: '13px',
    fontFamily: 'DM Sans',
});

const StoreItem = ({ children }) => {
    const [context, setContext] = useAppContext();
    const [storeName, setStoreName] = React.useState(context.storeName);
    const [isEditable, setIsEditable] = React.useState(false);
    const [flag, setFlag] = React.useState(1)
    const [time, setTime] = React.useState('')
    const [flag1, setFlag1] = React.useState(1)


    const handleChangeTime = (event) => {
        setTime(event.target.value)
        setFlag1(0)
    }
    const handleFormChange = (event) => {
        event.preventDefault();
        setStoreName(event.target.value);
        setContext({ ...context, storeName: storeName })
    };

    const handleEditClick = () => {
        setIsEditable(!isEditable);
    };

    

    React.useEffect(() => {
        setStoreName(context.contextStoreName)
    }, [])

    const today = new Date();
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = today.toLocaleDateString('en-GB', options);


    return (
        <Wrap>
            <Header title='Take-Away' />
            <Landing direction={'column'}>
                <Stack sx={{
                    marginBottom: '20px'
                }}>
                    <Typography sx={{
                        fontWeight: 600,
                        fontFamily: 'Poppins',
                        fontSize: 21,
                    }}>
                        Pick-Up Store
                    </Typography>
                    <Typography sx={{
                        fontWeight: 400,
                        fontSize: 14,
                        fontFamily: 'DM Sans',
                        color: 'rgba(0, 0, 0, 0.6)'
                    }}>
                        This is your current pick-up location
                    </Typography>
                </Stack>
                {/* <FormInput
                    required
                    value={storeName}
                    fullWidth
                    disabled
                    startAdornment={
                        <InputAdornment position="start">
                            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.9005 5.89L18.8505 1.52C18.6305 0.62 17.8505 0 16.9405 0H3.0505C2.1505 0 1.3605 0.63 1.1505 1.52L0.100495 5.89C-0.139505 6.91 0.080495 7.95 0.720495 8.77C0.800495 8.88 0.910495 8.96 1.00049 9.06V16C1.00049 17.1 1.90049 18 3.00049 18H17.0005C18.1005 18 19.0005 17.1 19.0005 16V9.06C19.0905 8.97 19.2005 8.88 19.2805 8.78C19.9205 7.96 20.1505 6.91 19.9005 5.89ZM16.9105 1.99L17.9605 6.36C18.0605 6.78 17.9705 7.2 17.7105 7.53C17.5705 7.71 17.2705 8 16.7705 8C16.1605 8 15.6305 7.51 15.5605 6.86L14.9805 2L16.9105 1.99ZM11.0005 2H12.9605L13.5005 6.52C13.5505 6.91 13.4305 7.3 13.1705 7.59C12.9505 7.85 12.6305 8 12.2205 8C11.5505 8 11.0005 7.41 11.0005 6.69V2ZM6.49049 6.52L7.04049 2H9.00049V6.69C9.00049 7.41 8.45049 8 7.71049 8C7.37049 8 7.06049 7.85 6.82049 7.59C6.57049 7.3 6.45049 6.91 6.49049 6.52ZM2.04049 6.36L3.0505 2H5.02049L4.4405 6.86C4.3605 7.51 3.8405 8 3.23049 8C2.74049 8 2.4305 7.71 2.3005 7.53C2.0305 7.21 1.94049 6.78 2.04049 6.36ZM3.00049 16V9.97C3.08049 9.98 3.1505 10 3.23049 10C4.10049 10 4.89049 9.64 5.47049 9.05C6.07049 9.65 6.87049 10 7.78049 10C8.65049 10 9.4305 9.64 10.0105 9.07C10.6005 9.64 11.4005 10 12.3005 10C13.1405 10 13.9405 9.65 14.5405 9.05C15.1205 9.64 15.9105 10 16.7805 10C16.8605 10 16.9305 9.98 17.0105 9.97V16H3.00049Z" fill="#4D7D6B" />
                            </svg>

                        </InputAdornment>
                    }
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton edge="end">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.25 12.9374V15.7499H5.0625L13.3575 7.45492L10.545 4.64242L2.25 12.9374ZM15.5325 5.27992C15.825 4.98742 15.825 4.51492 15.5325 4.22242L13.7775 2.46742C13.485 2.17492 13.0125 2.17492 12.72 2.46742L11.3475 3.83992L14.16 6.65242L15.5325 5.27992Z" fill="#4D7D6B" />
                                </svg>

                            </IconButton>
                        </InputAdornment>
                    }
                /> */}
                <Stack
                    direction={'row'}
                    spacing={'14px'}
                    sx={{
                        borderRadius: '20px',
                        padding: '24px',
                        border: '1px solid rgba(0, 0, 0, 0.23)',
                        justifyContent: 'space-between'
                    }}>
                    <Stack direction={'row'} spacing={2}>
                        <Stack justifyContent={'center'} alignItems={'center'}>
                            <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 2H17V0H15V2H5V0H3V2H2C0.9 2 0 2.9 0 4V20C0 21.1 0.9 22 2 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2ZM18 20H2V7H18V20Z" fill="#4D7D6B" />
                            </svg>
                        </Stack>
                        <Stack justifyContent={'center'} alignItems={'center'}>
                            <Typography sx={{
                                fontSize: '13px',
                                fontWeight: 400,
                                fontFamily: 'DM Sans',
                            }}>
                                {storeName}
                            </Typography>
                        </Stack>
                    </Stack>
                    <Stack
                        sx={{
                            cursor: 'pointer'
                        }}
                        justifyContent={'center'}
                        onClick={() => {
                            setContext({ ...context, state: '/pickup_store' })
                        }}
                    >
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.25 12.9374V15.7499H5.0625L13.3575 7.45492L10.545 4.64242L2.25 12.9374ZM15.5325 5.27992C15.825 4.98742 15.825 4.51492 15.5325 4.22242L13.7775 2.46742C13.485 2.17492 13.0125 2.17492 12.72 2.46742L11.3475 3.83992L14.16 6.65242L15.5325 5.27992Z" fill="#4D7D6B" />
                        </svg>
                    </Stack>
                </Stack>
                <Stack sx={{
                    marginBottom: '25px',
                    marginTop: '25px'
                }}>
                    <Typography sx={{
                        fontWeight: 600,
                        fontFamily: 'Poppins',
                        fontSize: '21px',
                    }}>
                        Pick-Up Time
                    </Typography>
                    <Typography sx={{
                        fontWeight: 400,
                        fontSize: 14,
                        color: 'rgba(0, 0, 0, 0.6)',
                        fontFamily: 'DM Sans'
                    }}>
                        Please choose an option below
                    </Typography>
                </Stack>
                <Stack spacing={1}>
                    <Stack
                        direction={'row'}
                        spacing={'14px'}
                        sx={{
                            borderRadius: '20px',
                            padding: '24px',
                            border: '1px solid rgba(0, 0, 0, 0.23)'
                        }}>
                        <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 2H17V0H15V2H5V0H3V2H2C0.9 2 0 2.9 0 4V20C0 21.1 0.9 22 2 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2ZM18 20H2V7H18V20Z" fill="#4D7D6B" />
                        </svg>
                        <Typography sx={{
                            fontSize: '13px',
                            fontWeight: 400,
                            fontFamily: 'DM Sans'
                        }}>
                            {`Today ${formattedDate}`}
                        </Typography>
                    </Stack>
                    {!flag ? (<FormInput
                        required
                        value={time}
                        onChange={handleFormChange}
                        placeholder='Store Name'
                        fullWidth
                        startAdornment={
                            <InputAdornment position="start">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 3H19V1H17V3H7V1H5V3H4C2.9 3 2 3.9 2 5V21C2 22.1 2.9 23 4 23H20C21.1 23 22 22.1 22 21V5C22 3.9 21.1 3 20 3ZM20 21H4V8H20V21Z" fill="#4D7D6B" />
                                </svg>


                            </InputAdornment>
                        }
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton edge="end">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.25 12.9374V15.7499H5.0625L13.3575 7.45492L10.545 4.64242L2.25 12.9374ZM15.5325 5.27992C15.825 4.98742 15.825 4.51492 15.5325 4.22242L13.7775 2.46742C13.485 2.17492 13.0125 2.17492 12.72 2.46742L11.3475 3.83992L14.16 6.65242L15.5325 5.27992Z" fill="#4D7D6B" />
                                    </svg>

                                </IconButton>
                            </InputAdornment>
                        }
                    />) : (<Stack spacing={1}>
                        <Typography sx={{
                            fontWeight: 'bold',
                            fontFamily: 'Poppins',
                            fontSize: '12px',
                            color: 'rgba(0, 0, 0, 0.87)',
                            display: !flag1 ? 'none' : ''
                        }}>
                            Pick-Up Time
                        </Typography>
                        <FormControl
                            sx={{
                                m: 1,
                                minWidth: 120,
                                display: !flag1 ? 'none' : ''
                            }}
                        >
                            <Select
                                sx={{
                                    borderRadius: '20px',
                                    height: '40px',
                                    fontSize: '13px',
                                    fontFamily: 'DM Sans'
                                }}
                                onChange={handleChangeTime}
                                value={time}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem sx={{ fontFamily: 'DM Sans', fontSize: '14px', fontWeight: 500 }} value="">
                                    Please select
                                </MenuItem>
                                <MenuItem sx={{ fontFamily: 'DM Sans', fontSize: '12px', fontWeight: 500 }} value={'Pick - Up between 13:00-13:30'}>Pick - Up between 13:00-13:30</MenuItem>
                                <MenuItem sx={{ fontFamily: 'DM Sans', fontSize: '12px', fontWeight: 500 }} value={'Pick - Up between 13:30-14:30'}>Pick - Up between 13:30-14:30</MenuItem>
                                <MenuItem sx={{ fontFamily: 'DM Sans', fontSize: '12px', fontWeight: 500 }} value={'Pick - Up between 14:30-15:00'}>Pick - Up between 14:30-15:00</MenuItem>
                                <MenuItem sx={{ fontFamily: 'DM Sans', fontSize: '12px', fontWeight: 500 }} value={'Pick - Up between 15:00-15:30'}>Pick - Up between 15:00-15:30</MenuItem>
                            </Select>
                        </FormControl>
                        <Stack
                            direction={'row'}
                            spacing={2}
                            sx={{
                                borderRadius: '20px',
                                padding: '24px',
                                border: '1px solid rgba(0, 0, 0, 0.23)',
                                display: flag1 ? 'none' : '',
                            }}>
                            <Stack>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM14.2 14.2L9 11V5H10.5V10.2L15 12.9L14.2 14.2Z" fill="#4D7D6B" />
                                </svg></Stack>
                            <Typography sx={{
                                fontSize: '13px',
                                fontWeight: 400,
                                fontFamily: 'DM Sans',
                                width: '242px',
                            }}>
                                {time}
                            </Typography>
                            <Stack
                                sx={{ cursor: 'pointer' }}
                                onClick={() => {
                                    setFlag1(1)
                                }}>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.25 12.9374V15.7499H5.0625L13.3575 7.45492L10.545 4.64242L2.25 12.9374ZM15.5325 5.27992C15.825 4.98742 15.825 4.51492 15.5325 4.22242L13.7775 2.46742C13.485 2.17492 13.0125 2.17492 12.72 2.46742L11.3475 3.83992L14.16 6.65242L15.5325 5.27992Z" fill="#4D7D6B" />
                                </svg>
                            </Stack>
                        </Stack>
                    </Stack>)}
                </Stack>
                <Stack sx={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    height: '38px',
                    marginTop: '25px'
                }}>
                    <Link
                        gap={1}
                        sx={{
                            alignItems: 'center',
                            display: 'flex',
                            justifyContent: 'center',
                            textDecoration: 'none',
                            color: 'rgba(77, 125, 107, 1)',
                            height: '38px',
                            ':focus': {
                                outline: 'none'
                            }
                        }}
                        component="button"
                        onClick={() => {
                            setContext({ ...context, state: '/pickup_store' })
                        }}
                    >
                        <Stack>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" fill="#4D7D6B" />
                            </svg>
                        </Stack>
                        <Typography sx={{
                            fontSize: '14px',
                            fontWeight: 600
                        }}>BACK</Typography>
                    </Link>
                    <ConfirmButton
                        disabled={!time ? true : false}
                        onClick={() => {
                            setContext({ ...context, state: '/menu_detail', pickupTime: time, storeName: storeName })
                        }}
                    >
                        CONFIRM
                    </ConfirmButton>
                </Stack>
            </Landing>
        </Wrap>
    );
};

export default StoreItem;
