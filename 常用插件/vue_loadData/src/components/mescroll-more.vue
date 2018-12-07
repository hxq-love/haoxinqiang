<template>
  <div style="">
    <!-- 菜单 -->
    <div class="top-warp">
     
      <div class="nav">
        <div :class="{'active':tabType==0}" @click="changeTab(0)">全部</div>
        <div :class="{'active':tabType==1}" @click="changeTab(1)">奶粉</div>
        <div :class="{'active':tabType==2}" @click="changeTab(2)">面膜</div>
        <div :class="{'active':tabType==3}" @click="changeTab(3)">图书</div>
      </div>
    </div>

    <!--全部-->
    <mescroll-vue ref="mescroll0" v-show="tabType==0" :down="getMescrollDown(0)" :up="getMescrollUp(0)" @init="mescrollInit0">
      <div id="dataList0">
        <div class="form_list form_active mar_b_15 line " v-for="item in tab0.list" @click="urls">
                  <div class="form_icon_85">
                      <img :imgurl="imgUrl" src="../../static/mock/img/loading.png">
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

      </div>
    </mescroll-vue>

    <!-- 奶粉 可不配down-->
    <mescroll-vue ref="mescroll1" v-show="tabType==1" :up="getMescrollUp(1)" @init="mescrollInit1">
      <div id="dataList1">
        <div class="form_list form_active mar_b_15 line " v-for="item in tab1.list">
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

      </div>
    </mescroll-vue>

    <!-- 面膜 -->
    <mescroll-vue ref="mescroll2" v-show="tabType==2" :up="getMescrollUp(2)" @init="mescrollInit2">
      <div id="dataList2">
        <div class="form_list form_active mar_b_15 line " v-for="item in tab2.list">
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

      </div>
    </mescroll-vue>

    <!-- 图书 -->
    <mescroll-vue ref="mescroll3" v-show="tabType==3" :up="getMescrollUp(3)" @init="mescrollInit3">
       <div id="dataList3">
        <div class="form_list form_active mar_b_15 line " v-for="item in tab3.list">
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

      </div>
    </mescroll-vue>
  </div>
</template>

<script>
// 引入mescroll的vue组件
import mockData from '../../static/js/pdlist'
import axios from 'axios';
import MescrollVue from 'mescroll.js/mescroll.vue'

