<template>
  <div id="app">
  	<div class="top_menu">
  		<router-link :class="{'active':num==1}" to="/" @click.native="actives(1)">图片懒加载</router-link>
	    <router-link :class="{'active':num==2}" to="/mescrollComponent" @click.native="actives(2)">无限滚动</router-link>
	    <router-link :class="{'active':num==3}" to="/mescrollMore" @click.native="actives(3)">多菜单滚动</router-link>
	    <router-link :class="{'active':num==4}" to="/mescrollSwiper" @click.native="actives(4)">切换滚动</router-link>
  	</div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
  	return{
  		num:1
  	}
  },
  methods:{
  	actives(num){
  		this.num=num
  	}
  }
}
</script>

<style scoped lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;


}
body{
 -webkit-overflow-scrolling: touch;
 padding-bottom:0;
}

.top_menu{
	position: fixed;
	top:0;
	right:0;
	left:0;
	background-color: #fff;
	.active{
		color:red;
	}
}

a{
	display: block;
	float: left;
	width:25%;
	text-align: center;
	padding:7px 0;
}
</style>
