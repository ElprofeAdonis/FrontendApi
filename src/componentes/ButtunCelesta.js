import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

function ButtunCeleste(props) {
  const ButtunCeleste = styled(Button)({
    margin: "auto",
    boxShadow: "none",
    textTransform: "none",
    border: "none",
    width: props.width,
    height: props.height,
    borderRadius: "10px",
    fontSize: 16,
    padding: "6px 10px",
    float: props.float,
    lineHeight: 1.5,
    backgroundColor: "#40A2E3",
    fontFamily: ["Open Sans", "sans-serif"].join(","),
    "&:hover": {
      backgroundColor: "#4CB9E7",
      boxShadow: "none",
      border: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#2E3E5C",
      border: "none",
    },
  });
  return (
    <ButtunCeleste
      variant="contained"
      disableRipple
      href={props.href}
      onClick={props.onClick}
    >
      {props.TextIdit}
    </ButtunCeleste>
  );
}

export default ButtunCeleste;