export default {
  name: 'mescrollMore',
  components: {
    MescrollVue
  },
  data () {
    return {
      tab0: {mescroll: null, list: [], isListInit: false}, // 全部
      tab1: {mescroll: null, list: [], isListInit: false}, // 奶粉
      tab2: {mescroll: null, list: [], isListInit: false}, // 面膜
      tab3: {mescroll: null, list: [], isListInit: false}, // 图书
      tabType: 0, // 菜单类型
      pageIndex:1,
      pageIndex2:1,
      pageIndex3:1,
      pageIndex4:1,
      imgUrl:'https://p3.pstatp.com/large/pgc-image/15391431478147211e1e888'
    }
   
  },
  methods: {
    // mescroll组件初始化的回调,可获取到mescroll对象
    mescrollInit0 (mescroll) {
      mescroll.tabType = 0; // 加入标记,便于在回调中取到对应的list
      this.tab0.mescroll = mescroll;
    },
    mescrollInit1 (mescroll) {
      mescroll.tabType = 1;
      this.tab1.mescroll = mescroll;
    },
    mescrollInit2 (mescroll) {
      mescroll.tabType = 2;
      this.tab2.mescroll = mescroll;
    },
    mescrollInit3 (mescroll) {
      mescroll.tabType = 3;
      this.tab3.mescroll = mescroll;
    },
    // 多mescroll的配置,需通过方法获取,保证每个配置是单例
    getMescrollDown (tabType) {
      let isAuto = tabType === 0; // 第一个mescroll传入true,列表自动加载
      return {
        auto: isAuto,
        callback: this.downCallback
      }
      
    },
    urls(){
      alert("触发了");
    },
    getMescrollUp (tabType) {
      let emptyWarpId = 'dataList' + tabType;
      return {
        auto: false,
        callback: this.upCallback, // 上拉回调,此处可简写; 相当于 callback: function (page) { upCallback(page); }
        noMoreSize: 4, // 如果列表已无数据,可设置列表的总数量要大于半页才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看; 默认5
        empty: {
          warpId: emptyWarpId, // 父布局的id;
          icon: 'http://www.mescroll.com/img/mescroll-empty.png', // 图标,默认null
          tip: '暂无相关数据~', // 提示
          btntext: '去逛逛 >', // 按钮,默认""
          btnClick: function () { // 点击按钮的回调,默认null
            alert('点击了按钮,具体逻辑自行实现')
          }
        },
        toTop: { // 配置回到顶部按钮
          src: 'http://www.mescroll.com/img/mescroll-totop.png' // 图片路径,默认null (建议写成网络图,不必考虑相对路径)
        },
        lazyLoad: {
              use: true, // 是否开启懒加载,默认false
              attr: 'imgurl', // 网络地址的属性名 (图片加载成功会移除该属性): <img imgurl='网络图  src='占位图''/>
              showClass: 'mescroll-lazy-in', // 图片加载成功的显示动画: 渐变显示,参见mescroll.css
              delay: 500, // 列表滚动的过程中每500ms检查一次图片是否在可视区域,如果在可视区域则加载图片
              offset: 200 // 超出可视区域200px的图片仍可触发懒加载,目的是提前加载部分图片
          }
      }
    },
    /* 下拉刷新的回调 */
    downCallback (mescroll) {
      // 这里加载你想下拉刷新的数据, 比如刷新tab1的轮播数据
      if (mescroll.tabType === 0) {
        // loadSwiper();
      } else if (mescroll.tabType === 1) {
        // ....
      } else if (mescroll.tabType === 2) {
        // ....
      } else if (mescroll.tabType === 3) {
        // ....
      }
      this.pageIndex=1
      this.pageIndex2=1
      this.pageIndex3=1
      this.pageIndex4=1
      mescroll.resetUpScroll();// 触发下拉刷新的回调,加载第一页的数据
    },
    /* 上拉加载的回调 page = {num:1, size:10}; num:当前页 从1开始, size:每页数据条数 */
    upCallback (page, mescroll) {
      if (mescroll.tabType === 0) {
        // 全部
        this.tab0.isListInit = true;// 标记列表已初始化,保证列表只初始化一次
        this.getListDataFromNet(mescroll.tabType, page.num, page.size, (curPageData) => {
          console.info("长度是"+curPageData.length)
          mescroll.endSuccess(curPageData.length);// 联网成功的回调,隐藏下拉刷新和上拉加载的状态;
          if (page.num === 1) this.tab0.list = []; // 如果是第一页需手动制空列表
          this.tab0.list = this.tab0.list.concat(curPageData); // 追加新数据
        }, () => {
          if (page.num === 1) this.tab0.isListInit = false;
          mescroll.endErr();// 联网失败的回调,隐藏下拉刷新的状态
        })
      } else if (mescroll.tabType === 1) {
        // 奶粉
        this.tab1.isListInit = true;// 标记列表已初始化,保证列表只初始化一次
        this.getListDataFromNet(mescroll.tabType, page.num, page.size, (curPageData) => {
          mescroll.endSuccess(curPageData.length);// 联网成功的回调,隐藏下拉刷新和上拉加载的状态;
          if (page.num === 1) this.tab1.list = []; // 如果是第一页需手动制空列表
          this.tab1.list = this.tab1.list.concat(curPageData); // 追加新数据
        }, () => {
          if (page.num === 1) this.tab1.isListInit = false;
          mescroll.endErr();// 联网失败的回调,隐藏下拉刷新的状态
        })
      } else if (mescroll.tabType === 2) {
        // 面膜
        this.tab2.isListInit = true;// 标记列表已初始化,保证列表只初始化一次
        this.getListDataFromNet(mescroll.tabType, page.num, page.size, (curPageData) => {
          mescroll.endSuccess(curPageData.length);// 联网成功的回调,隐藏下拉刷新和上拉加载的状态;
          if (page.num === 1) this.tab2.list = []; // 如果是第一页需手动制空列表
          this.tab2.list = this.tab2.list.concat(curPageData); // 追加新数据
        }, () => {
          if (page.num === 1) this.tab2.isListInit = false;
          mescroll.endErr();// 联网失败的回调,隐藏下拉刷新的状态
        })
      } else if (mescroll.tabType === 3) {
        // 图书
        this.tab3.isListInit = true;// 标记列表已初始化,保证列表只初始化一次
        this.getListDataFromNet(mescroll.tabType, page.num, page.size, (curPageData) => {
          mescroll.endSuccess(curPageData.length);// 联网成功的回调,隐藏下拉刷新和上拉加载的状态;
          if (page.num === 1) this.tab3.list = []; // 如果是第一页需手动制空列表
          this.tab3.list = this.tab3.list.concat(curPageData); // 追加新数据
        }, () => {
          if (page.num === 1) this.tab3.isListInit = false;
          mescroll.endErr();// 联网失败的回调,隐藏下拉刷新的状态
        })
      }
    },

    // 切换菜单
    changeTab (type) {
      let curTab = this.getTabData(this.tabType);// 当前列表
      let newTab = this.getTabData(type);// 新转换的列表
      curTab.mescroll.hideTopBtn(); // 隐藏当前列表的回到顶部按钮
      this.tabType = type // 切换菜单
      if (!newTab.isListInit) {
        newTab.mescroll.triggerDownScroll(); // 加载列表
      } else {
        setTimeout(() => {
          // 检查新转换的列表是否需要显示回到到顶按钮
          var curScrollTop = newTab.mescroll.getScrollTop();
          if (curScrollTop >= newTab.mescroll.optUp.toTop.offset) {
            newTab.mescroll.showTopBtn();
          } else {
            newTab.mescroll.hideTopBtn();
          }
        }, 30)
      }
    },
    // 获取菜单对应的数据
    getTabData (tabType) {
      if (tabType == null) tabType = this.tabType;
      if (tabType === 0) {
        return this.tab0;
      } else if (tabType === 1) {
        return this.tab1;
      } else if (tabType === 2) {
        return this.tab2;
      } else if (tabType === 3) {
        return this.tab3;
      }
    },
    /* 联网加载列表数据
          在您的实际项目中,请参考官方写法: http://www.mescroll.com/api.html#tagUpCallback
          请忽略getListDataFromNet的逻辑,这里仅仅是在本地模拟分页数据,本地演示用
          实际项目以您服务器接口返回的数据为准,无需本地处理分页.
          * */
    getListDataFromNet (tabType, pageNum, pageSize, successCallback, errorCallback) {
      // 延时一秒,模拟联网
      setTimeout(() => {
        
          var listData = []
          // tabType 全部商品0; 奶粉1; 面膜2; 图书3;
          if (tabType === 0) {
            // 全部商品 (模拟分页数据)

            let api=this.Base.allUrl+'/Dbknowledgebase/showDbknowledgebaseAndType.action?';
            axios.get(api, {
              params: {

                 knowledgebasename:"新",
                  limit:10,
                  id:"",
                  page:pageNum
              }
            }).then((response)=> {
              
              if(1<4){
                 listData =response.data.data2.lists;
                 console.info(listData);
                 this.pageIndex++
                 
              }
              successCallback(listData)

            }).catch((e)=> {
              //联网失败的回调,隐藏下拉刷新和上拉加载的状态;
          
              successCallback && successCallback(listData);
            })
          } else if (tabType === 1) {
            let api=this.Base.allUrl+'/Dbknowledgebase/showDbknowledgebaseAndType.action?';
            axios.get(api, {
              params: {

                 knowledgebasename:"222",
                  limit:10,
                  id:"",
                  page:pageNum
              }
            }).then((response)=> {
              
              if(1<4){
                 listData =response.data.data2.lists;
                 
                 this.pageIndex2++
                
              }
               successCallback(listData)

            }).catch((e)=> {
              //联网失败的回调,隐藏下拉刷新和上拉加载的状态;
          
              successCallback && successCallback(listData);
            })
           
          } else if (tabType === 2) {
           let api=this.Base.allUrl+'/Dbknowledgebase/showDbknowledgebaseAndType.action?';
            axios.get(api, {
              params: {

                 knowledgebasename:"测试",
                  limit:10,
                  id:"",
                  page:pageNum
              }
            }).then((response)=> {
              
              if(1<4){
                 listData =response.data.data2.lists;
                 
                 this.pageIndex3++
                 
              }
              successCallback(listData)

            }).catch((e)=> {
              //联网失败的回调,隐藏下拉刷新和上拉加载的状态;
          
              successCallback && successCallback(listData);
            })
          } else if (tabType === 3) {
            // 图书
            let api=this.Base.allUrl+'/Dbknowledgebase/showDbknowledgebaseAndType.action?';
            axios.get(api, {
              params: {

                 knowledgebasename:"3",
                  limit:10,
                  id:"",
                  page:pageNum
              }
            }).then((response)=> {
              
              if(1<4){
                 listData =response.data.data2.lists;
                 
                 this.pageIndex4++
                 
              }
              successCallback(listData)

            }).catch((e)=> {
              //联网失败的回调,隐藏下拉刷新和上拉加载的状态;
          
              successCallback && successCallback(listData);
            })
          }
          
  
      }, 1000)
    }
  },
  beforeRouteEnter (to, from, next) { // 如果没有配置回到顶部按钮或isBounce,则beforeRouteEnter不用写
    next(vm => {
      let curMescroll = vm.$refs['mescroll' + vm.tabType]; // 找到当前mescroll的ref,调用子组件mescroll-vue的beforeRouteEnter方法
      curMescroll && curMescroll.beforeRouteEnter() // 进入路由时,滚动到原来的列表位置,恢复回到顶部按钮和isBounce的配置
    })
  },
  beforeRouteLeave (to, from, next) { // 如果没有配置回到顶部按钮或isBounce,则beforeRouteLeave不用写
    let curMescroll = this.$refs['mescroll' + this.tabType]; // 找到当前mescroll的ref,调用子组件mescroll-vue的beforeRouteEnter方法
    curMescroll && curMescroll.beforeRouteLeave() // 退出路由时,记录列表滚动的位置,隐藏回到顶部按钮和isBounce的配置
    next()
  }
}
</script>

