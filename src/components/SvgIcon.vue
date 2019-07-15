<template>
  <div
    v-if="isExternal"
    :style="styleExternalIcon"
    class="svg-external-icon svg-icon"
    v-on="$listeners"
  />
  <svg v-else :class="svgClass" aria-hidden="true" v-on="$listeners">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class SvgIcon extends Vue {
  @Prop({ type: String, required: true }) name: string
  @Prop({ type: String, default: '' }) className: string

  get isExternal() {
    return /^(https?:|mailto:|tel:)/.test(this.name)
  }
  get iconName() {
    return `#icon-${this.name}`
  }
  get svgClass() {
    if (this.className) {
      return 'svg-icon ' + this.className
    } else {
      return 'svg-icon'
    }
  }
  get styleExternalIcon() {
    return {
      mask: `url(${this.name}) no-repeat 50% 50%`,
      '-webkit-mask': `url(${this.name}) no-repeat 50% 50%`
    }
  }
}
</script>

<style lang="stylus" scoped>
.svg-icon
  width 1em
  height 1em
  vertical-align -0.15em
  fill currentColor
  overflow hidden
.svg-external-icon
  background-color currentColor
  mask-size cover!important
  display inline-block
</style>
