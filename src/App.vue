<script setup>
import { RouterView } from 'vue-router';
import Topbar from './components/Topbar.vue';
import Sidebar from './components/Sidebar.vue';
import Footer from './components/Footer.vue';
import { useProductStore } from './stores/ProductsStore';
const store = useProductStore()
store.getProducts()

</script>
<template>
    <div>
        <Topbar />
        <div class="flex">
            <Sidebar />
            <router-view class="flex-1 p-4" />
        </div>
        <Footer />
    </div>
</template>
