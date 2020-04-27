export const required = (value) => { 
    if (value) {return undefined}
    return 'This field must be filled!'
};
export const maxLengthCreator = (maxLength) =>  (value) => {
    if (value && value.length >maxLength) return `Max length is ${maxLength} symbols`;
    return undefined
}