<template>
	<div>
		<h2>购物车</h2>
		<div v-for="item in cartData" :key="item.id">
			<input 
			type="button" 
			value="-" 
			@click="reduce({id:item.id})"
			>
			<span>{{item.num}}</span>
			<input 
			type="button" 
			value="+" 
			@click="add({id:item.id})"
			 >
			
		</div>	
		<div>
			总数是：
			{{num3}}
		</div>
	</div>
</template>
<script>
import { mapState,mapGetters,mapActions,mapMutations} from 'vuex'
	export default{
		data(){
			return{

			}
		},
		methods:{
			...mapMutations({
		      add:'incrementcart', // 将 `this.add()` 映射为 `this.$store.commit('increment')`
		      reduce:'decrementcart'

		    })
			
		},
		computed:{
			 ...mapState(['cartData']),
			 ...mapGetters({
		           num3:"gettotal"
		     }),
			




			

		}
	}
</script>
<style>
	
</style>