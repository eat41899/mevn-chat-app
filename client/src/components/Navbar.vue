<template>
	
	<div class="navbar">

		
		<!-- Fixed navbar -->
		 <nav>
            <div class="row">
               
                <ul class="main-nav">
                    <li><router-link to="home">Home</router-link></li>
                    <li><router-link to="HelloWorld">helloworld</router-link></li>
					
                    <li><a href="#plans">Login</a></li>
                </ul>
            </div>
        </nav>
		
		
	</div>
</template>



<script>
	
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
}
.main-nav {
    float: right;
    /*get rid of the bullet pts*/
    list-style: none;
    margin-top: 55px;
    
}
	.navbar nav {
		top: 0;
	}

/*select all of the li elems*/
.main-nav li {
    /*put them side by side vs vertical list*/
    display: inline-block;
    margin-left: 40px
}


	
	

</style>