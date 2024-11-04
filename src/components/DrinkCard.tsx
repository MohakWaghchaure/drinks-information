import { Fragment, useState } from 'react';
import InfoModal from './InfoModal';

interface DrinkCardProps {
    strDrink: string;
    strAlcoholic: string;
    strDrinkThumb?: string;
    strIngredient1?: string;
    strIngredient2?: string;
    strIngredient3?: string;
    strIngredient4?: string;
    strInstructions?: string;
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
}) => {
    const [openModal, setOpenModal] = useState(false)
    const openModalHandler = () => {
        setOpenModal(true);
    }
    const closeModalHander = ()=> {
        setOpenModal(false);
    }

    return (
        <Fragment>
            <div className='col-lg-3 col-md-6 col-sm-6 col-xs-12 card-wraapper'>
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
                    <div className='know-more' onClick={openModalHandler}>Know More</div>
                </div>
            </div>
            {openModal && <InfoModal
                strDrink={strDrink}
                strAlcoholic={strAlcoholic}
                strDrinkThumb={strDrinkThumb? strDrinkThumb : 'null'}
                strIngredient1={strIngredient1}
                strIngredient2={strIngredient2}
                strIngredient3={strIngredient3}
                strIngredient4={strIngredient4}
                strInstructions={strInstructions}
            ></InfoModal>}
            {openModal && <div className='close-modal info-modal' onClick={closeModalHander}>Back to search page</div>}
        </Fragment>

    )

}

export default DrinkCard;