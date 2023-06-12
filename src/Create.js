import { useState } from "react";

const Create = () => {

    const [title,setTitle] = useState('')
    const [body,setBody] = useState('');
    const [author,setAuthor] = useState('Mona');

    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <form>
                <label>Blog title:</label>
                <input 
                    type="text"
                    required 
                    value = {title}
                    onChange = {(e) => setTitle(e.target.value)} />
                <label>Blog body:</label>
                <textarea 
                    required
                    value = {body}
                    onChange = {(e) => setBody(e.target.value)}
                    >
                </textarea>
                <label>Blog Author:</label>
                <select
                    value = {author}
                    onChange = {(e) => setAuthor(e.target.value)}
                    >
                    <option value="Mayank">Mayank</option>
                    <option value="Mona">Mona</option>
                </select>
                <button>Add blog</button>
            </form>
        </div>
    );
}
 
export default Create;