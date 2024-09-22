<template>
  <div class="flex-row-container">

    <!-- 服务介绍 -->
    <div class="flex-row-item-column">
      <div>
        <Button type="link" size="large" ghost href="#/">
          <template #icon>
            <img
              style="width: 2em; height: 2em"
              src='../../assets/images/service/service_info.png'
            />
          </template>
        </Button>
      </div>
      <div style="font-size: 16px;color: black;">服务介绍</div>
    </div>

    <!-- 陪诊服务 -->
    <div class="flex-row-item-column">
      <div>
        <Button type="link" size="large" ghost href="#/">
          <template #icon>
            <img
              style="width: 2em; height: 2em"
              src='../../assets/images/service/pzfw.png'
            />
          </template>
        </Button>
      </div>
      <div style="font-size: 16px;color: black;">陪诊服务</div>
    </div>

    <!-- VIP服务 -->
    <div class="flex-row-item-column">
      <div>
        <Button type="link" size="large" ghost href="#/">
          <template #icon>
            <img
              style="width: 2em; height: 2em"
              src='../../assets/images/service/vip.png'
            />
          </template>
        </Button>
      </div>
      <div style="font-size: 16px;color: black;">VIP服务</div>
    </div>

    <!-- 陪诊师介绍 -->
    <div class="flex-row-item-column">
      <div>
        <Button type="link" size="large" ghost href="#/">
          <template #icon>
            <img
              style="width: 2em; height: 2em"
              src='../../assets/images/service/accompanying_physician_info.png'
            />
          </template>
        </Button>
      </div>
      <div style="font-size: 16px;color: black;">陪诊师介绍</div>
    </div>

  </div>
</template>
 
<style>
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
</style>