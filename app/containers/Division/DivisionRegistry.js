import React, { lazy } from 'react';
import retry from 'services/retryPromise';
// const Menu = lazy(() => retry(()=>import('./index')));

const ManageState = lazy(() => retry(()=>import('./Components/State')));
const ManageDistrict = lazy(() => retry(()=>import('./Components/District')));
const ManageCorporation = lazy(() => retry(()=>import('./Components/Corporation')));
const ManageMuncipality = lazy(() => retry(()=>import('./Components/Muncipality')));
const ManagePanchayat = lazy(() => retry(()=>import('./Components/Panchayat')));
const ManageWard = lazy(() => retry(()=>import('./Components/Ward')));
const ManageSector = lazy(() => retry(()=>import('./Components/Sector')));

const DivisionRegistry = {
   
    
    "ManageState":ManageState,
    "ManageDistrict":ManageDistrict,
    "ManageCorporation":ManageCorporation,
    "ManageMuncipality":ManageMuncipality,
    "ManagePanchayat":ManagePanchayat,
    "ManageWard":ManageWard, 
    "ManageSector":ManageSector,
    
    
    
}

export default DivisionRegistry;