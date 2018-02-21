export default class Profile {

    /**
     * Create new Profile instance
     */
    constructor() {
        this.bio = ""
        this.name = ""
        this.city = ""
        this.age = ""
        this.phone_number = ""
    }

    /**
     * Set Bio.
     * 
     * @param {string} bio
     * 
     * @return {Profile}
     */
    setBio(bio) {
        this.bio = bio

        return this
    }

    /**
     * Set Name.
     * 
     * @param {string} name
     * 
     * @return {Profile} 
     */
    setName(name) {
        this.name = name

        return this
    }

    /**
     * set city.
     * 
     * @param {string} city
     * 
     * @return {Profile} 
     */
    setCity(city) {
        this.city = city

        return this
    }

    /**
     * set age.
     * 
     * @param {string} age
     * 
     * @return {Profile} 
     */
    setAge(age) {
        this.age = age

        return this
    }

    /**
     * set phone number.
     *
     * @param {string} phoneNumber
     * 
     * @return {Profile}
     */
    setPhoneNumber(phoneNumber) {
        this.phone_number = phoneNumber

        return this
    }

    /**
     * Export model to JSON.
     * 
     * @return {*}
     */
    toJson() {
        return {
            bio: this.bio,
            name: this.name,
            city: this.city,
            age: this.age,
            phone_number: this.phone_number
        }
    }
}