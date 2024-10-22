import { useEffect, useState } from 'react';
import arrowIcon from '@/public/icons/right-arrow.png';
import Image from 'next/image';
import { Drink } from '@/types/Drink';
import DrinkCard from './DrinkCard';

interface DrinksArrayData {
    drinks: Drink[];
}

const SearchSection = () => {
    const [drinkName, setDrinkName] = useState<string>('');
    const [drinksArrayData, setDrinksArrayData] = useState<DrinksArrayData | null>(null);

    const fetchHandler = async (drinkName: string) => {
        try {
            const res = await fetch(
                `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`
            );
            const data: DrinksArrayData = await res.json();
            setDrinksArrayData(data);
        } catch (error) {
            console.error('Error fetching drink data:', error);
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
    }, [drinksArrayData]);

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
                            placeholder="Enter your favourite drink..."
                            onChange={(e) => setDrinkName(e.target.value)}
                        />
                        <div className='button-container d-flex justify-content-center align-items-center'>
                            <button type="submit" className="btn submit">
                                <Image src={arrowIcon} alt="Submit" width={20} height={20} />
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div className='container'>
                <div className='row search-result-wrapper'>
                    {drinksArrayData && (
                        drinksArrayData.drinks && drinksArrayData.drinks.length > 0 ? (
                            drinksArrayData.drinks.map((drink) => (
                                <DrinkCard key={drink.idDrink} {...drink}></DrinkCard>
                            ))
                        ) : (
                            <div className='no-result'>No drinks found for the given name!</div>
                        )
                    )}
                </div>
            </div>
            
        </div>
    );
};

export default SearchSection;
