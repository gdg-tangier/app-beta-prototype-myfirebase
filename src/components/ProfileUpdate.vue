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
                            <div v-if="isLoading" class="alert alert-info">
                                Please wait...
                            </div>
                        </div>

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

        mounted() {

            this.isLoading = true

            this.$auth.check({
                then: (user) => {
                    this.user = user

                    let ref = this.$store.state.firebase.database().ref('users')

                    let self = this;

                    ref.once('value', function(snapshot) {
                        if (snapshot.hasChild(user.uid)) {
                            ref.on('value', (data) => {

                                let item = data.val()[user.uid]

                                self.name = item.name
                                self.bio = item.bio
                                self.city = item.city
                                self.age = item.age
                                self.phone_number = item.phone_number

                            }, (error) => {
                                console.log("I could not get user data")
                            })
                        }
                        else {
                            console.log("First time logged In")
                        }

                        self.isLoading = false
                    });
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

                user: '',

                name: '',
                bio: '',
                city: '',
                age: '',
                phone_number: ''
            }
        },
        methods: {
            update() {
                this.isLoading = true

                let ref = this.$store.state.firebase.database().ref('users')

                ref.child(this.user.uid).set({
                    name: this.name,
                    bio: this.bio,
                    city: this.city,
                    age: this.age,
                    phone_number: this.phone_number
                }, () => {
                    this.isLoading = false
                });
            }
        }
    }

</script>