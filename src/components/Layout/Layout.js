import React, { Component } from "react";

import "./Layout.css";

import Aux from "../../hoc/Aux";
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
  state = {
    showSideDrawer: true
  }

  SideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  }

  SideDrawerToggleHandler = () => {
    // async so use the prevState for a secure new state when it depends on an old state
    this.setState((prevState) => { return { showSideDrawer: !prevState.showSideDrawer } });
  }

  render() {
    return (
      <Aux>
        <Toolbar drawerToggleClicked={this.SideDrawerToggleHandler} />
        <SideDrawer open={this.state.showSideDrawer} close={this.SideDrawerClosedHandler} />
        <main className="content">{this.props.children}</main>
      </Aux>
    )
  }
};

export default Layout;
