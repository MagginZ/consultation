<template>
     <div class="error-page">
        <img src="static/imgs/error.gif" alt="请求异常">
        <p class="error-desc">阿哦..请求异常... <br>
        <span class="retry"><a href="https://bbs.blockcdn.org">随便看看</a></span> <br>
        <span class="regin"><router-link to="/"> 重试</router-link></span></p>
        
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.error-page{
     text-align: center;
     display: flex;
     justify-content: space-between;
     margin: 20% auto;
     width: 566px;
 }
 .error-desc{
     font-size: 32px;
     font-weight: bold;
     color: #ef6364;
     margin: 20% 0;
     text-align: left;
 }
.error-desc .retry a, .error-desc .regin{
    font-size: 16px;
    color: #666;
    text-decoration: none;
}
.error-desc .regin a{
    color: #f0bd00;
    cursor: pointer;
}
@media screen and (max-width: 565px){
    .error-page{
        display: block;
        width: 100%;
    }
    .error-page img{
        width: 200px;
    }
    .error-desc{
        width: 180px;
        margin: auto;
        font-size: 20px;
    }
    
}
</style>
