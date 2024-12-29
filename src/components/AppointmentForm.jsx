import { useEffect, useRef, useState } from "react";
import { Form, FormButton, FormField, FormSelect, Segment } from "semantic-ui-react";
import PortalModal from "./PortalModal";

export function AppointmentForm(props)
{
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [doctor, setDoctor] = useState("");

    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);

    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        firstNameRef.current.focus();
    }, [])

    return(
        <Segment>
            <PortalModal open = {modalOpen} onConfirm={ReserveConfirmed} firstName={firstName} lastName={lastName} doctor={doctor} />

            <Form>
                <h1>Formulario de Reserva</h1>
                <TextInput label="Nombre" placeholder="Juanito" onChange={setFirstName} useRef={firstNameRef}/>
                <TextInput label="Apellido" placeholder="Perez" onChange={setLastName} useRef={lastNameRef} />
                <DropdownInput label="Doctor" placeholder="Doctor..." options={props.doctors} onChange={setDoctor} />
                <FormButton onClick={() => ConfirmReserve()}>Reservar Hora</FormButton>
            </Form>
        </Segment>
    );

    function ConfirmReserve()
    {
        setModalOpen(true);
    }

    function ReserveConfirmed()
    {
        setModalOpen(false);
        testRef.current.value = null;
        firstNameRef.current.value = null;
        lastNameRef.current.value = null;
    }
}

function TextInput({label, placeholder, onChange, useRef})
{
    return(
        <FormField>
            <label>{label}</label>
            <input placeholder={"Ej: "+placeholder} onChange={(e) => onChange(e.target.value)} ref={useRef}></input>
        </FormField>
    );
}

function DropdownInput({label, options, placeholder, onChange})
{
    return(
        <FormSelect
            fluid
            label={label}
            options={options}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.textContent)}
        />
    );
}