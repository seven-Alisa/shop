<template>
	<div>
			<slot name="img1"></slot>
			<p>{{title}}</p>

	</div>
</template>

<script>
	export default{
		name:"homeitem",
		props:["title"]

	}
</script>

<style>

</style>