import { Box, Stack, Button, Typography } from '@mui/material'
import styled from '@emotion/styled'
import { useAppContext } from '../../context/AppContext'
import React from 'react'
import openmark from '../../asstes/openmark.png'
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



const SelectContact = () => {
  const [context, setContext] = useAppContext()

  return (
    <ContactContainer>
      <>
        <Stack
          px={4}
          pt={2}
          marginBottom={'100px'}
        >
          <Stack sx={{
            maxHeight: 'calc(100vh - 200px)',
            overflow: 'auto',
            scrollbarWidth: 'none', /* for Firefox */
            overflowY: 'scroll',
            '&::-webkit-scrollbar': {
              display: 'none'
            }
          }}>
            <Stack
              sx={{
                alignItems: 'center',
                justifyContent: 'center',

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
              <img style={{ position: 'absolute', top: '22px', left: '10px', width: '17.5px', height: '17.5px', color: 'rgba(77, 125, 107, 1)' }} alt='left' src={contactcalendar} />
              <img onClick={() => setContext({ ...context, state: '/select' })} style={{ cursor: 'pointer', position: 'absolute', top: '18px', right: '10px', width: '24px', height: '24px', color: 'rgba(77, 125, 107, 1)' }} alt='close' src={contact_pencil} />
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
                  fontSize: '14px',
                  fontWeight: 600,
                  lineHeight: '19.6px',
                }}
              >
                Pesronal details
              </Typography>
            </Stack>
            <DetailItem gap={1} margin>
              <img style={{ position: 'absolute', top: '22px', left: '10px', width: '17.5px', height: '17.5px', color: 'rgba(77, 125, 107, 1)' }} alt='calendar' src={contactcalendar} />
              <img onClick={() => setContext({ ...context, state: '/contact_reservation' })} style={{ cursor: 'pointer', position: 'absolute', top: '18px', right: '10px', width: '24px', height: '24px', color: 'rgba(77, 125, 107, 1)' }} alt='pencil' src={contact_pencil} />
              <Stack>
                <Stack sx={{ fontFamily: 'Source Sans Pro', fontSize: '14px', fontWeight: 600 }}>Name</Stack>
                <Stack sx={{
                  fontSize: '14px',
                  fontWeight: 400,
                  lineHeight: '140%'
                }}>{context.name}</Stack>
              </Stack>
              <Stack>
                <Stack sx={{ fontFamily: 'Source Sans Pro', fontSize: '14px', fontWeight: 600 }}>Email</Stack>
                <Stack sx={{
                  fontSize: '14px',
                  fontWeight: 400,
                  lineHeight: '140%'
                }}>{context.email}</Stack>
              </Stack>
              <Stack>
                <Stack sx={{ fontFamily: 'Source Sans Pro', fontSize: '14px', fontWeight: 600 }}>Phone number</Stack>
                <Stack sx={{
                  fontSize: '14px',
                  fontWeight: 400,
                  lineHeight: '140%'
                }}>{context.phone}</Stack>
              </Stack>
              <Stack>
                <Stack sx={{ fontFamily: 'Source Sans Pro', fontSize: '14px', fontWeight: 600 }}>Remarks</Stack>
                <Stack sx={{
                  fontSize: '14px',
                  fontWeight: 400,
                  lineHeight: '140%'
                }}>{context.remark}</Stack>
              </Stack>
            </DetailItem>
          </Stack>
        </Stack>
        <Box pt={2} sx={{ position: 'absolute', bottom: 0, width: '100%' }} onClick={() => {
          setContext({ ...context, state: '/contact_confirm' })
        }}>
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
          >
            Complete Reservation
          </CompleteButton>
        </Box>
      </>
    </ContactContainer>
  )
}

export default SelectContact;



