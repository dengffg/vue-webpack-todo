<template>
    <div>
        <Header/>
        <Todo/>
        <Footer/>
    </div>
</template>

<script>
import Header from './todo/Header.vue'
import Footer from './todo/Footer.vue'
import Todo from './todo/Todo.vue'

export default {
    components: {
        Header,
        Footer,
        Todo
    }
}
</script>

<style>
   
</style>