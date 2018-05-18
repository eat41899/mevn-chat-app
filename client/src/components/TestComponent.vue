<template>
	<div class="myclass">

		<h1>This is a test</h1>

		<h1>{{message1}}</h1>

		<p>{{user.lastName}}</p>
	</div>

</template>


<script>
	import io from 'socket.io';
	var socket = io();
	
	export default {
		name: 'compname',
		data() {
			return {
				message1: 'hello world message',
				//objects
				user: {
					firstName: 'Eric',
					lastName: 'Tapia' 
				}
			}
		}
	}
</script>



<style scoped>

</style>