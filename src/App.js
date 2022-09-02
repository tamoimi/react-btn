import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Dialog from "@mui/material/Dialog";

import Checkbox from "@mui/material/Checkbox";
import Fab from "@mui/material/Fab";
import "./App.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "10px",
  p: 4,
};

function App() {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter((count) => count + 1);
  };
  const decrease = () => {
    if (counter > 0) {
      setCounter((count) => count - 1);
    }
  };
  const reset = () => {
    setCounter(0);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  // checked된 box를 alert창에 보여주기
  const [checkedItems, setCheckedItems] = useState([]);
  const onHandleChecked = (e) => {
    console.log(e.target.checked);
    if (e.target.checked) {
      setCheckedItems((prev) => [...prev, e.target.value]);
    } else {
      setCheckedItems((prev) =>
        prev.filter((value) => value !== e.target.value)
      );
    }
  };

  // 버튼을 클릭했을때 alert창 띄우기
  const [alertOpen, setAlertOpen] = React.useState(false);

  const handleClick = () => {
    setAlertOpen(!alertOpen);
  };

  return (
    <>
      <div className="container">
        <h1>React Count Button</h1>

        <div className="btn">
          <button className="minus" onClick={decrease}>
            -
          </button>
          <span className="result">{counter}</span>
          <button className="plus" onClick={increase}>
            +
          </button>
        </div>
        <button className="reset" onClick={reset}>
          Reset
        </button>
        <br />

        <Button className="modal-btn" onClick={handleOpen}>
          Open modal
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          // aria-labelledby="modal-modal-title"
          // aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2, height: 200 }}
            >
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
      </div>

      <div className="checkBox">
        <h1>React Check Box</h1>
        <div className="check-inner">
          <Checkbox {...label} onChange={onHandleChecked} value="A" />A
          <Checkbox {...label} onChange={onHandleChecked} value="B" />B
          <Checkbox {...label} onChange={onHandleChecked} value="C" />C
          <Checkbox {...label} onChange={onHandleChecked} value="D" />D <br />
        </div>
        <Fab
          color="primary"
          onClick={handleClick}
        >
          확인
        </Fab>
      </div>
      {/* <Button onClick={handleClick} variant="outlined">
        Open Alert!
      </Button> */}
      <Dialog open={alertOpen} onClose={handleClick}>
        <Alert 

        //props go here
        >
          <AlertTitle>결과!</AlertTitle>
          {checkedItems}를 선택하셨습니다.
        </Alert>
      </Dialog>
      {/* MUI에서 Alert를 사용할 경우 Dialog(Modal도 ok)박스로 감싼후 Dialog로 기능추가 */}
    </>
  );
}

export default App;
