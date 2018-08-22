<template>
<div class="article-container">
    <div style="margin-bottom: 86px;">
        <el-card :body-style="{ padding: '20px 5px' }" shadow="hover" v-for="(item, index) in articleList" :key="index">
            <div class="card-body-img">
                <a :href="item.url" :title="item.title"><img :src="item.thumbnail" class="image" v-if="item.thumbnail"></a>
            </div>
            <div class="cart-body-article">
                <h2 class="article-title"><a :href="item.url" >{{item.title}}</a></h2>
                <div class="article-desc">
                    <span class="iconfont icon-shijian">{{item.resource}}.{{item.published_at}}</span>
                </div>
                <div class="abstract">
                    {{item.summary}}
                </div>
            </div>
        </el-card>
    </div>
     <el-button @click="handleRefresh" v-show="visible" type="primary" :loading="loadingMore" class="refresh-btn">刷新动态</el-button>
    <el-tooltip placement="top" content="回到顶部">
        <back-to-top transitionName="fade" :customStyle="myStyle" :visibilityHeight="300" :backPosition="50"></back-to-top>
    </el-tooltip>
</div>

</template>

<script>
import request from '@/utils/request'
import BackToTop from '@/components/BackToTop'
import NProgress from 'nprogress'
export default {
  components: {
    BackToTop
  },
  data () {
    return {
      articleList: [],
      loadingMore: false,
      myStyle: {
           right: '50px',
            bottom: '74px',
            width: '40px',
            height: '40px',
            'border-radius': '4px',
            'line-height': '45px',
            background: '#e7eaf1'
      },
      visible: false,
      visibilityHeight: 400
    }
  },
  created () {
      this.getArticleData()
      window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
    if (this.interval) {
      clearInterval(this.interval)
    }
  },
  methods: {
    handleScroll() {
      this.visible = window.pageYOffset > this.visibilityHeight
    },
    getArticleData () {
        NProgress.start()
        request({
            url: '/yourApi',
            method: 'get'
        }).then(res => {
            this.articleList = res.data.data
            NProgress.done()
            this.loadingMore = false
            this.$message({
                type: 'success',
                message: '更新成功'
            })
            window.scrollTo(0,0)
        }).catch(err => {
            console.log(err)
            NProgress.done()
            this.$message('请求异常')
            this.loadingMore = false
            this.$router.push('/error')
        })
    },
    handleRefresh () {
        this.loadingMore = true
        this.getArticleData()
    }
  }
}
</script>
