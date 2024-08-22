import { Card, Stack, IconButton, Typography, Button, Box } from '@mui/material'
import styled from '@emotion/styled'
import ClearIcon from '@mui/icons-material/Clear'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useAppContext } from '../context/AppContext';
import openmark from '../asstes/openmark.png';
import user from '../asstes/icons/user.png'
import calendarselected from '../asstes/icons/calendarselected.png'
import calendar from '../asstes/icons/calendar.png'
import clock from '../asstes/icons/clockselected.png'
import clockselected from '../asstes/icons/clock.png'

const Wrap = styled(Card)({
  maxWidth: 400,
  width: 'calc(100% - 40px)',
  borderRadius: '15px 15px 26px 26px',
  position: 'fixed',
  right: '20px',
  bottom: '20px',
  paddingBottom: 70,
  maxHeight: 'calc(100vh - 60px)',
  zIndex: 99
})

const HeaderButton = styled(IconButton)({
  backgroundColor: '#4D7D6B',
  padding: 0,
  width: 30,
  height: 30,
  '&:hover': {
    backgroundColor: '#4D7D6B',
  },
  '& svg': {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Source Sans Pro'
  },
  '&:focus': { outline: 'none' }
})

const DataButton = styled(Button)(({ open }) => ({
  backgroundColor: '#4D7D6B',
  padding: '4px 12px',
  height: 36,
  fontSize: 16,
  fontFamily: 'Source Sans Pro',
  fontWeight: 600,
  borderRadius: 18,
  gap: 8,
  color: open ? 'white' : '#CEDED8 !important',
  boxShadow: open ? 'none' : '0px 1px 3px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.25)',
  '&:hover': {
    backgroundColor: '#4D7D6B',
  },
  '& .MuiButton-startIcon': {
    margin: 0
  },

}))

const HeaderTitle = styled(Typography)({
  fontSize: 14,
  fontWeight: 600,
  fontFamily: 'Source Sans Pro'
})

const CompleteButton = styled(Button)({
  fontSize: 14,
  fontWeight: 600,
  fontFamily: 'Source Sans Pro',
  width: '100%',
  height: 52,
  textTransform: 'none',
  backgroundColor: '#4D7D6B',
  color: '#000000',
  borderRadius: 26,
  '&:hover': {
    backgroundColor: '#4D7D6B',
  },
  '&:disabled': {
    backgroundColor: '#CEDED8',
    color: 'white',
    fontFamily: 'Source Sans Pro'
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

const SelectContainer = ({ children }) => {
  const [context, setContext] = useAppContext();
  const completed = !!context.booking_number && !!context.day && !!context.time;
  let current = "number"
  const handleClick = () => {
    setContext({ ...context, state: '/contact_reservation' })
  }
  return (
    <Wrap>
      {!(context.state === '/select') ? (<Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        p={2}
      >
        <HeaderButton
          onClick={() => {
            setContext({ ...context, state: '/select', latestState: context.state })
          }}
        >
          <ArrowBackIosNewIcon sx={{
            '&:focus': { outline: 'none' }
          }} />
        </HeaderButton>
        <HeaderTitle>
          Restaurant Sjefietshe
        </HeaderTitle>
        <HeaderButton onClick={() => setContext({ ...context, state: '/open', latestState: context.state })}>
          <ClearIcon />
        </HeaderButton>
      </Stack>) : (<Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        p={2}
      >
        <Stack></Stack>
        <HeaderTitle>
          Restaurant Sjefietshe
        </HeaderTitle>
        <HeaderButton onClick={() => setContext({ ...context, state: '/open', latestState: context.state })}>
          <ClearIcon sx={{
            '&:focus': { outline: 'none' }
          }} />
        </HeaderButton>
      </Stack>)}

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        px={1}
      >
        <DataButton
          startIcon={<img alt='number' src={context.booking_number || current === "number" ? user : user} />}
          open={!!context.booking_number || current === "number"}
          onClick={() => setContext({ ...context, state: '/select_number' })}
        >
          {context.booking_number ? context.booking_number : '---'}
        </DataButton>
        <DataButton
          disabled={!context.booking_number}
          disableElevation
          startIcon={<img alt='day' src={context.day || current === "day" ? calendarselected : calendar} />}
          open={!!context.day || current === "day"}
          onClick={() => setContext({ ...context, state: '/select_day' })}
        >
          {context.day ? new Date(context.day).toLocaleDateString('en-US', { day: '2-digit', month: 'short', timeZone: 'UTC' })
            : '---'}
        </DataButton>

        <DataButton
          disabled={!context.day}
          disableElevation
          startIcon={<img alt='time' src={context.time || current === "time" ? clockselected : clock} />}
          open={!!context.time || current === "time"}
          onClick={() => setContext({ ...context, state: '/select_time' })}
        >
          {context.time ? context.time : '---'}
        </DataButton>
      </Stack>
      {children}
      <Box sx={{ position: 'absolute', bottom: 0, width: '100%' }}  >
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
          disabled={!completed}
          disableElevation
        >
          Book a table
        </CompleteButton>
      </Box>
    </Wrap>
  )
}

export default SelectContainer