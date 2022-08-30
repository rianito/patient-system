from pydantic import BaseModel
from enum import Enum

class SexEnum(str, Enum):
    Male = "M"
    Female = "F"

class BloodGroupEnum(str, Enum):
    OPositive = "O+"
    ONegative = "O-"
    APositive = "A+"
    ANegative = "A-"
    BPositive = "B+"
    BNegative = "B-"
    ABPositive = "AB+"
    ABNegative = "AB-"

class BasePatient(BaseModel):
    name: str
    birth_date: str
    height: float
    weight: float
    blood_group: BloodGroupEnum
    sex: SexEnum

class CreatePatient(BasePatient):
    pass

class Patient(BasePatient):
    id: int
    class Config:
        orm_mode = True
