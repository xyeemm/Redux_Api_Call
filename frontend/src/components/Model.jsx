import { useState } from "react";
import { useSelector } from "react-redux";

import { Modal, Button, ButtonToolbar } from 'rsuite';

export default function Model() {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <>
    <ButtonToolbar style={{backgroundColor: isDarkMode ? '#333' : '#FFF'}}>
        <Button style={{backgroundColor: isDarkMode ? '#333' : '#fff', color:isDarkMode? '#fff':'#333'}} onClick={handleOpen}> Open Model</Button>
      </ButtonToolbar>
<div>
    
</div>
      <Modal style={{backgroundColor: isDarkMode ? '#333' : '#FFF'}} open={open} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1>Hello world</h1>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} appearance="primary">
            Ok
          </Button>
          <Button onClick={handleClose} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

