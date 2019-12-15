import React, {Component} from "react";
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger'
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

interface Ingredients {
    ingredients: {[name: string]: number};
}

class BurgerBuilder extends Component{
    state: Ingredients = {
        ingredients: {
            'salad': 0,
            'bacon': 0,
            'cheese': 0,
            'meat': 0,
        }
    };

    render(): React.ReactElement<any, string> {
        return (
            <Auxiliary>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls/>
            </Auxiliary>
        );
    }
}

export default BurgerBuilder;
