<template>
  <b-navbar type="is-dark">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img src="https://livewallconcepts.nl/images/logo/logo_livewall_circle.png" alt="LiveWall">
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">Home</b-navbar-item>
      <b-navbar-dropdown label="Demo's">
        <b-navbar-item tag="router-link" :to="{ path: '/reactivity' }">Reactivity</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/plugins' }">Betere plugins</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/nuxt' }">Nuxt</b-navbar-item>
      </b-navbar-dropdown>
    </template>
  </b-navbar>
</template>