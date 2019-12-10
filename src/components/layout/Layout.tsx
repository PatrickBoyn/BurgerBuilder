import React from 'react';
import Auxillary from "../../hoc/Auxillary";
import classes from './layout.module.css';

const layout = (props: any) => (
    // This is for wrapping two adjacent elements.
    // Aux is a reserved keyword in Windows, so therefore I used
    // the full word.
    <Auxillary>
        <div className={classes.Content}>
            Toolbar, SideDrawer, Backdrop
        </div>
        <main>
            {props.children}
        </main>
    </Auxillary>
);

export default layout;
