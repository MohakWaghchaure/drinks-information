'use client';
import react, { Fragment, useEffect, useState } from "react";
import Modal from "./Modal";

interface DrinkTypeData {
    idIngredient: string;
    strABV: string;
    strAlcohol: string;
    strDescription: string;
    strIngredient: string;
    strType: string;
}

const Header = () => {
    const [openModal, setOpenModal] = useState(false);
    const [drinkTypeData, setDrinkTypeData] = useState<DrinkTypeData | null>(null);

    const closeModalHander = () => {
        setOpenModal(false);
    }
    const openModalHander = () => {
        setOpenModal(true);
    }
    const fetchHandler = async (drinkType: String | null) => {
        try {
            const res = await fetch(
                `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${drinkType}`
            );
            const data = await res.json();
            setDrinkTypeData(data.ingredients[0]);
        } catch (error) {
            console.error('Error fetching ingredient data:', error);
        }
    };

    useEffect(()=>{
        if(drinkTypeData != null){
            console.log(drinkTypeData);
        }
    },[drinkTypeData])
    return (
        <Fragment>
            <div className="d-flex justify-content-between align-items-center header-wrapper">
                <div className="logo">Lord of the Drinks!</div>
                <div className="d-flex nav-menu">
                    <div className="nav-option" onClick={() => { fetchHandler('vodka'); openModalHander(); }}>Vodka</div>
                    <div className="nav-option" onClick={() => { fetchHandler('beer'); openModalHander(); }}>Beer</div>
                    <div className="nav-option" onClick={() => { fetchHandler('rum'); openModalHander(); }}>Rum</div>
                    <div className="nav-option" onClick={() => { fetchHandler('whiskey'); openModalHander(); }}>Whiskey</div>
                    <div className="nav-option" onClick={() => { fetchHandler('gin'); openModalHander(); }}>Gin</div>
                    <div className="nav-option" onClick={() => { fetchHandler('coffee'); openModalHander(); }}>Coffee</div>
                </div>
            </div>
            {openModal && <Modal drinkTypeData={drinkTypeData}></Modal>}
            {openModal && <div className='close-modal' onClick={closeModalHander}>Back to homepage</div>}
        </Fragment>

    )

}

export default Header;