import React, { useState, useEffect } from 'react';
import { usePage } from '@inertiajs/inertia-react';

const LandingPage = () => {
    const { props } = usePage();
    const [subscribes, setSubscribes] = useState(props.subscribes || []);

    useEffect(() => {
        if (props.success) {
            setSuccessMessage(props.success);
        }
        if (props.subscribes) {
            setSubscribes(props.subscribes);
        }
    }, [props]);

    return (
        <div>
            <h2>Suscriptores</h2>
            <ul>
                {subscribes.map((subscribe) => (
                    <li key={subscribe.id}>{subscribe.name} - {subscribe.email}</li>
                ))}
            </ul>
        </div>
    );
};

export default LandingPage;
