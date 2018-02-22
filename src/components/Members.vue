<template>
    <div class="container" style="margin-top: 20px">
        <div class="row">
            <div class="col-md-12">
                <h1>Members</h1>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-md-3">
                <div class="card-deck" v-for="member in members" :key="member['.key']">
                    <div class="card">
                        <img class="card-img-top" :src="member.profile_picture" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">{{ member.name }}</h5>
                            <p class="card-text">{{ member.bio }}</p>
                            <p class="card-text">
                                <small class="text-muted">Last activity 3 mins ago</small>
                            </p>
                        </div>
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
            members: this.$store.state.database.child('users'),
        }
    },
    mounted() {
    },
    data() {
        return {
            //
        }
    }
}

</script>