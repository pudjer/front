import React, {useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {modules, formats} from "./Toolbar";

const ArticleEditor=()=> {

    const [text,setText] = useState('');

    const handleChange= (html:string)=> {
        setText(html);
    }

    return (
        <>
            <ReactQuill
                value={text}
                onChange={handleChange}
                modules={modules}
                formats={formats}
            />
        </>
    )
}



export default ArticleEditor;