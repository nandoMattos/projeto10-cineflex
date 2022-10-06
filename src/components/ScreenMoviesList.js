import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components"
import constants from "../constants"
import { Link } from "react-router-dom";
const {GRAY, URL} = constants;

export default function ScreenMoviesList() {

    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        axios.get(`${URL}/movies`)
            .then((res)=>{
                setMovies(res.data);
            })
            .catch((res)=>{
                console.log(res.code);
            }
        );
    },[])

    if(movies.length === 0) 
        return <MainScreen>carregando..</MainScreen>
    console.log(movies);

    return (
        <MainScreen>

            <HeaderH1>Selecione o filme</HeaderH1>

            <ul>
                {movies.map((e)=>
                    <Link to={`/sessoes/${e.id}`}>
                        <li key={e.id}>
                            <img src={e.posterURL} alt="Poster"/>
                        </li>
                    </Link>
                )}
            </ul>
        </MainScreen>
    )
}

const MainScreen = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    
    ul {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        width: 80%;
    }

    li {
        padding: 0 10px;
        border-radius: 3px;
        margin: 10px 0;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    }

    img {
        width: 140px;
        margin: 15px 0;
    }
`

const HeaderH1 = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100px;
    font-size: 24px;
    color: ${GRAY};
`