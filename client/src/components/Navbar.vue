<template>	
	<div class="navbar">
		<!-- Fixed navbar -->
		 <nav>
            <div class="row">
               
                <ul class="main-nav">
                    <li><router-link to="/">Home</router-link></li>
                    <li><router-link to="register">Register</router-link></li>
					
                    <li><a href="#">Login</a></li>
                </ul>
            </div>
        </nav>
		
		
	</div>
</template>



<script>
	/*eslint-disable*/
	export default {
		name: 'navbar'
	}	
	
</script>






<style scoped>
	
* {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.row {
    max-width: 1140px;
    margin: 0 auto 0 auto;
	top: 0;
	background-color:#eee;
}
.main-nav {
    float: right;
    /*get rid of the bullet pts*/
    list-style: none;
    margin-top: 55px;
    
}


/*select all of the li elems*/
.main-nav li {
    /*put them side by side vs vertical list*/
    display: inline-block;
    margin-left: 10px
}


	
	

</style>