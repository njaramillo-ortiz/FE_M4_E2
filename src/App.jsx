import { createContext, useEffect, useState } from 'react'
import './App.css'
import 'semantic-ui-css/semantic.min.css'
import { ServicesList } from './components/ServicesList'
import { AppointmentForm } from './components/AppointmentForm'
import { DoctorCardGrid } from './components/DoctorCardGrid'
import { Container } from 'semantic-ui-react'
import { Navbar } from './components/Navbar'
import { Route, Routes } from 'react-router'
import { Home } from './components/Home'

export const UserContext = createContext();

function App() 
{
    const [services, setServices] = useState([]);
    const [doctors, setDoctors] = useState([]);
    const [user, setUser] = useState({});

    useEffect(() => 
    {
        setServices(serviceList);
        setDoctors(doctorList);
        setUser({
            firstName: "Nicolás",
            lastName: "Jaramillo"
        });
    }, []);

    return (
        <UserContext.Provider value = {user}>
            <Navbar />
            <Container>
                <Routes>
                    <Route
                        path='/'
                        element={<Home />}
                    />
                    <Route
                        path='doctors'
                        element={<DoctorCardGrid doctors={doctors}/>} 
                    />
                    <Route
                        path='services'
                        element={<ServicesList services={services}></ServicesList>} 
                    />
                    <Route
                        path='reserve'
                        element={<AppointmentForm doctors={doctors}></AppointmentForm>} 
                    />
                </Routes>
            </Container>
        </UserContext.Provider>
    )
}

const serviceList = [
    {
        key: 'cirugia',
        name: 'Cirugía'
    },
    {
        key: 'kinesiologia',
        name: 'Kinesiología'
    },
    {
        key: 'urgencias',
        name: 'Urgencias'
    },
    {
        key: 'pediatria',
        name: 'Pediatría'
    }
]

const doctorList = [
    {
        key: 'dpp', 
        text: 'Dr. Pepper', 
        value: 'drpepper', 
        area: 'Hidratación', 
        years: 139, 
        desc: 'Est. 1885. Ahora disponible nuevo sabor Creamy Coconut (normal y zero azúcar)'
    },
    {
        key: 'ddc', 
        text: 'Dr. Dencil', 
        value: 'drdenzil', 
        area: 'Fraude', 
        years: 12, 
        desc: 'Egresado de la Faculte de Culture Humaine Integrale de Bordeaux, Francia'
    },
    {
        key: 'dpo', 
        text: 'Dra. Polo', 
        value: 'drpolo', 
        area: 'Leyes', 
        years: 23, 
        desc: 'Edúquese lo mas que pueda y respete para que lo respeten'
    },
]

export default App
