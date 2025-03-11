import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {ColorProvider} from "./context/ColorContext.tsx";

createRoot(document.getElementById('root')!).render(
    <ColorProvider>
        <App />
    </ColorProvider>
)
