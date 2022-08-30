from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from . import crud, models, schemas
from .database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:8000",
    "http://localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/")
def read_root():
    return "Hello!"

@app.get("/patients", response_model=list[schemas.Patient])
def read_patients(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    patients = crud.read_patients(db, skip=skip, limit=limit)
    return patients

@app.get("/patients/{patient_id}", response_model=schemas.Patient)
def read_patients(patient_id: int, db: Session = Depends(get_db)):
    db_patient = crud.read_patient(db, patient_id=patient_id)
    if db_patient is None:
        raise HTTPException(status_code=404, detail="Paciente não encontrado.")
    return db_patient

@app.post("/patients", response_model=schemas.Patient)
def create_patients(patient: schemas.CreatePatient, db: Session = Depends(get_db)):
    return crud.create_patient(db=db, patient=patient)

@app.put("/patients/{patient_id}")
def update_patients(patient: schemas.Patient, db: Session = Depends(get_db)):
    crud.update_patient(db, patient=patient)
    return patient

@app.delete("/patients/{patient_id}")
def delete_patients(patient_id: int, db: Session = Depends(get_db)):
    db_patient = crud.delete_patient(db, patient_id=patient_id)
    return db_patient