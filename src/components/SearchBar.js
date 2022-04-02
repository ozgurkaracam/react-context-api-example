import React from 'react';
import {Col, Form, Row} from "react-bootstrap";
import {useContextApp} from "../context/context";

function SearchBar(props) {

    const {handleSearch}=useContextApp()

    return (
        <Row className={"my-2"}>
            <Col md="6" className="mx-auto">
                <Form.Label>Search</Form.Label>
                <Form.Control
                    type="text"
                    id="inputPassword5"
                    aria-describedby="passwordHelpBlock"
                    onChange={(e)=>handleSearch(e.target.value)}
                />
            </Col>
        </Row>
    );
}

export default SearchBar;