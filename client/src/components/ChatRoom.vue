<template>

	<div class="chatroom">

		<!--Online Users-->
		<div class="col-md-2 userlist">
			<div class="panel-heading">
				<span class="glyphicon glyphicon-user"></span>
				Online ({{onlineUsers.length}})
			</div>
			<!--list Users-->
			<div class="onine-user">
				<ul class="chat">
					<li v-for="user in onlineUsers">
						{{user}}
					</li>
				</ul>
			</div>
		</div>

		<!--Main Livechat container-->
		<div class="col-md-10">
			<div id="livechat-container">
				<div class="panel panel-primary">
					<div class="panel-heading">
						<span class="glyphicon glyphicon-comment"></span>&nbsp;Lets Chat
					</div>
					<!--User joined container-->
					<div class="panel-body">
						<ul class="chat" id="messages">
							<li class="left clearfix">
								<div class="info">
									User1 has joined
								</div>
							</li>
						</ul>
					</div>
					<!--Footer - input field-->
					<div class="panel-footer">
						<form v-for="">
							<!--
<router-link class="btn btn-primary" to="register">Send</router-link>
-->
							<input class="form-control input-lg" type="text" placeholder="Type chat here" />
						</form>
					</div>


				</div>
			</div><!--End livechat-conntainer-->

		</div>

		<!--END-->
	</div>

</template>


<script type='text/javascript'>
	import io from 'socket.io-client';
	import axios from 'axios';

	export default {
		name: 'chatty',
		data() {
			return {
				onlineUsers:[],
				messages:[],

				message: {
					"type": "",
					"action": "",
					"user": "",
					"text": "",
					"timestamp": ""
				},
				areTyping:[],

				socket : io('localhost:8081')
			}
		}, 

		created: function(){
			//if server emits 'user joined', update onlineUsers array
			this.socket.on('user joined', function(socketId){

				//First get already connected users
				axios.get('http://localhost:8080/onlineusers')
					.then((response) => {

					for(var key in response.data){
						if(this.onlineUsers.indexOf(key) <= -1){
							//Insert the socketId into onlineUsers array
							this.onlineUsers.push(key);
						}
					}
					//console.log(response);
					console.log(this.onlineUsers);

				}).catch((error) => {
					
					console.log(error)
				});
				//this.onlineUsers.push(socketId);

			}.bind(this));
		},

		methods: {
			pingServer() {
				// Send the "pingServer" event to the server.sfsf
				//this.socket.emit('pingServer', 'PING!')
			}
		}

	}
</script>



<style>
	.col-md-2  {
		float: left;
	}
	#livechat-container {
		width: 100%;
	}
	.userlist {
		overflow-y: scroll;
		height: 800px;
		border: 1px solid dimgray;
	}
	.info {
		font-size: 12px;
		font-style: italic;
		margin: 10px;
	}

	#chat-input {
		width: 100%;
	}
	.chat
	{
		list-style: none;
		margin: 0;
		padding: 0;
		float: left;
	}

	.chat li
	{
		margin-bottom: 10px;
		padding-bottom: 5px;
		border-bottom: 1px dotted #B3A9A9;
	}

	.chat li.left .chat-body
	{
		margin-left: 60px;
	}

	.chat li.right .chat-body
	{
		margin-right: 60px;
	}


	.chat li .chat-body p
	{
		margin: 0;
		color: #777777;
	}

	.panel-body
	{
		overflow-y: scroll;
		height: 700px;
	}

	::-webkit-scrollbar-track
	{
		-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
		box-shadow: inset 0 0 6px rgba(0,0,0,.3);
		background-color: #F5F5F5;
	}

	::-webkit-scrollbar
	{
		width: 10px;
		background-color: #F5F5F5;
	}

	::-webkit-scrollbar-thumb
	{
		-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
		box-shadow: inset 0 0 6px rgba(0,0,0,.3);
		background-color: dimgray;
	}

</style>