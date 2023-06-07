import { useState } from 'react';
import { sculptureList } from './data';

export default function ListaEscultura() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);
    function handleNextClick() {
        setIndex(index + 1);
    }
    function handleMoreClick() {
        setShowMore(!showMore);
    }
    let sculpture = sculptureList[index];
    return (<>

        <h4>
            <i>{sculpture.name} </i>
            by {sculpture.artist}
        </h4>
        <h5>({index + 1} of {sculptureList.length}) </h5>
        <button onClick={handleMoreClick}> {showMore ? 'Hide' : 'Show'} details
        </button> {showMore && <p> {sculpture.description}</p>}
        <img
            src={sculpture.url}
            alt={sculpture.alt}></img>
        <button onClick={handleNextClick}>
            Next
        </button>
    </>
    );
}