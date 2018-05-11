<template>
	<div class="register">

		<form class="form-horizontal" action='' method="POST">
			<fieldset>
				<div id="legend">
					<legend class="">Register</legend>
				</div>
				<div class="control-group">
					<!-- Username -->
					<label class="control-label"  for="username">Username</label>
					<div class="controls">
						<input v-model="User.username" type="text" id="username" name="username" placeholder="" class="input-xlarge">
						<p class="help-block">Username can contain any letters or numbers, without spaces</p>
					</div>
				</div>

				<div class="control-group">
					<!-- E-mail -->
					<label class="control-label" for="email">E-mail</label>
					<div class="controls">
						<input v-model="User.email" type="text" id="email" name="email" placeholder="" class="input-xlarge">
						<p class="help-block">Please provide your E-mail</p>
					</div>
				</div>

				<div class="control-group">
					<!-- Password-->
					<label class="control-label" for="password">Password</label>
					<div class="controls">
						<input v-model="User.password" type="password" id="password" name="password" placeholder="" class="input-xlarge">
						<p class="help-block">Password should be at least 4 characters</p>
					</div>
				</div>

				<div class="control-group">
					<!-- Password -->
					<label class="control-label"  for="password_confirm">Password (Confirm)</label>
					<div class="controls">
						<input v-model="User.confPassword" type="password" id="password_confirm" name="password_confirm" placeholder="" class="input-xlarge">
						<p class="help-block">Please confirm password</p>
					</div>
				</div>

				<div class="control-group">
					<!-- Button -->
					<div class="controls">
						
						<button v-on:click.preserve="addToApi" class="btn btn-success ">Register</button>
						
					</div>
				</div>
			</fieldset>
		</form>
	</div>

</template>


<script >
/*eslint-disable*/
	import axios from 'axios';

	export default {
		name: 'register',

		data(){
			return{
				User:{
					username: '',
					email: '',
					password: ''
					//,confPassword: ''

				}
			}
		},
		methods:{
			addToApi(){

//				let newUser = {
//					username: this.User.username,
//					email: this.User.email,
//					password: this.User.password
//					//,confPassword: this.User.confPassword
//				}
				console.log(this.User);
				
				axios.post('http://localhost:8080/authentication/register', this.User)
					.then((response) => {
					console.log(response);
					
					this.$router.push('/');
				})
					.catch((error) => {
					console.log(error)
				});
			}
		}

	}

</script>



<style scoped>

</style>