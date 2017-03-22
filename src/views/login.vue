<template>
    <div>
        <input type="text"  v-model="username" placeholder="请输入用户名" />
        <input type="password" v-model="password" placeholder="请输入密码" />
        <div>
            <button v-on:click="onTapLogin_">Login</button>
            <button>Reset</button>
        </div>
        <p v-show="isFail">请重试</p>
    </div>
</template>
<script>
    module.exports = {
        data: function () {
            return {
                page: 'login',
                username: '',
                password: '',
                isFail: false
            }
        },
        methods: {
            onTapLogin_: function(event) {
                this.$http.post('/login',{
                    username: this.username,
                    password: this.password
                }).then((response) => {
                        var data = response.data;
                        if(data.result === 1) {
                            window.location.href = "/home.html";
                        } else {
                            this.isFail = true;
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        }
    }
</script>