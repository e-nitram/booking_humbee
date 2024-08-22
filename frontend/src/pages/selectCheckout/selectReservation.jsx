import { Stack, Typography, Button, Box } from '@mui/material'
import styled from '@emotion/styled'
import OutlinedInput from '@mui/material/OutlinedInput';
import { useAppContext } from '../../context/AppContext';
import React from 'react'
import openmark from '../../asstes/openmark.png'
import validator from 'validator'
import ContactContainer from '../../containers/ContactContainer'
import contactcalendar from '../../asstes/icons/contactcalendar.png'
import contact_pencil from '../../asstes/icons/contactpencil.png'

const DetailItem = styled(Stack)({
  borderRadius: '15px',
  padding: '18px 50px',
  boxShadow: '0 1px 1px 0 rgba(0, 0, 0, 0.25)',
  position: 'relative',
  marginBottom: '16px'
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
    fontFamily: 'Source Sans Pro',
  },
  '& input:focus': {
    outline: 'none'
  },
  '&:focus': { outline: 'none' }
})

const Additionall = styled(OutlinedInput)({
  borderRadius: '15px',
  '& input::placeholder': {
    fontSize: '14px',
    fontFamily: 'Source Sans Pro',
  },
  marginBottom: '150px',
  backgroundColor: '#F8F8F8',
  fontSize: '12px'
})

const IconMark = styled(Stack)({
  width: '52px',
  height: '52px',
  position: 'absolute',
  left: 0,
  bottom: 0,
  backgroundColor: 'white',
  borderRadius: '100px',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 10
})
const CompleteButton = styled(Button)({
  fontSize: 14,
  fontWeight: 600,
  fontFamily: 'Source Sans Pro',
  width: '100%',
  height: 52,
  textTransform: 'none',
  backgroundColor: '#4D7D6B',
  color: 'white',
  borderRadius: 26,
  '&:hover': {
    backgroundColor: '#4D7D6B',
  },
  '&:disabled': {
    backgroundColor: '#CEDED8',
    color: 'white'
  }
})

