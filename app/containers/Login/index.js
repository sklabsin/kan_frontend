import React, { memo } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Button,
  CardHeader,
  CardBody,
  Container,
  Card,
  CardTitle,
  Input,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  CardFooter,
  FormFeedback
} from 'reactstrap';
import {faUser,faLock} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectLogin from './selectors';
import reducer from './reducer';
import saga from './saga';

export function Login() {
  useInjectReducer({ key: 'login', reducer });
  useInjectSaga({ key: 'login', saga });
  let history = useHistory();
  const loginFunc=()=>{
    history.push("/home");
  }
  return (
    <div className="flex-center position-ref full-height">
       <div className="content">
                <div className="title m-b-md">
                    Login Page
                </div>
          

                    <form id="loginform">
                    <FormGroup>
                      <InputGroup>
                      <InputGroupAddon addonType="append">
                      <InputGroupText>
                      <FontAwesomeIcon icon={faUser}/></InputGroupText>
                      </InputGroupAddon>
                      <Input type="email" id="email" className="form-control"/>
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup>
                      <InputGroupAddon addonType="append">
                      <InputGroupText>
                       <FontAwesomeIcon icon={faLock}/></InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" id="password" className="form-control"/>
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <Button id="loginbtn" className="form-control btn btn-success" onClick={loginFunc}>
                        Login
                      </Button>
                    </FormGroup>
                    <FormGroup>
                      <Button id="registerbtn" className="form-control btn btn-alt">
                        Register
                      </Button>
                    </FormGroup>
                    </form>
                  
            </div>
    </div>
  );
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  login: makeSelectLogin(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Login);
