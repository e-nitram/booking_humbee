import React from 'react';
import { Card, Stack, Typography, Link } from '@mui/material';
import styled from '@emotion/styled';
import { useAppContext } from '../../context/AppContext'
import { Header } from '../../components/Header/index'

const Wrap = styled(Card)({
    maxWidth: '430px',
    width: 'calc(100% - 40px)',
    borderRadius: '15px 15px 26px 26px',
    position: 'fixed',
    right: '20px',
    bottom: '20px',
    paddingBottom: 70,
    maxHeight: 'calc(100vh - 100px)',
    height: '700px',
    zIndex: 99,
});

const LoadMore = styled(Stack)(({ theme }) => ({
    [theme.breakpoints.down('500')]: {
        width: '90px',
        fontSize: '12px'
    },
    borderRadius: "100px",
    width: 163,
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid rgba(64, 103, 88, 0.5)',
    fontSize: '14px',
    fontWeight: 600,
    fontFamily: 'Poppins',
    color: 'rgba(77, 125, 107, 1)',
    cursor: 'pointer',
}))

const Landing = styled(Stack)({
    padding: "32px 40px 16px 40px"
})

const PickUpStore = ({ children }) => {
    const [context, setContext] = useAppContext();
    const [flag, setFlag] = React.useState(1);

    return (
        <Wrap>
            <Header title="Take-Away" />
            {console.log('context', context)}
            <Landing direction={'column'} gap={2}>
                <Stack sx={{
                    marginBottom: '20px'
                }}>
                    <Typography sx={{
                        fontWeight: 600,
                        fontFamily: 'Poppins',
                        fontSize: 21,
                    }}>
                        Pick-Up Store
                    </Typography>
                    <Typography sx={{
                        fontWeight: 400,
                        fontFamily: 'DM Sans',
                        fontSize: 14,
                        color: 'rgba(0, 0, 0, 0.6)'
                    }}>
                        Please choose an option below
                    </Typography>
                </Stack>
                {flag ? (<Stack spacing={3} gap={1}>
                    <Card sx={{
                        display: 'flex',
                        borderRadius: '15px',
                        padding: '16px 20px 16px 16px',
                        backgroundColor: '#F8F8F8'
                    }}>
                        <Stack sx={{ marginRight: 2 }}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM14.2 14.2L9 11V5H10.5V10.2L15 12.9L14.2 14.2Z" fill="#4D7D6B" />
                            </svg>
                        </Stack>
                        <Stack
                            spacing={1}
                            sx={{
                                width: '274px',
                                cursor: 'pointer'
                            }}
                            onClick={() => {
                                setContext({ ...context, state: '/store_item', contextStoreName: `Domino's Amsterdam Johan Huizingalaan` })
                            }}
                        >
                            <Typography sx={{
                                fontWeight: 600,
                                fontSize: 14,
                                fontFamily: 'Poppins',
                                lineHeight: '24px',
                                letterSpacing: '0.15px'
                            }}>
                                Domino's Amsterdam Johan Huizingalaan
                            </Typography>
                            <Typography sx={{
                                fontWeight: 400,
                                fontSize: 13,
                                fontFamily: 'Poppins',
                                color: 'rgba(0, 0, 0, 0.6)',
                                lineHeight: '20.02px',
                            }}>
                                Johan Huizingalaan 187, 1065JA AMSTERDAM, NL
                            </Typography>
                        </Stack>
                    </Card>
                    <Stack sx={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        height: '38px',
                    }}>
                        <Link
                            gap={1}
                            sx={{
                                alignItems: 'center',
                                display: 'flex',
                                justifyContent: 'center',
                                textDecoration: 'none',
                                color: 'rgba(77, 125, 107, 1)',
                                height: '38px',
                                ':focus': {
                                    outline: 'none'
                                }
                            }}
                            component="button"
                            variant="body2"
                            onClick={() => {
                                setContext({ ...context, state: '/order' })
                                setFlag(1)
                            }}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" fill="#4D7D6B" />
                            </svg>
                            <Typography sx={{
                                fontFamily: 'Poppins',
                                fontSize: '14px',
                                fontWeight: 600
                            }}>BACK</Typography>
                        </Link>
                        <LoadMore
                            onClick={() => {
                                setFlag(0)
                            }}
                        >
                            LOAD MORE
                        </LoadMore>
                    </Stack> </Stack>) : (<Stack
                        sx={{
                            maxHeight: 'calc(100vh - 100px)',
                            height: '480px',
                            zIndex: 99,
                            overflow: 'auto',
                            '&::-webkit-scrollbar': {
                                display: 'none'
                            }
                        }}
                    ><Stack spacing={1.5}>
                            <Card
                                onClick={() => {
                                    setContext({ ...context, state: '/store_item', contextStoreName: 'Amsterdam Bos en Lommerweg' })

                                }}
                                sx={{
                                    display: 'flex',
                                    borderRadius: '15px',
                                    padding: '16px 20px 16px 16px',
                                    cursor: 'pointer',
                                    backgroundColor: '#F8F8F8'
                                }}>
                                <Stack sx={{ marginRight: 2 }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 8C18 4.69 15.31 2 12 2C8.69 2 6 4.69 6 8C6 12.5 12 19 12 19C12 19 18 12.5 18 8ZM10 8C10 6.9 10.9 6 12 6C13.1 6 14 6.9 14 8C14 9.1 13.11 10 12 10C10.9 10 10 9.1 10 8ZM5 20V22H19V20H5Z" fill="#4D7D6B" />
                                    </svg>
                                </Stack>
                                <Stack
                                    spacing={1}
                                    sx={{
                                        width: '274px',
                                    }}

                                >
                                    <Typography sx={{
                                        fontWeight: 600,
                                        fontSize: 14,
                                        fontFamily: 'Poppins',
                                    }}>
                                        Amsterdam Bos en Lommerweg
                                    </Typography>
                                    <Typography sx={{
                                        fontWeight: 400,
                                        fontSize: 13,
                                        fontFamily: 'Poppins',
                                        color: 'rgba(0, 0, 0, 0.6)',
                                    }}>
                                        Bos en Lommerweg 215, 1055DT AMSTERDAM, NL
                                    </Typography>
                                    <Typography sx={{
                                        fontWeight: 400,
                                        fontSize: 13,
                                        fontFamily: 'Poppins',
                                        color: 'rgba(0, 0, 0, 0.6)',
                                    }}>
                                        0.7 km away
                                    </Typography>
                                </Stack>
                            </Card>
                            <Card
                                onClick={() => {
                                    setContext({ ...context, state: '/store_item', contextStoreName: 'Amsterdam Rozengracht' })

                                }}
                                sx={{
                                    display: 'flex',
                                    minHeight: 90,
                                    borderRadius: '15px',
                                    padding: '16px 20px 16px 16px',
                                    cursor: 'pointer',
                                    backgroundColor: '#F8F8F8'

                                }}
                            >
                                <Stack sx={{ marginRight: 2 }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 8C18 4.69 15.31 2 12 2C8.69 2 6 4.69 6 8C6 12.5 12 19 12 19C12 19 18 12.5 18 8ZM10 8C10 6.9 10.9 6 12 6C13.1 6 14 6.9 14 8C14 9.1 13.11 10 12 10C10.9 10 10 9.1 10 8ZM5 20V22H19V20H5Z" fill="#4D7D6B" />
                                    </svg>

                                </Stack>
                                <Stack spacing={1} sx={{
                                    width: '274px',
                                }}>
                                    <Typography sx={{
                                        fontWeight: 600,
                                        fontSize: 14,
                                        fontFamily: 'Poppins',
                                    }}>
                                        Amsterdam Rozengracht
                                    </Typography>
                                    <Typography sx={{
                                        fontWeight: 400,
                                        fontSize: 13,
                                        fontFamily: 'Poppins',
                                        color: 'rgba(0, 0, 0, 0.6)',
                                    }}>
                                        Bos en Lommerweg 215, 1055DT AMSTERDAM, NL
                                    </Typography>
                                    <Typography sx={{
                                        fontWeight: 400,
                                        fontSize: 13,
                                        fontFamily: 'Poppins',
                                        color: 'rgba(0, 0, 0, 0.6)',
                                    }}>
                                        1.3 km away
                                    </Typography>
                                </Stack>
                            </Card>
                            <Card
                                onClick={() => {
                                    setContext({ ...context, state: '/store_item', contextStoreName: 'Amsterdam Waterlandplein' })

                                }}
                                sx={{
                                    display: 'flex',
                                    minHeight: 90,
                                    borderRadius: '15px',
                                    padding: '16px 20px 16px 16px',
                                    cursor: 'pointer',
                                    backgroundColor: '#F8F8F8'

                                }}
                            >
                                <Stack sx={{ marginRight: 2 }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 8C18 4.69 15.31 2 12 2C8.69 2 6 4.69 6 8C6 12.5 12 19 12 19C12 19 18 12.5 18 8ZM10 8C10 6.9 10.9 6 12 6C13.1 6 14 6.9 14 8C14 9.1 13.11 10 12 10C10.9 10 10 9.1 10 8ZM5 20V22H19V20H5Z" fill="#4D7D6B" />
                                    </svg>

                                </Stack>
                                <Stack spacing={1} sx={{
                                    width: '274px',
                                }}>
                                    <Typography sx={{
                                        fontWeight: 600,
                                        fontSize: 14,
                                        fontFamily: 'Poppins',
                                    }}>
                                        Amsterdam Waterlandplein
                                    </Typography>
                                    <Typography sx={{
                                        fontWeight: 400,
                                        fontSize: 13,
                                        fontFamily: 'Poppins',
                                        color: 'rgba(0, 0, 0, 0.6)',
                                    }}>
                                        Bos en Lommerweg 215, 1055DT AMSTERDAM, NL
                                    </Typography>
                                    <Typography sx={{
                                        fontWeight: 400,
                                        fontSize: 13,
                                        fontFamily: 'Poppins',
                                        color: 'rgba(0, 0, 0, 0.6)',
                                    }}>
                                        0.7 km away
                                    </Typography>
                                </Stack>
                            </Card>
                            <Card
                                onClick={() => {
                                    setContext({ ...context, state: '/store_item', contextStoreName: 'Amsterdam Waterlandplein' })

                                }}
                                sx={{
                                    display: 'flex',
                                    minHeight: 90,
                                    borderRadius: '15px',
                                    padding: '16px 20px 16px 16px',
                                    cursor: 'pointer',
                                    backgroundColor: '#F8F8F8'

                                }}
                            >
                                <Stack sx={{ marginRight: 2 }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 8C18 4.69 15.31 2 12 2C8.69 2 6 4.69 6 8C6 12.5 12 19 12 19C12 19 18 12.5 18 8ZM10 8C10 6.9 10.9 6 12 6C13.1 6 14 6.9 14 8C14 9.1 13.11 10 12 10C10.9 10 10 9.1 10 8ZM5 20V22H19V20H5Z" fill="#4D7D6B" />
                                    </svg>

                                </Stack>
                                <Stack spacing={1} sx={{
                                    width: '274px',
                                }}>
                                    <Typography sx={{
                                        fontWeight: 600,
                                        fontSize: 14,
                                        fontFamily: 'Poppins',
                                    }}>
                                        Amsterdam Waterlandplein
                                    </Typography>
                                    <Typography sx={{
                                        fontWeight: 400,
                                        fontSize: 13,
                                        fontFamily: 'Poppins',
                                        color: 'rgba(0, 0, 0, 0.6)',
                                    }}>
                                        Bos en Lommerweg 215, 1055DT AMSTERDAM, NL
                                    </Typography>
                                    <Typography sx={{
                                        fontWeight: 400,
                                        fontSize: 13,
                                        fontFamily: 'Poppins',
                                        color: 'rgba(0, 0, 0, 0.6)',
                                    }}>
                                        0.7 km away
                                    </Typography>
                                </Stack>
                            </Card>
                            <Card
                                onClick={() => {
                                    setContext({ ...context, state: '/store_item', contextStoreName: 'Amsterdam Waterlandplein' })

                                }}
                                sx={{
                                    display: 'flex',
                                    minHeight: 90,
                                    borderRadius: '15px',
                                    padding: '16px 20px 16px 16px',
                                    cursor: 'pointer',
                                    backgroundColor: '#F8F8F8'

                                }}
                            >
                                <Stack sx={{ marginRight: 2 }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 8C18 4.69 15.31 2 12 2C8.69 2 6 4.69 6 8C6 12.5 12 19 12 19C12 19 18 12.5 18 8ZM10 8C10 6.9 10.9 6 12 6C13.1 6 14 6.9 14 8C14 9.1 13.11 10 12 10C10.9 10 10 9.1 10 8ZM5 20V22H19V20H5Z" fill="#4D7D6B" />
                                    </svg>

                                </Stack>
                                <Stack spacing={1} sx={{
                                    width: '274px',
                                }}>
                                    <Typography sx={{
                                        fontWeight: 600,
                                        fontSize: 14,
                                        fontFamily: 'Poppins',
                                    }}>
                                        Amsterdam Waterlandplein
                                    </Typography>
                                    <Typography sx={{
                                        fontWeight: 400,
                                        fontSize: 13,
                                        fontFamily: 'Poppins',
                                        color: 'rgba(0, 0, 0, 0.6)',
                                    }}>
                                        Bos en Lommerweg 215, 1055DT AMSTERDAM, NL
                                    </Typography>
                                    <Typography sx={{
                                        fontWeight: 400,
                                        fontSize: 13,
                                        fontFamily: 'Poppins',
                                        color: 'rgba(0, 0, 0, 0.6)',
                                    }}>
                                        0.7 km away
                                    </Typography>
                                </Stack>
                            </Card>
                            <Card
                                onClick={() => {
                                    setContext({ ...context, state: '/store_item', contextStoreName: 'Amsterdam Waterlandplein' })

                                }}
                                sx={{
                                    display: 'flex',
                                    minHeight: 90,
                                    borderRadius: '15px',
                                    padding: '16px 20px 16px 16px',
                                    cursor: 'pointer',
                                    backgroundColor: '#F8F8F8'

                                }}
                            >
                                <Stack sx={{ marginRight: 2 }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 8C18 4.69 15.31 2 12 2C8.69 2 6 4.69 6 8C6 12.5 12 19 12 19C12 19 18 12.5 18 8ZM10 8C10 6.9 10.9 6 12 6C13.1 6 14 6.9 14 8C14 9.1 13.11 10 12 10C10.9 10 10 9.1 10 8ZM5 20V22H19V20H5Z" fill="#4D7D6B" />
                                    </svg>

                                </Stack>
                                <Stack spacing={1} sx={{
                                    width: '274px',
                                }}>
                                    <Typography sx={{
                                        fontWeight: 600,
                                        fontSize: 14,
                                        fontFamily: 'Poppins',
                                    }}>
                                        Amsterdam Waterlandplein
                                    </Typography>
                                    <Typography sx={{
                                        fontWeight: 400,
                                        fontSize: 13,
                                        fontFamily: 'Poppins',
                                        color: 'rgba(0, 0, 0, 0.6)',
                                    }}>
                                        Bos en Lommerweg 215, 1055DT AMSTERDAM, NL
                                    </Typography>
                                    <Typography sx={{
                                        fontWeight: 400,
                                        fontSize: 13,
                                        fontFamily: 'Poppins',
                                        color: 'rgba(0, 0, 0, 0.6)',
                                    }}>
                                        0.7 km away
                                    </Typography>
                                </Stack>
                            </Card>
                            <Card
                                onClick={() => {
                                    setContext({ ...context, state: '/store_item', contextStoreName: 'Amsterdam Waterlandplein' })

                                }}
                                sx={{
                                    display: 'flex',
                                    minHeight: 90,
                                    borderRadius: '15px',
                                    padding: '16px 20px 16px 16px',
                                    cursor: 'pointer',
                                    backgroundColor: '#F8F8F8'

                                }}
                            >
                                <Stack sx={{ marginRight: 2 }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 8C18 4.69 15.31 2 12 2C8.69 2 6 4.69 6 8C6 12.5 12 19 12 19C12 19 18 12.5 18 8ZM10 8C10 6.9 10.9 6 12 6C13.1 6 14 6.9 14 8C14 9.1 13.11 10 12 10C10.9 10 10 9.1 10 8ZM5 20V22H19V20H5Z" fill="#4D7D6B" />
                                    </svg>

                                </Stack>
                                <Stack spacing={1} sx={{
                                    width: '274px',
                                }}>
                                    <Typography sx={{
                                        fontWeight: 600,
                                        fontSize: 14,
                                        fontFamily: 'Poppins',
                                    }}>
                                        Amsterdam Waterlandplein
                                    </Typography>
                                    <Typography sx={{
                                        fontWeight: 400,
                                        fontSize: 13,
                                        fontFamily: 'Poppins',
                                        color: 'rgba(0, 0, 0, 0.6)',
                                    }}>
                                        Bos en Lommerweg 215, 1055DT AMSTERDAM, NL
                                    </Typography>
                                    <Typography sx={{
                                        fontWeight: 400,
                                        fontSize: 13,
                                        fontFamily: 'Poppins',
                                        color: 'rgba(0, 0, 0, 0.6)',
                                    }}>
                                        0.7 km away
                                    </Typography>
                                </Stack>
                            </Card>
                            <Stack
                                direction={'row'}
                                sx={{
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Link
                                    gap={1}
                                    sx={{
                                        alignItems: 'center',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        textDecoration: 'none',
                                        color: 'rgba(77, 125, 107, 1)',
                                        height: '37px',
                                        ':focus': {
                                            outline: 'none'
                                        }
                                    }}
                                    component="button"
                                    variant="body2"
                                    onClick={() => {
                                        setContext({ ...context, state: '/order' })
                                    }}
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" fill="#4D7D6B" />
                                    </svg>
                                    <Typography sx={{
                                        fontFamily: 'Poppins',
                                        fontSize: '14px',
                                        fontWeight: 600,
                                    }}>BACK</Typography>
                                </Link>
                                <></>
                            </Stack>
                        </Stack></Stack>)}
            </Landing>

        </Wrap>
    );
};

export default PickUpStore;
