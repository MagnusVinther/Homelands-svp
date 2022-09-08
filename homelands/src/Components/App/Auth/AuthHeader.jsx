
export const AuthHeader = () => {
    // giver adgang til at bruge api data
    const curToken = sessionStorage.getItem('token') ? JSON.parse(sessionStorage.getItem('token')) : "";

    if(curToken) {
        return {
            //global token
            "Access-Control-Allow-Origin": "*",
            "Authorization": `Bearer ${curToken.access_token}`
        };
    } 
    
    // returnerer ingenting
    else {
        return {};
    }
}
