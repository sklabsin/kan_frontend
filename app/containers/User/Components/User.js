import React, { useState, useEffect,Fragment,Suspense } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';
import Loader from 'react-loaders';
import PageTitle from '../../Layout/AppPageTitle';
import {
    Row,Col,Card,CardBody,CardTitle,CardHeader,FormGroup,
    Input,InputGroup,InputGroupAddon,InputGroupText,
    Button,Label,FormFeedback,CardFooter
  } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import RemotePagination from '../../../components/Common/ReactDatatableNext/BootstrapTableNext.js';
import ListUser from './ListUser';
import useModal from '../../../components/UseModal/useModal';
import UserModal from '../Components/UserModal';
export default function User()
{
    const { isShowing, toggle } = useModal();
    const [loading,setLoading]=useState(false);
    const [data,setData]=useState([{id:1,menu:"menu 1"}]);
    const [field,setField]=useState([{fieldName:"Sl No",fieldData:"id"},{fieldName:"Menu",fieldData:"menu"},{fieldName:"Action",fieldData:"id"}]);
    const addUserFunc=()=>{
        toggle()
    }
    return(
        <Fragment>
      <BlockUi tag="div" blocking={loading} loader={<Loader active type='ball-spin-fade-loader' />}>
        <Suspense fallback={<Loader type="ball-pulse-rise" />}>

          <ReactCSSTransitionGroup
            component="div"
            transitionAppear={true}
            transitionName="MainAnimation"
            transitionAppearTimeout={0}
            transitionEnter={false}
            transitionLeave={false}
          >
            <PageTitle
              heading="User Management"
              subheading="User"
              icon="pe-7s-news-paper icon-gradient bg-deep-blue"
              content="User Management"
              activeContent="User"
            />
                <Row>
                    <Col md="12">
                    <Button type="button" color="primary" onClick={addUserFunc}>Add</Button>
                    </Col>
                    <Col md="12">
                    <ListUser 
                    data={data}
                    page={1}
                    sizePerPage={10}
                    totalSize={data.length}
                    keyField="id"
                    field={field}
                    />
                    </Col>

                </Row>
                {
                   isShowing&&<UserModal
                   isShowing={isShowing}
                   hide={toggle}
                   name="Add User"
                   id="user"
                   size="xl"
                 />
                 }

    
          </ReactCSSTransitionGroup>
        </Suspense>
      </BlockUi>
    </Fragment>
    )
}