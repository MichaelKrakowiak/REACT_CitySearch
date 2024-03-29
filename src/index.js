import { createRoot } from 'react-dom/client';

import './index.scss';


const rootDOMElement = document.querySelector('#app');
const root = createRoot(rootDOMElement);
root.render(<h1>Hello World !</h1>);