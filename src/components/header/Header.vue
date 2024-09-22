<script setup lang="ts">
</script>

<template>

  <div class="header-style">
    <space >
        
        <space>
          <img src="../../assets/images/header/pzfw.png" class="logo" />
        </space>
        <space></space>
        <space vertical>
          <div style="font-size: 24px;color: palevioletred;">专业陪诊陪护服务</div>
          <space>
            <div><label class="rounded-label">全心服务</label></div>
            <div><label class="rounded-label">经验丰富</label></div>
            <div><label class="rounded-label">全程无忧</label></div>
          </space>
        </space>

    </space>
  </div>
</template>

<style scoped>
.header-style {
  color: palevioletred;
  background-color: pink;

  border: 1px solid pink; /* 边框 */
  padding: 5px; /* 内边距 */
  border-radius: 10px; /* 圆角 */
}

.rounded-label {
  font-size: 20px;
  color: palevioletred;
  background-color:white;

  border: 1px solid pink; /* 边框 */
  padding: 10px; /* 内边距 */
  border-radius: 10px; /* 圆角 */
  display: inline-block; /* 使其可以应用宽度和高度 */
  text-align: center; /* 文本居中 */
}

.logo {
  height: 8em;
}
</style>