import Vue from "vue/dist/vue.esm";
import { TodoList } from "components/todoList";
import { setPrefix, getPrefix } from "ComponentPrefix";
let counterembeding = 0;
let neverInit = true;

export { setPrefix };

/**
 * @description
 * Register global component
 * @param {HTMLTemplateElement} template
 * @param {Object} props
 * @param {Object} methods
 */
export const define = function (template, props = {}, methods = {}) {
	if (!template || !template.id || !template.innerHTML) {
		throw new Error("Please pass a valid template HTML with id param set.");
	}
	let templateHtml = template.innerHTML;
	if (template.content.childElementCount > 1) {
		templateHtml = `<div>${templateHtml}</div>`;
	}
	const id = template.id;
	const vueOptions = {
		template: templateHtml,
		props,
		methods,
		beforeCreate: function () {
			this.$options.data = this.$parent.$options.data;
		}
	};
	Vue.component(`${getPrefix()}-${id}`, vueOptions);
};

/**
 * @description
 * embed template
 * @param {HTMLTemplateElement} template
 * @param {Object} props
 * @param {Object} methods
 */
export const embed = function (template, props = {}, methods = {}) {
	if (neverInit) {
		neverInit = false;
		Vue.use(TodoList);
	}
	// Wrap all in a defined template:
	const templateId = `template-id-${counterembeding++}`;
	template.insertAdjacentHTML("afterend", `<div id="${templateId}"></div>`);
	const templateDom = document.querySelector(`#${templateId}`);
	// Move in wrapped container
	templateDom.appendChild(template);

	return new Vue({
		el: templateDom,
		data: function () {
			return props;
		},
		methods: methods
	});
};
