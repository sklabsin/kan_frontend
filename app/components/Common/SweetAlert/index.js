/**
 *
 * Salert
 *
 */

import React from 'react';
import Swal from 'sweetalert2';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

const SweetAlert = Swal.mixin({
  toast: true,
  customClass: {
    header: 'header',
    title: 'text-small',
  }
  
})
export default SweetAlert;
