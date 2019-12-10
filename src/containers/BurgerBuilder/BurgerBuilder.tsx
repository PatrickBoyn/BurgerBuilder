import React, {Component} from "react";
import Auxillary from '../../hoc/Auxillary';

class BurgerBuilder extends Component{
    render(): React.ReactElement<any, string > {
        return (
            <Auxillary>
                <div>Burger</div>
                <div>Controls</div>
            </Auxillary>
        );
    }
}

export default BurgerBuilder;
