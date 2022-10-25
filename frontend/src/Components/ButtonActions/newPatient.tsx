import { Patient } from "../interfaces";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

type Props = {
  setEditPatient: Function;
  setEditMode: Function;
};

export default function NewPatient({ setEditMode, setEditPatient }: Props) {
  function handleClick() {
    setEditPatient({
      id: 0,
      name: "",
      birth_date: "",
      blood_group: "",
      cpf: "",
      sex: "",
      weight: "",
      height: "",
      observation: "",
    });
    setEditMode(false);
  }

  return (
    <Link to={"/form"} style={{ textDecoration: "none" }}>
      <Button
        onClick={handleClick}
        sx={{
          left: 15,
          width: 200,
          height: 50,
          color: "#fff",
          borderRadius: 3,
          backgroundColor: "#32a852",
          margin: 1,
          ":hover": {
            backgroundColor: "#32a85241",
          },
        }}
      >
        Cadastrar
      </Button>
    </Link>
  );
}
