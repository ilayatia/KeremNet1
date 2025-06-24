import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Comm, Props } from './types';

const Comment :React.FC<Comm> = ({text,name}:Comm)=>{
    return <div><strong className='content'>{name}</strong> : {text}</div>;
}

export default Comment