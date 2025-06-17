import {useEffect, useState} from "react";

export function useFetch(url) {
    const [data, setData] = useState(null);

    useEffect(() => {
        if (!url) return;
        console.log("Fetching:", url);


        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    console.log("HTTP error:", response.status);
                    return null;
                }
                return response.json();
            })

            .then((json) => {
                console.log("Response received:", json);
                setData(json);
            })
            .catch((error) => {
                console.log("Fetch exception:", error);
                setData(null);
            });
    }, [url]);

    return data;
}
