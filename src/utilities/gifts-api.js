import sendRequest from './send-request';

const BASE_URL = '/api/giftlist';

//add an gift & recipient to list
export function addGift(userData) {
    return sendRequest(BASE_URL, 'POST', userData);
}

export function addRecipient(recipientData){
    return sendRequest(BASE_URL, 'POST', recipientData);

}


//retrieve gift list
export function getList() {
    return sendRequest(BASE_URL);
}

