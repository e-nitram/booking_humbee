import React from 'react'
import styled from '@emotion/styled';
import { Box, Button, Card, Stack, Grid } from '@mui/material';
import { useAppContext } from '../../context/AppContext';
import SelectContainer from '../../containers/SelectContainer';

const Counts = styled(Card)({
  minHeight: '250px',
  padding: 24,
  borderRadius: '13px',
  backgroundColor: '#F8F8F8'
})

const Item = styled(Button)({
  width: 64,
  height: 36,
  borderRadius: 18,
  border: '1px solid #4D7D6B',
  color: '#4D7D6B',
  fontSize: 18,
  lineHeight: 1.5,
  fontWeight: 600,
  fontFamily: 'Source Sans Pro',
  boxShadow: '0px 1px 3px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.25)',
  '&:focus': { outline: 'none' }
});

const More = styled(Button)({
  height: 36,
  borderRadius: 18,
  padding: '4px 24px',
  border: '1px solid #4D7D6B',
  color: '#4D7D6B',
  fontSize: 18,
  fontFamily: 'Source Sans Pro',
  lineHeight: 1.5,
  fontWeight: 600,
  textTransform: 'none',
  boxShadow: '0px 1px 3px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.25)',
  '&:focus': { outline: 'none' }
});

const SelectNumber = () => {
  const [context, setContext] = useAppContext();

  const handleClick = (number) => {
    setContext({ ...context, booking_number: number, state: '/select' });
  }

  return (
    <SelectContainer>
      <Box
        px={2}
        mt={1}
        sx={{
          fontFamily: 'Source Sans Pro'
        }}
      >
        <Counts>
          <Grid container spacing={2} columns={{xs: 12, sm: 12 }}>
            <Grid item sm={3} xs={4}>
              <Item onClick={() => handleClick(1)}>1</Item>
            </Grid>
            <Grid item sm={3} xs={4}>
              <Item onClick={() => handleClick(2)}>2</Item>
            </Grid>
            <Grid item sm={3} xs={4}>
              <Item onClick={() => handleClick(3)}>3</Item>
            </Grid>
            <Grid item sm={3} xs={4}>
              <Item onClick={() => handleClick(4)}>4</Item>
            </Grid>
            <Grid item sm={3} xs={4}>
              <Item onClick={() => handleClick(5)}>5</Item>
            </Grid>
            <Grid item sm={3} xs={4}>
              <Item onClick={() => handleClick(6)}>6</Item>
            </Grid>
            <Grid item sm={3} xs={4}>
              <Item onClick={() => handleClick(7)}>7</Item>
            </Grid>
            <Grid item sm={3} xs={4}>
              <Item onClick={() => handleClick(8)}>8</Item>
            </Grid>
            <Grid item xs={12}>
              <Stack
                direction={'row'}
                justifyContent={'center'}
              >
                <More onClick={() => handleClick('+8')}>+8 Group</More>
              </Stack>
            </Grid>
          </Grid>
        </Counts>
      </Box>
    </SelectContainer>
  )
}

export default SelectNumber;