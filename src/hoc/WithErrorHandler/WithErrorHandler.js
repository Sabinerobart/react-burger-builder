import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux/Aux';

const WithErrorHandler = (WrappedComponent, axios) => {
  // functional component transformed into a class to use componentDidMount !
  return class extends Component {
    state = {
      error: null
    }

    // Originally, componentDidMount, but since componentDidMount only renders after all
    // child components have been rendered and the WrappedComponent never loads when there
    // is an error (e.g. wrong Get route), the error is never handled
    componentWillMount() {

      // Use axios interceptors to set the modal if an error occurs

      // clear the error when I send the request
      this.reqInterceptor = axios.interceptors.request.use(req => {
        this.setState({ error: null });
        return req;
      })
      // error that I get back from firebase
      this.resInterceptor = axios.interceptors.response.use(
        // return the response
        res => res,
        error => {
          console.log(error);
          this.setState({ error: error })
        })
    }

    // Avoid memory leaks when we'll use this hoc in more pages
    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }

    errorconfirmedHandler = () => {
      this.setState({ error: null })
    }

    render() {
      return (
        <Aux>
          <Modal
            show={this.state.error}
            modalClosed={this.errorconfirmedHandler}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          < WrappedComponent {...this.props} />
        </Aux>
      )

    }
  }
}

export default WithErrorHandler;