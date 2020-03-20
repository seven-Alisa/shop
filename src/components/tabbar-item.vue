<template>
	<div>
		<div class="itemwrap" @click="fn()">
			<span v-show="!bol"><slot name="normalImg"></slot></span>
			<span v-show="bol"><slot name="activeImg"></slot></span>
			<p class="{'active',:bol}">{{title}}</p>
		</div>
	</div>
</template>

<script>
	export default{
		name:"tabitem",
		props:["title","mark","active"],
		computed:{
			bol(){
				if(this.mark==this.active){
					return true
				}else{
					return false
				}
			}
		},
		methods:{
			fn(){
				this.$emit("myevent",this.mark)
				this.$router.push("/"+this.mark)//切换路由
			}
		}
	}
</script>

<style>
	.itemwrap{
		width: 25%;
		float: left;
		font-size: 0.5rem;
		text-align: center;
		/*margin-top: 5px;*/
	}
	.itemwrap img{width: 30px;height: 30px;}
	.active{color:rgb(66,189,86);}
</style>