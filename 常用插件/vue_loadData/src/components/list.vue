<template>
  <div class="page-loadmore" style="" ref="parentBox" >
    <div style="background:red;height:300px;">头部</div>

      <div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
        <mt-loadmore :top-method="loadTop"  @translate-change="translateChange" @top-status-change="handleTopChange" :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
       
          <div class="" style="" ref="listBox">
            
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
          </div>
          <div slot="top" class="mint-loadmore-top">
              <span v-show="topStatus !== 'loading'" :class="{ 'is-rotate': topStatus === 'drop' }">↓</span>
              <span v-show="topStatus === 'loading'">
                <mt-spinner type="snake"></mt-spinner>
              </span>
          </div>  
          <div slot="bottom" class="mint-loadmore-bottom">
            <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑</span>
            <span v-show="bottomStatus === 'loading'">
              <mt-spinner type="snake"></mt-spinner>
            </span>
          </div>
        </mt-loadmore>
      </div>
    
  </div>
</template>



<script type="text/babel">
import Axios from 'axios';
  export default {
    data() {
      return {
        allLoaded: false,
        bottomStatus: '',
        topStatus:'',
        wrapperHeight: 0,
        translate: 0,
        moveTranslate: 0,
        page:1,
        scrollMode:"auto",
        datas:[],
        pageIndex:1
      };
    },

    methods: {
      handleBottomChange(status) {
        this.bottomStatus = status;
      },
      handleTopChange(status) {
        this.moveTranslate = 1;
        this.topStatus = status;
      },
      translateChange(translate) {
        const translateNum = +translate;
        this.translate = translateNum.toFixed(2);
        this.moveTranslate = (1 + translateNum / 70).toFixed(2);
      },
      loadBottom() {
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

             var newArray=this.datas.concat(response.data.data2.lists);

             this.datas=newArray;
             this.page++;
              this.pageIndex++;

              
              
              
             }else{

              this.allLoaded = true;
             }
             this.$refs.loadmore.onBottomLoaded();
             //alert(this.$refs.wrapper.scrollTop);
             //this.$refs.parentBox.scrollTop=0;
             //this.$refs.wrapper.scrollTop=100
             console.info(this.$refs.wrapper)
            

             
          }).catch((error)=>{
              
          })
        },

      loadTop(){
             let api=this.Base.allUrl+'/Dbknowledgebase/showDbknowledgebaseAndType.action?';
              Axios.get(api,{
                params:{
                  knowledgebasename:"新",
                  limit:10,
                  id:"",
                  page:1
                }
              }).then((response)=>{

                 if(1<4){

                 this.datas=response.data.data2.lists;
                 this.page=2;
                this.pageIndex=1;
                 this.allLoaded = false; 
                  
                 }else{

                  
                 }

                 this.$refs.loadmore.onTopLoaded();

              })
        }
    

    },

    mounted() {
      
     //this.$refs.wrapper.scrollTop=0
      this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
     //this.wrapperHeight=400

     
    }
  };
</script>



<style>
 .mint-loadmore{

   /*height: 100%;*/
 }
 .loading-background, .mint-loadmore-top span {
  -webkit-transition: .2s linear;
  transition: .2s linear;
} 
.mint-loadmore-top span {
  display: inline-block;
  vertical-align: middle;
}

 .mint-loadmore-top span.is-rotate {
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
} 
 
 .page-loadmore .mint-spinner {
  display: inline-block;
  vertical-align: middle
}
 
.page-loadmore-desc {
  text-align: center;
  color: #666;
  padding-bottom: 5px
}  
 
   .page-loadmore-desc:last-of-type,
.page-loadmore-listitem {
 border-bottom: 1px solid #eee
}

.page-loadmore-listitem {
 height: 70px;
 line-height: 70px;
 text-align: center
}
 
 .page-loadmore-listitem:first-child {
   border-top: 1px solid #eee
} 
 
  .page-loadmore-wrapper {
   overflow: auto
}   
 
.mint-loadmore-bottom span {
    display: inline-block;
    -webkit-transition: .2s linear;
    transition: .2s linear;
    vertical-align: middle
}
 
.mint-loadmore-bottom span.is-rotate {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg)
} 
</style>
