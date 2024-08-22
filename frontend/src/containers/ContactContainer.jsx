import React from 'react'
import { Card, Stack, IconButton, Typography } from '@mui/material'
import styled from '@emotion/styled'
import ClearIcon from '@mui/icons-material/Clear'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useAppContext } from '../context/AppContext';

const Wrap = styled(Card)({
  maxWidth: 400,
  width: 'calc(100% - 40px)',
  borderRadius: '15px 15px 26px 26px',
  position: 'fixed',
  right: '20px',
  bottom: '20px',
  maxHeight: 'calc(100vh - 30px)',
  fontFamily: 'Source Sans Pro',
  zIndex: 99
})

const HeaderButton = styled(IconButton)({
  backgroundColor: '#4D7D6B',
  padding: 0,
  width: 30,
  height: 30,
  '&:focus': { outline: 'none' },
  '&:hover': {
    backgroundColor: '#4D7D6B',
  },
  '& svg': {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Source Sans Pro'
  }
})

const HeaderTitle = styled(Typography)({
  fontSize: 18,
  fontWeight: 600,
  fontFamily: 'Source Sans Pro'
})

const ContactContainer = ({ children }) => {

  const [context, setContext] = useAppContext();
      return (
      <Wrap>
      {!(context.state === '/contact_confirm') ? (<Stack
          direction="row"
          alignItems="center"
          justifyContent={'space-between'}
          px={2}
          py={1}
          sx={{
            borderBottom: '1px solid #CFCFD5'
          }}
        >
          <HeaderButton onClick={() => {
            if(context.state === '/contact_reservation'){
              setContext({...context, state: '/select'})
            } else if(context.state === '/contact_summary'){
              setContext({...context, state: '/contact_reservation'})
            }
          }} >
            <ArrowBackIosNewIcon />
          </HeaderButton>
          <HeaderTitle>
            Checkout
          </HeaderTitle>
          <HeaderButton onClick={() => setContext({...context, state: '/open', latestState: context.state})}>
            <ClearIcon />
          </HeaderButton>
        </Stack>) : (<Stack
          direction="row"
          alignItems="center"
          justifyContent={'space-between'}
          px={2}
          py={1}
          sx={{
            borderBottom: '1px solid #CFCFD5'
          }}
        ><Stack>
        </Stack>
          <HeaderTitle>
            Confirmed
          </HeaderTitle>
          <Stack></Stack>
        </Stack>)}
        {children}
      </Wrap>
      )
}

      export default ContactContainer;