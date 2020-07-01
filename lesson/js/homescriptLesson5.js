
Vue.component("button-counter", {
	data: function () {
		return {
			count: 0
		}
	},
	template: '<button v-on:click="count++"> click count - {{count}} </button>'
});

Vue.component('blog-post', {
	props: ['post'],
	template: `
		<div class="blog-post">
			<div>{{ post.title }}</div>
			<div><slot></slot></div>
			<button v-on:click="$emit('enlarge-text', 0.1)">
				Увеличить размер текста
			</button>
			<div v-html="post.content"></div>
	 	 </div>
	`,
});

new Vue({ el: '#components-demo' });

/*new Vue({
	el: '#blog-post-demo',
	data: {
		posts: [
			{ id: 1, title: 'My journey with Vue' },
			{ id: 2, title: 'Blogging with Vue' },
		],		
	}
});*/

new Vue({
	el: '#blog-posts-events-demo',
	data: {
		posts: [
			{ id: 1, title: 'My journey with Vue' },
			{ id: 2, title: 'Blogging with Vue' },
		],
		postFontSize: 1,
	}
});



