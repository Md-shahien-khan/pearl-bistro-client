// import { useEffect, useState } from "react"

// const useMenu = () =>{
// const [menu, setMenu] = useState([]);
// const [loading, setLoading] = useState(true);
//         useEffect(() =>{
//             fetch('/menu.json')
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data)
//             setMenu(data)
//             setLoading(false)
//             })
//         }, [])
//         return [menu, loading]
// }

// export default useMenu;


import { useEffect, useState } from "react";

const useMenu = () => {
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('menu.json') // Correct path to access the JSON file in the public folder
            .then(res => {
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                return res.json();
            })
            .then(data => {
                console.log(data);
                setMenu(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Failed to fetch menu:", error);
                setLoading(false); // Ensure loading state updates even if fetch fails
            });
    }, []);

    return [menu, loading];
};

export default useMenu;