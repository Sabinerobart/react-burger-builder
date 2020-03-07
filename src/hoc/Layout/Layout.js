import React, { Component } from "react";

import "./Layout.css";

import Aux from "../Aux/Aux";
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
  state = {
    showSideDrawer: false
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
