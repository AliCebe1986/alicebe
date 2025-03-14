
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Create root before any rendering
const rootElement = document.getElementById("root");

if (rootElement) {
  const root = createRoot(rootElement);
  
  // Render the app when ready
  root.render(<App />);
}
