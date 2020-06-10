import React from 'react';
import { render } from 'react-dom';
import RepLogApp from './RepLog/RepLogApp';

const shouldShowHeart = true;

render(
    <RepLogApp 
        {...window.REP_LOG_APP_PROPS}
    />, 
    document.getElementById('lift-stuff-app')
);
