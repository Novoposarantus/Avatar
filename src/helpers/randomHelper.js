function getRandomIntToMax(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

export const getRandomString = () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
});

export const getRandomInt = (max, min = 0) => {
    return getRandomIntToMax(max - min) + min;
}