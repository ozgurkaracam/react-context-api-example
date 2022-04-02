import React, {createContext, useContext, useReducer} from 'react';
import reducer from "./reducer";
import {CHANGE_SELECTED_COCTAIL, FETCH_ALL_COCTAILS, REMOVE_SELECTED_COCTAIL, SET_LOADING} from "./actions";
import axios from "axios";


const initialState={
    coctails:[],
    loading:false
}

const Cont=createContext()

export const useContextApp = () => {
    return useContext(Cont)
}

function MainContext({children}) {
    const [state,reduce]=useReducer(reducer,initialState)


    async function getAllCoctails(){
        reduce({
            type:SET_LOADING,
            payload:true
        })
        const response=await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
        reduce({
            type:FETCH_ALL_COCTAILS,
            payload:response.data.drinks
        })
    }

    const handleSelect=async (id)=>{
        const response=await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        reduce({
            type:CHANGE_SELECTED_COCTAIL,
            payload:response.data.drinks[0]
        })
    }

    const removeSelectedCoctail=()=>{
        reduce({
            type:REMOVE_SELECTED_COCTAIL
        })
    }

    const handleSearch=async (searchText)=>{
        reduce({
            type:SET_LOADING,
            payload:true
        })
        const response=await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`)
        reduce({
            type:FETCH_ALL_COCTAILS,
            payload:response.data.drinks
        })
    }

    return (
        <Cont.Provider value={{
            ...state,
            getAllCoctails,
            removeSelectedCoctail,
            handleSelect,
            handleSearch,
        }}>
            {children}
        </Cont.Provider>
    );
}



export default MainContext;