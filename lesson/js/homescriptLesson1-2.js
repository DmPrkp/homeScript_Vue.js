

let webStore = new Vue({
	el: '#app',
	data: {
		sitename: 'Cafe racer moto bikes ',
		classMoto: 'class: 125cc',
		visible1: false,
		visible1_1: true,
		visible1_2: false,		
		profile_data: {
			name: 'Ivan',
			lastname: 'Ivanov',
			img: '../img/lesson1/user.jpg',
			mail: 'cafe_racer@mail.ru',
			mail_link: 'cafe_racer@mail.ru',
			vkGroup: 'vk group',
			link: 'https://vk.com/tonup',
			bike: 'Honda CB 750',
			bike_img: '../img/lesson1/honda.jpg',
			bike_story: `По задумке кастом должен быть похож на олд-таймеры 70-х, поэтому мотоциклу Honda CB750 специально состарили внешность, используя, в том числе, некрашеный чистый металл, но в тоже время установили современную электрику, стилизованную под 70-е. </br>
			<em><b>HONDA CB750 «ANVIL»</b></em> </br>
			Wrench Kings приступили к работе, разобрав Honda CB750 и оставив только раму с мотором и колеса. С этого момента начинается волшебство – глядя на голый мотоцикл, в голове начинают формироваться линии будущего кастома. В результате чего опустили переднюю вилку, обрезали хвост рамы и поставили топливный бак с модели 70-х годов – он идеально вписался в раму, но идей как окончательно должна выглядеть задняя часть долго небыло и облик хвоста сформировался только после установки бака – линии заднего обтекателя стали соответствовать линиям бака.</br>
			<em><b>Детали:</b></em>
			После формирования облика мотоцикл был снова разобран. Рама была зачищена до блеска и отправлена на порошковую окраску. Силовая установка была обслужена, отремонтирована и заново покрашена. После того, как все детали были подготовлены, приступили к окончательной сборке. Также Honda CB750 «Anvil» получил красивое тонкое сидение.</br>`
		},
		product1: {
			src: '../img/lesson1/m600.jpg',
			id: '1',
			title: 'CF 125r',
			description: '<em>CF 125r</em> Chaparral provides online schematics & OEM parts for the US. Motorcycle Superstore provides an easy-to-use parts finder. Ships to the US, Canada, UK and Australia. Ships motorcycle parts and accessories to most countries. Sixity.com has low prices and free shipping on motorcycle parts to the US. Also check out our overview of motorcycle webshops at Bikez.info.',
			base: 'Yamaha 125r',
			price: 885984
		},
		product2: {
			src: '../img/lesson1/m1300.jpg',
			id: '2',
			title: 'CRX 125yr',
			description: '<em>CRX 125yr</em> Chaparral provides online schematics & OEM parts for the US. Motorcycle Superstore provides an easy-to-use parts finder. Ships to the US, Canada, UK and Australia. Ships motorcycle parts and accessories to most countries. Sixity.com has low prices and free shipping on motorcycle parts to the US. Also check out our overview of motorcycle webshops at Bikez.info.',
			base: 'Honda 125z',
			price: 585984
		},
		product3: {
			src: '../img/lesson1/m1000.jpg',
			id: '3',
			title: 'XR 125cc',
			description: '<em>XR 125cc</em> Chaparral provides online schematics & OEM parts for the US. Motorcycle Superstore provides an easy-to-use parts finder. Ships to the US, Canada, UK and Australia. Ships motorcycle parts and accessories to most countries. Sixity.com has low prices and free shipping on motorcycle parts to the US. Also check out our overview of motorcycle webshops at Bikez.info.',
			base: 'Suzuki BRZ 125r',
			price: 732984
		},

	},
	filters: {
		formatName: function (prop) {
			return `${prop.name} ${prop.lastname}`
		},
		formatPrice: function (prop) {
			return prop + ' ' + String.fromCharCode(8381);
		}
	},
	methods: {		
		upload_Task1: function () {
			if (this.visible1_1 == false) {
				this.visible1_1 = true;
				this.visible1_2 = false;
			}
		},
		upload_Task2: function () {
			if (this.visible1_2 == false) {
				this.visible1_2 = true;
				this.visible1_1 = false;
			}
		},			
	},
});
