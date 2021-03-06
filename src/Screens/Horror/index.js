import './style.css';
import {useState} from 'react';
import MovieCard from '../../Components/Movie Image Card/index';
import HorrorData from '../../Resources/horror-data';

const Horror = ()=>{
    const [card, setCard] = useState(HorrorData);

    return(
        <main className="main-container">
            <h1 className="genre-title">Horror Movies</h1>
            <MovieCard cardData={card}/>
            <button id="horror-clr-btn" onClick={()=>{
                setCard([])
                document.getElementById('horror-clr-btn').style.display = "none";
                let txt = document.createElement('h2');
                txt.innerHTML =  "No Content Available";
                document.querySelector('.main-container').appendChild(txt);
            }}>Clear All</button>
        </main>
    );
}

export default Horror;