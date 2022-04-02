import React, {useEffect} from 'react';
import {Col, FormGroup, FormLabel, FormText, InputGroup, Form, Row, Container} from "react-bootstrap";
import {useContextApp} from "../context/context";
import SearchBar from "../components/SearchBar";
import DrinkList from "../components/DrinkList";

function Search(props) {


    return (
        <Container fluid>
            <SearchBar />
            <DrinkList />
        </Container>
    );
}

export default Search;