const SelectContact = () => {
  const [context, setContext] = useAppContext();
  const [name, setName] = React.useState(context.name)
  const [surname, setSurname] = React.useState(context.surname)
  const [email, setEmail] = React.useState(context.email)
  const [phone, setPhone] = React.useState(context.phone)
  const [remark, setRemark] = React.useState(context.remark)
  const [isValidEmail, setIsValidEmail] = React.useState(false);
  const [isMobilePhone, setIsMobilePhone] = React.useState(false)
  const [emailError, setEmailError] = React.useState('')
  const [phoneError, setPhoneError] = React.useState('')
  const [isVisibleReservation, setIsVisibleReservation] = React.useState('');

  React.useEffect(() => {
    setIsValidEmail(validator.isEmail(email))
    setIsMobilePhone(validator.isMobilePhone(phone))
    if (!(name === '') && !(surname === '') && (isValidEmail) && (isMobilePhone)) {
      setIsVisibleReservation(false);
    } else {
      setIsVisibleReservation(true);
    }
  }, [isValidEmail, isMobilePhone, email, name, phone, surname])

  const handleClick = () => {
    setContext({ ...context, name: name, email: email, phone: phone, surname: surname, remark: remark, flag: 0, state: '/contact_summary' })
  }

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

  return (
    <ContactContainer>
      <Stack sx={{ maxHeight: 'calc(100vh - 100px)' }}>
        <Stack
          px={4}
          pt={2}
          sx={{
            maxHeight: 'calc(100vh - 100px)',
            overflow: 'auto',
            scrollbarWidth: 'none', /* for Firefox */
            overflowY: 'scroll',
            '&::-webkit-scrollbar': {
              display: 'none'
            }
          }}
        >
          <Stack
            sx={{
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            <Typography
              mb={2}
              sx={{
                fontFamily: 'Source Sans Pro',
                fontSize: '18px',
                fontWeight: 600,
                lineHeight: '150%',
              }}>
              Complete your reservation
            </Typography>
          </Stack>
          <Stack mb={2}>
            <Typography
              sx={{
                fontFamily: 'Source Sans Pro',
                fontSize: '14px',
                fontWeight: 600,
                lineHeight: '140%',
                borderBottom: '8px'
              }}
            >
              Reservation details
            </Typography>
          </Stack>
          <DetailItem gap={1}>
            <img style={{ position: 'absolute', top: '22px', left: '10px', width: '17.5px', height: '17.5px', color: 'rgba(77, 125, 107, 1)' }} alt='calendar' src={contactcalendar} />
            <img onClick={() => setContext({ ...context, state: '/select' })} style={{ position: 'absolute', top: '18px', right: '10px', width: '24px', height: '24px', color: 'rgba(77, 125, 107, 1)', cursor: 'pointer' }} alt='pencil' src={contact_pencil} />
            <Stack>
              <Stack sx={{ fontSize: '14px', fontWeight: 600 }}>Date</Stack>
              <Stack sx={{
                fontFamily: 'Source Sans Pro',
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: '140%'
              }}>{context.day}</Stack>
            </Stack>
            <Stack>
              <Stack sx={{ fontSize: '14px', fontWeight: 600 }}>Time</Stack>
              <Stack sx={{
                fontFamily: 'Source Sans Pro',
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: '140%'
              }}>{context.time}</Stack>
            </Stack>
            <Stack>
              <Stack sx={{ fontSize: '14px', fontWeight: 600 }}>Party Size</Stack>
              <Stack sx={{
                fontFamily: 'Source Sans Pro',
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: '140%'
              }}>{context.booking_number}</Stack>
            </Stack>
          </DetailItem>
          <Stack mb={1}>
            <Typography
              sx={{
                fontFamily: 'Source Sans Pro',
                fontSize: '18px',
                fontWeight: 600,
                lineHeight: '140%',
              }}
            >
              Your contact details
            </Typography>
          </Stack>
          <Stack mb={2}>
            <Typography
              sx={{
                fontFamily: 'Source Sans Pro',
                fontSize: '12px',
                fontWeight: 400,
                lineHeight: '140%',
                color: '#444254'
              }}
            >
              You will receive a confirmation of your reservation by email
            </Typography>
          </Stack>
          <Stack gap={2} marginBottom={2}>
            <FormInput
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Name'
            />
            <FormInput
              required
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              placeholder='Surname'
            />
            <Stack>
              <FormInput
                required
                value={email}
                type='text'
                onChange={handleEmailChange}
                placeholder='Email'
              />
              {(!isValidEmail && email) && (<Stack sx={{ paddingLeft: '15px' }}><Typography sx={{
                fontWeight: 'bold',
                fontSize: '10px',
                fontFamily: 'Source Sans Pro',
                color: 'red',
              }}>{emailError}</Typography></Stack>)}
            </Stack>
            <Stack>
              <FormInput
                required
                value={phone}
                onChange={handlePhoneChange}
                placeholder='Phone number'
              />
              {!isMobilePhone && phone ? (<Stack sx={{ paddingLeft: '15px', marginBottom: '10px' }}><Typography sx={{
                fontWeight: 'bold',
                fontSize: '10px',
                fontFamily: 'Source Sans Pro',
                color: 'red',
              }}>{phoneError}</Typography></Stack>) : (<></>)}
            </Stack>
          </Stack>
          <Typography sx={{ fontWeight: 600, fontSize: '14px', lineHeight: '19.6px', marginBottom: '8px', fontFamily: 'Source Sans Pro' }}>
            Additional remarks
          </Typography>
          <Additionall
            value={remark}
            onChange={(e) => setRemark(e.target.value)}
            placeholder="Any dietary restricitions or special request?"
            multiline
            rows={2}
          />
        </Stack>
      </Stack>
      <Box pt={2} sx={{ position: 'absolute', bottom: 0, width: '100%' }}  >
        <a
          style={{
            width: '52px',
            height: '52px',
            position: 'absolute',
            left: 0,
            backgroundColor: 'white',
            borderRadius: '100px',
            justifyContent: 'center',
            alignItems: 'center'
          }}
          rel='noreferrer'
          target='_blank'
          href='https://humbee.com/'
        >
          <IconMark>
            <img
              width={24}
              height={24}
              src={openmark}
              alt='openmark'
            />
          </IconMark>
        </a>
        <CompleteButton
          onClick={handleClick}
          disabled={isVisibleReservation}
          disableElevation
        >
          Complete Reservation
        </CompleteButton>
      </Box>
    </ContactContainer>
  )
}

export default SelectContact;