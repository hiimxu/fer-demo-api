import React from "react";

export default function useFetch(url) {
    const [data, setData] = React.useState({
        loading: true,
        data: null,
    });

    React.useEffect(() => {
        const fetchApi = async () => {
            const response = await fetch(
                `${process.env.REACT_APP_BASE_URL}${url}`
            );
            const data = await response.json();
            setData({
                loading: false,
                data: data,
            });
        };
        if (url) {
            fetchApi();
        }
    }, [url]);

    return data;
}
