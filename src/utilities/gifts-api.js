import * as usersAPI from './users-api';

const BASE_URL = '/api/giftlist';

//add an gift & recipient to list
export function addGift() {
    return usersAPI(`${BASE_URL}/addgift`, 'POST');
}