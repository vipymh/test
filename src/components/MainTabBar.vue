<template>
		<tab-bar>
			<tab-bar-item path="/home" activecolor="deeppink">
				<img slot='item-icon' src="/public/favicon.ico" alt="" >
				<div slot='item-text'>首页</div>
			</tab-bar-item>
			<tab-bar-item path="/category">
				<img slot='item-icon' src="/public/favicon.ico" alt="" >
				<div slot='item-text'>分类</div>
			</tab-bar-item>
			<tab-bar-item path="/cart">
				<img slot='item-icon' src="/public/favicon.ico" alt="" >
				<div slot='item-text'>购物车</div>
			</tab-bar-item>
			<tab-bar-item path="/profile">
				<img slot='item-icon' src="/public/favicon.ico" alt="" >
				<div slot='item-text'>我的</div>
			</tab-bar-item>
		</tab-bar>
</template>

<script>
	import TabBar from '../components/tabbar/TabBar.vue'
	import TabBarItem from '../components/tabbar/TabBarItem.vue'
	export default {
		name: 'MainTabBar',
		components: {
			TabBar,
			TabBarItem
		}
	}
</script>

<style>
</style>
