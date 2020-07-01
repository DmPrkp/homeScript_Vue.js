let webStore = new Vue({
	el: '#app',
	data: {
		sitename: 'Cafe racer moto bikes ',	
		visible3_1: false,
		visible3_2p: true,		
		brandI: "",
		resultArr: [],
		nameP: "Vue.js 2020",
	},
	filters: {
		formatName: function (prop) {
			return `${prop.name} ${prop.lastname}`
		},		
	},
	methods: {		
		changeP: function () {
			this.visible3_2p = false;
			this.visible3_2i = true;
		},
		changeI: function () {
			this.visible3_2i = false;
			this.visible3_2p = true;
		},		
	},
	computed: {
		newCafeArr: function () {			
			this.resultArr = [];
			let arr = this.cafeMotos.slice(0);			
			for (let i = 0; i < arr.length; i++) {
				if (this.brandI.toLowerCase() == arr[i].brand.toLowerCase() || this.brandI.toLowerCase() == arr[i].model.toLowerCase()) {
					this.resultArr.push(arr[i]);
				}
			}
			return this.resultArr;
		}
	},
	created:function(){
		this.cafeMotos = window.cafeMotos;
	},
});
