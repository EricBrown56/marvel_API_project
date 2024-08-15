import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function CharacterDetails() {
    const { id } = useParams();
    const [hero, setHero] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchHero = async () => {
            try {
                const response = await axios.get(`https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=97643f15d15c73234f2855d8d24e6072&hash=aef637835a75d2e8206cff8a604dbfc6`);
                console.log(response.data.data.results[0]);
                setHero(response.data.data.results[0]);
                setLoading(false);
            } catch(error){
                console.error('Error fetching hero: ', error);
            }
        }
        fetchHero();

    }, [id])

    if(loading){
        return <h3>Loading hero...</h3>
    }

    return (
        <div>
            <Link to="/characters">Back to all characters</Link>
            <h3>{hero.name}</h3>
            <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} 
                 width="200" alt={hero.name} />
            <p>{hero.description}</p>
            

            {hero.description &&
                <div>
                    <h4>Description</h4>
                    <p>{hero.description}</p>
                    </div>
            }
            {hero.comics.available > 0 &&
                <div>
                    <h4>Comics</h4>
                    
                        {hero.comics.items.map(comic => (
                            <div key={comic.resourceURI}>{comic.name}</div>
                        ))}
                    
                </div>
            }
        </div>
    )
}



export default CharacterDetails;