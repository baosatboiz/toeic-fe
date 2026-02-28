const getToken = ()=> {
    const user = JSON.parse(localStorage.getItem('user'));
    return user?.authToken;
}
export default async function fetchData(endpoint,option={}){
    try{
        const token = getToken();
        const res = await fetch(`${import.meta.env.VITE_HOST}${endpoint}`,
            {
                headers : {
                    'Content-Type':'application/json',
                    ...(token?{'Authorization': `Bearer ${token}`}:{})
                },
                ...option
            })
        if(!res.ok){
            localStorage.removeItem('user');
            window.location.href="/auth";
            const error = await res.json().catch(()=>{});
            throw new Error(error.message || `Lỗi ${res.status}`);
        }
        return await res.json();

    }
    catch(e){
        console.log(e);
        throw e;
    }

}