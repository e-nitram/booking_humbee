import React from 'react'
import styled from 'styled-components'
import { useAppContext } from '../../context/AppContext'
import { Card, Stack, Typography, Checkbox, OutlinedInput, FormControlLabel } from '@mui/material'
import validator from 'validator'


const CardItem = styled(Card)({
    padding: "16px 24px 16px 24px",
    borderRadius: "15px",
    backgroundColor: "white",
    border: '1px solid rgba(0, 0, 0, 0.23)'
})

const FormInput = styled(OutlinedInput)({
    height: '40px',
    borderRadius: '20px',
    backgroundColor: '#F8F8F8',
    '& .MuiInputBase-root:focus': {
        outline: 'none'
    },
    '& input': {
        border: 'none'
    },
    '& input::placeholder': {
        fontSize: '12px',
        fontFamily: 'Poppins',
    },
    '& input:focus': {
        outline: 'none'
    },
    '&:focus': { outline: 'none' }
})


const ContactDetails = () => {
    const [context, setContext] = useAppContext();
    const [company, setCompany] = React.useState('Miyagami B.V');
    const [vatNumber, setVatNumber] = React.useState(105);
    const [name, setName] = React.useState(context.name)
    const [surname, setSurname] = React.useState(context.surname)
    const [email, setEmail] = React.useState(context.email)
    const [phone, setPhone] = React.useState(context.phone)
    const [isValidEmail, setIsValidEmail] = React.useState(false);
    const [isMobilePhone, setIsMobilePhone] = React.useState(false)
    const [emailError, setEmailError] = React.useState('')
    const [phoneError, setPhoneError] = React.useState('')
    const [showCompanyFields, setShowCompanyFields] = React.useState(false);

    const handleEmailChange = (event) => {
        const email = event.target.value;
        setEmail(email);
        setIsValidEmail(validator.isEmail(email));
        if (validator.isEmail(email)) {
            setEmailError('Valid Email :)')
        } else {
            setEmailError('Enter valid Email!')
        }
    };

    const handlePhoneChange = (event) => {
        const phone = event.target.value;
        setPhone(phone);
        setIsMobilePhone(validator.isMobilePhone(phone));
        if (validator.isEmail(phone)) {
            setPhoneError('Phone Email :)')
        } else {
            setPhoneError('Enter valid Phone!')
        }
    }
    const toggleCompanyFields = () => {
        setShowCompanyFields(!showCompanyFields);
    };


    return (<CardItem>
        <Stack mb={1}>
            <Typography
                sx={{
                    fontFamily: 'Poppins',
                    fontSize: '18px',
                    fontWeight: 600,
                }}
            >
                Contact details
            </Typography>
        </Stack>
        <Stack mb={2}>
            <Typography
                sx={{
                    fontFamily: 'Poppins',
                    fontSize: '12px',
                    fontWeight: 400,
                    lineHeight: '140%',
                    color: '#444254'
                }}
            >
                You will receive an order confirmation by email
            </Typography>
        </Stack>
        <FormControlLabel
            control={<Checkbox checked={showCompanyFields} onChange={toggleCompanyFields} color='default' />}
            label="Company"
            sx={{
                '& span.css-ahj2mt-MuiTypography-root': {
                    fontFamily: 'DM Sans',
                    fontSize: '14px',
                    fontWeight: 400,
                },
                '& span.css-dk24d0-MuiButtonBase-root-MuiCheckbox-root svg': {
                    width: '20px',
                    height: '20px'
                },
                '& span.css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root': {
                    color: 'rgba(77, 125, 107, 1)'
                },
                '& .MuiTypography-root': { fontFamily: 'DM Sans' }
            }}
        />
        {showCompanyFields && (
            <Stack spacing={1} marginBottom={'30px'}>
                <Stack>
                    <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', fontWeight: 500 }}>Company</Typography>
                    <FormInput
                        required
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                    />
                </Stack>
                <Stack>
                    <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', fontWeight: 500 }}>VAT Number</Typography>
                    <FormInput
                        required
                        value={vatNumber}
                        onChange={(e) => setVatNumber(e.target.value)}
                    />
                </Stack>
            </Stack>
        )}
        <Stack gap={1} marginBottom={2}>
            <Stack>
                <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', fontWeight: 500 }}>First Name</Typography>
                <FormInput
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </Stack>
            <Stack>
                <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', fontWeight: 500 }}>Last Name</Typography>
                <FormInput
                    required
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                />
            </Stack>
            <Stack>
                <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', fontWeight: 500 }}>Email</Typography>
                <FormInput
                    required
                    value={email}
                    type='text'
                    onChange={handleEmailChange}
                />
                {(!isValidEmail && email) && (<Stack sx={{ paddingLeft: '15px' }}><Typography sx={{
                    fontWeight: 'bold',
                    fontSize: '10px',
                    fontFamily: 'Source Sans Pro',
                    color: 'red',
                }}>{emailError}</Typography></Stack>)}
            </Stack>
            <Stack>
                <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', fontWeight: 500 }}>Phone Number</Typography>
                <Stack>
                    <FormInput
                        required
                        value={phone}
                        onChange={handlePhoneChange}
                    />
                    {!isMobilePhone && phone ? (<Stack sx={{ paddingLeft: '15px', marginBottom: '10px' }}><Typography sx={{
                        fontWeight: 'bold',
                        fontSize: '10px',
                        fontFamily: 'Source Sans Pro',
                        color: 'red',
                    }}>{phoneError}</Typography></Stack>) : (<></>)}
                </Stack>
            </Stack>
        </Stack>
    </CardItem>)
}

export default ContactDetails;