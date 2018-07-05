<template>
<div class="item" @click="select" :class="{selected: selected}">
  <p class="name">
    {{index}} {{ rule.name }}
  </p>
  <label class="switch"><input checked="true" type="checkbox" />
    <div class="slider"></div>
  </label>
</div>
</template>

<script>
import eventBus from '../../../eventBus'

export default {
  props: {
    rule: {
      type: Object,
      default: ''
    },
    index: {
      type: String,
      default: ''
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  },
  methods: {
    select () {
      eventBus.$emit('rule-selected', this.rule)
    }
  }
}
</script>

<style lang="scss" scoped>
$item-background: #e0f7fa;

.item {
    padding: 0 16px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: background 0.5s;
    &:hover {
        background-color: $item-background;
        cursor: pointer;
    }
    &.selected {
        background-color: $item-background;
    }
    .name {
        color: black;
        font-size: 16px;
        margin: 10px;
    }    
}

.switch {
    width: 60px;
    height: 30px;
    display: inline-block;
    & input {
        display: none;
    }

    .slider {
        position: absolute;
        background-color: #F38181;
        width: inherit;
        height: inherit;
        border-radius: 34px;
        cursor: pointer;
        transition: background-color 1s linear;
        &:before {
            position: absolute;
            content: "";
            height: 30px;
            width: 30px;
            border-radius: 50px;
            background-color: #fff;
            transition: .4s, background-color 1s linear;
        }
    }
    
    input:checked + .slider {
        background-color: darken(#A9EEE6, 10);
    }

    input:checked + .slider:before {
        -webkit-transform: translateX(30px);
        -ms-transform: translateX(30px);
        transform: translateX(30px);
    }
}
</style>
