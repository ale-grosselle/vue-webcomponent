<template>
	<div>
		<span>Add a todo item:</span>
		<input type="text" v-model="input" v-on:keyup.enter="addTodo(input)">
		<ul>
			<li v-for="item in items">
				{{item}}
			</li>
		</ul>
	</div>
</template>
<script type="application/javascript">
	import { ComponentIds } from "components/ComponentIds";
	const name = ComponentIds.todoList.id;
	export default {
		install: function(vueInstance) {
			vueInstance.component(name, this);
		},
		data: function () {
			return {
				input: null,
				items: []
			}
		},
		methods: {
			addTodo: function (item) {
				this.items.push(item);
				this.$emit("item-added", item);
			}
		}
	}
</script>
<style>

</style>
