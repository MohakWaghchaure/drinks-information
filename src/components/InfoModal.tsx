import { Fragment } from 'react';

interface drinkCardDataProps {
    strDrink: string;
    strAlcoholic: string;
    strDrinkThumb?: string;
    strIngredient1?: string;
    strIngredient2?: string;
    strIngredient3?: string;
    strIngredient4?: string;
    strInstructions?: string;
}

const InfoModal: React.FC<drinkCardDataProps> = ({
    strDrink,
    strAlcoholic,
    strDrinkThumb,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strInstructions, }) => {
    return (
        <Fragment>
            <div className="modal-wrapper">
                <div className="modal-container drink-description-modal">
                    {strDrink && (
                        <div className='d-flex justify-content-between h-100'>
                            <div className='drink-description-wrapper'>
                                <div className='drink'>{strDrink || 'Drink name not available'}</div>
                                <div className='sepetater'></div>
                                <div className='drink-type'>Type: {strAlcoholic || 'Alcoholic status not available'}</div>
                                <div className='ingredients-title'>Ingredients:</div>
                                <div className='ingredients-list'>
                                    {strIngredient1 && <div className='ingredient'>{strIngredient1}</div>}
                                    {strIngredient2 && <div className='ingredient'>{strIngredient2}</div>}
                                    {strIngredient3 && <div className='ingredient'>{strIngredient3}</div>}
                                    {strIngredient4 && <div className='ingredient'>{strIngredient4}</div>}
                                </div>
                                <div className='direction'>{strInstructions && strInstructions}</div>
                            </div>
                            <div className=''>
                                {strDrinkThumb && (
                                    <div className='thumb-wrapper'>
                                        <img src={strDrinkThumb} alt={strDrink} />
                                    </div>
                                )}
                                
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Fragment>

    )

}

export default InfoModal;