import React, {useEffect, useState} from 'react';
import {useContextApp} from "../context/context";
import {Card, Col, Container, Row, Button, Spinner} from "react-bootstrap";
import Drink from "./Drink";
import DetailModal from "./DetailModal";

function DrinkList() {

    const {coctails, getAllCoctails,handleSelect,selectedCoctail,loading} = useContextApp();
    const [show,setShow]=useState()

    useEffect(() => {
        getAllCoctails()
    }, [])

    if(loading){
        return <Container className="my-5 text-center"><Spinner className="" animation="grow" /></Container>
    }



    return (
        <Container fluid>
            {selectedCoctail && <DetailModal show={show} setShow={setShow} />}
            {coctails ? <Row>
                {coctails.map(drink => {
                    return <Col md="4" key={drink.idDrink} className="my-2">
                        <Drink strDrinkThumb={drink.strDrinkThumb}
                               id={drink.idDrink}
                               strDrink={drink.strDrink}
                               strInstructionsIT={drink.strInstructionsIT}
                               handleSelect={handleSelect}
                        />
                    </Col>
                })}
            </Row>: <h1>Not Found Any Coctail!</h1>}
        </Container>
    );
}

export default DrinkList;