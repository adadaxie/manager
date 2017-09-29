<template>
    <div>
      <!--这是系统头部-->
      <div class="header-style">
          <div class="headerleft-style">
              <a href="./index.html" class="logo-style">万合传播</a>
          </div>
          <div class="headerright-style">
              <div class="personage-info">
                  <a href="" class="text-info">个人信息</a>
                  <div class="img-style">
                    <img src="../../statics/imgs/header.jpg" alt="" width="40" height="40" >
                  </div>
                  <a href="./login.html" class="text-login">退出登入</a>
              </div>
          </div>
      </div>
        <!--侧边列表组并且集成--> 
      <div class="mainStyle">
          <div class="fixed—body">
            <ul class="mui-table-view listStyle">
                  <li class="mui-table-view-cell mui-collapse foldStyle mui-active">
                      <a class="mui-navigate-right" href="#">面板1</a>
                      <ul class="mui-collapse-content childenContainter">
                          <router-link to="/list/containter" ><li >面板1子内容</li></router-link>
                          <router-link to="/subcomponents/page"><li>面板2子内容</li></router-link>
                          <li>面板3子内容</li>
                      </ul>
                  </li>
                  <li class="mui-table-view-cell mui-collapse foldStyle">
                      <a class="mui-navigate-right" href="#">面板2</a>
                      <ul class="mui-collapse-content childenContainter">
                          <li>面板1子内容</li>
                          <li>面板2子内容</li>
                          <li>面板3子内容</li>
                      </ul>
                  </li>
                  <li class="mui-table-view-cell mui-collapse foldStyle">
                      <a class="mui-navigate-right" href="#">面板2</a>
                      <ul class="mui-collapse-content">
                          <li>面板1子内容</li>
                          <li>面板2子内容</li>
                          <li>面板3子内容</li>
                      </ul>
                  </li>
                  <li class="mui-table-view-cell mui-collapse foldStyle">
                      <a class="mui-navigate-right" href="#">面板2</a>
                      <ul class="mui-collapse-content childenContainter">
                          <li>面板1子内容</li>
                          <li>面板2子内容</li>
                          <li>面板3子内容</li>
                      </ul>
                  </li>
                  <li class="mui-table-view-cell mui-collapse foldStyle">
                      <a class="mui-navigate-right" href="#">面板1</a>
                      <ul class="mui-collapse-content childenContainter">
                          <li>
                              <router-link to="/list/containter">面板1子内容</router-link></li>
                          <li>面板2子内容</li>
                          <li>面板3子内容</li>
                      </ul>
                  </li>
                  <li class="mui-table-view-cell mui-collapse foldStyle">
                      <a class="mui-navigate-right" href="#">面板1</a>
                      <ul class="mui-collapse-content childenContainter">
                          <li>
                              <router-link to="/list/containter">面板1子内容</router-link></li>
                          <li>
                              面板2子内容</li>
                          <li>面板3子内容</li>
                      </ul>
                  </li>
                  <li class="mui-table-view-cell mui-collapse foldStyle">
                      <a class="mui-navigate-right" href="#">面板1</a>
                      <ul class="mui-collapse-content childenContainter">
                          <li>
                              <router-link to="/list/containter">面板1子内容</router-link></li>
                          <li>面板2子内容</li>
                          <li>面板3子内容</li>
                      </ul>
                  </li>
                  <li class="mui-table-view-cell mui-collapse foldStyle">
                      <a class="mui-navigate-right" href="#">面板1</a>
                      <ul class="mui-collapse-content childenContainter">
                          <li>
                              <router-link to="/list/containter">面板1子内容</router-link></li>
                          <li>面板2子内容</li>
                          <li>面板3子内容</li>
                      </ul>
                  </li>
                  <li class="mui-table-view-cell mui-collapse foldStyle">
                      <a class="mui-navigate-right" href="#">面板1</a>
                      <ul class="mui-collapse-content childenContainter">
                          <li>
                              <router-link to="/list/containter">面板1子内容</router-link></li>
                          <li>面板2子内容</li>
                          <li>面板3子内容</li>
                      </ul>
                  </li>
                  <li class="mui-table-view-cell mui-collapse foldStyle">
                      <a class="mui-navigate-right" href="#">面板1</a>
                      <ul class="mui-collapse-content childenContainter">
                          <li>
                              <router-link to="/list/containter">面板1子内容</router-link></li>
                          <li>面板2子内容</li>
                          <li>面板3子内容</li>
                      </ul>
                  </li>
            </ul>
          </div>
          <!--这是中间内容部分-->
          <transition name="fade"
                        mode="out-in">
          <router-view class="main-containter"></router-view>
          </transition>
      </div>
    </div>
</template>
<style scoped>
  /*顶部样式*/
  .header-style {
      height: 50px;
      width:100%;
      background-color: #3c8dbc;
      position:fixed;
      left:0px;
      top:0px;
      z-index: 999;
  }

  .header-style .headerleft-style {
      width: 20%;
      height: 50px;
      border-right: 1px solid #367fa9;
      text-align: center;
      line-height: 50px;
      font-size: 16px;
      position:fixed;
      left:0px;
      top:0px;
  }

  .header-style .headerleft-style .logo-style {
      color: white;
  }

  .headerright-style {
      width:80%;
      height:50px;
      position:fixed;
      left:20%;
  }

  .headerright-style .personage-info {
      float: right;
      text-align: center;
      line-height: 50px;
  }

  .headerright-style .img-style {
      margin: 10px auto;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
      border: 1px solid white;
  }

  .headerright-style .img-style,
  .text-info,
  .text-login {
      float: left;
      margin-right: 40px;
  }
  .mainStyle{
       /*display:flex;
       justify-content: space-between;*/
       position:relative;
  }
  /*侧边菜单样式*/
  .fixed—body{
       width:20%;
       height:300px;
       overflow-y: auto;
       margin-right:20px;
       position:fixed;
       left:0px;
       top:50px;
  }
  .listStyle{
       width:100%;
       list-style: none;
       background-color: #3c8dbc; 
  }
  .listStyle li{
     list-style: none;
  }
  .listStyle .childenContainter{
      padding-top:0px;
      padding-bottom:0px;
      padding-right:0px;
  }
  .listStyle .childenContainter li{
      height:35px;
      line-height: 35px;
  }
  .listStyle .childenContainter li:hover{
      background-color: skyblue;
  }
  /*右边样式*/
  .main-containter{
     position:absolute;
     right:0px;
     top:50px;
     left:20%;
  }
</style>
<script>
     export default{
         data(){
             return {

             }
         },
         beforeCreated(){
              const userInfo=sessionStorage.getItem('userInfo');
                 if(userInfo){
                     return;
                 }else{
                     this.$router.push({name:'loginTag',params:{}});
                 } 
         },
         methods:{
             getValue(){
                
             }
         },
     } 
</script>