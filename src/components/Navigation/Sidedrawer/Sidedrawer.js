import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './Sidedrawer.module.css';
import Backdrop from '../../utils/Backdrop/Backdrop';

const Sidedrawer = (props) => {

    let attachedClasses = [classes.Sidedrawer, classes.Close];
    if(props.open){
        attachedClasses = [classes.Sidedrawer, classes.Open];
    }

    return (
        <React.Fragment>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </React.Fragment>
    );
}

export default Sidedrawer;
