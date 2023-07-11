/*
{
const Wrapper = styled.div`
${ui.fz(16)};
${ui.block.dg}
${ui.bgc(ui.c.gray.g800)};
color: ${texColor};
// TODO: Autoprefix for IE
grid-template-columns: 50% 1fr;
grid-template-rows: 60px 1fr 40px;
min-height: 100vh;
`
const Header = styled.header`
// col(Horizontal), row(Vertical)
${ui.grid(1, 4, 1, 2)};
${ui.bgc(ui.c.gray.g400)};
`
const Header__Mol_Title = styled.div`
${ui.fx_center}
${ui.color(ui.c.main)};
${ui.fz(24)};
${ui.bgc(ui.c.dark)};
height: 60px;
`
// Atomic
const TextArea__Org = styled.div`
// col(Horizontal), row(Vertical)
${ui.grid(1, 2, 2, 3)}
`
const TextArea = styled.textarea`
${ui.block.df}
${ui.bgc(ui.c.gray.g900)};
${ui.fz(16)};
color: ${texColor};
width: 100%;
height: 100%;
padding: 24px;
border: none;
resize: none;

&:hover {
background-color: #222;
transition: 0.3s;
}
}
*/
const button = css`
  /* for Text */
  /* font-size: calc(1rem + 1vw); */
  ${ui.fz(12)}
  text-align: center;
  /* Block */
  margin: 8px;
  padding: 0.5em 48px;
  /* Graphic Design */
  /* color: ghostwhite; */
  border: none;
  border-radius: 4em;
  background-color: hotpink;
  box-shadow: 4px 4px 12px 0 rgb(0, 0, 0, 50%);
  transition: 0.3s;
  &:hover {
    opacity: 0.85;
    cursor: pointer;
  }
`;

export const Button = ({ classes, onClick, text, children, ...props }) => {
  return (
    <button
      className={button ? button : classes}
      onClick={onClick ? onClick : null}
      {...props}
    >
      {text ? text : children}
    </button>
  );
};

import { Button } from "@mui/material";
import { styled, createTheme } from "@mui/system";
const theme = createTheme({});
export const Buttonred = styled(Button)({
  backgroundColor: "#EE0025",
  fontSize: "18px",
  fontWeight: 700,
  borderRadius: "50px",
  padding: "24px 56px",
  color: "primary" | "secondary",
  color: "#fff",
  textAlign: "center",
  lineHeight: "22px",
  textTransform: "inherit",
  "&:hover": {
    backgroundColor: "#c3001e",
    color: "#fff",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "11px",
    padding: "10px 12px !important",
    minWidth: "145px",
  },
  "&:disabled": {
    backgroundColor: "rgba(0, 0, 102, 0.1)",
    color: " hwb(240deg 56% 34%)",
  },
});
export const Buttonredsmall = styled(Button)({
  backgroundColor: "#EE0025",
  fontSize: "15px",
  fontWeight: 600,
  borderRadius: "50px",
  padding: "15px 30px",
  color: "primary" | "secondary",
  color: "#fff",
  textAlign: "center",
  lineHeight: "22px",
  textTransform: "inherit",
  "&:hover": {
    backgroundColor: "#c3001e",

    color: "#fff",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
    padding: "10px 20px",
  },
  "&:disabled": {
    backgroundColor: "rgba(0, 0, 102, 0.1)",
    color: " hwb(240deg 56% 34%)",
  },
});
export const Buttonblue = styled(Button)({
  backgroundColor: "#000066",
  color: "#fff",
  fontSize: "27px",
  fontWeight: 800,
  padding: "8px 25px",
  borderRadius: "10px",
  filter: "drop-shadow(5px 5px 16px rgba(0, 0, 0, 0.35))",
  "&:hover": {
    backgroundColor: "#01014a",
  },
});

export const Buttongreysmall = styled(Button)({
  backgroundColor: "lightgrey",
  fontSize: "15px",
  fontWeight: 600,
  borderRadius: "10px",
  padding: "15px 15px",
  color: "primary" | "secondary",
  color: "#000",
  textAlign: "center",
  lineHeight: "22px",
  textTransform: "inherit",
  "&:hover": {
    backgroundColor: "grey",
    color: "#fff",
  },
  "&:focus": {
    backgroundColor: "green",

    color: "#fff",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
    padding: "10px 20px",
  },
  "&:disabled": {
    backgroundColor: "rgba(0, 0, 102, 0.1)",
    color: " hwb(240deg 56% 34%)",
  },
});
