export default class State {

    /**
     * Set state to success.
     * 
     * @param {string} message
     * 
     * @return {*} 
     */
    static toSuccess(message) {
        return {
            class: "alert alert-success",
            message: message
        }
    }

    /**
     * Set state to Error.
     * 
     * @param {string} message
     * 
     * @return {*} 
     */
    static toError(message) {
        return {
            class: "alert alert-danger",
            message: message
        }
    }
}