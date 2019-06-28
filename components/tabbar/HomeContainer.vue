<template>
  <div>
    <!-- 轮播图 -->
    <mt-swipe :auto="2200">
      <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
        <img :src="item.img" alt>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
import { Toast } from "mint-ui";

export default {
  data: function() {
    return {
      lunbotuList: []
    };
  },

  created() {
    this.getLunbotu();
  },

  methods: {
    getLunbotu() {
      this.$http
        .get("http://www.liulongbin.top:3005/api/getlunbo")
        .then(result => {
          if (result.body.status === 0) {
            this.lunbotuList = result.body.message;
          } else {
            Toast("获取图片失败");
          }
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  background-color: bisque;

  .mint-swipe-item {
    &:nth-child(1) {
      background-color: aqua;
    }
    &:nth-child(2) {
      background-color: #854254;
    }
    &:nth-child(3) {
      background-color: rgb(107, 32, 179);
    }
  }
  img {
    width: 100%;
    height: 100%;

  }
}
</style>
