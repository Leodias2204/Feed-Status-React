import { useState } from 'react'; //importando States  onde guardamos os dados dos nossos components

import '../styles/PostForm.css'; 

import userIcon from '../images/user.svg'
import paperPlaneIcon from '../images/paper-plane.svg'


export default function PostForm(props) { //Argumentos que você passa para uma função ou classe

    const [history, setHistory] = useState('');
    const [userName, setUserName] = useState('');

    function handleSubmit(event) {
        event.preventDefault(); // evitar recarregar a página

        props.onSubmit({history, userName});

        setHistory('');
        setUserName('')
    }


    return (
        <form className="post-form" onSubmit={handleSubmit}>
                <input
                value = {history}
                placeholder='Escreva uma nova história...' 
                onChange={(event) => setHistory(event.target.value)}
                />
                <div>
                    <img src ={userIcon} alt="User"/>

                    <input
                    value={userName}
                    placeholder="Digite seu nome..."
                    onChange={(event) => setUserName(event.target.value)}
                    />
                    <button type="submit">
                        <img src={paperPlaneIcon} alt="Paper Plane"/>
                        <p>Publicar</p>
                    
                    </button>
                </div>
            </form>
    )
}