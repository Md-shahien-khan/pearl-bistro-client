import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './routes/Routes';


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='w-11/12 mx-auto'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
)