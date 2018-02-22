<template>
    <div class="container">

        <div class="row">
            <div class="col-md-12">
                <h1>Update Profile</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="card card-default">
                    <div class="card-header">Preview</div>
                    <div class="card-body">
                        <p></p>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card card-default">
                    <div class="card-header">Update my informations</div>
                    <div class="card-body">
                        <div class="container">
                            <div v-if="$store.state.state.fired" :class="$store.state.state.style.state">
                                <button type="button" class="close" @click="$store.commit('changeState')">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                {{$store.state.state.message}}
                            </div>
                        </div>

                        <form v-on:submit.prevent="update()">
                            <div class="form-group row">
                                <label class="col-sm-4 col-form-label text-md-right">Avatar</label>
                                <div class="col-md-6">
                                    <img src="" alt="">
                                    <input type="file" class="hidden" @change="getFile" accept="image/*">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-4 col-form-label text-md-right">Name</label>
                                <div class="col-md-6">
                                    <input type="text" class="form-control" v-model.trim="Profile.name">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-4 col-form-label text-md-right">Bio</label>
                                <div class="col-md-6">
                                    <textarea class="form-control" v-model.trim="Profile.bio" rows="4"></textarea>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-4 col-form-label text-md-right">City</label>
                                <div class="col-md-6">
                                    <input type="text" class="form-control" v-model.trim="Profile.city">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-4 col-form-label text-md-right">Age</label>
                                <div class="col-md-6">
                                    <input type="text" class="form-control" v-model.trim="Profile.age">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-4 col-form-label text-md-right">Phone Number</label>
                                <div class="col-md-6">
                                    <input type="text" class="form-control" v-model.trim="Profile.phone_number">
                                </div>
                            </div>
                            <div class="form-group row mb-0">
                                <div class="col-md-8 offset-md-4">
                                    <button type="submit" class="btn btn-primary" :disabled="isLoading">
                                        Save
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="overlay" v-if="isLoading">
            <i class="fa fa-gear fa-spin flex-spinner"></i>
        </div>
    </div>
</template>

<script>
import Profile from "./../models/profile"
import State from "./../utils/state"

export default {

    mounted() {
        this.isLoading = true
        this.$auth.check({
            then: (user) => {
                this.$bindAsObject("loggedIn", this.$store.state.firebase.database().ref(`users/${user.uid}`), null,
                    () => {
                        if (this.loggedIn) {
                            this.Profile.setName(this.loggedIn.name)
                                .setCity(this.loggedIn.city)
                                .setBio(this.loggedIn.bio)
                                .setPhoneNumber(this.loggedIn.phone_number)
                                .setAge(this.loggedIn.age)
                        }
                        this.isLoading = false
                    })
            },
            catch: () => {
                this.isLoading = false
                console.log("I could not get the authentificated user")
            }
        });

    },
    data() {
        return {
            isLoading: false,
            Profile: new Profile(),
        }
    },
    methods: {
        update() {
            this.isLoading = true
            this.$firebaseRefs.loggedIn
                .set(this.Profile.toJson()).then(() => {
                    this.$store.commit('stateResponse', State.toSuccess("Updated !!"))
                    this.isLoading = false
                })
                .catch((err) => {
                    this.isLoading = false
                    this.$store.commit('stateResponse', State.toError(err.message))
                    console.error(err.message)
                })
        }
    }
}

</script>