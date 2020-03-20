<template>
	<div>
		<div class="tabwrap">
			<item title="首页" mark="home" :active="sel" @myevent="getVal">
				<img slot="normalImg" src="../../static/tabbar/ic_tab_home_normal.png" alt="" />
				<img slot="activeImg" src="../../static/tabbar/ic_tab_home_active.png" alt="" />
			</item>
			<item title="会员" mark="member" :active="sel" @myevent="getVal">
				<img slot="normalImg" src="../../static/tabbar/ic_tab_profile_normal.png" alt="" />
				<img slot="activeImg" src="../../static/tabbar/ic_tab_profile_active.png" alt="" />
			</item>
			<item title="购物车" mark="cart" :active="sel" @myevent="getVal">
				<img slot="normalImg" src="../../static/tabbar/ic_tab_status_normal.png" alt="" />
				<img slot="activeImg" src="../../static/tabbar/ic_tab_status_active.png" alt="" />
			</item>
			<item title="搜索" mark="search" :active="sel" @myevent="getVal">
				<img slot="normalImg" src="../../static/tabbar/ic_tab_subject_normal.png" alt="" />
				<img slot="activeImg" src="../../static/tabbar/ic_tab_subject_active.png" alt="" />
			</item>
		</div>
	</div>
</template>

<script>
	import Item from './tabbar-item';
	
	export default{
		name:"tabbar",
		components:{Item},
		data(){
			return{
				sel:"home"
			}
		},
		methods:{
			getVal(value){
				this.sel=value
			}
		}
	}
</script>

<style>
	*{padding: 0;margin: 0;}
	.tabwrap{
		width: 100%;
		height: 55px;
		position: fixed;
		bottom: 0px;
		border-top: 1px solid #eeeeee;
	}
</style>