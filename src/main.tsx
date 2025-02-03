import {createRoot} from 'react-dom/client'
import './index.module.scss'
import "./Components/adaptive.module.scss"
import {App} from './Components/App.tsx'

createRoot(document.getElementById('root')!).render(
    <App/>,
)
