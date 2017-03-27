<template>
  <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">Gallery</a>
      </div>
      <ul class="nav navbar-nav navbar-right">
        <li><a @click.prevent="onExit" href="#">Exit</a></li>
      </ul>
    </div>
  </nav>
</template>

<script type="text/javascript">
export default {
  name: 'navbar',
  methods: {
    onExit() {
      this.$emit('logout');
    }
  }
}
</script>
