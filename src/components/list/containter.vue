<template>
 <div class="tableStyle">
  <div class="searchStyle">
      开始日期：
      <el-date-picker v-model="value1" type="date" placeholder="选择日期" :picker-options="pickerOptions0"></el-date-picker>
      结束日期：
      <el-date-picker v-model="value2" type="date" placeholder="选择日期" :picker-options="pickerOptions0"></el-date-picker>
      <el-button type="primary" size="small" v-on:click="fetchData" icon="search">查  询</el-button>
      <!--<el-button type="primary" size="small" v-on:click="add" icon="plus">添  加</el-button>-->
  </div>
  <el-table
    :data="tableData5"
    style="width: 100%">
    <el-table-column type="expand">
      <template scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="商品名称">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="所属店铺">
            <span>{{ props.row.shop }}</span>
          </el-form-item>
          <el-form-item label="商品 ID">
            <span>{{ props.row.id }}</span>
          </el-form-item>
          <el-form-item label="店铺 ID">
            <span>{{ props.row.shopId }}</span>
          </el-form-item>
          <el-form-item label="商品分类">
            <span>{{ props.row.category }}</span>
          </el-form-item>
          <el-form-item label="店铺地址">
            <span>{{ props.row.address }}</span>
          </el-form-item>
          <el-form-item label="商品描述">
            <span>{{ props.row.desc }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="商品 ID"
      prop="id">
    </el-table-column>
    <el-table-column
      label="商品名称"
      prop="name">
    </el-table-column>
    <el-table-column
      label="描述"
      prop="desc">
    </el-table-column>
    <el-table-column
      label="操作"
      prop="hangdel">
      <template scope="scope">
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          <el-button
          size="small"
          type="info"
          @click="handleDelete(scope.$index, scope.row)">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
  <subpage :pageID="1"></subpage>
 </div>  
</template>
<style>
  /*.tableStyle{
      padding-right:20px;
  }*/
  .searchStyle{
     text-align: right;
     margin-top:10px;
     margin-right:10px;
  }
  .searchStyle .el-button{
    height:40px;
  }
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
  .el-pagination{
    padding:0px;
  }
  input.el-pagination__editor{
        height:28px;
    }
</style>
<script>
  import subpage from '../subcomponents/page.vue';
  export default {
    data() {
      return {
        tableData5: [{
          id: '12987122',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
         }, {
          id: '12987123',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
         }, {
          id: '12987125',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
         }, {
          id: '12987126',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }],
        pickerOptions0:{
          disabledDate(time){
            return time.getTime() < Date.now()-8.64e7;
          }
        },
        value1:'', 
        value2:'',
      }
    },
    components:{
           subpage,
    },
    methods: {
        handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      //删除行操作   
      handleDelete(){
            
      },
      fetchData: function () {
            this.manifests = [];
            var url=""
            this.$http.get("", {
                params: {
                    start: this.start.format("yyyy-MM-dd"),
                    end: this.end.format("yyyy-MM-dd"),
                    pageIndex: this.pageIndex,
                    pageSize: this.pageSize
                }
            })
                      .then(response => {
                          this.total = response.body.count;
                          this.manifests = response.body.data;
                      })
                      .catch(response => this.$alert(response.body.Message, "日消费明细", { type: "error" }));
        }
    },
  }
</script>