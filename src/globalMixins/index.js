export const mergeParentData = {
	beforeMount: function () {
		Object.assign(this, this.$parent.$options.data());
	}
}
