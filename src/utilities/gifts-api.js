import sendRequest from './send-request';

const BASE_URL = '/api/giftlist';

//retrieve gift list
export function getList() {
    return sendRequest(`${BASE_URL}`);
}

//add an gift & recipient to list
export function addGift() {
    return sendRequest(`${BASE_URL}/addgift`, 'POST');
}