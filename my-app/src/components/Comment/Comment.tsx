import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export interface CommentProps{
    name:string
    text:string
}

const Comment :React.FC<CommentProps> = ({text,name}:CommentProps)=>{
    return <div><strong className='content'>{name}</strong> : {text}</div>;
}

export default Comment