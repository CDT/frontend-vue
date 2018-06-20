<template>
<div class="wrapper">
  <div class="window">
    <div class="ruleList">
      <rule description = '1.1 缺(出院)死亡记录'></rule>
    </div>
  </div>
</div>
</template>

<script>
import Rule from './Rule.vue'

export default {
  components: {
    'rule': Rule
  },
  data () {
    return {
      ruleSets: [
        {category: '出院/死亡记录', ruleDescriptions: ['缺出院/死亡记录', '缺出院/死亡记录', '出院记录或死亡记录未在出院后24h内完成']},
        {category: '死亡病例讨论记录', ruleDescriptions: ['无死亡病例讨论记录', '死亡病例讨论记录未在7天内完成']},
        {category: '入院记录', ruleDescriptions: ['无入院诊断', '无入院记录/入院记录中病史为空', '入院记录未在24小时内完成']},
        {category: '首程记录', ruleDescriptions: ['无首次病程', '首次病程未在患者入院后8小时内完成']},
        {category: '查房记录', ruleDescriptions: ['上级医师首次查房记录未在48小时内完成', '缺至少每7天一次副高及以上医师查房记录']},
        {
          category: '病程记录',
          ruleDescriptions: ['病重患者每两天至少一次病程记录', '病情稳定患者至少3天写一次病程记录', '病危患者每天至少有一次病程记录',
            '入院每32天写一次阶段小结', '转出记录在病人转出前完成', '转入记录未在转入后24小时内完成', '缺病危/病重通知单', '缺出院前一天或当天病程记录', '无手术知情同意书',
            '缺抢救记录', '手术无术前小结/术前讨论', '缺手术前一天病程记录', '缺手术记录', '手术记录未在24小时内完成', '无术后首次病程记录', '缺术后三天中某一天的病程记录',
            '无手术安全核查表', '术前小结/术前讨论记录有缺项']
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
$navBarColor: #625772;

* {
    margin: 0;
    text-decoration: none;
}

.wrapper {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.window {
    border-radius: 8px;
    overflow: hidden;
    width: 400px;
    .ruleList {
        background: lighten($navBarColor, 5);
        height: 100%;
        padding: 8px 0;
    }
}

@media all and (max-width: 410px) {
    .window {
        width: 100%;
        min-width: 270px;
    }
}
</style>
