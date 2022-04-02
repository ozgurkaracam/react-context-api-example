import React from 'react';
import {Modal, Button, Badge} from "react-bootstrap";
import {useContextApp} from "../context/context";

function DetailModal({show,setShow}) {

    const {selectedCoctail,removeSelectedCoctail}=useContextApp()
    return (
        <Modal show={selectedCoctail} onHide={()=>setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>{selectedCoctail && selectedCoctail.strDrink} - {selectedCoctail.strCategory}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {selectedCoctail && selectedCoctail.strInstructionsIT}
                <br/>
                <Badge bg={"success"}> {selectedCoctail && selectedCoctail.strAlcoholic} </Badge>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={removeSelectedCoctail}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default DetailModal;