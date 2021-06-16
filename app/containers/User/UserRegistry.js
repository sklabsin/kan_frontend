import React, { lazy } from 'react';
import retry from 'services/retryPromise';
const User = lazy(() => retry(()=>import('./Components/User')));
const UserRegistry = {
    "User": User,
}

export default UserRegistry;