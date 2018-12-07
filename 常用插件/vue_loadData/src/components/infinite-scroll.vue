<template>
  <div class="page-infinite">

    <div class="page-infinite-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
      <ul class="page-infinite-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="50">
        
         <li class="form_list form_active mar_b_15 line page-infinite-listitem " v-for="item in list">
                  <div class="form_icon_85">
                      <img src="../../static/images/example_img.png">
                  </div>
                  <div class="form_label flexbox_item">
                      <p class="p_title">编号：{{item}}</p>
                      <p class="p_subtitle"><b>啊啊啊啊</b></p>
                      <p class="p_subtitle"><b>问题描述</b>阿阿阿阿阿阿</p>
                      <p class="p_subtitle"><b>上报时间</b>啊啊啊啊啊</p>
                  </div>
                  <div class="arrow_box">
                      <i class="icon_arrow"></i>
                  </div>
            </li>
      </ul>
      <p v-show="loading" class="page-infinite-loading">
        <mt-spinner type="fading-circle"></mt-spinner>
        加载中...
      </p>
    </div>
  </div>
</template>

<style>
  @component-namespace page {
    @component infinite {
      @descendent desc {
        text-align: center;
        color: #666;
        padding-bottom: 5px;
        border-bottom: solid 1px #eee;
      }

      @descendent listitem {
        height: 50px;
        line-height: 50px;
        border-bottom: solid 1px #eee;
        text-align: center;
        &:first-child {
          border-top: solid 1px #eee;
        }
      }

      @descendent wrapper {
        margin-top: -1px;
        overflow: scroll;
      }

      @descendent loading {
        text-align: center;
        height: 50px;
        line-height: 50px;

        div {
          display: inline-block;
          vertical-align: middle;
          margin-right: 5px;
        }
      }
    }
  }
</style>

<script type="text/babel">
  export default {
    data() {
      return {
        list: [],
        loading: false,
        allLoaded: false,
        wrapperHeight: 0,
        num:1
      };
    },

    methods: {
      loadMore() {
        this.loading = true;
        setTimeout(() => {
          if(this.num<3){
            let last = this.list[this.list.length - 1];
          for (let i = 1; i <= 10; i++) {
            this.list.push(last + i);
          }
          this.loading = false;
          this.num++
        }else{
          this.loading = false;
        }
        }, 2500);
      }
    },

    mounted() {
      this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
      for (let i = 1; i <= 20; i++) {
        this.list.push(i);
      }
    }
  };
</script>
