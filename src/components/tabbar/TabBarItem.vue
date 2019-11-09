<template>
		<div class="tab-bar-item" @click="itemclick">
			<slot name="item-icon"></slot>
			<div :style="activeStyle"><slot name="item-text"></slot></div>
		</div>
</template>

<script>
	export default {
		name: 'TabBarItem',
		props:{
			path:String,
			activecolor:
			{
				type:String,
				default:'red'
			}
		},
		data(){
			return{
				//isActive:true
			}
		},
		computed:{
			isActive(){
				return this.$route.path.indexOf(this.path) !== -1
			},
			activeStyle(){
				return this.isActive ? {color: this.activecolor}:{}
			}
		},
		methods:{
			itemclick(){
				this.$router.replace(this.path)
			}
		},
		components: {}
	}
</script>

<style>
	.tab-bar-item {
		flex: 1;
		text-align: center;
		height: 49px;
		font-size: 14px;
		}
	.tab-bar-img {
		width: 24px;
		height: 24px;
	}
	.active {
		color: red;
	}
</style>
