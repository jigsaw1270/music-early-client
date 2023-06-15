import React, { useEffect, useState } from 'react';

const useInstra = () => {
    const [classes, setClasses] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://final-assignment-server-bay.vercel.app/instructors')
            .then(res => res.json())
            .then(data => {
                setClasses(data);
                setLoading(false);
            });
    }, [])
    return [classes, loading]
};

export default useInstra;