import React from 'react'
import styled from '@emotion/styled';
import { useAppContext } from '../../context/AppContext'
import Select from '@mui/material/Select';
import { Typography, Stack, FormControl, MenuItem, Link } from '@mui/material';
import DeliveryAddress from './DeliveryAddress'


const ConfirmAddress = ({ children }) => {
    const [context, setContext] = useAppContext();
    const [storeName, setStoreName] = React.useState('');
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
    };

    const today = new Date();
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = today.toLocaleDateString('en-GB', options);

    return (
        <DeliveryAddress>
            <Stack spacing={2}>
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
            </Stack>
            {/* {!flag1 ? (<FormControl
                sx={{
                    m: 1,
                    minWidth: 120,
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
                    <MenuItem sx={{ fontFamily: 'DM Sans', fontSize: '14px', fontWeight: 400 }} value="">
                        Please select
                    </MenuItem>
                    <MenuItem sx={{ fontFamily: 'DM Sans', fontSize: '12px', fontWeight: 500 }} value={'13:00-13:30'}>13:00-13:30</MenuItem>
                    <MenuItem sx={{ fontFamily: 'DM Sans', fontSize: '12px', fontWeight: 500 }} value={'13:30-14:30'}>13:30-14:30</MenuItem>
                    <MenuItem sx={{ fontFamily: 'DM Sans', fontSize: '12px', fontWeight: 500 }} value={'14:30-15:00'}>14:30-15:00</MenuItem>
                    <MenuItem sx={{ fontFamily: 'DM Sans', fontSize: '12px', fontWeight: 500 }} value={'15:00-15:30'}>15:00-15:30</MenuItem>
                </Select>
            </FormControl>) : (<></>)} */}
            <Stack
                direction={'row'}
                spacing={2}
                sx={{
                    borderRadius: '20px',
                    padding: '24px',
                    border: '1px solid rgba(0, 0, 0, 0.23)',
                }}>
                <Stack>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM14.2 14.2L9 11V5H10.5V10.2L15 12.9L14.2 14.2Z" fill="#4D7D6B" />
                    </svg>
                </Stack>
                <Typography sx={{
                    fontSize: '13px',
                    fontWeight: 400,
                    fontFamily: 'DM Sans',
                    width: '242px',
                }}>
                    To be delivered between {context.deliveryTime}
                </Typography>
                <Stack
                    sx={{ cursor: 'pointer' }}
                    onClick={() => {
                        setContext({...context, state: '/item_address'})
                    }}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.25 12.9374V15.7499H5.0625L13.3575 7.45492L10.545 4.64242L2.25 12.9374ZM15.5325 5.27992C15.825 4.98742 15.825 4.51492 15.5325 4.22242L13.7775 2.46742C13.485 2.17492 13.0125 2.17492 12.72 2.46742L11.3475 3.83992L14.16 6.65242L15.5325 5.27992Z" fill="#4D7D6B" />
                    </svg>
                </Stack>
            </Stack>
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
                        setContext({ ...context, state: '/item_address' })
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
                        color: 'rgba(255, 255, 255, 1)',
                        borderRadius: '100px',
                        border: '1px solid rgba(64, 103, 88, 0.5)',
                        height: '38px',
                        cursor: 'pointer',
                        width: '163px',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(77, 125, 107, 1)',
                    }}
                    onClick={() => {
                        setContext({ ...context, state: '/pickup_store' })
                    }}
                >
                    <Typography sx={{
                        fontFamily: 'Poppins',
                        fontSize: 14,
                        fontWeight: 600
                    }}>
                        CONFIRM
                    </Typography>
                </Stack>
            </Stack>
        </DeliveryAddress>
    )
}

export default ConfirmAddress;