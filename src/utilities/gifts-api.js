import sendRequest from './send-request';

const BASE_URL = '/api/giftlist';

//add an gift & recipient to list
export function addGift(userData) {
    return sendRequest(BASE_URL, 'POST', userData);
}

// addRecipient
export function addRecipient(recipientData) {
    return sendRequest(BASE_URL, 'POST', recipientData);
}

//retrieve gift list
async function getAll() {
    return sendRequest(BASE_URL);
}


