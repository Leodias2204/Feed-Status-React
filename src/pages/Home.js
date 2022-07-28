import { useState ,useEffect} from "react";

import PostForm from '../components/PostForm';
import Feed from '../components/Feed'

import '../styles/PostForm.css';
import '../styles/Feed.css';

export default function Home () {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
        
    useEffect(()=> {
        fetch('http://localhost:3001/posts')
            .then(async (response)=>{
                const body = await response.json();
                setPosts((body.map((post) =>({
                    ...post,
                    publishedAt: new Date(post.publishedAt),
                }))));
                setIsLoading(false);
            })
    }, [])


        function handleSubmit({history, userName}) {
        setPosts([
            //spread operator que pode ser passado vários parâmetros nessa função
            
            ...posts,
            {
                id: Math.random(),
                content: history,
                userName,
                publishedAt: new Date(),
            },
        ]);
    }
    return (
        <>
        <PostForm onSubmit={handleSubmit} />

            <main>
                <Feed
                    isLoading={isLoading}
                    posts={posts} 
                    title="Seu Feed"
                    subtitle="Acompanhe o que seus amigos estão pensando em tempo real"
                />
            </main>    
        </>
    )
}