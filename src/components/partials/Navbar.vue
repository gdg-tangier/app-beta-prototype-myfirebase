<template>

	<nav class="navbar navbar-expand-md navbar-light navbar-laravel">
        <div class="container">
        	<router-link to="/" class="navbar-brand">
				GDG Tangier
        	</router-link>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li><router-link to="/members" class="nav-link">Members</router-link></li>
                    <li><a class="nav-link" href="#">Annoucements</a></li>
                </ul>

                <ul class="navbar-nav ml-auto">
                    <li v-if="! signed">
                    	<router-link to="/login" class="nav-link">Login</router-link>
                   	</li>
                    <li v-if="! signed">
						<router-link to="/register" class="nav-link">Register</router-link>
                    </li>

                    <li v-if="signed" class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" v-bind:class="{ active: isDropDownActive }" href="#" v-on:click="isDropDownActive = !isDropDownActive">
                            Profile <span class="caret"></span>
                        </a>
                        <div class="dropdown-menu" v-bind:class="{ show: isDropDownActive }">
                            <router-link to="/profile/update" class="dropdown-item">Update Profile</router-link>
                            <div class="dropdown-divider"></div>
                            <router-link to="" @click.native="logout()" class="dropdown-item">Logout</router-link>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

</template>

<script>

	export default {
		mounted() {
			this.$auth.check({
				then: (user) => {
					this.signed = true
				},
				catch: () => {
					//
				}
			})
		},
		data() {
			return {
				isDropDownActive: false,
				signed: false
			}
		},
		
		methods: {
			logout() {
				this.$auth.logout()
				this.signed = false;
			}
		}
	}
	
</script>