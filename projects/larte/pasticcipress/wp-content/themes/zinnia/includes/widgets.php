<?php
// ==================================================================
// Widget - Sidebar
// ==================================================================
function zinnia_right_widgets_init() {
  register_sidebar( array(
    'name'          => __( 'right-widget-1','zinnia-theme' ),
    'id'            => 'right-widget-1',
    'class'         => '',
    'description'   => 'Right side widget area',
    'before_widget' => '<article class="side-widget">',
    'after_widget'  => '</article>',
    'before_title'  => '<h3>',
    'after_title'   => '</h3>',
  ) );
}
add_action( 'widgets_init', 'zinnia_right_widgets_init' );