<template>

<div class="main-head">
	<div class="container-block">
		<div class="main-info-block">
			<h1>Введите название города</h1>
			<input type="text" v-model="city" placeholder="введите город">
			<button type="submit" @click="getData" class="btn">Узнать</button>
		</div>	
			
<!-- 		<div>
				<p>
					 {{ $data }} 
				</p>
			</div>   -->
				<!-- <img :src="logo" :key="logo"> -->
			<div>	
				<ul v-if="items !== null">
					<li>Город: {{ items.name }} </li>
					<li>Страна: {{ items.sys.country }}</li>
					<li>Температура: {{ items.main.temp - 273.15.toFixed(2) }} C*</li>
					<li>Температура: от {{items.main.temp_min}} до {{items.main.temp_max}} </li>
					<li>Скорость ветра: {{ items.wind.speed }}  метр / с </li>
					<li>Погода: {{ items.weather[0].description }} 
						<span class="weather-img">
					 		<img :src="'http://openweathermap.org/img/w/' + items.weather[0].icon + '.png'">
						</span>
					</li> 


					<li>Погода: <span>{{ items.weather[0].main }} </span></li> 
				</ul>
			</div>

	</div>
</div>


</template>

<script>
	export default {
		data() {
			return {
				city: 'Лозовая',
				items: null,
			}	
		},		
		methods: {
		 	getData: function() {
		 		this.$http.get('http://api.openweathermap.org/data/2.5/weather?q='+this.city+'&appid=a6886907f8577430f386740d0aecbefe')
		 		.then(function(response) {
		 			this.items = response.data; 
		 		});
		 	}
		},
	}
</script>

<style lang="scss">
	@import './node_modules/bootstrap-for-vue/dist/bootstrap-for-vue';
	@import url("https://fonts.googleapis.com/css?family=Montserrat");

	$font: Montserrat, sans-serif;
	$white: #fff;
	$size: 10px;

	body {
	  font-family: $font;
	  background: url('../src/assets/weather-bg-1.jpg') left top no-repeat;
	}
	h1 {
		color: $white;
	}
	ul {
		border: 1px solid red;
	    padding: 0;
	    list-style: none;
	    font-size: $size+8;
	    padding: $size+10;
	    color: $white;
	}
	.container-block {
		max-width: 415px;
		margin: 0 auto;
	}
	.main-info-block {
		input {
			height: $size+22;
			width: 72%;
			font-weight: bold;
    		padding: 0 0px 0px $size;
		}
		button {
			width: 23%;
			height: $size+26;
		    background: #21BBEF;
		    border: none;
		    color: $white;
		    cursor: pointer;
		}
	}
	span.weather-img {
		position: relative;
		img {
			position: absolute;
			top: -12px;
    		left: $size;
		}
	}
</style>
