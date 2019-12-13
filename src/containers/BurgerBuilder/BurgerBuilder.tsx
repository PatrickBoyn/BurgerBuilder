import React, {Component} from "react";
import Auxillary from '../../hoc/Auxillary';
import Burger from '../../components/Burger/Burger'
class BurgerBuilder extends Component{
    render(): React.ReactElement<any, string> {
        return (
            <Auxillary>
                <Burger/>
                <div>Controls</div>
            </Auxillary>
        );
    }
}

export default BurgerBuilder;
