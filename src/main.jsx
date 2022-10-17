import React from 'react'
import ReactDOM from 'react-dom/client'
import RouterMain from './Routers/Router'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { AppProvider } from './Contexts/useContexts'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <AppProvider>
                <RouterMain />
            </AppProvider>
        </BrowserRouter>
    </React.StrictMode>
)
