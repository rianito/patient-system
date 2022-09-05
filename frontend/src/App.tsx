import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Listing from "./Components/Listing"
import MainForm from "./Components/MainForm"
import SideBar from "./Components/NavigateBar"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Wave from "./assets/styles/wave";
import { Patient } from './Components/interfaces';
import { useState } from 'react';



function App() {
  const [editMode, setEditMode] = useState(false)
  const [editPatient, setEditPatient] = useState<Patient>(
    {
        id:0,
        name:"",
        birth_date:"",
        blood_group:"",
        cpf:"",
        sex:"",
        weight:0,
        height: 0
    }
);

return(
<>

<ToastContainer />
          <Router>
  <main>
    <section>
  <SideBar/>
        <div className="container">
            <Routes>
                <Route path='/' element={<MainForm setEditMode={setEditMode} setEditPatient={setEditPatient} editMode={editMode} editPatient={editPatient}/>}/>
                <Route path='/listing' element={<Listing setEditMode={setEditMode} setEditPatient={setEditPatient} />}/>
            </Routes>
        </div>
    </section>
  </main>
          </Router>
      <Wave/>
</>
)

}

export default App