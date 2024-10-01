import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Repositories } from '@/pages/Repositories'
import './index.css';

export const App = (): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Repositories />} />
    </Routes>
  </BrowserRouter>
);
