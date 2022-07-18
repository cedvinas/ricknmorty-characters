import React, { useReducer } from "react";
import { useState, useEffect } from "react";
import Navbar from "../components/NavBar";

export default function List() {

    function reducer(state, action) {
        console.log(state);
        switch (action.type) {
            case 'next': return (state + 1);
            case 'prev': return state = state - 1;
            default:
                throw new Error();
        }
    }
    const [characters, setCharacters] = useState(null)
    const [page, dispatch] = useReducer(reducer, 1);
    const [apiUrl, setApiUrl] = useState('https://rickandmortyapi.com/api/character?count=20&page=' + page);
    useEffect(() => {
        async function fetchData() {
            fetch(apiUrl)
                .then(res => res.json())
                .then((res) => setCharacters(res))
        }
        fetchData()
    }, []);



    return (
        <div>
            <Navbar />
            <h1>Rick n Morty characters</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Specie</th>
                        <th>Type</th>
                        <th>Gender</th>
                        <th>Origin</th>
                        <th>Location</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        characters ? (
                            characters.results.map((character, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{character.id}</td>
                                        <td>{character.name}</td>
                                        <td>{character.status}</td>
                                        <td>{character.species}</td>
                                        <td>{character.type}</td>
                                        <td>{character.gender}</td>
                                        <td>{character.origin.name}</td>
                                        <td>{character.location.name}</td>
                                        <td><img src={character.image} alt="img" /></td>
                                    </tr>

                                )
                            })) : (
                            console.log('Loading')
                        )
                    }
                </tbody>
            </table>
            <button onClick={() => dispatch({ type: 'next' })}>Buttonas</button>

        </div>
    )
}