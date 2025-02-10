// import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useMenu = () => {
    const axiosPublic = useAxiosPublic();
    // const [menu, setMenu] = useState([]);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     fetch('http://localhost:5000/menu') //Correct path to access the JSON file in the public folder
    //         .then(res => {
    //             if (!res.ok) {
    //                 throw new Error(`HTTP error! Status: ${res.status}`);
    //             }
    //             return res.json();
    //         })
    //         .then(data => {
    //             console.log(data);
    //             setMenu(data);
    //             setLoading(false);
    //         })
    //         .catch(error => {
    //             console.error("Failed to fetch menu:", error);
    //             setLoading(false); // Ensure loading state updates even if fetch fails
    //         });
    // }, []);

    // using tan stack query 
    const {data : menu = [], isPending : loading, refetch} = useQuery({
        queryKey: ['menu'],
        queryFn : async() =>{
            const res = await axiosPublic.get('/menu');
            return res.data;  
        }
    })

    return [menu, loading, refetch];
};

export default useMenu;