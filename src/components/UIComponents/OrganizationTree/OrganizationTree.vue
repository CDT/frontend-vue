<template>
<div class="card">
<section class="nav-wrap">	
	<!-- start accordion nav block -->
	<nav class="acnav" role="navigation">
		
		<!-- 第一层：医院层级 -->
		<ul v-for="organization in organizations" class="acnav__list acnav__list--level1">
			<li :class="{ 'has-children' : organization.subordinates }">
				<p class="acnav__label acnav__label--level1 accordion-level" :class='{ selected : selectedOrg === organization }' @click="selectOrganization(organization)">
					<span class="org-hospital">{{ organization.name }}</span>
				</p>
					
					<!-- 第二层：一级专科 -->
					<ul class="acnav__list acnav__list--level2">
						<li :class="{ 'has-children' : firstLevel.subordinates }" v-for="firstLevel in organization.subordinates">
							<p class="acnav__label acnav__label--level2  accordion-level" :class='{ selected : selectedOrg === firstLevel }' @click="selectOrganization(firstLevel)">
								<span class="org-department">{{ firstLevel.name }}</span>
							</p>

							<!-- 第三层：二级专科或病房 -->
							<ul class="acnav__list acnav__list--level3" v-for="secondLevel in firstLevel.subordinates">
								<li :class="{ 'has-children' : secondLevel.subordinates }">
									<p class="acnav__label acnav__label--level3  accordion-level" :class='{ selected : selectedOrg === secondLevel }' @click="selectOrganization(secondLevel)">

                    <span :class="'org-' + secondLevel.type">
                      <span v-if="secondLevel.branch">{{ getBranchName(secondLevel.branch) }}</span>
                      {{ secondLevel.name }}
                    </span>
									</p>

									<!-- 第四层：病房 -->
									<ul class="acnav__list acnav__list--level4" v-for="thirdLevel in secondLevel.subordinates">
										<li>
											<p class="acnav__link acnav__link--level4 accordion-level" :class='{ selected : selectedOrg === thirdLevel }' @click="selectOrganization(thirdLevel)">
                        <span class="org-ward">
                          <span v-if="thirdLevel.branch">{{ getBranchName(thirdLevel.branch) }}</span>
												  {{ thirdLevel.name }}
                        </span>
											</p>
										</li>
									</ul>
					
								</li>
							</ul>
							
						</li>
					</ul>

			</li>
		</ul>
	</nav>
</section>
</div>
</template>

<script>
import $ from 'jquery'
import organizations from 'src/assets/data/organizations.json'
import eventBus from 'src/eventBus'
import { getBranchName } from 'src/components/utils'

export default {
  props: {
    eventSource: {
      type: String,
      default: ''
    },
    selectedOrg: {
      type: Object,
      default: ''
    }
  },
  data () {
    return {
      organizations: organizations.organizations
    }
  },
  mounted () {
    $('.acnav__label').click(function () {
      var label = $(this)
      var parent = label.parent('.has-children')
      var list = label.siblings('.acnav__list')

      if (parent.hasClass('is-open')) {
        list.slideUp('fast')
        parent.removeClass('is-open')
      } else {
        list.slideDown('fast')
        parent.addClass('is-open')
      }
    })
  },
  methods: {
    selectOrganization (selectedOrg) {
      eventBus.$emit(this.eventSource + '-organization-selected', selectedOrg)
    },
    getBranchName: getBranchName
  }
}
</script>

<style lang="scss" scoped>
a {
	text-decoration: none;
	color: inherit;
	&:hover {
		text-decoration: underline;
		color: inherit;
	}
}

.nav-wrap {
	width: 100%;
	// margin: 1em auto 0;
	// @media (min-width: 992px) {
	// 	width: 50%;
	// }
}

// hidden fallback
[hidden] {
  display: none;
  visibility: hidden;
}

// change colors here
// $color-foreground: #212121; // text and border color
// $color-background: #F5F5F5; // background

// accordion nav
.acnav {
  width: 100%;

  // first level items
  &__list {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  &__list--level1 {
    // border: 1px solid $color-foreground;
		// border: 1px solid #BDBDBD;
		font-size: 2rem;
		font-weight: bold;
  }

  // font awesome icon 'fa-plus'
  .has-children > &__label::before {
    content: "\f067";
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    margin-right: 1em;
    transition: transform .3s;
  }

  // animate icon when list is opened
  .has-children.is-open > &__label::before {
    transform: rotate(405deg);
  }

  &__link,
  &__label {
    display: block;
    // font-size: 1rem;
    padding: 1em;
    margin: 0;
    cursor: pointer;
    // color: $color-foreground;
    // background: $color-background;
    // box-shadow: inset 0 -1px lighten($color-background, 6%);
    // transition: color .25s ease-in, background-color .25s ease-in;
    // &:focus,
    // &:hover {
    //   color: darken($color-foreground, 10%);
    //   background: darken($color-background, 3%);
    // }
  }

  // second level items
  &__link--level2,
  &__label--level2 {
    padding-left: 3em;
    // background: darken($color-background, 3%);
    // &:focus,
    // &:hover {
    //   background: darken($color-background, 6%);
    // }
  }

  // third level items
  &__link--level3,
  &__label--level3 {
    padding-left: 5em;
    // background: darken($color-background, 6%);
    // &:focus,
    // &:hover {
    //   background: darken($color-background, 9%);
    // }
  }

  // fourth level items
  &__link--level4,
  &__label--level4 {
    padding-left: 7em;
    // background: darken($color-background, 9%);
    // &:focus,
    // &:hover {
    //   background: darken($color-background, 12%);
    // }
  }

	// hide nested lists
	&__list--level2,
  &__list--level3,
  &__list--level4 {
		font-weight: normal;
    display: none;
    // open list
    .is-open > & {
      display: block;
    }
	}
	
	&__label--level1 {
		font-size: 2rem;
	}

	&__label--level2 {
		font-size: 1.8rem;
	}

	&__label--level3 {
		font-size: 1.6rem;
	}

	&__label--level4 {
		font-size: 1.4rem;
	}
   
}
</style>
