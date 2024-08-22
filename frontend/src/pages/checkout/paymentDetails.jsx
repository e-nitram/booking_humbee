import React, { useEffect } from 'react';
import { useAppContext } from '../../context/AppContext';
import { Card, Stack, Typography, Checkbox, OutlinedInput, FormControlLabel, Radio, styled, FormControl, MenuItem, Select, Grid } from '@mui/material';
import validator from 'validator';

const CardItem = styled(Card)({
    padding: "16px 24px 16px 24px",
    borderRadius: "15px",
    backgroundColor: "white",
    border: '1px solid rgba(0, 0, 0, 0.23)'
});

const FormInput = styled(OutlinedInput)({
    height: '40px',
    borderRadius: '20px',
    backgroundColor: '#F8F8F8',
    '& .MuiInputBase-root:focus': {
        outline: 'none'
    },
    '& input': {
        border: 'none'
    },
    '& input::placeholder': {
        fontSize: '12px',
        fontFamily: 'Poppins',
    },
    '& input:focus': {
        outline: 'none'
    },
    '&:focus': { outline: 'none' }
});

const PaymentCard = styled(Stack)(({ theme }) => ({
    height: 40,
    borderRadius: '20px',
    border: '1px solid rgba(0, 0, 0, 0.23)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '10px', // Add bottom margin for separation
}));

const PaymentDetail = () => {
    const [context, setContext] = useAppContext();
    const [bank, setBank] = React.useState('');
    const [company, setCompany] = React.useState('Miyagami B.V');
    const [vatNumber, setVatNumber] = React.useState(105);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = React.useState();
    const [isCompanyDisabled, setIsCompanyDisabled] = React.useState(false);
    const [showCompanyFields, setShowCompanyFields] = React.useState(false);

    useEffect(() => {
        setIsCompanyDisabled(selectedPaymentMethod === 'Cash');
        setContext({ ...context, paymentmethod: selectedPaymentMethod});
    }, [selectedPaymentMethod, context, setContext]);

    const handleChangeBank = (event) => {
        setBank(event.target.value);
    };

    const handlePaymentMethodChange = (event) => {
        const method = event.target.value;
        setSelectedPaymentMethod(method);
        // setContext({...context, paymentmethod: selectedPaymentMethod})
        // console.log('111', context)
    };

    const toggleCompanyFields = () => {
        setShowCompanyFields(!showCompanyFields);
    };

    return (
        <CardItem>
            <Stack mb={1}>
                <Typography
                    sx={{
                        fontFamily: 'Poppins',
                        fontSize: '18px',
                        fontWeight: 600,
                    }}
                >
                    Payment details
                </Typography>
            </Stack>
            <Stack mb={2}>
                <Typography
                    sx={{
                        fontFamily: 'Poppins',
                        fontSize: '12px',
                        fontWeight: 400,
                        lineHeight: '140%',
                        color: '#444254'
                    }}
                >
                    Please choose an option below
                </Typography>
            </Stack>
            <FormControlLabel
                control={<Checkbox checked={showCompanyFields} onChange={toggleCompanyFields} color='default' />}
                label="Company"
                sx={{
                    '& span.css-ahj2mt-MuiTypography-root': {
                        fontFamily: 'DM Sans',
                        fontSize: '14px',
                        fontWeight: 400,
                    },
                    '& span.css-dk24d0-MuiButtonBase-root-MuiCheckbox-root svg': {
                        width: '20px',
                        height: '20px'
                    },
                    '& span.css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root': {
                        color: 'rgba(77, 125, 107, 1)'
                    },
                    '& .MuiTypography-root': { fontFamily: 'DM Sans' }
                }}
            />
            {showCompanyFields && (
                <Stack spacing={1}>
                    <Stack>
                        <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', fontWeight: 500 }}>Company</Typography>
                        <FormInput
                            required
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                        />
                    </Stack>
                    <Stack>
                        <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', fontWeight: 500 }}>VAT Number</Typography>
                        <FormInput
                            required
                            value={vatNumber}
                            onChange={(e) => setVatNumber(e.target.value)}
                        />
                    </Stack>
                </Stack>
            )}
            <Stack gap={1} marginBottom={2}>
                <Typography
                    sx={{
                        fontFamily: 'Poppins',
                        fontWeight: 500
                    }}
                >
                    Payment Method
                </Typography>
                <Grid container spacing={1}>
                    {['Credit Card', 'iDeal', 'Cash'].map((method) => (
                        <Grid item xs={12} sm={6} key={method}>
                            <PaymentCard>
                                <FormControlLabel
                                    control={
                                        <Radio
                                            checked={selectedPaymentMethod === method}
                                            onChange={handlePaymentMethodChange}
                                            value={method}
                                        />
                                    }
                                    label={method}
                                    sx={{
                                        '& .MuiTypography-root': { fontFamily: 'Poppins', fontWeight: 500, fontSize: '13px' },
                                        width: '125px',
                                        padding: '10px',
                                        '& span .css-hyxlzm svg': {
                                            width: '14px',
                                            height: '14px'
                                        }

                                    }}
                                />
                            </PaymentCard>
                        </Grid>
                    ))}
                </Grid>
                {selectedPaymentMethod == 'iDeal' && (
                    <>
                        <Typography
                            sx={{
                                fontFamily: 'Poppins',
                                fontWeight: 500
                            }}
                        >
                            Bank
                        </Typography>
                        <FormControl sx={{ minWidth: 120 }}>
                            <Select
                                value={bank}
                                onChange={handleChangeBank}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                sx={{ borderRadius: '20px', height: '40px', fontFamily: 'DM Sans' }}
                            >
                                <MenuItem value="">ING</MenuItem>
                                <MenuItem value="ABN AMERO">ABN AMERO</MenuItem>
                                <MenuItem value="RaboBank">RaboBank</MenuItem>
                            </Select>
                        </FormControl>
                    </>
                )}
            </Stack>
        </CardItem>
    );
}

export default PaymentDetail;
