import React, {Component} from 'react';

import Modal from '../utils/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component{
        state = {
            error: null,
            initialized: false
        }

        componentDidMount () {
            this.requestInterceptor = axios.interceptors.request.use(req => {
                this.setState({ error: null });
                return req;
            });
            this.responseInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({ error: error });
            });
            this.setState({ initialized: true });
        }
        errorConfirmedHandler = () => {
            this.setState({error:null});
        }
        
        componentWillUnmount(){
            axios.interceptors.request.eject(this.requestInterceptor);
            axios.interceptors.response.eject(this.responseInterceptor);
        }

        render () {
            const { initialized } = this.state;
            if(!initialized) return null;

            return (
                <React.Fragment>
                    <Modal 
                        show={this.state.error} modalClosed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </React.Fragment>
            );
        }

    }   
}

export default withErrorHandler;
