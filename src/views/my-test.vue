<template><div></div></template>
<script>
    var User_01 = Vue.extend({// 创建可复用的构造器
        template: '<p>{{firstName}} {{lastName}} age {{age}}</p>'
    });

    var user_01 = new User_01({  // 创建一个 user 实例
        data: {
            firstName: 'yuxie',
            lastName: 'weiliang',
            age: 33
        }
    });
    module.exports=User_01
    module.exports=user_01
</script>
