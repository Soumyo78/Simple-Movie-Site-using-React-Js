import './style.css';
import {useState} from 'react';
import MovieCard from '../../Components/Movie Image Card/index';
import DocumentaryData from '../../Resources/documentary-data';

const Documentary = ()=>{
    const [card, setCard] = useState(DocumentaryData);

    return(
        <main className="main-container">
            <h1 className="genre-title">Documentary Movies</h1>
            <MovieCard cardData={card}/>
            <button id="documentary-clr-btn">Clear All</button>
        </main>
    );
}

export default Documentary;