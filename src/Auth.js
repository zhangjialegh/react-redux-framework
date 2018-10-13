import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/*actions*/
import { logIn, logOut } from 'actions/auth'
import axios from 'axios';


export default function Auth(Component) {
  class AuthLog extends React.Component {
    static propTypes = {
     
    };

    state = {
      loaded_if_needed: false
    }
    componentWillMount() {
      this.checkAuth();
    }

    componentWillReceiveProps(nextProps) {
      this.checkAuth(nextProps);
    }

    checkAuth(props = this.props) {
      if (!props.isLogined) {
        const token = localStorage.getItem('token');
        if (!token) {
          console.log('11111'); //TODO
          
        } else {
          axios.post('api/is_token_valid',{
            token,
          })
          .then((res) => {
            if (res.data.token_is_valid) {
              this.props.logIn(token);
              this.props.getUser(token);
              this.setState({
                loaded_if_needed: true,
              });
            } else {
              localStorage.removeItem('token');
              console.log('22222'); //TODO
            }
          })
          .catch((error) => {
            localStorage.removeItem('token');
            console.log('3333333'); //TODO
          });
        }
      } else {
        this.setState({
          loaded_if_needed: true
        });
      }
    }
    render() {
      return (
        <div>
          {
            this.props.isLogined && this.state.loaded_if_needed
            ? <Component {...this.props} /> : null
          }
        </div>
      );

    }
  }
  return connect(
    state => state.getIn(['auth']),
    dispatch => bindActionCreators({ logIn, logOut }, dispatch)
  )(AuthLog)
}
