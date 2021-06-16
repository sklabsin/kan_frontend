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
import ListRoleMenu from './ListRoleMenu';
import RSelect from '../../../components/RSelect/RSelect';
import RSelectMulti from '../../../components/RSelectMulti/RSelectMulti';
export default function ManageRoleMenu()
{
    const [loading,setLoading]=useState(false);
    const [roleData,setRoleData]=useState([{value:1,label:"role 1"}]);
    const [menuData,setMenuData]=useState([{value:1,label:"menu 1"},{value:2,label:"menu 2"}]);
    const [roleLoading,setRoleLoading]=useState(false);
    const [menuLoading,setMenuLoading]=useState(false);
    const [data,setData]=useState([{id:1,role:{value:1,label:"role 1"},menu:[{value: 1, label: "menu 1"},{value: 1, label: "menu 1"}]}]);
    const [field,setField]=useState([{fieldName:"Sl No",fieldData:"id"},{fieldName:"Role",fieldData:"role"},{fieldName:"Menu",fieldData:"menu"},{fieldName:"Action",fieldData:"id"}])
    let initialValue={
        role:null,
        menu:[]
       }
    const roleFunc=(value,setFieldValue)=>{
      setFieldValue("role",value)

    }
    const menuFunc=(value,setFieldValue)=>{
      console.log(value)
       setFieldValue("menu",value)
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
              subheading="Role Menu"
              icon="pe-7s-news-paper icon-gradient bg-deep-blue"
              content="Menu Management"
              activeContent="Role Menu"
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
                        <Col md="5">
                            <FormGroup>
                            <Field
                            component={RSelect}
                            name="role"
                            id="role"
                            value={values.role}
                            onChange={ev => roleFunc(ev, setFieldValue)}
                            options={roleData}
                            placeholder="--Select Role--"
                            error={errors.role}
                            touched={touched.role}
                            isLoading={roleLoading}
                            isClearable={true}
                            />  
                            </FormGroup>
                            </Col>
                            <Col md="5">
                            <FormGroup>
                                <InputGroup>
                                <Field component={RSelectMulti}
                                    name="menu"
                                    id="menu"
                                    onChange={(ev) => menuFunc(ev,setFieldValue)}
                                    value={values.menu}
                                    options={menuData}
                                    isLoading={menuLoading}
                                    // isDisabled={isOptionDisabled}
                                    isClearable={true}
                                    error={errors.menu}
                                    touched={touched.menu}
                                />
                                <FormFeedback>
                                    <ErrorMessage name="menu" />
                                </FormFeedback>
                                </InputGroup>
                                </FormGroup>
                            </Col>
                            <Col md="2">
                                <Button type="submit" color="primary">Save</Button>
                            </Col>
                         </Row>
                         <Row>
                             <Col md="12">
                             <ListRoleMenu 
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