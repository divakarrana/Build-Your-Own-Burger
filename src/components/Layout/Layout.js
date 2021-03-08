import React, {useState} from 'react';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from "./Layout.module.css";
import Sidedrawer from '../Navigation/Sidedrawer/Sidedrawer';

const Layout = (props) => {
    const [showSidedrawer, setShowSidedrawer] = useState(false);

    const sidedrawerClosedHandler = () => {
        setShowSidedrawer(false);
    }

    const sidedrawerToggleHandler = () => {
        setShowSidedrawer((prevState) => {
            return !prevState.showSidedrawer;
        })
    }

    return (
        <React.Fragment>
            <Toolbar drawerToggleClicked={sidedrawerToggleHandler}/>
            <Sidedrawer closed={sidedrawerClosedHandler} open={showSidedrawer}/>
            <main className={classes.Content}>
                {props.children}
            </main>
        </React.Fragment>
    );
}

export default Layout;
