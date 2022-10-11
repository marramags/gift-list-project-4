import * as usersAPI from './users-api';

const BASE_URL = '/api/giftlist';

//retrieve gift list
export function getList() {
    return usersAPI(`${BASE_URL}`);
}

//add an gift & recipient to list
export function addGift() {
    return usersAPI(`${BASE_URL}/addgift`, 'POST');
}