<style scoped>
  /*以fixed的方式固定mescroll的高度*/
  .mescroll {
    position: fixed;
    top: 77px;
    bottom: 0px;
    height: auto;
  }

  .top-warp{
    z-index: 9990;
    position: fixed;
    top: 35px;
    left: 0;
    width: 100%;
  
    background-color: white;
  }
  .top-warp .head{
    width: 100%;
    height: 44px;
    line-height: 44px;
    text-align: center;
  }
  .top-warp  .head .btn-left {
    position: absolute;
    top: 0;
    left: 0;
    padding: 12px;
    line-height: 22px;
  }
  .top-warp .tip{
    font-size: 14px;
    height: 36px;
    line-height: 36px;
    text-align: center;
  }
  .top-warp .nav{
    text-align: center;
    height: 40px;
    background: white;
  }
  .top-warp .nav > div{
    display: inline-block;
    width: 22%;
    line-height: 36px;
    font-size: 14px;
  }
  .top-warp .nav .active{
    border-bottom: 1px solid #FF6990;
    color: #FF6990;
  }

  /*展示上拉加载的数据列表*/
  .data-li{
    position: relative;
    height: 80px;
    padding: 10px 8px 10px 120px;
    border-bottom: 1px solid #eee;
  }
  .data-li .pd-img{
    position: absolute;
    left: 18px;
    top: 10px;
    width: 80px;
    height: 80px;
  }
  .data-li .pd-name{
    font-size: 13px;
    line-height: 20px;
    height: 40px;
    margin-bottom: 10px;
    overflow: hidden;
  }
  .data-li .pd-price{
    font-size: 13px;
    color: red;
  }
  .data-li .pd-sold{
    font-size: 12px;
    margin-top: 8px;
    color: gray;
  }
</style>
