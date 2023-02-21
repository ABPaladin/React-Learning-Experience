import { useContext } from "react";
import { context } from "../context/Ctx";

const Posts = () => {
    const [posts, setPosts] = useContext(context)

    const transfromTime = (d) => {
        return `${d.getFullYear()}/${d.getMonth()}/${d.getDate()}/${d.getHours()}/${d.getMinutes()}/${d.getSeconds()}`
    }
    return(
        <div className="posts">
            {
            posts.map(post =>
                (<div key={post.id} className="post">
                    <p>{post.post}</p>
                    <strong>{post.category}</strong>
                    -
                    <em>{post.author}</em>
                    <span>{transfromTime(post.date)}</span>
                </div>))
            }</div>
    )
}

export default Posts;