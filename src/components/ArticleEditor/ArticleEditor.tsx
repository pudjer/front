import React, {ChangeEvent, useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {modules, formats} from "./Toolbar";
import styles from "./ArticleEditor.module.css";
const ArticleEditor=()=> {

    const [text, setText] = useState('');
    const [title, setTitle] = useState('');

    const contentChange= (html:string)=> {
        setText(html);
    }

    const titleChange= (e:ChangeEvent<HTMLInputElement>)=> {
        setTitle(e.target.value);
    }


    return (
        //WHISPERER rewrite this code to be more functional
        <div className={styles.editor}>
            <input onChange={titleChange} value={title} />
            <input onChange={titleChange} value={title} />
            <ReactQuill
                value={text}
                onChange={contentChange}
                modules={modules}
                formats={formats}
            />
        </div>
    )
}



export default ArticleEditor;