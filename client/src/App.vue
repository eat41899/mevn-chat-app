<template>
	<div id="app">

		<!--	
<img src="./assets/logo.png">
<router-view/>
-->

		<navbar></navbar>
		<!--<testvar></testvar>-->
		<!--<router-view/>-->
		<router-view/>
		
	</div>
</template>



<script>
	/*eslint-disable*/
	
	//import Testvar from './components/TestComponent'
	import Navbar from './components/Navbar'
	import Home from './components/Home'

	export default {
		name: 'App',
		components: {
			//Testvar, 
			Navbar,
			Home
		}
	}
</script>

<style scoped>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		/*margin-top: 60px;*/
	}
</style>
