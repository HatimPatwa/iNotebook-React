import './App.css';

import Navbar from './components/Navbar';
import NoteState from './context/notes/NoteState';
import { Alert } from './components/Alert';
import { Outlet } from 'react-router-dom';



function App() {
  return (
    <>
      <NoteState>
        <Navbar />
        <Alert message="This is amazing React course" />
        <div className="container">
          <Outlet />
        </div>
      </NoteState >
    </>
  );
}

export default App;
