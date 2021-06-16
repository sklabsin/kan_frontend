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
import List from './List';
export default function ManageMenu()
{
    const [loading,setLoading]=useState(false);
    const [data,setData]=useState([{id:1,menu:"menu 1"}]);
    const [field,setField]=useState([{fieldName:"Sl No",fieldData:"id"},{fieldName:"Menu",fieldData:"menu"},{fieldName:"Action",fieldData:"id"}])
    let initialValue={
        menu:"",
       }
    const handleSubmit=(values)=>{
        values.id=data.length+1;
        console.log([...data,values]);
        setData([...data,values])
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
              heading="Menu Management"
              subheading="Menu"
              icon="pe-7s-news-paper icon-gradient bg-deep-blue"
              content="Menu Management"
              activeContent="Menu"
            />
             <Formik  
           initialValues={initialValue}
          //  validationSchema={firContentValidateSchema}
           onSubmit={handleSubmit}
           >
      {({
          errors,
          touched,
          isSubmitting,
          dirty,
          resetForm,
          values,
          setFieldValue,
          setFieldTouched,
        }) => (
            <Form>

              <Row>
              <Col md="4">
                            <FormGroup>
                            <Field
                                type="text" 
                                name="menu"
                                id="menu"
                                value={values.menu}
                                placeholder="menu"
                                as={Input}
                                invalid={errors.menu && touched.menu}
                                autoComplete="off"
                              />
                            </FormGroup>
                            </Col>
                            <Col md="4">
                                <Button type="submit" color="primary">Save</Button>
                            </Col>
                         </Row>
                         <Row>
                             <Col md="12">
                             <List 
                                data={data}
                                page={1}
                                sizePerPage={10}
                                totalSize={data.length}
                                keyField="id"
                                field={field}
                             />
                             </Col>

                         </Row>

            </Form>
          )}



      </Formik>
     

          </ReactCSSTransitionGroup>
        </Suspense>
      </BlockUi>
    </Fragment>
    )
}