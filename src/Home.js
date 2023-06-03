import { useEffect, useState } from "react";
import BlogList from "./blogList";

const Home = () => {

    const[blogs,setBlogs] = useState([
        {title: 'My new website', body: 'lorem ipsum ...', author: 'Mayank', id: 1},
        {title: 'Welcome party', body: 'lorem ipsum ...', author: 'Mona', id: 2},
        {title: 'Web dev top tips', body: 'lorem ipsum ...', author: 'Vishal', id: 3},
    ]);

    const[name,setName] = useState('Mayank');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log('use effect ran');
    },[name])

    return (  
        <div className="home">
            <BlogList blogs = {blogs} title = "All blogs!" handleDelete = {handleDelete} />
            <button onClick={() => setName('lol')}>Change name</button>
            <p>{name}</p>
        </div>
    );
}

export default Home;