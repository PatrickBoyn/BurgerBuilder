import React from 'react';
import classes from './Burger.module.css'
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = (props: any) => {
    let transformedIngredients: any = Object.keys(props.ingredients)
        .map(ingredientKey => {
            return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
                return <BurgerIngredient key={ingredientKey + i} type={ingredientKey}/>
            })
        })
        .reduce((array, element) => {
            return array.concat(element);
        }, []);
    if (transformedIngredients.length === 0){
        transformedIngredients = <p>Please add an ingredient!</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default Burger;
