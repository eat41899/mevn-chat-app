<template>
	<div class="page-header">
		<div class="jumbotron text-center">
			<h1>MEVN Stack Application</h1>
			<p class="lead">Welcome to the Chat Application by <strong>Eric T.</strong></p>
			<div>
				
			</div>
			<form v-for="">
				<div>
					<label>Username</label>
					<input type="text"
						   v-model="login.username"/>
					
				</div>
				<div>
					<label>Password</label>
					<input type="text"  
						   v-model="login.password"/>
					
				</div>
				<router-link class="btn btn-primary" to="register">Register</router-link>
				
				<input class="btn btn-primary" type="submit" @click="logItIn" value="Login" />
			</form>
			
		</div>
	</div>

</template>


<script>
	/*eslint-disable*/
	import axios from 'axios';
	
	export default {
		name: 'home',
		data(){
			return {
				login:{
					username:"",
					password:""
					//,
					//errMessage:""
				}
			}
		},
		methods:{
			logItIn(){
				axios.post('http://localhost:8080/authentication/login', this.login)
				.then(response => {
					//console.log(response);
					
					let token = response.token;
					localStorage.setItem('token', token);
			
					if(response.data.success){
						this.$router.push('/chatroom');
					} 

					console.log("MyLogMessage "+ response.data.message);
					
					console.log( response);
					
					

					
					
				}).catch((error) => {
					console.log(error)
				});
			}
		}
		
	}
</script>



<style scoped>

</style>