import React from 'react';
import classes from './Burger.module.css'
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

interface Ingredients {
    ingredients: {[name: string]: number}
}

const Burger = (props: Ingredients): JSX.Element => {
    let transformedIngredients: JSX.Element[] = Object.keys(props.ingredients)
        .map(ingredientKey => {
            return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
                return <BurgerIngredient key={ingredientKey + i} type={ingredientKey}/>
            })
        })
        .reduce((array, element) => {
            return array.concat(element);
        }, []);
    if (transformedIngredients.length === 0){
        // Not sure if this is correct, but it seemed the logical thing to try.
        transformedIngredients[0] = <p>Please add an ingredient!</p>
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
