import { FormControl, Select, MenuItem, Stack, Typography, styled } from "@mui/material";
import React from "react";
import { useAppContext } from "../../context/AppContext";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 75,
      borderRadius: '15px'
    },
  },
};
const names = ["NL", "EN"];

export const Header = ({ title }) => {
  const [context, setContext] = useAppContext();
  const [language, setLanguage] = React.useState(context.language || names[0]); // Default to first language if context is not yet set

  const handleChange = (event) => {
    const newLanguage = event.target.value;
    setLanguage(newLanguage);
    setContext({...context, language: newLanguage}); // Update the context after local state update
  };

  return (
    <HeaderContainer direction={"row"}>
      <Stack
        sx={{ cursor: "pointer" }}
        onClick={() => {
          setContext({ ...context, state: "/open" });
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM15 13.59L13.59 15L10 11.41L6.41 15L5 13.59L8.59 10L5 6.41L6.41 5L10 8.59L13.59 5L15 6.41L11.41 10L15 13.59Z"
            fill="black"
            fillOpacity="0.54"
          />
        </svg>
      </Stack>
      <HeaderTitle>{title}</HeaderTitle>
      <FormControl>
        <StyledSelect
          value={language}
          onChange={handleChange}
          MenuProps={MenuProps}
          inputProps={{ "aria-label": "Without label" }}
        >
          {names.map((name) => (
            <StyledMenuItem key={name} value={name}>
              {name}
            </StyledMenuItem>
          ))}
        </StyledSelect>
      </FormControl>
    </HeaderContainer>
  );
};

const HeaderContainer = styled(Stack)({
  gap: '15px',
  alignItems: "center",
  backgroundColor: "#F8F8F8",
  padding: '12px 16px 12px 16px'
});

const HeaderTitle = styled(Typography)(({theme}) => ({
  fontSize: 14,
  fontWeight: 600,
  width: '260px',
  fontFamily: "Poppins",
  [theme.breakpoints.down('425')]: {
    width: '200px',
  },
  [theme.breakpoints.down('375')]: {
    width: '170px',
  },
}));

const StyledSelect = styled(Select)(({ theme }) => ({
  width: 75,
  height: 30,
  "& .MuiSelect-select": {
    fontSize: 13,
    padding: "8px 14px",
  },
  '.MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgba(248, 248, 248, 1)',
    borderWidth: 'none'
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgba(248, 248, 248, 1)',
    borderWidth: 'none'
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgba(248, 248, 248, 1)',
    borderWidth: 'none'
  },
  '& .MuiPopover-paper': {
    backgroundColor: 'black'
  },
  [theme.breakpoints.down('425')]: {
    width: 65, // Updated to consistent value mentioned in your style comments
  }
}));

const StyledMenuItem = styled(MenuItem)({
  fontFamily: 'DM Sans',
  fontSize: '14px',
  color: 'rgba(0, 0, 0, 0.87)',
  justifyContent: 'center',
  alignItems: 'center',
  padding: "8px 0px 8px 0px",
});
