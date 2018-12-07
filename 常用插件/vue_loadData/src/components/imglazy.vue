<template>
	<div>
		<div v-for="item in imgs">
			<img v-lazy="'static/mock/img/'+item">
		</div>
		<mt-header title="多个按钮">
		  <router-link to="/" slot="left">
		    <mt-button icon="back">返回</mt-button>
		    <mt-button @click="">关闭</mt-button>
		  </router-link>
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
	</div>
</template>

<script type="text/javascript">
	export default{
		data(){
			return {
				imgs:['pd1.jpg','pd2.jpg','pd3.jpg','pd4.jpg','pdaa5.jpg','pd6.jpg','pd7.jpg','pd8.jpg','pd9.jpg','pd1.jpg','pd2.jpg','pd3.jpg','pd4.jpg','pd5.jpg','pd6.jpg','pd7.jpg','pd8.jpg']
			}
		}
	}
</script>

<style type="text/css">
	
	.imgs{
		margin-top: 10px;

	}
	img{
			width:100%;
		}
</style>