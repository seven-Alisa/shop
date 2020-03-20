<template>
	<div>
		<div class="homeImg">
			<mt-swipe :auto="4000"  >
			  <mt-swipe-item  v-for="item in homeImg" :key="item.id">
			  	<img :src="item.image" />
			  </mt-swipe-item>
			</mt-swipe>
		</div>
		<div class="Hitem">
			<div class="Hitem-icon">
				<homeitem title="新闻资讯">
					<img slot="img1" src="../assets/homeicon/home-01.png"/>				
				</homeitem>
			</div>
			<div class="Hitem-icon">
				<homeitem title="新闻资讯">
					<img slot="img1" src="../assets/homeicon/home-02.png"/>				
				</homeitem>
			</div>
			<div class="Hitem-icon">
				<homeitem title="新闻资讯">
					<img slot="img1" src="../assets/homeicon/home-03.png"/>				
				</homeitem>
			</div>
			<div class="Hitem-icon">
				<homeitem title="新闻资讯">
					<img slot="img1" src="../assets/homeicon/home-04.png"/>				
				</homeitem>
			</div>
			<div class="Hitem-icon">
				<homeitem title="新闻资讯">
					<img slot="img1" src="../assets/homeicon/home-05.png"/>				
				</homeitem>
			</div>
			<div class="Hitem-icon">
				<homeitem title="新闻资讯">
					<img slot="img1" src="../assets/homeicon/home-06.png"/>				
				</homeitem>
			</div>
		</div>
	</div>

</template>

<script>
	import { Swipe, SwipeItem } from 'mint-ui';
	import Vue from 'vue';
	Vue.component(Swipe.name, Swipe);
	Vue.component(SwipeItem.name, SwipeItem);
	import Homeitem from '../components/homeitem';
	export default{
		name:"home",
		components:{
			Homeitem
		},
		data(){
			return{
				homeImg:[]
			}
		},
		async created(){
			let res = await this.$ajax.get("/shop/getAds")
			this.homeImg = res
			console.log(this.homeImg)
		}
	}
	
</script>

<style>
	.homeImg{
		height: 150px;
		width: 100%;
	}
	.homeImg img{
		width: 100%;
		height: 100%;
	}
		.Hitem{
		width: 100%;
		height: 150px;
		display: flex;
		flex-wrap: wrap;
		margin-top: 10px;
	}
	.Hitem .Hitem-icon{
		width: 25%;
		height: 60px;
		text-align: center;
		
	}
	.Hitem .Hitem-icon img{
		width: 60%;

		
	}
</style>