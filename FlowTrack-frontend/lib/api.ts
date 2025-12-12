export const API_URL = 'http://153.5.129.113:3000'

export async function apiGet(path: string, token?:string){
    const res = await fetch(`${API_URL}${path}`, {

        headers:token ? {Authorization:`Bearer ${token}`} : undefined,
    });
    return res.json();

}
