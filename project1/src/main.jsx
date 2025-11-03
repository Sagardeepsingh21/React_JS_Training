import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import AppContext from './context/AppContext.jsx'

createRoot(document.getElementById('root')).render(
 <contextProvide>
  <App/>
 </contextProvide>
)
