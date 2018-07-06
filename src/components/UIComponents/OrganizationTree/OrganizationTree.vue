<template>
<section class="nav-wrap">	
	<!-- start accordion nav block -->
	<nav class="acnav" role="navigation">
		<!-- start level 1 -->
		<ul class="acnav__list acnav__list--level1">

			<!-- start group 1 -->
			<li class="has-children">
				<div class="acnav__label">
					Group 1 (level 1)
				</div>
				<!-- start level 2 -->
				<ul class="acnav__list acnav__list--level2">
					<li>
						<a class="acnav__link acnav__link--level2" href="">Item (level 2)</a>
					</li>

					<li class="has-children">
						<div class="acnav__label acnav__label--level2">
							Group 1.1 (level 2)
						</div>
						<!-- start level 3 -->
						<ul class="acnav__list acnav__list--level3">
							<li>
								<a class="acnav__link acnav__link--level3" href="">Item (level 3)</a>
							</li>
							<li class="has-children">
								<div class="acnav__label acnav__label--level3">
									Group 1.1.1 (level 3)
								</div>
								<!-- start level 4 -->
								<ul class="acnav__list acnav__list--level4">
									<li>
										<a class="acnav__link acnav__link--level4" href="">Item (level 4)</a>
									</li>
								</ul>
								<!-- end level 4 -->
							</li>
							<li class="has-children">
								<div class="acnav__label acnav__label--level3">
									Group 1.1.2 (level 3)
								</div>
								<!-- start level 4 -->
								<ul class="acnav__list acnav__list--level4">
									<li>
										<a class="acnav__link acnav__link--level4" href="">Item (level 4)</a>
									</li>
								</ul>
								<!-- end level 4 -->
							</li>
						</ul>
						<!-- end level 3 -->
					</li>

					<li class="has-children">
						<div class="acnav__label acnav__label--level2">
							Group 1.2 (level 2)
						</div>
						<!-- start level 3 -->
						<ul class="acnav__list acnav__list--level3">
							<li>
								<a class="acnav__link acnav__link--level3" href="">Item (level 3)</a>
							</li>
							<li class="has-children">
								<div class="acnav__label acnav__label--level3">
									Group 1.2.1 (level 3)
								</div>
								<!-- start level 4 -->
								<ul class="acnav__list acnav__list--level4">
									<li>
										<a class="acnav__link acnav__link--level4" href="">Item (level 4)</a>
									</li>
								</ul>
								<!-- end level 4 -->
							</li>
							<li class="has-children">
								<div class="acnav__label acnav__label--level3">
									Group 1.2.2 (level 3)
								</div>
								<!-- start level 4 -->
								<ul class="acnav__list acnav__list--level4">
									<li>
										<a class="acnav__link acnav__link--level4" href="">Item (level 4)</a>
									</li>
								</ul>
								<!-- end level 4 -->
							</li>
						</ul>
						<!-- end level 3 -->
					</li>
				</ul>
				<!-- end level 2 -->
			</li>
			<!-- end group 1 -->

		</ul>
		<!-- end level 1 -->
	</nav>
	<!-- end accordion nav block -->
	
</section>
</template>

<script>
import $ from 'jquery'

export default {
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
  }
}
</script>

<style lang="scss" scoped>
a {
	text-decoration: none;
	&:hover {
		text-decoration: underline;
	}
}

.nav-wrap {
	width: 100%;
	margin: 1em auto 0;
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
$color-foreground: #212121; // text and border color
$color-background: #F5F5F5; // background

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
    border: 1px solid #BDBDBD;
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
    font-size: 1rem;
    padding: 1em;
    margin: 0;
    cursor: pointer;
    color: $color-foreground;
    background: $color-background;
    box-shadow: inset 0 -1px lighten($color-background, 6%);
    transition: color .25s ease-in, background-color .25s ease-in;
    &:focus,
    &:hover {
      color: darken($color-foreground, 10%);
      background: darken($color-background, 3%);
    }
  }

  // second level items
  &__link--level2,
  &__label--level2 {
    padding-left: 3em;
    background: darken($color-background, 3%);
    &:focus,
    &:hover {
      background: darken($color-background, 6%);
    }
  }

  // third level items
  &__link--level3,
  &__label--level3 {
    padding-left: 5em;
    background: darken($color-background, 6%);
    &:focus,
    &:hover {
      background: darken($color-background, 9%);
    }
  }

  // fourth level items
  &__link--level4,
  &__label--level4 {
    padding-left: 7em;
    background: darken($color-background, 9%);
    &:focus,
    &:hover {
      background: darken($color-background, 12%);
    }
  }

  // hide nested lists
  &__list--level2,
  &__list--level3,
  &__list--level4 {
    display: none;
    // open list
    .is-open > & {
      display: block;
    }
  }
   
}
</style>
