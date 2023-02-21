import React, { useState, useContext } from 'react';
import { context } from '../context/Ctx';
const Create =  () => {
    const [post, setPost] = useState({
        id: "",
        post: "",
        category: "",
        author: "",
        date: "",
    });
    const [posts, setPosts] = useContext(context);

    const addPost = () => {
        if (post.post === "" || post.category === "" || post.author === "") {
            alert("All inputs need to be field")
            return
        }

        // setPost({
        //     id: post.category + post.author + Math.round(Math.random() * 100000),
        //     date: new Date(),
        //     ...post
        // })

        let newObj = {
            ...post,
            id: post.category + post.author + Math.round(Math.random() * 100000),
            date: new Date(),
        }

        console.log(post) 
    
        setPosts([...posts, newObj]);
        
    }
   

    return (
        <div className='create'>
            <textarea name="30" id="3" value={post.post} onChange={(e) => setPost({...post, post: e.target.value})}></textarea>

            <select value={post.category} onChange={(e) => setPost({...post, category: e.target.value})}>
                <option value="Memes">Memes</option>
                <option value="Cars">Cars</option>
                <option value="Dev">Dev</option>
                <option value="Politics">Politics</option>
                <option value="Computers">Computers</option>
            </select>
            
            <br></br>
            <input type="text" value={post.author} onChange={(e) => setPost({...post, author: e.target.value})} />
            
            <button onClick={addPost}>Add posts</button>
        </div>
    )
}

export default Create;