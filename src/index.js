import { createRoot } from 'react-dom/client';

import './index.scss';

import App from './App';


const rootDOMElement = document.querySelector('#app');
const root = createRoot(rootDOMElement);
root.render(<App/>);