<template>
    <div>
        <!--mescroll滚动区域的基本结构-->
        <mescroll-vue ref="mescroll" :down="mescrollDown" :up="mescrollUp" @init="mescrollInit">
            <!--内容...-->
             <div class="form_list form_active mar_b_15 line " v-for="item in datas">
                  <div class="form_icon_85">
                      <img src="../../static/images/example_img.png">
                  </div>
                  <div class="form_label flexbox_item">
                      <p class="p_title">编号：{{item.id}}</p>
                      <p class="p_subtitle"><b>{{item.knowledgebasename}}</b></p>
                      <p class="p_subtitle"><b>问题描述</b>{{item.knowledgebasedescribe}}</p>
                      <p class="p_subtitle"><b>上报时间</b>{{item.time}}</p>
                  </div>
                  <div class="arrow_box">
                      <i class="icon_arrow"></i>
                  </div>
            </div>
        </mescroll-vue>
    </div>
</template>
<script type="text/javascript">
	import Axios from 'axios';
	import MescrollVue from 'mescroll.js/mescroll.vue'
	export default {
			  name: 'xxx',
			  components: {
			    MescrollVue // 注册mescroll组件
			  },
			  data () {
			    return {
			      mescroll: null, // mescroll实例对象
			      mescrollDown:{}, //下拉刷新的配置. (如果下拉刷新和上拉加载处理的逻辑是一样的,则mescrollDown可不用写了)
			      mescrollUp: { // 上拉加载的配置.
			        callback: this.upCallback, // 上拉回调,此处简写; 相当于 callback: function(page, mescroll) { }
			        //以下是一些常用的配置,当然不写也可以的.
					page: {
						num: 0, //当前页 默认0,回调之前会加1; 即callback(page)会从1开始
						size: 10 //每页数据条数,默认10
					},
					htmlNodata: '<p class="upwarp-nodata">-- END --</p>',
					noMoreSize: 5, //如果列表已无数据,可设置列表的总数量要大于5才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看这就是为什么无更多数据有时候不显示的原因
					toTop: {
						//回到顶部按钮
						src: "", //图片路径,默认null,支持网络图
						offset: 1000 //列表滚动1000px才显示回到顶部按钮
					},
					empty: {
						//列表第一页无任何数据时,显示的空提示布局; 需配置warpId才显示
						warpId: "xxid", //父布局的id (1.3.5版本支持传入dom元素)
						icon: "", //图标,默认null,支持网络图
						tip: "暂无相关数据~" //提示
					}
			      },
			      datas: [] // 列表数据
			    }
			  },
		
			  methods: {
			    // mescroll组件初始化的回调,可获取到mescroll对象
			    mescrollInit (mescroll) {
			      this.mescroll = mescroll  // 如果this.mescroll对象没有使用到,则mescrollInit可以不用配置
			    },
			    // 上拉回调 page = {num:1, size:10}; num:当前页 ,默认从1开始; size:每页数据条数,默认10
			    upCallback (page, mescroll) {
			    let api=this.Base.allUrl+'/Dbknowledgebase/showDbknowledgebaseAndType.action?';
			      // 联网请求
			      Axios.get(api, {
			        params: {
			          knowledgebasename:"新",
			          limit:10,
			          id:"",
			          num: page.num, // 页码
			          size: page.size // 每页长度
			        }
			      }).then((response) => {
			        // 请求的列表数据
			         var newArray=this.datas.concat(response.data.data2.lists);

		             this.datas=newArray;
		             page.num++;
			        // 数据渲染成功后,隐藏下拉刷新的状态
			        this.$nextTick(() => {
			          mescroll.endSuccess(10)
			        })
			      }).catch((e) => {
			        // 联网失败的回调,隐藏下拉刷新和上拉加载的状态;
			        mescroll.endErr()
			      })
			    }
			  }
			}
</script>