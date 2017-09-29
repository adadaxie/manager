<template>
    <!--登入界面-->
        <div class="login" id="login" >
            <a href="javascript:;" class="log-close">
                <i class="icons close"></i>
            </a>
            <div class="log-bg">
                <div class="log-cloud cloud1"></div>
                <div class="log-cloud cloud2"></div>
                <div class="log-cloud cloud3"></div>
                <div class="log-cloud cloud4"></div>

                <div class="log-logo">Welcome!</div>
                <div class="log-text">管理系统</div>
            </div>
            <div class="log-login">
                <input type="text" placeholder="用户名" :class="'log-input' + (account==''?' log-input-empty':'')" v-model="account"><input type="password" placeholder="密码" :class="'log-input' + (password==''?' log-input-empty':'')" v-model="password">
                <button href="javascript:;" class="log-btn" @click="login">登入</button>
                <a href="javascript:;" class="log-btn" @click="register">注册</a>
            </div>
            <Loading v-if="isLoging" marginTop="-30%"></Loading>
        </div>
</template>
<style scoped>
    /*.login-container {
        -webkit-border-radius: 5px;
        border-radius: 5px;
        -moz-border-radius: 5px;
        background-clip: padding-box;
        margin: 180px auto;
        width: 350px;
        padding: 35px 35px 15px;
        background: #fff;
        border: 1px solid #eaeaea;
        box-shadow: 0 0 25px #cac6c6;
    }

    label.el-checkbox.remember {
        margin: 0px 0px 35px 0px;
    }*/
    /*登入样式*/
     .login{   
        position: fixed;
        overflow: hidden;
        left: 50%;
        margin-left: -250px;
        top: 50%;
        margin-top: -350px;
        width: 500px;
        min-height: 555px;
        z-index: 10;
        right: 140px;
        background: #fff;
        border-radius: 5px;
        box-shadow: 0 3px 16px -5px #070707
     }
     .login .log-bg{     
        width: 100%;
        height: 312px;
        overflow: hidden;
        background:url('');
     }
     .log-logo{        
        height: 80px;
        margin: 120px auto 25px;
        text-align: center;
        color: #1fcab3;
        font-weight: 700;
        font-size: 40px;
     }
     .log-text{ 
        color: #57d4c3;
        font-size: 13px;
        text-align: center;
        margin: 0 auto;
     }
     .log-login{
        text-align: center;
        margin-top: 20px;
     }
     .log-input{   
        width: 370px;
        overflow: hidden;
        padding: 0 15px;
        font-size: 13px;
        margin: 0 auto 15px;
        height: 48px;
        line-height: 48px;
        border-radius: 5px;
     }
     .log-login .log-btn{
        background-color: #50e3ce;
        text-align: center;

     }
     .log-btn{
        text-align:center;  
        width: 370px;
        display: block;
        text-align: left;
        line-height: 50px;
        margin: 0 auto 15px;
        height: 50px;
        color: #fff;
        font-size: 13px;
        border-radius: 5px;
        position: relative;
     }
</style>
<script>
    export default{
         props: {
         },
         data(){
             return {
                ruleForm2: {
                account: 'admin',
                checkPass: '123456'
                },
             }
         },
         methods:{
             login(){
                 this.$router.push({path:'/home'})
             }
         }

    }
</script>


<!--<script>
export default {
    props: {
    },
    data() {
        return {
            value:true,
            logining: false,
            ruleForm2: {
                account: 'admin',
                checkPass: '123456'
            },
            rules2: {
                account: [{
                        required: true,
                        message: '请输入账号',
                        trigger: 'blur'
                    },
                    //{ validator: validaePass }
                ],
                checkPass: [{
                        required: true,
                        message: '请输入密码',
                        trigger: 'blur'
                    },
                    //{ validator: validaePass2 }
                ]
            },
            checked: true
        };
    },
    methods: {
        handleSubmit2(ev) {
            alert('111');
            var _this = this;
            _this.$router.push({path:'/home'});
            _this.value= false;
            _this.$refs.ruleForm2.validate((valid) => {
                if (valid) {
                    _this.logining = true;
                    var loginParams = {
                        username: this.ruleForm2.account,
                        password: this.ruleForm2.checkPass
                    };
                    if (loginParams.username == "admin" && loginParams.password == "123456") {
                        _this.logining = false;
                        sessionStorage.setItem('userInfo', JSON.stringify(loginParams));
                        _this.$router.push({ path: '/' });
                    } else {
                        _this.logining = false;
                        _this.$alert('用户名或密码错误！', '提示信息', {
                            confirmButtonText: '确定'
                        });
                    }
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        }
    }
}
</script>-->
