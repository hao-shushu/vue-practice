<template>
    <div>
        <p>{{artList.name}}</p>
        <p>{{artList.startTime}}</p>
        <p>{{artList.content}}</p>
        <p>{{artList.good}}</p>
    </div>
</template>

<script>
module.exports= {
    props : ['artList']
}
</script>