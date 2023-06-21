import { Box, Modal, Typography } from "@mui/material";
import { useEffect, useState } from "react";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const ModalView = (props) => {
  const [open, setOpen] = useState(props.open);
  useEffect(() => {
    setOpen(props.open);
  }, [props.open]);

  const closemodal = (ev) => {
    ev.preventDefault();
    setOpen(false);
    return props.close(ev);
  };

  return (
    <>
      <Modal
        open={open}
        onClose={(ev) => closemodal(ev)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          className="flex flex-col items-center   rounded-3xl border-primary-500 border-4 px-5 py-4 lg:w-auto w-[95%] bg-black "
        >
          {props.children}
        </Box>
      </Modal>
    </>
  );
};
export default ModalView;
