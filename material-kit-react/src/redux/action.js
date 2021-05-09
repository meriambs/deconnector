
export const SET_USER = "SET_USER";
export const SET_OFFER = "SET_OFFER";

export function setuser(user){
    return {
        type:SET_USER,
        payload:user,
    }
}




export function setoffer(offer){
    return {
        type:SET_OFFER,
        payload:offer,
    }
}
