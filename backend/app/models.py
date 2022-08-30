from sqlalchemy import Column, Integer, String, Float

from .database import Base

class Patient(Base):
    __tablename__ = "patients"

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, unique=True)
    birth_date = Column(String)
    height = Column(Float)
    weight = Column(Float)
    blood_group = Column(String(2))
    sex = Column(String(1))