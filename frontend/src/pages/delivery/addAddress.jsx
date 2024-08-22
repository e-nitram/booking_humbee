import React from 'react';
import styled from '@emotion/styled';
import { useAppContext } from '../../context/AppContext';
import { Typography, OutlinedInput, Stack, Link, Button, Alert } from '@mui/material';
import DeliveryAddress from './DeliveryAddress';

const AddAddress = ({ children }) => {
    const [context, setContext] = useAppContext();
    const [postCode, setPostCode] = React.useState(context.postCode);
    const [houseNumber, setHouseNumber] = React.useState(context.houseNumber);
    const [street, setStreet] = React.useState(context.street);
    const [city, setCity] = React.useState(context.city);
    const [alert, setAlert] = React.useState(false);
    const [province, setProvince] = React.useState(context.province);
    const [manual, setManual] = React.useState(false);
    const [error, setError] = React.useState('');
    const [flag, setFlag] = React.useState(context.Flag1);
    const [postCodeError, setPostCodeError] = React.useState(false);

    const addressArray = [
        {
            postCode: '1051 CH',
            houseNumber: '8',
            street: 'Graaf Florislaan',
            city: 'Amsterdam',
            province: 'Noord-Holland'
        },
        {
            postCode: '1052 CH',
            houseNumber: '8',
            street: 'Graa111 Florislaan',
            city: 'Amsterdam111',
            province: 'Noord-Ho222land'
        },
    ];

    const validatePostCode = (value) => {
        const pattern = /^[0-9]{4}\s[A-Za-z]{2}$/;
        return pattern.test(value);
    };

    const handlePostCodeChange = (e) => {
        const value = e.target.value;
        setPostCode(value);
        if (!validatePostCode(value)) {
            setPostCodeError(true);
        } else {
            setPostCodeError(false);
        }
    };

    const handleHouseNumberChange = (e) => {
        setHouseNumber(e.target.value);
    };

    const handleInputManually = () => {
        setManual(true);
        setAlert(false);
    };

    const handleManConfirm = () => {
        const newArray = {
            postCode: postCode,
            houseNumber: houseNumber,
            street: street,
            city: city,
            province: province
        };
        context.addressArray.push(newArray);
        setContext({
            ...context,
            postCode: postCode,
            houseNumber: houseNumber,
            street: street,
            city: city,
            province: province,
            state: '/item_address',
            falg1: flag
        });
    };

    const handleLastConfirm = () => {
        setContext({
            ...context,
            postCode: postCode,
            houseNumber: houseNumber,
            street: street,
            city: city,
            province: province,
            state: '/item_address',
            falg1: flag
        });
    };

    const handleConfirm = () => {
        if (postCodeError) {
            setAlert(true);
            return;
        }

        const matchedAddress = addressArray.find(
            address => address.postCode === postCode && address.houseNumber === houseNumber
        );
        if (matchedAddress) {
            setFlag(1);
            setCity(matchedAddress.city);
            setStreet(matchedAddress.street);
            setProvince(matchedAddress.province);
            setAlert(false);
        } else {
            setAlert(true);
        }
    };

    return (
        <DeliveryAddress>
            <Stack spacing={2}>
                {manual ? (
                    <>
                        <Group>
                            <LabelTitle>Post Code</LabelTitle>
                            <FormInput
                                value={postCode}
                                onChange={handlePostCodeChange}
                                error={postCodeError}
                            />
                            {postCodeError && <ErrorText>Invalid postcode format. Please enter 4 digits, a space, and 2 letters.</ErrorText>}
                        </Group>
                        <Group>
                            <LabelTitle>House Number</LabelTitle>
                            <FormInput
                                value={houseNumber}
                                onChange={handleHouseNumberChange}
                            />
                        </Group>
                        <Group>
                            <LabelTitle>Street</LabelTitle>
                            <FormInput
                                value={street}
                                onChange={(e) => setStreet(e.target.value)}
                            />
                        </Group>
                        <Group>
                            <LabelTitle>City</LabelTitle>
                            <FormInput
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            />
                        </Group>
                        <Group>
                            <LabelTitle>Province</LabelTitle>
                            <FormInput
                                value={province}
                                onChange={(e) => setProvince(e.target.value)}
                            />
                        </Group>
                    </>
                ) : (
                    <>
                        <Group>
                            <LabelTitle>Post Code</LabelTitle>
                            <FormInput
                                value={postCode}
                                onChange={handlePostCodeChange}
                                error={postCodeError}
                            />

                        </Group>
                        <Group>
                            <LabelTitle>House Number</LabelTitle>
                            <FormInput
                                value={houseNumber}
                                onChange={handleHouseNumberChange}
                            />
                        </Group>
                    </>
                )}
                {postCodeError && <Alert sx={{ backgroundColor: 'white' }} severity="error">
                    Incorrect data, please review
                </Alert>}
                {alert && (
                    <Alert sx={{ backgroundColor: 'white' }} severity="info">
                        Address not found, please try again or input address manually
                    </Alert>
                )}
                {flag && (
                    <>
                        <Group>
                            <LabelTitle>Street</LabelTitle>
                            <FormInput value={street} disabled />
                        </Group>
                        <Group>
                            <LabelTitle>City</LabelTitle>
                            <FormInput value={city} disabled />
                        </Group>
                        <Group>
                            <LabelTitle>Province</LabelTitle>
                            <FormInput value={province} disabled />
                        </Group>
                    </>
                )}
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

                {!flag ? (
                    !alert ? (
                        manual ? (
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
                                    }
                                }}
                                onClick={handleManConfirm}
                            >
                                <Stack
                                    direction={'row'}
                                    alignItems={'center'}
                                    sx={{
                                        padding: '8px 22px 8px 22px',
                                    }}
                                    gap={2}
                                >
                                    <Typography
                                        sx={{
                                            fontFamily: 'Poppins',
                                            fontSize: '14px',
                                            color: 'rgba(255, 255, 255, 1)',
                                            fontWeight: 600,
                                        }}
                                    >
                                        CONFIRM
                                    </Typography>
                                </Stack>
                            </Button>
                        ) : (
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
                                    '&:disabled': {
                                        backgroundColor: 'rgba(0, 0, 0, 0.12)',
                                        color: 'rgba(0, 0, 0, 0.26)',
                                        fontFamily: 'Source Sans Pro',
                                        border: 'none'
                                    }
                                }}
                                onClick={handleConfirm}
                                disabled={!(postCode && houseNumber)}
                            >
                                <Stack
                                    direction={'row'}
                                    alignItems={'center'}
                                    gap={2}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: '14px',
                                            color: postCode && houseNumber ?  'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 0.26)',
                                            fontWeight: 600,
                                        }}
                                    >
                                        FIND ADDRESS
                                    </Typography>
                                </Stack>
                            </Button>
                        )
                    ) : (
                        <Button
                            direction={'row'}
                            alignItems={'center'}
                            justifyContent={'center'}
                            sx={{
                                borderRadius: '100px',
                                border: '1px solid rgba(64, 103, 88, 0.5)',
                                height: '36px',
                                cursor: 'pointer',
                                backgroundColor: 'rgba(77, 125, 107, 1)',
                                ':hover': {
                                    backgroundColor: 'rgba(77, 125, 107, 1)',
                                },
                                ':focus': {
                                    outline: 'none'
                                }
                            }}
                            onClick={handleInputManually}
                        >
                            <Stack
                                direction={'row'}
                                alignItems={'center'}
                                sx={{
                                    padding: '8px 22px 8px 22px',
                                }}
                                gap={2}
                            >
                                <Typography
                                    sx={{
                                        fontFamily: 'Poppins',
                                        fontSize: '14px',
                                        color: 'rgba(255, 255, 255, 1)',
                                        fontWeight: 600,
                                    }}
                                >
                                    INPUT MANUALLY
                                </Typography>
                            </Stack>
                        </Button>
                    )
                ) : (
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
                            }
                        }}
                        onClick={handleLastConfirm}
                    >
                        <Stack
                            direction={'row'}
                            alignItems={'center'}
                            sx={{
                                padding: '8px 22px 8px 22px',
                            }}
                            gap={2}
                        >
                            <Typography
                                sx={{
                                    fontFamily: 'Poppins',
                                    fontSize: '14px',
                                    color: 'rgba(255, 255, 255, 1)',
                                    fontWeight: 600,
                                }}
                            >
                                CONFIRM
                            </Typography>
                        </Stack>
                    </Button>
                )}
            </Stack>
        </DeliveryAddress>
    );
};

const FormInput = styled(OutlinedInput)({
    height: '40px',
    borderRadius: '20px',
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

const LabelTitle = styled(Typography)({
    fontFamily: 'Poppins',
    fontSize: '12px',
    fontWeight: 500,
    color: 'rgba(0, 0, 0, 0.87)',
});

const Group = styled(Stack)({
    gap: '5px',
});

const ErrorText = styled(Typography)({
    color: 'red',
    fontSize: '12px',
});

export default AddAddress;
