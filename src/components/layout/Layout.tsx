import React from 'react';
import Auxiliary from "../../hoc/Auxiliary";
import classes from './layout.module.css';

const layout = (props: any) => (
    // This is for wrapping two adjacent elements.
    // Aux is a reserved keyword in Windows, so therefore I used
    // the full word.
    <Auxiliary>
        <div className={classes.Content}>
            Toolbar, SideDrawer, Backdrop
        </div>
        <main>
            {props.children}
        </main>
    </Auxiliary>
);

export default layout;
