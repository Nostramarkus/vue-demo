<template>
  <section class="content">
    <div class="columns">
      <div class="column"></div>
      <div class="column">
        <div class="block">
          <b-field grouped group-multiline>
            <div class="control">
              <b-switch v-model="rounded">Rounded</b-switch>
            </div>
          </b-field>
        </div>
        <b-image
          src="https://picsum.photos/500/500"
          alt="A random image"
          ratio="1by1"
          :rounded="rounded"
        />
        <b-image
          src="https://picsum.photos/600/600"
          alt="Another random image"
          ratio="1by1"
          :rounded="rounded"
        />
      </div>
      <div class="column"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: "lwHero",
  data() {
    return {
      rounded: false
    };
  }
};
</script>