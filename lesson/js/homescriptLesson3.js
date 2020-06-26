

let webStore = new Vue({
	el: '#app',
	data: {
		sitename: 'Cafe racer moto bikes ',	
		visible3_1: false,
		visible3_2p: true,		
		brandI: "",
		resultArr: [],
		nameP: "Vue.js 2020",		
		
		cafeMotos: [{
			img: '../img/lesson3/img11.png',
			url: 'https://bikepost.ru/blog/cafe_racer/89163/VooDoo-Garage-kafe-rejser-Yamaha-Virago.html',
			brand: 'Yamaha',
			model: 'Vigaro',
		}, {
			img: '../img/lesson3/img21.png',
			url: 'https://bikepost.ru/blog/cafe_racer/89032/Origin8or-kafe-rejser-Honda-CB750.html',
			brand: 'Honda',
			model: 'CB750',
		}, {
			img: '../img/lesson3/img3 1.png',
			url: 'https://bikepost.ru/blog/cafe_racer/88916/Team-R_D-Motorcycles-Kafe-rejser-Triton.html',
			brand: 'Triumph',
			model: 'Trident T150',
		}, {
			img: '../img/lesson3/img4 1.png',
			url: 'https://bikepost.ru/blog/cafe_racer/88833/Dragon_s-Motorcycles-Kafe-rejser-Honda-GoldWing-GL1000.html',
			brand: 'Honda',
			model: 'CB750ss',
		}, {
			img: '../img/lesson3/img5 1.png',
			url: 'https://bikepost.ru/blog/cafe_racer/88767/Woidwerk-kafe-rejser-BMW-R-nineT.html',
			brand: 'BMW',
			model: 'R Nine T Pure',
		}, {
			img: '../img/lesson3/img6 1.png',
			url: 'https://bikepost.ru/blog/cafe_racer/88080/D_S-Motorcycles-kafe-rejser-BMW-K1100LT.html',
			brand: 'BMW',
			model: 'K1100LT',
		}, {
			img: '../img/lesson3/img7 1.png',
			url: 'https://bikepost.ru/blog/cafe_racer/87997/Officine-GP-Design-neo-kafe-rejser-Honda-X-ADV.html',
			brand: 'Honda',
			model: 'X-ADV',
		}, {
			img: '../img/lesson3/img8 1.png',
			url: 'https://bikepost.ru/blog/cafe_racer/87875/Krom-Works-kafe-rejser-Royal-Enfield-Continental-GT-650.html',
			brand: 'Royal Enfield',
			model: 'Continental GT 650',
		}, {
			img: '../img/lesson3/img9 1.png',
			url: 'https://bikepost.ru/blog/cafe_racer/85792/ZHan-Lui-Oliv-neo-kafe-rejser-P12XX-na-baze-Laverda-1200-Jota-America-1978.html',
			brand: 'Laverda',
			model: '1200 Jota America 1978',
		}
		],

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

});
