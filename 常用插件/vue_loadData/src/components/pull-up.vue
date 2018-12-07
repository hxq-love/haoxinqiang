<template>
  <div class="page-infinite" >
  
    <div class="page-infinite-wrapper" ref="wrapper" :style="{ height:'300px' }">

          <ul class="page-infinite-list" style="" v-infinite-scroll="loadMore" infinite-scroll-disabled="jiazai" infinite-scroll-distance="50">
            
              <li class="form_list form_active  line page-infinite-listitem " v-for="item in datas">
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
            </li>
          </ul>
  <!--         </div>
      <ul class="page-infinite-list" >
        <li v-for="item in list" class="page-infinite-listitem">{{ item }}</li>
      </ul> -->
      <p v-show="loading" class="page-infinite-loading">
        <mt-spinner type="fading-circle"></mt-spinner>
        加载中...
      </p>
    </div>
  </div>
</template>

<style >
  .page-infinite-loading{
    text-align: center;
  }
  .mint-spinner-fading-circle {
      position: relative;
      margin: 0 auto;
  }
 .mint-spinner-fading-circle-circle::before {
      background-color: #666;
  }
  .page-infinite-wrapper{
    overflow-y: auto;
    margin-top: 100px;
  }
</style>

<script type="text/babel">
import Axios from 'axios';
  export default {
    data() {
      return {
        list: [],
        loading: false,
        jiazai:false,
        allLoaded: false,
        wrapperHeight: 0,
          page:1,

        datas:[],
        pageIndex:1
      };
    },

    methods: {
      loadMore() {
        this.loading = true;
        this.jiazai = true;
        let api=this.Base.allUrl+'/Dbknowledgebase/showDbknowledgebaseAndType.action?';
          Axios.get(api,{
            params:{
              knowledgebasename:"新",
              limit:10,
              id:"",
              page:this.page
            }
          }).then((response)=>{
             
             if(this.pageIndex<4){

             setTimeout(()=>{
                 var newArray=this.datas.concat(response.data.data2.lists);
                  this.datas=newArray;
                  this.page++;
                  this.pageIndex++;
                  this.loading = false;
                  this.jiazai = false;
             },500)

           
             
         
             
              
              
              
             }else{

               this.loading = false;
               this.jiazai = true;
             }
             

            

             
          }).catch((error)=>{
              
          })
       


      }
    },

    mounted() {
    this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
       /* let api=this.Base.allUrl+'/Dbknowledgebase/showDbknowledgebaseAndType.action?';
      Axios.get(api,{
                params:{
                  knowledgebasename:"新",
                  limit:10,
                  id:"",
                  page:1
                }
              }).then((response)=>{


                   this.datas=response.data.data2.lists;
                   this.page=2;
                   this.pageIndex=1;
             
   
              })*/
    }
  };
</script>
