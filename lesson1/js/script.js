let webStore = new Vue({
	el:'#app',
	data:{
		sitename: 'Магазин 404 - найдётся всё для IT-шников',
		product:{
			url:'https://www.mann-ivanov-ferber.ru/assets/images/covers/37/20637/1.00x-thumb.png',
			id: '1',
			title: 'Код: тайный язык информатики',
			description: '<em>«Код»</em> весьма основательно объясняет устройство компьютера (не много найдется других книг, где описано, например, как именно работает процессор), стиль книги вполне развлекательный. Несмотря на глубину темы, автор устроит читателю комфортную прогулку по миру программирования.',
			author: 'Чарльз Петцольд',
			publishing: 'Издательство "МИФ"',
			price: 755
		}
	},
	filters: {
		formatPrice: function(value){
			return value + ' ' + String.fromCharCode(8381);
		}		
	}
	
});