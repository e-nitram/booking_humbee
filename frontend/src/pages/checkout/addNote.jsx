import { Link, OutlinedInput, Stack, Typography, styled } from "@mui/material";
import React from "react";
import { useCheckOutContext } from "../../context/CheckoutContext";

export const AddNote = ({ element, colorSet }) => {
  const [noteFlag, setNoteFlag] = React.useState(1);
  const [note, setNote] = React.useState(element.addNote);
  const [addNote, setAddNote] = React.useState(element.addNote ? 0 : 1);
  const [order, setOrder] = useCheckOutContext();
  return (
    <>
      {!addNote ? (
        <Stack
          marginTop={"5px"}
          marginBottom={"10px"}
          direction={"row"}
          justifyContent={"space-between"}
        >
          <Stack
            sx={{
              fontFamily: "Poppins",
              fontSize: "12px",
              fontWeight: 600,
            }}
          >
            {note}
          </Stack>
          <Stack
            sx={{
              cursor: "pointer",
            }}
            onClick={() => {
              setAddNote(1);
            }}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 9.49971V11.9997H2.5L9.87333 4.62638L7.37333 2.12638L0 9.49971ZM11.8067 2.69305C12.0667 2.43305 12.0667 2.01305 11.8067 1.75305L10.2467 0.193047C9.98667 -0.0669531 9.56667 -0.0669531 9.30667 0.193047L8.08667 1.41305L10.5867 3.91305L11.8067 2.69305Z"
                fill="#4D7D6B"
              />
            </svg>
          </Stack>
        </Stack>
      ) : (
        <></>
      )}
      <Stack
        spacing={1}
        sx={{
          display: !addNote ? "none" : "",
          marginTop: '5px',
          marginBottom:'5px'
        }}
      >
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: "12px",
            fontFamily: "Poppins",
            color: colorSet ? 'rgba(64, 103, 88, 1)':  "rgba(0, 0, 0, 0.87)",
            cursor: "pointer",
          }}
          onClick={() => {
            setNoteFlag(0);
          }}
        >
          Add Note
        </Typography>

        <FormInput
          required
          placeholder="Add any extra details here"
          sx={{
            display: noteFlag ? "none" : "",
          }}
          value={note}
          onChange={(e) => {
            setNote(e.target.value);
            let data = order;
            data.orderItem = [
              ...data.orderItem.map((item, id) =>
                element.name === item.name ? { ...item, addNote: note } : item
              ),
            ];
            setOrder({ ...data });
          }}
        />
        {!noteFlag ? (
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Link
              onClick={() => {
                setNoteFlag(1);
              }}
              sx={{
                cursor: "pointer",
                textDecoration: "none",
                color: "rgba(77, 125, 107, 1)",
                fontFamily: "Poppins",
                fontSize: "13px",
              }}
            >
              CANCEL
            </Link>
            <Link
              onClick={() => {
                setAddNote(0);
              }}
              sx={{
                cursor: "pointer",
                textDecoration: "none",
                color: "rgba(77, 125, 107, 1)",
                fontFamily: "Poppins",
                fontSize: "13px",
                marginBottom: '10px'
              }}
            >
              SAVE CHANGES
            </Link>
          </Stack>
        ) : (
          <></>
        )}
      </Stack>
    </>
  );
};

const FormInput = styled(OutlinedInput)({
  height: "40px",
  borderRadius: "20px",
  backgroundColor: "#F8F8F8",
  "& .MuiInputBase-root:focus": {
    outline: "none",
  },
  "& input": {
    border: "none",
  },
  "& input::placeholder": {
    fontSize: "12px",
    fontFamily: "DM Sans",
  },
  "& input:focus": {
    outline: "none",
  },
  "&:focus": { outline: "none" },
});
