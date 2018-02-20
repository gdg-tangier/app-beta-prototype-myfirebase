<template>
    
    <div class="container" style="margin-top: 20px">
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
                        <form v-on:submit.prevent="update()">
                            <div class="form-group row">
                                <label class="col-sm-4 col-form-label text-md-right">Name</label>
                                <div class="col-md-6">
                                    <input type="text" class="form-control" v-model="name">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-4 col-form-label text-md-right">Bio</label>
                                <div class="col-md-6">
                                    <textarea class="form-control" v-model="bio" rows="4"></textarea>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-4 col-form-label text-md-right">City</label>
                                <div class="col-md-6">
                                    <input type="text" class="form-control" v-model="city">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-4 col-form-label text-md-right">Age</label>
                                <div class="col-md-6">
                                    <input type="text" class="form-control" v-model="age">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-4 col-form-label text-md-right">Phone Number</label>
                                <div class="col-md-6">
                                    <input type="text" class="form-control" v-model="phone_number">
                                </div>
                            </div>
                            <div class="form-group row mb-0">
                                <div class="col-md-8 offset-md-4">
                                    <button type="submit" class="btn btn-primary">
                                        Save
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>

    export default {

        firebase() {
            return {
                users: this.$store.state.database.child('users'),
            }
        },

        mounted() {

            this.$auth.check({
                then: (user) => {
                    let ref = this.$store.state.firebase.database().ref('users/' + user.uid)
                    
                    ref.on('value', (data) => {
                        this.name = data.val().name
                        this.bio = data.val().bio
                        this.city = data.val().city
                        this.age = data.val().age
                        this.phone_number = data.val().phone_number
                    }, (error) => {
                        console.log("I could not get user data")
                    })
                },
                catch: () => { 
                    console.log("I could not get the authentificated user")
                }
            });

        },
        data() {
            return {
                name: '',
                bio: '',
                city: '',
                age: '',
                phone_number: ''
            }
        }
    }

</script>