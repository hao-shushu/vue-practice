<template>
    <div>
        <input type="text" placeholder="请输入用户名" />
        <input type="password" placeholder="请输入密码" />
        <div>
            <button>Login</button>
            <button>Reset</button>
        </div>
    </div>
</template>
<script>
    module.exports = {
        data: function () {
            return {
                page: 'login'
            }
        }
    }
</script>