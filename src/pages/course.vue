<template>
    <div class="course">
        <h3 class="title">学习vuex</h3>
        <div class="content">
            <video src="http://www.w3school.com.cn/i/movie.ogg" controls="controls"></video>
            <h3>简介</h3>
            <p class="content-p">这是一段简介</p>

            <p class="note">
                <strong>注：</strong>分享即可获得免费的一个月vip权益
            </p>
        </div>

        <button class="share-btn" @click="share">分享</button>
    </div>
</template>

<script>
    export default {
        data(){
            return{};
        },
        methods:{
            share(){
                let c = confirm("课程分享，地址： http://www.muke.com");
                if(c){
                    this.$store.dispatch("getFreeVip").then(res=>{
                        alert(res);
                    })
                }
            }
        }
    }
</script>

<style scoped>
    .course {
        width: 100%;
        height: auto;
        padding: 16px;
        position: absolute;
        top: 0;
        left: 0;
        box-sizing: border-box;
    }
    .course .content {
        text-align: left;
    }
    .course .content video{
        width: 100%;
    }
    .course .content .content-p{
        margin-bottom: 20px;
    }
    .course .content .note {
        color: #666;
    }
    .course .share-btn {
        position: fixed;
        bottom: 20px;
        left: 5%;
        width: 90%;
        margin: 16px 0;
        border: none;
        line-height: 3;
        border-radius: 4px;
        font-size: 16px;
        color: #fff;
        background: #373737;
    }
</style>