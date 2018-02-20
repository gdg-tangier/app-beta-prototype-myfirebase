<template>
    
    <div class="jumbotron" style="background-color: white">
        <div class="container">
            <div class="row"> 
                <div class="col-md-12">
                    <h1 class="display-4">GDG Tangier</h1>
                    <p class="lead">Google Developer Groups (GDGs) are for developers who are interested in Google's developer technology.</p>
                    <p>Our main mission at Tangier is to help developers become better developers. </p>
                    <p class="lead">
                        <router-link to="/login" class="btn btn-success btn-lg">Log back in</router-link>
                        <router-link to="/register" class="btn btn-link btn-lg">I don't have an account</router-link>
                    </p>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>

    export default {
        mouted() {
            //
        },
        data() {
            return {
                //
            }
        }
    }

</script>