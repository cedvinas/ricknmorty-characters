import React, { useReducer } from "react";
import { useState, useEffect } from "react";
import Navbar from "../components/NavBar";
import Dropdown from "../components/Dropdown";
import '../styles/list.scss';

export default function List() {



    let [characters, setCharacters] = useState(null)
    let [page, dispatch] = useReducer(reducer, 1);
    let [apiUrl, setApiUrl] = useState('https://rickandmortyapi.com/api/character?count=20&page=' + page);
    useEffect(() => {
        async function fetchData() {
            fetch(apiUrl)
                .then(res => res.json())
                .then((res) => setCharacters(res))
        }
        fetchData()
    }, []);

    if (page < 0) {
        page = 0;
    }

    // if (apiUrl != 'https://rickandmortyapi.com/api/character?count=20&page=1') {
    //     setApiUrl('https://rickandmortyapi.com/api/character?count=20&page=' + page)
    // } else {
    //     return
    // }


    function reducer(state, action) {
        switch (action.type) {
            case 'next': return state + 1;
            case 'prev': return state = state - 1;
            default:
                throw new Error();
        }
    }

    console.log('page count ' + page);
    console.log(apiUrl);



    return (
        <div>
            <Navbar />
            <div className="header">
                <h1>Rick n Morty characters</h1>
                <Dropdown />
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th id="th-id">ID</th>
                        <th id="th-name">Name</th>
                        <th id="th-status">Status</th>
                        <th id="th-specie">Specie</th>
                        <th id="th-type">Type</th>
                        <th id="th-gender">Gender</th>
                        <th id="th-origin">Origin</th>
                        <th id="th-location">Location</th>
                        <th id="th-img">Image</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        characters ? (
                            characters.results.map((character, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="td-id">{character.id}</td>
                                        <td className="td-name">{character.name}</td>
                                        <td className="td-status">{character.status}</td>
                                        <td className="td-species">{character.species}</td>
                                        <td className="td-type">{character.type}</td>
                                        <td className="td-gender">{character.gender}</td>
                                        <td className="td-origin">{character.origin.name}</td>
                                        <td className="td-location">{character.location.name}</td>
                                        <td className="td-img"><img src={character.image} alt="img" /></td>
                                    </tr>

                                )
                            })) : (
                            console.log('Loading')
                        )
                    }
                </tbody>
            </table>

            <button onClick={() => dispatch({ type: 'prev' })}>Previous</button>
            <button onClick={() => dispatch({ type: 'next' })}>Next</button>

        </div>
    )
}