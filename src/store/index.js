import Vue from "vue"
import Vuex from "vuex"

import axios from 'axios'

Vue.use(Vuex)



const cartData=[
    {
      id:1,
      num:2
    },
    {
      id:2,
      num:3
    }
  
]

//定义一个容器
let store=new Vuex.Store({//定义状态已经改变的方法。将状态 get mutation action进行拆分
    state:{
      count:100,
      title:"",
      list:[],
      cartData
    },
  getters:{
    filterCount(state){
      return state.count >=120 ? 120 :state.count
    },
    gettotal(state){
      return state.cartData.reduce((n,curr)=>{
          return n+curr.num
        },0)
    }
  },

    mutations:{//唯一一个修改状态的回调函数
      incrementcart(state,payload){
        let item = state.cartData.find((item)=>{
            return item.id === payload.id
        })
        item.num +=1;
      },
      decrementcart(state,payload){
        let item = state.cartData.find((item)=>{
            return item.id === payload.id
        })
        item.num -=1;
      },

      addIncrement(state,payload){//荷载是应该是一个对象可以包含多个字段并记录mutations可读
         state.count+=payload.amount;
      },
      deIncrement(state,payload){
        state.count-=payload.de;
      },
      changeTitle(state,payload){
        state.title=payload.title;
      },
      changeList(state,list){
        state.list=list
      }
    },
  actions:{
    addAction(context){
      setTimeout(function () {
        //改变状态，必须提交一个mutations
        context.commit("addIncrement",{amount:5})
      },1000)
    },
    getListAction(context){
      //发送请求  url来自于easy-mock的网上数据
      axios.get("http://easy-mock.com/mock/59576e889adc231f356f19bc/menu/downList").then((data) =>{
       /* console.log(data.data)*/
        context.commit("changeList",data.data)//拿到数据后，提交mutations,g改变状态
      })
      .catch((error)=>{
          console.log(error)
        })
    }

  }


});
export  default store;//将vuex导出，然后在main注入到new Vue
