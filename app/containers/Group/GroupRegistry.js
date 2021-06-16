import React, { lazy } from 'react';
import retry from 'services/retryPromise';
// const Menu = lazy(() => retry(()=>import('./index')));
const ManageClient = lazy(() => retry(()=>import('./Components/Client')));
const ManageOrganisation = lazy(() => retry(()=>import('./Components/Organisation')));
const ManageGroupLead = lazy(() => retry(()=>import('./Components/GroupLead')));
const GroupRegistry = {
    "ManageClient":ManageClient,
    "ManageOrganisation":ManageOrganisation,
    "ManageGroupLead":ManageGroupLead
}

export default GroupRegistry;