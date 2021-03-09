import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import postActions from '../redux/actions/postActions';
import inputActions from '../redux/actions/inputActions';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import ReactHtmlParser from 'react-html-parser';

const InputSection = () => {
    const title = useSelector(state => state.inputs.title);
    const content = useSelector(state => state.inputs.content);
    const dispatch = useDispatch();
    return(
        <div className="container">
            <form className="form-group">
            
                <div className="form-group pb-5">
                    <h5 style={{paddingRight:"90%"}}>Title</h5>
                    <input type="text" name="name"  placeholder="Enter Title" className="form-control" onChange={e => dispatch(inputActions.setInputTitle(e.target.value))} required/>
                </div>
                <div className="form-group">
                <h5 style={{paddingRight:"80%"}}>Post Details</h5>
                    <CKEditor editor={ClassicEditor} 
                    
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={(e, editor) => {
                        const data = editor.getData();
                        
                        dispatch(inputActions.setInputContent(ReactHtmlParser(data))) }}


                    
                    
                     required/>
                </div>
                <div className="form-group" style={{paddingTop:"5%", paddingBottom:"3%"}}>
                    <button type="submit" onClick={(e) => { 
                        e.preventDefault(); 
                        dispatch(postActions.addPost({ title,content})
                        )} } >Publish</button>
                </div>
            </form>
        </div>
    )
}

export default InputSection;