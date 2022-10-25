import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import red from "@mui/material/colors/red";
import axios from "axios";
import { toast } from "react-toastify";

type Props = {
    patientId: number;
    deletePatient: Function
}  


export default function DeleteBtn({patientId, deletePatient}:Props){

    function handleClick(patientId: number){
        deletePatient(patientId)
    } 

return(
<Tooltip title="Deletar">
    <IconButton onClick={() => handleClick(patientId)}>
        <DeleteForeverRoundedIcon sx={{ color: red[500] }} />
    </IconButton>
</Tooltip>
)}