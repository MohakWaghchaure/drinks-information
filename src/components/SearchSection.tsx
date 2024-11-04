import { Fragment, useEffect, useState } from 'react';
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
    const [drinksSuggestionsData, setDrinksSuggestionsData] = useState<DrinksArrayData | null>(null);

    const fetchHandler = async (drinkName: string) => {
        try {
            const res = await fetch(`/api/search?drinkName=${drinkName}`);
            const data: DrinksArrayData = await res.json();
            setDrinksArrayData(data);
        } catch (error) {
            console.error('Error fetching drink data:', error);
        }
    };

    const fetchSuggestionsHandler = async (drinkName: string) => {
        try {
            const res = await fetch(`/api/suggestions?drinkName=${drinkName}`);
            const data: DrinksArrayData = await res.json();
            setDrinksSuggestionsData(data);
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
        if (drinksArrayData) {
            if (drinksArrayData.drinks !== null) {
                // console.log(drinksArrayData, 'drinksArrayData');
            }
        }
        fetchSuggestionsHandler('shot');
    }, [drinksArrayData]);

    return (
        <Fragment>
            <div id='search-section' className="search-section-wrapper">
                <div className='search-background'></div>
                <div className="container search-bar-wrapper">
                    <form onSubmit={handleOnSubmit}>
                        <div className='search-instruction'>Search cocktail by Name or Ingredient</div>
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
                                    <Image src={arrowIcon} alt="Submit" width={25} height={25} />
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
                        <div className='suggestions'>You May Like These Suggestions</div>
                        {drinksSuggestionsData && (
                            drinksSuggestionsData.drinks && drinksSuggestionsData.drinks.length > 0 && (
                                drinksSuggestionsData.drinks.map((drink) => (
                                    <DrinkCard key={drink.idDrink} {...drink}></DrinkCard>
                                ))
                            )
                        )}
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default SearchSection;
