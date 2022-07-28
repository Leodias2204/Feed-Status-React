import'./styles/App.css';
import { BrowserRouter, Link} from 'react-router-dom';


import AppRoutes from './Routes';



export default function App(){ //link é utilizado para não precisar ficar recarregando a página ao mudar de páginas.
    return (
        <div className="wrapper"> 
            <BrowserRouter>
                    <nav> 
                        <Link to="/">Meu Feed</Link>
                        <Link to="/most-viewed">Mais vistos</Link>
                    </nav>
                
                <AppRoutes/>
            </BrowserRouter>
        </div>
    ); 
}

