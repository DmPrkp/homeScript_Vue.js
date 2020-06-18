let webStore = new Vue({
	el: '#app',
	data: {
		sitename: 'Cafe racer moto bikes ',
		classMoto: 'class: 125cc',
		product1: {
			src: 'img/m600.jpg',
			id: '1',
			title: 'CF 125r',
			description: '<em>CF 125r</em> Chaparral provides online schematics & OEM parts for the US. Motorcycle Superstore provides an easy-to-use parts finder. Ships to the US, Canada, UK and Australia. Ships motorcycle parts and accessories to most countries. Sixity.com has low prices and free shipping on motorcycle parts to the US. Also check out our overview of motorcycle webshops at Bikez.info.',
			base: 'Yamaha 125r',
			publishing: 'Издательство "МИФ"',
			price: 885984
		},
		product2: {
			src: 'img/m1300.jpg',
			id: '2',
			title: 'CRX 125yr',
			description: '<em>CRX 125yr</em> Chaparral provides online schematics & OEM parts for the US. Motorcycle Superstore provides an easy-to-use parts finder. Ships to the US, Canada, UK and Australia. Ships motorcycle parts and accessories to most countries. Sixity.com has low prices and free shipping on motorcycle parts to the US. Also check out our overview of motorcycle webshops at Bikez.info.',
			base: 'Honda 125z',
			publishing: 'Издательство "МИФ"',
			price: 585984
		},
		product3: {
			src: 'img/m1000.jpg',
			id: '3',
			title: 'XR 125cc',
			description: '<em>XR 125cc</em> Chaparral provides online schematics & OEM parts for the US. Motorcycle Superstore provides an easy-to-use parts finder. Ships to the US, Canada, UK and Australia. Ships motorcycle parts and accessories to most countries. Sixity.com has low prices and free shipping on motorcycle parts to the US. Also check out our overview of motorcycle webshops at Bikez.info.',
			base: 'Suzuki BRZ 125r',
			publishing: 'Издательство "МИФ"',
			price: 732984
		}
	},
	filters: {
		formatPrice: function (value) {
			return value + ' ' + String.fromCharCode(8381);
		}
	}

});

let Task1 = document.querySelector("#Task1");
let Task2 = document.querySelector("#Task2");
let task1btn = document.querySelector("#task1btn");
let task2btn = document.querySelector("#task2btn");

task1btn.addEventListener("click", ()=>{	
	Task2.classList.add("d-none");
	Task1.classList.remove("d-none");
})

task2btn.addEventListener("click", ()=>{	
	Task1.classList.add("d-none");
	Task2.classList.remove("d-none");
})