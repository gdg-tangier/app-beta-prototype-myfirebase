<template>

    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">

                <div class="container">
                    <div v-if="isLoading" class="alert alert-info">
                        Please wait...
                    </div>
                </div>

                <div class="container">
                    <div v-if="hasError" class="alert alert-danger">
                        {{ error }}
                    </div>
                </div>

                <div class="card card-default">
                    <div class="card-header">Login</div>

                    <div class="card-body">
                        <form v-on:submit.prevent="login()">
                            <div class="form-group row">
                                <label class="col-sm-4 col-form-label text-md-right">E-Mail Address</label>
                                <div class="col-md-6">
                                    <input type="email" class="form-control" v-model="email">
                                </div>
                            </div>

                            <div class="form-group row">
                                <label class="col-md-4 col-form-label text-md-right">Password</label>
                                <div class="col-md-6">
                                    <input type="password" class="form-control" v-model="password"  >
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col-md-6 offset-md-4">
                                    <div class="checkbox">
                                        <label>
                                            <input type="checkbox" name="remember"> Remember Me
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group row mb-0">
                                <div class="col-md-8 offset-md-4">
                                    <button type="submit" class="btn btn-primary">
                                        Login
                                    </button>

                                    <a class="btn btn-link" href="#">
                                        Forgot Your Password?
                                    </a>
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
                redirect: '/login'
            });
        },
        data() {
            return {
                email: '',
                password: '',

                isLoading: false,
                hasError: false,
                error: '',
            }
        },
        methods: {
            login() {
                this.isLoading = true

                this.$auth.loginWithEmailAndPassowrd({
                    email: this.email,
                    password: this.password,
                    success: (user) => {
                        this.isLoading = false
                    },
                    error: (error) => {
                        this.isLoading = false
                        this.hasError = true
                        this.error = error
                    }
                })
            }
        }
    }

</script>