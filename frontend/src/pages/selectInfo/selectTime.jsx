import React from 'react'
import styled from '@emotion/styled';
import { Box, Button, Card, Grid, Typography } from '@mui/material';
import { useAppContext } from '../../context/AppContext';
import SelectContainer from '../../containers/SelectContainer';

const Counts = styled(Card)({
  minHeight: '250px',
  padding: '16px 30px',
  borderRadius: '13px',
  backgroundColor: '#F8F8F8',
  maxHeight: 'calc(100vh - 500px)',
  overflow: 'auto',
  scrollbarWidth: 'none', /* for Firefox */
  overflowY: 'scroll',
  '&::-webkit-scrollbar': {
    display: 'none'
  },
})

const Item = styled(Button)({
  borderRadius: '10px',
  border: '1px solid #4D7D6B',
  justifyContent: 'space-between',
  color: '#4D7D6B',
  fontSize: 18,
  fontFamily: 'Source Sans Pro',
  lineHeight: 1.5,
  fontWeight: 600,
  boxShadow: '0px 1px 3px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.25)',
  '&:focus': { outline: 'none' }
});

const Time = styled(Typography)({
  fontFamily: 'Source Sans Pro'
})

const SelectTime = () => {
  const [context, setContext] = useAppContext();
  const handleClick = (time) => {
    setContext({ ...context, time: time, state: '/select' });
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
        <Counts >

            <Grid container spacing={2} columns={{ xs: 12 }} gap={'1px'}>
              <Grid item xs={12}>
                <Item  sx={{ width: '100%' }} onClick={() => handleClick('17:00')}>
                  <Time>17:00</Time>
                  <Time>AVAILABLE</Time>
                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item sx={{ width: '100%' }} onClick={() => handleClick('17:30')}>
                  <Time>17:30</Time>
                  <Time>AVAILABLE</Time>
                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item sx={{ width: '100%' }} onClick={() => handleClick('18:00')}>
                  <Time>18:00</Time>
                  <Time>AVAILABLE</Time>
                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item sx={{ width: '100%' }} onClick={() => handleClick('18:30')}>
                  <Time>18:30</Time>
                  <Time>AVAILABLE</Time>
                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item sx={{ width: '100%' }} onClick={() => handleClick('19:00')}>
                  <Time>19:00</Time>
                  <Time>AVAILABLE</Time>
                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item sx={{ width: '100%' }} onClick={() => handleClick('19:30')}>
                  <Time>19:30</Time>
                  <Time>AVAILABLE</Time>
                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item sx={{ width: '100%' }} onClick={() => handleClick('20:00')}>
                  <Time>20:00</Time>
                  <Time>AVAILABLE</Time>
                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item sx={{ width: '100%' }} onClick={() => handleClick('20:30')}>
                  <Time>20:30</Time>
                  <Time>AVAILABLE</Time>
                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item sx={{ width: '100%' }} onClick={() => handleClick('21:00')}>
                  <Time>21:00</Time>
                  <Time>AVAILABLE</Time>
                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item sx={{ width: '100%' }} onClick={() => handleClick('21:30')}>
                  <Time>21:30</Time>
                  <Time>AVAILABLE</Time>
                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item sx={{ width: '100%' }} onClick={() => handleClick('22:00')}>
                  <Time>22:00</Time>
                  <Time>AVAILABLE</Time>
                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item sx={{ width: '100%' }} onClick={() => handleClick('22:30')}>
                  <Time>22:30</Time>
                  <Time>AVAILABLE</Time>
                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item sx={{ width: '100%' }} onClick={() => handleClick('23:00')}>
                  <Time>23:00</Time>
                  <Time>AVAILABLE</Time>
                </Item>
              </Grid>
            </Grid>

        </Counts>
      </Box>
    </SelectContainer>
  )
}

export default SelectTime;