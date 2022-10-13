import sendRequest from './send-request';

const BASE_URL = '/api/giftlist';

//add an gift & recipient to list
export function addGift(userData) {
    return sendRequest(BASE_URL, 'POST', userData);
}

//retrieve gift list
// export function getList() {
//     return sendRequest(BASE_URL);
// }

//retrieve gift list
export function getAll() {
    return sendRequest(BASE_URL);
}

export function deleteGift(id){
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}