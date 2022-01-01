<?php
/**
 * The template for displaying the footer
 *
 * Contains footer content and the closing of the #main and #page div elements.
 *
 * @package WordPress
 * @subpackage Twenty_Twelve
 * @since Twenty Twelve 1.0
 */
?>
	</div><!-- #main .wrapper -->
	<footer class="site-info" id="colophon" role="contentinfo">
			<?php //do_action( 'twentytwelve_credits' ); ?>
			<!-- <a href="<?php echo esc_url( __( 'http://wordpress.org/', 'twentytwelve' ) ); ?>" title="<?php esc_attr_e( 'Semantic Personal Publishing Platform', 'twentytwelve' ); ?>"><?php printf( __( 'Proudly powered by %s', 'twentytwelve' ), 'WordPress' ); ?></a> -->
		  
      <div class="row">
      <?php
        if(is_active_sidebar('footer-sidebar')){ dynamic_sidebar('footer-sidebar'); }
      ?>      
        <small class="column large-12">
          &copy; <?php echo date('Y');?> L'arte della Pasticceria <br> <a target="_blank" href="http://herrmedia.com">herrmedia</a> ~ <a href="http://darchdesign.com/" target="_blank">darch design</a><br>
        </small>
      </div> 
      
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>
</body>
</html>