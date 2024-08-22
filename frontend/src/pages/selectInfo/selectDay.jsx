import React from 'react'
import styled from '@emotion/styled';
import { Box, Card } from '@mui/material';
import { useAppContext } from '../../context/AppContext';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import SelectContainer from '../../containers/SelectContainer'
import dayjs from 'dayjs';

const Counts = styled(Card)({
  minHeight: '250px',
  borderRadius: '13px',
  backgroundColor: '#F8F8F8'
})

const SelectDay = () => {
  const [context, setContext] = useAppContext();
  const getDate = (dateValue) => {
      const months = {
        Jan: '01',
        Feb: '02',
        Mar: '03',
        Apr: '04',
        May: '05',
        Jun: '06',
        Jul: '07',
        Aug: '08',
        Sep: '09',
        Oct: '10',
        Nov: '11',
        Dec: '12',
      }
      const defaultDate = `${dateValue.$d.toString().split(' ')[3]}-${months[dateValue.$d.toString().split(' ')[1]]}-${dateValue.$d.toString().split(' ')[2]}`
      
      setContext({ ...context, day: defaultDate, state: '/select' })
  }

  return (
    <SelectContainer>
      <Box
        px={2}
        mt={1}
      >
        <Box >
          <Counts>
            <LocalizationProvider dateAdapter={AdapterDayjs} >
              <DateCalendar
                sx={{
                  '& .Mui-selected': {
                    backgroundColor: '#4D7D6B !important',
                    color: 'white !important'
                  },
                  '& .MuiButtonBase-root:focus': {
                    color: '#444254',
                    fontSize: 18,
                    fontWeight: 600,
                    fontFamily: 'Source Sans Pro',
                    outline: 'none'
                  },
                  '& .MuiPickersCalendarHeader-label:focus': {
                    color: '#444254',
                    fontSize: 18,
                    fontWeight: 600,
                    fontFamily: 'Source Sans Pro',
                    outline: 'none'
                  },
                  '& .MuiPickersCalendarHeader-switchViewButton': {
                    display: 'none'
                  },
                  '& .MuiIconButton-edgeEnd': {
                    color: 'black'
                  },
                  '& .MuiIconButton-edgeStart': {
                    color: '#4D7D6B'
                  },
                  '&:focus': { outline: 'none' },
                  maxWidth: '400px',
                  width: 'calc(100% - 5px)'
                }}
                onChange={(date) => {
                  getDate(date);
                }}
                defaultValue={context.day ? dayjs(context.day.toString()) : null}
                disablePast
              />
            </LocalizationProvider>
          </Counts>
        </Box>
      </Box>
    </SelectContainer>
  )

}

export default SelectDay;