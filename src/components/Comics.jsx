import { useState, useEffect } from 'react';
import axios from 'axios';

const Comics = () => {
    const [comics, setComics] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchComics = async () => {
            try {
                const response = await axios.get('https://gateway.marvel.com/v1/public/comics?limit=5&ts=1&apikey=97643f15d15c73234f2855d8d24e6072&hash=aef637835a75d2e8206cff8a604dbfc6');
                console.log(response.data.data.results);
                setComics(response.data.data.results);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching comics:', error);
            }
        };

        fetchComics();

    }, []);

    if(loading){
        return <h3>Loading comics...</h3>;
    }

    return (
        <div>
            <h3>Comics</h3>

            {comics.map(comic => (
                <div key={comic.id} className="comic">
                    <img src={comic.thumbnail.path + "." + comic.thumbnail.extension}
                        width="200" alt={comic.title} /> <br/>
                    <a href={comic.urls[0].url} target="_blank">{comic.title}</a>
                </div>
            ))}
        </div>
    );
};

export default Comics;