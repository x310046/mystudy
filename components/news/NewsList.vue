<template>
    <div>
        <h1>hhhh</h1>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="item.img_url">
						<div class="mui-media-body">
							<h2>{{item.title}}</h2>
							<p class="mui-ellipsis">
                                <span>发表时间：{{item.add_time}}</span>
                                <span>点击：{{item.click}}次</span>
                            </p>
						</div>
					</a>
				</li>								
			</ul>
    </div>
</template>

<script>
import {Toast} from "mint-ui"

export default {
    data(){
        return {
            newslist:[]
        }
    },

    created(){
        this.getNewsList()
    },

    methods:{
        getNewsList(){
            this.$http.get('/api/getnewslist').then(result =>{
                if(result.body.status === 0){
                    this.newslist = result.body.status
                }else{
                    Toast('获取新闻列表失败！')
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.mui-table-view{
    li{
        h2{font-size: 14px}
        span{font-size: 12px;color: #b8b8b8;justify-content: space-evenly}
    }
}
</style>
