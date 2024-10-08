import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Header from './components/Header/Header.tsx'
import { TabProvider } from './context/tabContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TabProvider>
    <Header />
    <App />
    </TabProvider>
  </StrictMode>
)
