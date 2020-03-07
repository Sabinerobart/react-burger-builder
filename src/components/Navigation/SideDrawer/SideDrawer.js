import React from 'react';
import Logo from '../../Logo/Logo';
import './SideDrawer.css';

import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

const SideDrawer = (props) => {
  let attachedClasses = ['SideDrawer', 'Close'];
  if (props.open) {
    attachedClasses = ['SideDrawer', 'Open']
  }

  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.close} />
      <div className={attachedClasses.join(' ')}>
        <Logo height='7%' />
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
}

export default SideDrawer;