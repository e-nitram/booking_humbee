import React from 'react'
import Stack from '@mui/material/Stack';
import styled from '@emotion/styled';
import { Button, Divider } from '@mui/material';
import openmark from '../asstes/openmark.png'
import { useAppContext } from '../context/AppContext';
import { useState } from 'react';

const OpenButton = styled(Button)({
  maxWidth: '430px',
  width: 'calc(100% - 40px)',
  height: '52px',
  justifyContent: 'center',
  backgroundColor: 'white',
  borderRadius: '100px',
  textTransform: 'none',
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  boxShadow: '5px 5px 20px 10px rgba(0, 0, 0, 0.06), 1px 1px 4px 1px rgba(0, 0, 0, 0.15), -5px -5px 20px 10px rgba(0, 0, 0, 0.06)',
  transition: 'width .4s',
  cursor: 'pointer',
  zIndex: 99,
  border: '1px solid #406758',
  '&:focus': { outline: 'none' },
  minWidth: '52px',
  fontFamily: 'Poppins'
})

const Text = styled(Stack)({
  width: '348px',
  height: '52px',
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: 600,
  fontSize: 14,
  fontFamily: 'Poppins',
  lineHeight: '19.6px',
  color: 'black',
  fontFamily: 'Poppins'
})

const TextDivider = styled(Stack)({
  display: 'contents'

})

const IconMark = styled(Stack)({
  width: '52px',
  height: '52px',
  position: 'absolute',
  left: 0,
  backgroundColor: 'white',
  borderRadius: '100px',
  justifyContent: 'center',
  alignItems: 'center',
  border: '1px solid #406758',
})

const Open = () => {
  const [context, setContext] = useAppContext();
  const [flag, setFlag] = useState(false);

  return (
    <OpenButton
      style={{
        maxWidth: !flag ? '0px' : '430px',
        backgroundColor: 'white'
      }}
      onClick={() => {
        setFlag(true)
      }}
    >
      <a
        style={{
          width: '52px',
          height: '52px',
          position: 'absolute',
          left: -1,
          backgroundColor: 'white',
          borderRadius: '100px',
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: '#4D7D6B'
        }}
        rel='noreferrer'
        target='_blank'
      >
        <IconMark>
          <img
            width={24}
            height={24}
            src={openmark}
            alt='openmark'
            style={{
              '&:focus': { outline: 'none' },
            }}
          />
        </IconMark>
      </a>
      {flag ? (<TextDivider>
      <Text
        style={{
          color: !flag ? 'white' : 'black',
          paddingLeft: '26px'
        }}
        onClick={() => {
          setFlag(true)
          setContext({ ...context, state: flag ? (context.latestState ? context.latestState : '/select') : context.state });
        }} >
        BOOK A TABLE
      </Text>
      <Divider orientation="vertical" flexItem />
      <Text
        style={{
          color: !flag ? 'white' : 'black'
        }}
        onClick={() => {
          setFlag(true)
          setContext({ ...context, state: '/order' });
        }} >
        ORDER NOW
      </Text>
    </TextDivider>) : (<></>)}
    

      
    </OpenButton>
  )
}

export default Open;