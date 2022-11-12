import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import './index.css';

const rootContainer = document.getElementById('root');
const root = ReactDOM.createRoot(rootContainer);
root.render(
    <Router>
        <App />
    </Router>,
);
