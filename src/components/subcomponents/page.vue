<template>
   <div class="block">
    <el-pagination v-bind:current-Page="pageIndex" v-bind:page-size="pageSize" :total="total"
            layout="total,sizes,prev,pager,next,jumper" v-bind:page-sizes="pageSizes"
            v-on:size-change="sizeChange" v-on:current-change="pageIndexChange">
    </el-pagination>
  </div>
</template>
<style scoped>
    input.el-pagination__editor{
        height:28px;
    }
    .block{
        text-align:center;
        margin-top:10px;
    }
</style>
<script>
    // 导入封装好的请求
    export default{
        data(){
            return {
                pageIndex:10,
                pageSize:10,
                total:100,
                pageSizes:[10,20,50,100]
            }
        },
        methods:{
            sizeChange:function(pageSize){
                this.pageSize= pageSize;

            },
            pageIndexChange:function(pageIndex){
                this.pageIndex= pageIndex;
            }
        },
        props:['pageID']
    }
</script>
