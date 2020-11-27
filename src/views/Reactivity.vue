<template>
  <div class="main">
    <h1>{{tekst}}</h1>

    <div class="has-margin-top-50 has-margin-left-145-desktop has-margin-right-145-desktop">
      <section>
        <b-field label="Dynamic text binding" class="has-margin-top-50">
          <b-input v-model="tekst"></b-input>
        </b-field>

        <b-field label="Dynamic class binding" class="has-margin-top-100">
          <b-switch v-model="rounded">Rounded class</b-switch>
        </b-field>
        <div class="columns">
          <div class="column">
            <b-image
              src="https://picsum.photos/500/500"
              alt="A random image"
              ratio="1by1"
              :rounded="rounded"
            />
          </div>
          <div class="column">
            <b-image
              src="https://picsum.photos/600/600"
              alt="Another random image"
              ratio="1by1"
              :rounded="rounded"
            />
          </div>
        </div>
      </section>

      <section>
        <b-field
          label="Dynamic options date/time picker"
          class="has-margin-top-130"
          grouped
          group-multiline
        >
          <div class="control">
            <b-switch v-model="showWeekNumber">Toon week nummer</b-switch>
          </div>
          <div class="control">
            <b-switch v-model="enableSeconds">Voeg seconden toe</b-switch>
          </div>

          <b-field label="Locales">
            <b-select v-model="locale">
              <option :value="undefined"></option>
              <option value="de-DE">de-DE</option>
              <option value="en-CA">en-CA</option>
              <option value="en-GB">en-GB</option>
              <option value="en-US">en-US</option>
              <option value="es-ES">es-ES</option>
              <option value="es-MX">es-MX</option>
              <option value="fr-CA">fr-CA</option>
              <option value="fr-FR">fr-FR</option>
              <option value="it-IT">it-IT</option>
              <option value="ja-JP">ja-JP</option>
              <option value="pt-BR">pt-BR</option>
              <option value="ru-RU">ru-RU</option>
              <option value="zn-CN">zn-CN</option>
            </b-select>
          </b-field>
          <b-field label="Uur formaat">
            <b-select v-model="hourFormat">
              <option :value="undefined"></option>
              <option value="12">12</option>
              <option value="24">24</option>
            </b-select>
          </b-field>
        </b-field>
        <b-field class="has-margin-top-30">
          <b-datetimepicker
            placeholder="Klik om date/time te selecteren"
            :locale="locale"
            :datepicker="{ showWeekNumber }"
            :timepicker="{ enableSeconds, hourFormat }"
            horizontal-time-picker
          ></b-datetimepicker>
        </b-field>
      </section>

      <section>
        <div class="block">
          <b-field
            label="Dynamic options form wizard"
            class="has-margin-top-130"
            grouped
            group-multiline
          >
            <div class="control">
              <b-switch v-model="showSocial">Toon Social stap</b-switch>
            </div>
            <div class="control">
              <b-switch v-model="isAnimated">Animated</b-switch>
            </div>
            <div class="control">
              <b-switch v-model="isRounded">Rounded</b-switch>
            </div>
            <div class="control">
              <b-switch v-model="isStepsClickable">Klikbare stappen</b-switch>
            </div>
          </b-field>
          <b-field grouped group-multiline>
            <div class="control">
              <b-switch v-model="hasNavigation">Navigatie buttons</b-switch>
            </div>
            <div class="control">
              <b-switch v-model="customNavigation">Custom navigatie</b-switch>
            </div>
            <div class="control">
              <b-switch v-model="isProfileDanger">
                Set
                <code>is-danger</code> for profile
              </b-switch>
            </div>
          </b-field>
          <b-field v-if="hasNavigation" grouped group-multiline>
            <b-field label="Prev icon">
              <b-select v-model="prevIcon">
                <option value="chevron-left">Chevron</option>
                <option value="arrow-left">Arrow</option>
              </b-select>
            </b-field>
            <b-field label="Next icon">
              <b-select v-model="nextIcon">
                <option value="chevron-right">Chevron</option>
                <option value="arrow-right">Arrow</option>
              </b-select>
            </b-field>
            <b-field label="Label position">
              <b-select v-model="labelPosition">
                <option value="bottom">Bottom</option>
                <option value="right">Right</option>
                <option value="left">Left</option>
              </b-select>
            </b-field>
            <b-field label="Mobile mode">
              <b-select v-model="mobileMode">
                <option :value="null">-</option>
                <option value="minimalist">Minimalist</option>
                <option value="compact">Compact</option>
              </b-select>
            </b-field>
          </b-field>
        </div>
        <b-steps
          v-model="activeStep"
          :animated="isAnimated"
          :rounded="isRounded"
          :has-navigation="hasNavigation"
          :icon-prev="prevIcon"
          :icon-next="nextIcon"
          :label-position="labelPosition"
          :mobile-mode="mobileMode"
        >
          <b-step-item step="1" label="Account" :clickable="isStepsClickable">
            <h1 class="title has-text-centered">Account</h1>Lorem ipsum dolor sit amet.
          </b-step-item>

          <b-step-item
            step="2"
            label="Profile"
            :clickable="isStepsClickable"
            :type="{'is-danger': isProfileDanger}"
          >
            <h1 class="title has-text-centered">Profile</h1>Lorem ipsum dolor sit amet.
          </b-step-item>

          <b-step-item step="3" :visible="showSocial" label="Social" :clickable="isStepsClickable">
            <h1 class="title has-text-centered">Social</h1>Lorem ipsum dolor sit amet.
          </b-step-item>

          <b-step-item
            :step="showSocial ? '4' : '3'"
            label="Finish"
            :clickable="isStepsClickable"
            disabled
          >
            <h1 class="title has-text-centered">Finish</h1>Lorem ipsum dolor sit amet.
          </b-step-item>

          <template v-if="customNavigation" slot="navigation" slot-scope="{previous, next}">
            <b-button
              outlined
              type="is-danger"
              icon-pack="fas"
              icon-left="backward"
              :disabled="previous.disabled"
              @click.prevent="previous.action"
            >Previous</b-button>
            <b-button
              outlined
              type="is-success"
              icon-pack="fas"
              icon-right="forward"
              :disabled="next.disabled"
              @click.prevent="next.action"
            >Next</b-button>
          </template>
        </b-steps>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "Reactivity",
  data() {
    return {
      tekst: "Vue is reactive!",
      rounded: false,
      showWeekNumber: false,
      enableSeconds: false,
      hourFormat: undefined, // Browser locale
      locale: undefined, // Browser locale
      activeStep: 0,

      showSocial: false,
      isAnimated: true,
      isRounded: true,
      isStepsClickable: false,

      hasNavigation: true,
      customNavigation: false,
      isProfileDanger: false,

      prevIcon: "chevron-left",
      nextIcon: "chevron-right",
      labelPosition: "bottom",
      mobileMode: "minimalist"
    };
  }
};
</script>