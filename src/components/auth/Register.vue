<template>
    
    <div class="container" style="margin-top: 20px">
        <div class="row justify-content-center">
            <div class="col-md-8">

                <p v-if="isLoading">I am loading...</p>

                <p v-if="hasError">{{ error }}</p>

                <div class="card card-default">
                    <div class="card-header">Register</div>

                    <div class="card-body">
        				<form v-on:submit.prevent="register()">
        					<div class="form-group row">
                                <label class="col-md-4 col-form-label text-md-right">Name</label>
                                <div class="col-md-6">
                                    <input type="text" class="form-control" v-model="name">
                                </div>
                            </div>

                            <div class="form-group row">
                                <label class="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                                <div class="col-md-6">
                                    <input type="email" class="form-control" v-model="email">
                                </div>
                            </div>

                            <div class="form-group row">
                                <label class="col-md-4 col-form-label text-md-right">Password</label>
                                <div class="col-md-6">
                                    <input type="password" class="form-control" v-model="password">
                                </div>
                            </div>

                            <div class="form-group row">
                                <label class="col-md-4 col-form-label text-md-right">Confirm Password</label>
                                <div class="col-md-6">
                                    <input type="password" class="form-control" v-model="confirm_password">
                                </div>
                            </div>

                            <div class="form-group row mb-0">
                                <div class="col-md-6 offset-md-4">
                                    <button type="submit" class="btn btn-primary">
                                        Register
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
            this.$auth.state({
                forward: '/dashboard',
                redirect: '/register',
                then: (user) => {
                    console.log(user)
                },
                catch: () => {
                    console.log('Please register!')
                }
            });
        },
        data() {
            return {
                name: '',
                email: '',
                password: '',
                confirm_password: '',

                isLoading: false,
                hasError: false,
                error: '',
            }
        },
        methods: {
        	register() {
                this.isLoading = true

			    this.$auth.registerWithEmailAndPassword({
			        email: this.email,
			        password: this.password,
			        success: (user) => {
                        this.isLoading = false
                        console.log(user)
			        },
			        error: (error) => {
			        	this.isLoading = false
                        this.hasError = true
                        this.error = error
			        }
			    });
			}
        }
    }

</script>