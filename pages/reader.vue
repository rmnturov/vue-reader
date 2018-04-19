<template>
  <el-container>
    <el-aside>
      <el-menu default-active="" style="height: 100%;">
        <el-button type="primary" icon="el-icon-search">Search</el-button>
        <el-menu-item index="">
          <el-button type="primary" icon="el-icon-search">Search</el-button>
        </el-menu-item>
        <el-menu-item index="">
          <img src="" alt="">
          <span>Название канала</span>
          <span>Адрес</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>
      <h1>Заголовок</h1>
      <ul class="feedlist">
        <h2 class="feedlist__date">10 марта</h2>
        <li class="feedlist__item">
          <a href="" class="entry">
            <img src="" alt="" class="entry__image">
            <h3 class="entry__heading">Заголовок новости</h3>
            <p class="entry__caption">BEM filter introduces a few class name prefixes for concept types: __ or - as element prefix and _ as modifier prefix. Whenever you begin the class name with one of these prefixes, filter will resolve the rest parts for you:</p>
          </a>
        </li>
      </ul>
    </el-main>
  </el-container>
</template>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>

<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>