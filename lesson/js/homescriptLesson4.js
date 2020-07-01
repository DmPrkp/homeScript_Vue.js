

let webStore = new Vue({ 
	el: '#app',
	data: {
		sitename: 'Cafe racer moto bikes ',
		visible3_1: false,
		visible3_2p: true,
		checkedNames: [],
		nameP: "Vue.js 2019",		
		col4: true,
		col6: false,
		col12: false,
		services: [
			{
				name: "покраска",
				price: 1300,
				quantity: 1,
			}, {
				name: "ремонт двигателя",
				price: 5800,
				quantity: 1,
			}, {
				name: "ремонт сцепления",
				price: 2700,
				quantity: 1,
			}, {
				name: "ремонт рамы (одно место)",
				price: 1100,
				quantity: 1,
			}, {
				name: "ремонт электрики",
				price: 4500,
				quantity: 1,
			}, {
				name: "перешивка сидения",
				price: 1800,
				quantity: 1,
			}, {
				name: "выправка дисков (за 1 штуку)",
				price: 900,
				quantity: 1,
			}
		]
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
		change1: function () {
			this.col4 = false;
			this.col6 = false;
			this.col12 = true;
		},
		change2: function () {
			this.col4 = false;
			this.col6 = true;
			this.col12 = false;
		},
		change3: function () {
			this.col4 = true;
			this.col6 = false;
			this.col12 = false;
		},
	},

	computed: {
		summQuantity: function () {
			let arr = this.checkedNames;
			let summ = 0;
			for (let i = 0; i < arr.length; i++) {
				summ += arr[i].price * arr[i].quantity;				
			}
			return summ;
		},
		classObj: function () {
			return { 
				"col-4" : this.col4,
				"col-6" : this.col6,
				"col-12" : this.col12,
			}
		}
	},
	created: function(){
		this.cafeMotos = window.cafeMotos;
	},
});
