export default async function fetchData(endpoint,option={}){
    try{
        console.log(`${import.meta.env.VITE_HOST}${endpoint}`);
        const res = await fetch(`${import.meta.env.VITE_HOST}${endpoint}`,
            {
                headers : {'Content-Type':'application/json'},
                ...option
            })
        return await res.json();

    }
    catch(e){
        console.log(e);
        throw e;
    }

}