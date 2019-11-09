<template>
	<div id="tab-bar">
		<slot></slot>
	</div>
</template>

<script>
export default {
  name: 'TabBar',
  components: {
		
  }
}
</script>

<style>
#tab-bar {
		display: flex;
		background: #f8f8f9;
		position: fixed;
		left: 0px;
		bottom: 0px;
		width: 100%;
		box-shadow:2px -2px 8px #e8eaec;
}
</style>
