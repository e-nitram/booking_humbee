import { Card, Stack, Typography, OutlinedInput } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import { useAppContext } from '../../context/AppContext'


const CardItem = styled(Card)({
    padding: "16px 24px 16px 24px",
    borderRadius: "15px",
    backgroundColor: "white",
    border: '1px solid rgba(0, 0, 0, 0.23)'
})

const Additionall = styled(OutlinedInput)({
    borderRadius: '15px',
    '& input::placeholder': {
        fontSize: '14px',
        fontFamily: 'Source Sans Pro',
    },
    backgroundColor: '#F8F8F8',
    fontSize: '12px'
})

const DeliveryDetails = () => {
    const [context, setContext] = useAppContext();
    const [remark, setRemark] = React.useState(context.remark)


    return (<CardItem>
        <Stack>
            <Typography
                sx={{
                    marginBottom: "5px",
                    fontWeight: 600,
                    fontSize: "18px",
                    fontFamily: "Poppins",
                    color: "rgba(0, 0, 0, 0.87)",
                }}
            >
                Delivery details
            </Typography>
            <Typography
                sx={{
                    fontSize: 12,
                    fontWeight: 400,
                    color: "#00000099",
                    fontFamily: "Poppins",
                    marginBottom: "10px",
                }}
            >
                Please check the information below
            </Typography>
            <Stack
                sx={{
                    padding: "24px",
                    gap: 3,
                    borderRadius: "20px",
                    border: "1px solid rgba(0, 0, 0, 0.23)",
                }}
            >
                <Stack
                    direction={"row"}
                    spacing={2}
                    sx={{
                        borderRadius: "20px",
                        justifyContent: "space-between",
                    }}
                >
                    <Stack justifyContent={'center'}>
                        <svg
                            width="24"
                            height="21"
                            viewBox="0 0 24 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M15.5 4.5C16.6 4.5 17.5 3.6 17.5 2.5C17.5 1.4 16.6 0.5 15.5 0.5C14.4 0.5 13.5 1.4 13.5 2.5C13.5 3.6 14.4 4.5 15.5 4.5ZM5 11C2.2 11 0 13.2 0 16C0 18.8 2.2 21 5 21C7.8 21 10 18.8 10 16C10 13.2 7.8 11 5 11ZM5 19.5C3.1 19.5 1.5 17.9 1.5 16C1.5 14.1 3.1 12.5 5 12.5C6.9 12.5 8.5 14.1 8.5 16C8.5 17.9 6.9 19.5 5 19.5ZM10.8 9.5L13.2 7.1L14 7.9C15.3 9.2 17 10 19.1 10V8C17.6 8 16.4 7.4 15.5 6.5L13.6 4.6C13.1 4.2 12.6 4 12 4C11.4 4 10.9 4.2 10.6 4.6L7.8 7.4C7.4 7.8 7.2 8.3 7.2 8.8C7.2 9.4 7.4 9.9 7.8 10.2L11 13V18H13V11.8L10.8 9.5ZM19 11C16.2 11 14 13.2 14 16C14 18.8 16.2 21 19 21C21.8 21 24 18.8 24 16C24 13.2 21.8 11 19 11ZM19 19.5C17.1 19.5 15.5 17.9 15.5 16C15.5 14.1 17.1 12.5 19 12.5C20.9 12.5 22.5 14.1 22.5 16C22.5 17.9 20.9 19.5 19 19.5Z"
                                fill="#4D7D6B"
                            />
                        </svg>
                    </Stack>
                    <Typography
                        sx={{
                            fontSize: "13px",
                            fontWeight: 400,
                            width: "268px",
                            fontFamily: "DM Sans",
                        }}
                    >
                        Amsterdam Bos en Lommerweg
                    </Typography>
                    <Stack
                        onClick={() => setContext({ ...context, state: '/add_address' })}
                        sx={{
                            cursor: 'pointer',
                            justifyContent: 'center'
                        }}>
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2.25 12.9374V15.7499H5.0625L13.3575 7.45492L10.545 4.64242L2.25 12.9374ZM15.5325 5.27992C15.825 4.98742 15.825 4.51492 15.5325 4.22242L13.7775 2.46742C13.485 2.17492 13.0125 2.17492 12.72 2.46742L11.3475 3.83992L14.16 6.65242L15.5325 5.27992Z"
                                fill="#4D7D6B"
                            />
                        </svg>
                    </Stack>
                </Stack>
                <Stack
                    direction={"row"}
                    spacing={2}
                    sx={{
                        borderRadius: "20px",
                        justifyContent: "space-between",
                    }}
                >
                    <Stack justifyContent={'center'}>
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M16.6667 2.50016H15.8333V0.833496H14.1667V2.50016H5.83334V0.833496H4.16667V2.50016H3.33334C2.41667 2.50016 1.66667 3.25016 1.66667 4.16683V17.5002C1.66667 18.4168 2.41667 19.1668 3.33334 19.1668H16.6667C17.5833 19.1668 18.3333 18.4168 18.3333 17.5002V4.16683C18.3333 3.25016 17.5833 2.50016 16.6667 2.50016ZM16.6667 17.5002H3.33334V6.66683H16.6667V17.5002Z"
                                fill="#4D7D6B"
                            />
                        </svg>
                    </Stack>
                    <Typography
                        sx={{
                            fontSize: "13px",
                            fontWeight: 400,
                            width: "268px",
                            fontFamily: "DM Sans",
                        }}
                    >
                        Pick-up between 13:00 - 13:30
                    </Typography>
                    <Stack justifyContent={'center'}>
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2.25 12.9374V15.7499H5.0625L13.3575 7.45492L10.545 4.64242L2.25 12.9374ZM15.5325 5.27992C15.825 4.98742 15.825 4.51492 15.5325 4.22242L13.7775 2.46742C13.485 2.17492 13.0125 2.17492 12.72 2.46742L11.3475 3.83992L14.16 6.65242L15.5325 5.27992Z"
                                fill="#4D7D6B"
                            />
                        </svg>
                    </Stack>
                </Stack>
            </Stack>
            <Typography
                sx={{
                    fontSize: 12,
                    fontWeight: 400,
                    color: "#00000099",
                    fontFamily: "Poppins",
                    marginBottom: "10px",
                }}
            >
                Additional Information
            </Typography>
            <Additionall
                value={remark}
                onChange={(e) => setRemark(e.target.value)}
                placeholder="Any dietary restricitions or special request?"
                multiline
                rows={4}
            />
        </Stack>
    </CardItem>)
}

export default DeliveryDetails