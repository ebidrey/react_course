export const SET_CITY = 'SET_CITY';

/* 
 * this functions must return this structure to 
 * be processed after by the reducer
*/
export const setCity = city => {
    return {type: SET_CITY, city};
};