import { Fragment, useState } from 'react';

interface DrinkCardProps {
    strDrink: string;
    strAlcoholic: string;
    strDrinkThumb?: string;
    strIngredient1?: string;
    strIngredient2?: string;
    strIngredient3?: string;
    strIngredient4?: string;
    strInstructions?: string;
    strImageSource?: string;
}

const DrinkCard: React.FC<DrinkCardProps> = ({
    strDrink,
    strAlcoholic,
    strDrinkThumb,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strInstructions,
    strImageSource,
}) => {
    return (
        <Fragment>
            <div className='col-3 card-wraapper'>
                <div className='card'>
                    <div className='drink'>{strDrink || 'Drink name not available'}</div>
                    <div className='sepetater'></div>
                    <div className='drink-type'>Type: {strAlcoholic || 'Alcoholic status not available'}</div>
                    {strDrinkThumb && (
                        <div className='thumb-wrapper'>
                            <img src={strDrinkThumb} alt={strDrink} />
                        </div>
                    )}
                    <div className='ingredients-title'>Ingredients:</div>
                    <div className='ingredients-list'>
                        {strIngredient1 && <div className='ingredient'>{strIngredient1}</div>}
                        {strIngredient2 && <div className='ingredient'>{strIngredient2}</div>}
                        {strIngredient3 && <div className='ingredient'>{strIngredient3}</div>}
                        {strIngredient4 && <div className='ingredient'>{strIngredient4}</div>}
                    </div>
                    {/* <div>{strInstructions || 'Instructions not available'}</div> */}
                    <div className='know-more'>Know More</div>
                </div>
            </div>
        </Fragment>

    )

}

export default DrinkCard;