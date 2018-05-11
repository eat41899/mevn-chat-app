import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HomeComponent from '@/components/Home'
import RegisterComponent from '@/components/Register'

Vue.use(Router)

export default new Router({
	routes: [
		/*{
			path: '/',
			//name: 'HelloWorld',
			component: HelloWorld
		},*/
		{
			path: '/',
			component: HomeComponent
		},
		{
			path: '/HelloWorld',
			component: HelloWorld
		},
		{
			path: '/register',
			component: RegisterComponent
		}

	]
	//,	mode:'history'
})
