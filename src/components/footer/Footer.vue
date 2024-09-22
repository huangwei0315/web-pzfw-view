<script setup lang="ts">
</script>

<template>

  <div class="flex-row-container">

      <!-- 首页 -->
      <div class="flex-row-item-column">
        <Button type="link" size="large" ghost href="#/" >
          <template #icon>
            <img
              style="width: 2em; height: 2em"
              src='../../assets/images/footer/home.png'
            />
          </template>
        </Button>
        <div class="item-style">首页</div>
      </div>

      <!-- 订单 -->
      <div class="flex-row-item-column">
        <Button type="link" size="large" ghost href="#/order">
          <template #icon>
            <img
              style="width: 2em; height: 2em"
              src='../../assets/images/footer/order.png'
            />
          </template>
        </Button>
        <div class="item-style">订单</div>
      </div>


      <!-- 我的 -->
      <div class="flex-row-item-column">
        <Button type="link" size="large" ghost href="#/me">
          <template #icon>
            <img
              style="width: 2em; height: 2em"
              src='../../assets/images/footer/me.png'
            />
          </template>
        </Button>
        <div class="item-style"> 我的</div>
      </div>

  </div>
</template>

<style scoped>
.flex-row-container {
  display: flex;
  justify-content: space-between;

  color: palevioletred;
  background-color: pink;

  border: 1px solid pink; /* 边框 */
  padding: 5px; /* 内边距 */
  border-radius: 10px; /* 圆角 */
}

.flex-row-item-column {
  flex: 1; /* 让两列平分宽度 */
  margin: 1px; /* 可以根据需要调整间距 */
  padding: 1px; /* 内边距 */
  border: 0px solid #ccc; /* 边框 */
  text-align: center;
}

.item-style {
  font-size: 20px;
  color: palevioletred;
}

</style>