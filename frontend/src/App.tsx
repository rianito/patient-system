import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Listing from "./Components/Listing"
import MainForm from "./Components/MainForm"
import SideBar from "./Components/NavigateBar"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Patient } from './Components/interfaces';
import { useState } from 'react';
import { Box } from '@mui/material';
import { Container } from '@mui/system';
import PageNotFound from './Components/PageNotFound';
import About from './Components/about';

export default function App() {
  const [editMode, setEditMode] = useState(false)
  const [editPatient, setEditPatient] = useState<Patient>(
    {
      id: 0,
      name: "",
      birth_date: "",
      blood_group: "",
      cpf: "",
      sex: "",
      weight: 0,
      height: 0,
      observation: ""
    }
  );

  return (
    <>

      <ToastContainer/>
      <Router>
        <SideBar />
        <Box>
          <Container>
            <Routes>
              <Route path='/form' element={<MainForm setEditMode={setEditMode} setEditPatient={setEditPatient} editMode={editMode} editPatient={editPatient} />} />
              <Route path='/' element={<Listing setEditMode={setEditMode} setEditPatient={setEditPatient} />} />
              <Route path='/about' element={<About />} />
              <Route path='*' element={<PageNotFound />} />
            </Routes>
          </Container>
        </Box>
      </Router>
    </>
  )
}