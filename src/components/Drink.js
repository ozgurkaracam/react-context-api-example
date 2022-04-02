import React, {useState} from 'react';
import {Button, Card} from "react-bootstrap";
import DetailModal from "./DetailModal";

function Drink(props) {


    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.strDrinkThumb} />
                <Card.Body>
                    <Card.Title>{props.strDrink}</Card.Title>
                    <Card.Text>
                        {props.strInstructionsIT}
                    </Card.Text>
                    <Button variant="info" onClick={()=>props.handleSelect(props.id)}>Details</Button>
                </Card.Body>
            </Card>
        </>
    );
}

export default Drink;