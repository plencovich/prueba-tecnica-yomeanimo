import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Inertia } from '@inertiajs/inertia';
import { usePage } from '@inertiajs/inertia-react';

const LandingPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { props } = usePage();
    const [successMessage, setSuccessMessage] = useState(props.success || null);
    const [errorMessage, setErrorMessage] = useState(null);

    const onSubmit = async (data) => {
        try {
            await Inertia.post('/save-user', data, {
                onError: () => {
                    setErrorMessage('Error al guardar usuario.');
                },
                onSuccess: (page) => {
                    setSuccessMessage('Usuario guardado correctamente.');
                }
            });
        } catch (error) {
            setErrorMessage('Error al procesar la solicitud.');
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Landing Page</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Nombre:</label>
                    <input type="text" id="name" {...register('name', { required: true })} />
                    {errors.name && <span className="error">Este campo es requerido.</span>}
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" {...register('email', { required: true })} />
                    {errors.email && <span className="error">Este campo es requerido.</span>}
                </div>
                <button type="submit">Guardar</button>
            </form>
            {successMessage && <p className="success-message">{successMessage}</p>}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
    );
};

export default LandingPage;
