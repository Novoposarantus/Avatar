export const actionBody = async (_store, body,  onError = () => {}) => {
    try {
        return await body();
    } catch (error) {
        onError(error);
    }
}