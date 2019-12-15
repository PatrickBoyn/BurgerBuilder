import React from 'react';
import classes from './BuildControl.module.css'

type Props = {
    label: string;
};
export const BuildControl = (props: Props) => {
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button className={classes.Less}>More</button>
            <button className={classes.More}>Less</button>
        </div>
    );
};

export default BuildControl;
