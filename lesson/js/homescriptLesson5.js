/*@deleteM="this.cafemotors.splice($event[0], 1)"

@click="delmoto"
methods:{
		delmoto() {
			this.$emit('deleteM', this.id)
		}
	}
*/

Vue.component("tab-home", {
	props: ["cafemotors", "remove", "add"],
	data: function () {
		return {			
			obj: {
				img: '',
    			url: '',
    			brand: '',
				model: '',
			},
		}
	},
	template: `  
	<div class="container">
		<div class="row row-cols-2 row-cols-md-3">

			<moto-card class="col mb-4" 
						  v-for="(moto,index) in cafemotors" 
						  :key="index" 
						  :id="index" 
						  :moto="moto"						 
						  :delfunc="remove"
						>		  
			</moto-card>

			<div class="col mb-4">
				<div class="card h-100">
					<div class="card-header">
						<input placeholder="brand" v-model="obj.brand" type="text" style="width: 45%;">
						<button class="btn btn-success float-right p-0" 
							style="width: 25px; height: 25px;"
							@click="add(obj)"
							>+						
						</button>			
					</div>
						<input class="card-img" placeholder="img url" v-model="obj.img" type="text" style="height: 150px;">	  
					<div class="card-body">					   			
						<p class="card-text">
							<input placeholder="brand" v-model="obj.brand" type="text" style="width: 45%;">
							<input placeholder="model" v-model="obj.model" type="text" style="width: 45%;">
						</p>
						<input placeholder="history url" v-model="obj.url" type="text">
					</div>
				</div>
			</div>
		</div>	  
	</div>
	`,
	methods: {
		addMoto: () => {
			return this.obj
		}
	}
	
});

Vue.component("tab-projects", {
	template: "<div> Tab projects </div>"
})

Vue.component("moto-card", {
	props: ["moto", "id", "delfunc"],
	template: `	
		<div>
			<div class="card h-100">
				<div class="card-header">
					{{moto.brand}}
					<button class="btn btn-primary float-right p-1" 
							style="width: 25px; height: 25px;"
							@click="delfunc(id)">
						<span style="font-size: 10px;">X</span>
					</button>				
				</div>
				<img class="card-img" :src="moto.img">			  
				<div class="card-body">				  			
					<p class="card-text">{{moto.brand}} {{moto.model}}</p>
					<a :href="moto.url" class="btn btn-dark">view more...</a>
				</div>
			</div>
		</div>
	`,
	methods:{
		delmoto() {
			this.$emit('deleteM', this.id)
		}
	}
	
})

Vue.component("tab-services", {
	template: "<div> Our services </div>"
})

Vue.component("tab-contacts", {
	template: "<div> Our contactsdelItem </div>"
})


const motoApp = new Vue({
	el: '#app',
	data: {
		currentTab: "Home",
		tabs: ["Home", "Projects", "Services", "Contacts"],
		cafeMotos: [],		
	},
	computed: {
		currentTabComponent: function () {
			return "tab-" + this.currentTab.toLowerCase();
		}
	},
	created: function(){
		this.cafeMotos = window.cafeMotos;
	},
	methods: {
		removeGlobal: function(id) {
			this.cafeMotos.splice(id, 1);
		},
		addMotor: function(item) {
			this.cafeMotos.push(item)
		}
	}	
	
});