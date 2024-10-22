import { ReactNode, useEffect, useState } from 'react';
import arrowIcon from '@/public/icons/right-arrow.png';
import Image from 'next/image';
import { Drink } from '@/types/Drink';

const SearchSection = () => {
    const [drinkName, setDrinkName] = useState('');
    const [drinksArrayData, setDrinksArrayData] = useState(null);

    const fetchHandler = async (drinkName: String | null) => {
        
        try {
            const res = await fetch(
                `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`
            );
            const data = await res.json();
            setDrinksArrayData(data);
        } catch (error) {
            console.error('Error fetching ingredient data:', error);
        }
    };

    const handleOnSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (drinkName.trim()) {
            fetchHandler(drinkName);
        }
    };

    useEffect(() => {
        if (drinksArrayData != null) {
            console.log(drinksArrayData, 'drinksArrayData');
        }
    }, [drinksArrayData])
    return (
        <div className="search-section-wrapper">
            <div className="container d-flex justify-content-center align-items-center search-bar-wrapper">
                <form onSubmit={handleOnSubmit}>
                    <div className="search-bar-container">
                        <input
                            type="text"
                            id="textInput"
                            className="form-control"
                            value={drinkName}
                            placeholder="Enter your favourate drink.."
                            onChange={(e) => setDrinkName(e.target.value)}
                        />
                        <div className='button-container d-flex justify-content-center align-items-center'>
                            <button type="submit" className="btn submit">
                                <Image src={arrowIcon} alt="Example"
                                    width={20}
                                    height={20}
                                />
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div className='search-result-wrapper'>

            </div>
        </div>
    )

}

export default SearchSection;