<template>
  <div>
    <span>Add a todo item:</span>
    <input
      v-model="input"
      type="text"
      @keyup.enter="addTodo(input)"
    >
    <ul>
      <li
        v-for="item in items"
        :key="item"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>
<script type="application/javascript">
import { ComponentIds } from "components/ComponentIds";
import { mergeParentData } from "globalMixins";
const name = ComponentIds.todoList.id;
export default {
	install: function (vueInstance) {
		vueInstance.component(name, this);
	},
	mixins: [mergeParentData],
	data: function () {
		return {
			input: null,
			items: []
		};
	},
	methods: {
		addTodo: function (item) {
			this.items.push(item);
			this.$emit("item-added", item);
		}
	}
};
</script>
<style>

</style>
