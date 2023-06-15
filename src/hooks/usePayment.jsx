import { useEffect, useState } from "react";


const usePayment = () => {
    const [classes, setClasses] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://final-assignment-server-bay.vercel.app/payments')
            .then(res => res.json())
            .then(data => {
                setClasses(data);
                setLoading(false);
            });
    }, [])
    return [classes, loading]
}
export default usePayment;