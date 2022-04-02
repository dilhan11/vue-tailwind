<template>
<div class="c-app">
    <Header />
     <Sidebar />
    <div class="c-body">
        <main class="c-main">
            <router-view></router-view>
        </main>
    </div>
    <Footer />

</div>
</template>

<script>
import Sidebar from './SideNavigation'
import Header from './Header'
import Footer from './Footer'
export default {
  components: {
    Sidebar,
    Header,
    Footer
  }
}
</script>

<style>

</style>
