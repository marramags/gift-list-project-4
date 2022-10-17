import sendRequest from './send-request';

const BASE_URL = '/api/giftlist';

//add an gift & recipient to list
export function addGift(userData) {
    return sendRequest(BASE_URL, 'POST', userData);
}

//retrieve gift list
export function getAll() {
    return sendRequest(BASE_URL);
}

export function deleteGift(id){
    console.log(id)
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}

export function completeGifts(id, newStatus) {
    console.log(`user id:${id}`)
    console.log(newStatus)
    console.log(`state: ${newStatus}`)
    return sendRequest(`${BASE_URL}/${id}`, 'PUT', newStatus);
}