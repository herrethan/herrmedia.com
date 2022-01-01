<?php
/**
 * The sidebar containing the main widget area
 *
 * If no active widgets are in the sidebar, hide it completely.
 *
 * @package WordPress
 * @subpackage Twenty_Twelve
 * @since Twenty Twelve 1.0
 */
?>

	<?php if ( is_active_sidebar( 'sidebar-1' ) ) : ?>
		<div id="secondary" class="widget-area column medium-4" role="complementary">
      <?php if ( z_taxonomy_image_url() && is_category('savoring-the-sweet') ) : // Show optional category image ?>
        <img class="chef" src="<?php echo z_taxonomy_image_url(); ?>" />
        <span class="break">Chef Vicki Wells</span>
      <?php endif; ?>
			<?php dynamic_sidebar( 'sidebar-1' ); ?>
		</div><!-- #secondary -->
	<?php endif; ?>