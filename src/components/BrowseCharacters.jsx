import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const BrowseCharacters = () => {
    const [heroes, setHeroes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchHeroes = async () => {
            try {
                const response = await axios.get('https://gateway.marvel.com/v1/public/characters?limit=5&ts=1&apikey=97643f15d15c73234f2855d8d24e6072&hash=aef637835a75d2e8206cff8a604dbfc6');
                console.log(response.data.data.results);
                setHeroes(response.data.data.results);
                setLoading(false);
            } catch(error){
                console.error('Error fetching heroes: ', error);
            }
        }
        fetchHeroes();

    }, [])

    if(loading){
        return <h3>Loading heroes...</h3>
    }

    return (
        <div>
            <h3>Heroes</h3>
            {heroes.map(hero => (
                <div key={hero.id} className="character">
                    <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} 
                         width="200" alt={hero.name} />
                    <br/>
                    <Link to={`/characters/${hero.id}`}>{hero.name}</Link>
                </div>
            ))}       
            
        </div>
    )
}

export default BrowseCharacters;