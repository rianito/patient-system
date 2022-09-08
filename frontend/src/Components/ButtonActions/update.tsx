import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import EditIcon from '@mui/icons-material/Edit';
import { indigo } from "@mui/material/colors";
import { Patient } from "../interfaces";
import { Link } from "react-router-dom";


type Props ={
    patient: Patient
    setEditPatient: Function
    setEditMode: Function
 }


export default function UpdateBtn({patient, setEditPatient, setEditMode}:Props){

    
 function handleClick(){

    setEditMode(true)
    setEditPatient(patient)
}

return(
<Tooltip title="Editar">
    <Link to={'/form'}>
        <IconButton onClick={handleClick}>
            <EditIcon sx={{color: indigo[500]}} />
        </IconButton>
    </Link>
</Tooltip>
)}