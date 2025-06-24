import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import './Comment.css'
import { CommentModel } from '../../Models/Comment';

interface CommentProps {
    commentModel:CommentModel
}
const Comment :React.FC<CommentProps> = ({commentModel}:CommentProps)=>{
    return <div><strong className='content'>{commentModel.name}</strong> : {commentModel.text}</div>;
}

export default Comment