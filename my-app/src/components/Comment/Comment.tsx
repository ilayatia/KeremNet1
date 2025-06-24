import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import './Comment.css'
import { CommentModel } from '../../Models/Comment';

export interface CommentProps extends CommentModel{}
const Comment :React.FC<CommentProps> = ({text,name}:CommentProps)=>{
    return <div><strong className='content'>{name}</strong> : {text}</div>;
}

export default Comment