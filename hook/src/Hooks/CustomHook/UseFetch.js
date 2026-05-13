import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    async function fetchData() {
        try {
            let apiData = await fetch(url);
            apiData = await apiData.json();
            setData(apiData);
        } catch (error) {
            console.log(error);
            setError(error)
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [url]);

    return { data, loading, error }
}


export default useFetch;