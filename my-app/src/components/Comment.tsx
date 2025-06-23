import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
interface Props{
    text:string
    name:string
}
const Comment :React.FC<Props> = ({text,name}:Props)=>{
    return <div><strong className='content'>{name}</strong> : {text}</div>;
}

export default Comment