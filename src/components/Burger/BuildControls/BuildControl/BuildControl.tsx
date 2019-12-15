import React from 'react';
import classes from 'BuildControls.module.css'
type Props = {
    label: string;
};
export const BuildControl = (props: Props) => {
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button>More</button>
            <button>Less</button>
        </div>
    );
};

export default BuildControl;
