export const isNull = (val) => {
    return !val && val == null || typeof(val) == "undefined"
}