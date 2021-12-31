<template>
  <div class="firstMenu">
    <div v-for="item in permissionRoutes" :key="item.name" class="firstMenuItem" :style="{color:active===item.name?variables.menuActiveText:variables.menuText}" @click="selectFirstMenu(item)">
      <i v-if="item.meta.icon.includes('el-icon')" :class="item.meta.icon" class="sub-el-icon" />
      <svg-icon v-else :icon-class="item.meta.icon" />
      <div>{{ item.meta.title }}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import variables from '@/styles/variables.scss'
export default {
  computed: {
    ...mapGetters(['permissionRoutes']),
    firstLevelMenu() {
      return this.permissionRoutes
    },
    active() {
      return this.$route.matched[0].name
    },
    variables() {
      return variables
    }
  },
  created() {
    console.log(this.$route.matched[0])
  },
  methods: {
    selectFirstMenu({ name }) {
      // this.$store.dispatch('menu/changeActiveFirst', name) 
    }
  }
}
</script>

<style scoped lang="scss">
.firstMenu {
  float: left;
  height: 100%;
  padding: 0 10px;
  display: flex;
  align-items: center;
  &Item {
    margin: 0 auto;
    padding: 0 8px;
  }
}
.sub-el-icon {
  color: currentColor;
  width: 1em;
  height: 1em;
  display: block;
  margin:0 auto 5px;
  font-size:18px;
}
</style>
