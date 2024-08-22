import React from 'react'
import { Stack, Typography, Button, Box } from '@mui/material'
import styled from '@emotion/styled'
import { useAppContext } from '../../context/AppContext';
import openmark from '../../asstes/openmark.png'
import ContactContainer from '../../containers/ContactContainer';


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

const Section = styled(Stack)({
  padding: '16px 30px 16px 30px',
  height: '200px',
  fontFamily: 'Source Sans Pro'
})

const Reservation = styled(Stack)({
  marginTop: '10px',
})

const Share = () => {
  const [context, setContext] = useAppContext();

  return (
    <ContactContainer>
      <Section>
        <Stack>
          <Reservation>
            <Typography sx={{ fontSize: '18px', lineHeight: '27px', fontWeight: 600, fontFamily: 'Source Sans Pro' }}>
              Thank you, {context.name}!
              <Typography sx={{ paddingTop: '10px', fontSize: '14px', lineHeight: '27px', fontWeight: 400, fontFamily: 'Source Sans Pro' }}>
                Your reservation for {context.booking_number} people on {context.day} at {context.time} is confirmed.
              </Typography>
              <Typography sx={{ fontSize: '14px', lineHeight: '27px', fontWeight: 400, fontFamily: 'Source Sans Pro' }}>
                See you soon!
              </Typography>
            </Typography>
          </Reservation>
        </Stack>
      </Section>
      <Box pt={2} sx={{ position: 'absolute', right: 0, bottom: 0, width: '100%' }} onClick={() => setContext({ ...context, name: '', booking_number: '', day: '', time: '', surname: '', email: '', phone: '', remark: '', state: '/open', latestState: null })} >
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
          Close
        </CompleteButton>
      </Box>
    </ContactContainer>
  )
}

export default Share;