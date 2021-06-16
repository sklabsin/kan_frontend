import React, { lazy } from 'react';
import retry from 'services/retryPromise';
const Home = lazy(() => retry(()=>import('./index')));
const HomeRegistry = {
    "Home": Home,
}

export default HomeRegistry;