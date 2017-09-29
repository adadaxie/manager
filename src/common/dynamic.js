import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
var userInfo= sessionStorage('userInfo');
var id= userInfo.id;
function getHtml(){
    if(id>3){
        $.ajax({
             url:''+id,
             data:{

             },
             success:function(res){
                 location.href="../components/login/login.vue";
             }
        })
    }
}