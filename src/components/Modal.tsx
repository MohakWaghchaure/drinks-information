import { Fragment, useState } from 'react';

interface DrinkTypeData {
    idIngredient: string;
    strABV: string;
    strAlcohol: string;
    strDescription: string;
    strIngredient: string;
    strType: string;
}

interface DrinkTypeProps {
    drinkTypeData: DrinkTypeData | null;
}

const ModalComponent: React.FC<DrinkTypeProps> = ({ drinkTypeData }) => {
    return (
        <Fragment>
            <div className="modal-wrapper">
                <div className="modal-container">
                {drinkTypeData ? (
                        <div className='drink-data'>
                            <div className='title'>{drinkTypeData.strIngredient}</div>
                            <p><strong>Alcohol Content:</strong> {drinkTypeData.strABV}</p>
                            <p><strong>Alcoholic:</strong> {drinkTypeData.strAlcohol}</p>
                            <div className='seperate'></div>
                            <p>{drinkTypeData.strDescription}</p>
                        </div>
                    ) : (
                        <p>No ingredient data available.</p>
                    )}
                </div>
            </div>
        </Fragment>

    )

}

export default ModalComponent;