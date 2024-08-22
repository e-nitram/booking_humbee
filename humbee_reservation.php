<?php
/**
 * Plugin Name: Humbee Reservation Plugin
 * Description: A react application
 * Version: 0.1

 */

define('MYHUMBEE_PLUGIN_VERSION', '1.0.1');
define('MYHUMBEE_PLUGIN_MAIN_FILE', __FILE__);
define('MYHUMBEE_PLUGIN_URL', untrailingslashit(plugins_url(basename(plugin_dir_path(__FILE__)), basename(__FILE__))));
define('MYHUMBEE_PLUGIN_DIR', untrailingslashit(plugin_dir_path(__FILE__)));

class MYHUMBEE_PLUGIN
{
    /**
     * @var Singleton The reference the *Singleton* instance of this class
     */
    private static $instance;

    /**
     * Returns the *Singleton* instance of this class.
     *
     * @return Singleton The *Singleton* instance.
     */
    public static function get_instance()
    {
        if (null === self::$instance) {
            self::$instance = new self();
        }
        return self::$instance;
    }


    /**
     * Protected constructor to prevent creating a new instance of the
     * *Singleton* via the `new` operator from outside of this class.
     */
    private function __construct()
    {
        $this->init();
    }

    /**
     * Init the plugin after plugins_loaded so environment variables are set.
     *
     * @since 1.0.0
     * @version 4.0.0
     */

    public function install()
    {

    }

    public function init()
    {
        register_activation_hook(MYHUMBEE_PLUGIN_MAIN_FILE, array($this, 'install'));
        add_action('admin_menu', array($this, 'myhumbee_plugin_admin_page'));
    }

    public function myhumbee_plugin_admin_page()
    {
        add_menu_page(
            'Humbee Widget',
            // Page Title
            'Humbee Widget',
            // Menu Title
            'manage_options',
            // Capability
            'myhumbee-api-settings',
            // Page slug
            array($this, 'myhumbee_plugin_admin_page_html'),
            // Callback to print html
            '',
            6,
        );
    }

    public function myhumbee_plugin_admin_page_html()
    {
        if (!current_user_can('manage_options')) {
            return;
        }

        // Check if the button has been clicked or the API key is known
        $apiKeyKnown = !empty(get_option('location_api_key'));
        $buttonDisabled = !$apiKeyKnown && !isset($_POST['myhumbee_form']);

        ?>
        <div class="wrap">
            <h1>
                <?php echo esc_html(get_admin_page_title()); ?>
            </h1>
            <?php
            if (isset($_POST['myhumbee_form'])) {
                update_option('location_api_key', $_POST['location_api_key']);
            }
            ?>
            <form class="myhumbee_form" method="post">
                <h3>Instellingen</h3>
                <div class="cin_input_wrap">
                    <label for="location_api_key">Location API Key</label><br>
                    <input type="text" id="location_api_key" name="location_api_key"
                        value="<?php echo get_option('location_api_key') ?>" oninput="enableDisableSaveButton(this)">
                </div>
                <div>
                    <button type="submit" class="button-primary" name="myhumbee_form" <?php if ($buttonDisabled)
                        echo 'disabled="disabled"'; ?>>
                        Save
                    </button>
                </div>
            </form>
            <script>
                function enableDisableSaveButton(inputElement) {
                    var saveButton = document.querySelector('.button-primary[name="myhumbee_form"]');
                    if (inputElement.value.trim() === '') {
                        saveButton.disabled = true;
                    } else {
                        saveButton.disabled = false;
                    }
                }
            </script>
        </div>
        <?php
    }

}

add_action('plugins_loaded', array('MYHUMBEE_PLUGIN', 'get_instance'));


add_action('rest_api_init', 'register_custom_api_endpoints');

function register_custom_api_endpoints()
{
    register_rest_route(
        'my_custom_namespace/v1',
        '/my_data/',
        array(
            'methods' => 'GET',
            'callback' => 'fetch_my_custom_data'
        )
    );
}

function fetch_my_custom_data()
{
    // Here you would fetch your custom data. For this example, let's assume it's an option.
    $my_data = get_option('location_api_key');
    return new WP_REST_Response($my_data, 200);
}

// Registering scripts and styles.
function my_react_app_init()
{
    $path = "/frontend/build/static";
    if (getenv('WP_ENV') == "development") {
        $path = "/frontend/build/static";
    }
    wp_register_script("my_react_app_js", plugins_url($path . "/js/main.js", __FILE__), array(), "1.0", true);
    wp_register_style("my_react_app_css", plugins_url($path . "/css/main.css", __FILE__), array(), "1.0", "all");

    // Localize the script with the data you want to pass
    wp_localize_script(
        'my_react_app_js',
        'myReactAppData',
        array(
            'location_api_key' => get_option('location_api_key')
        )
    );
}

// Function to check if a post has our shortcode and enqueue necessary scripts/styles.
function check_for_shortcode($posts)
{
    if (empty($posts)) {
        return $posts;
    }

    // Check each post for the shortcode.
    foreach ($posts as $post) {
        if (has_shortcode($post->post_content, 'my_react_app')) {
            my_react_app_init();
            break;
        }
    }

    return $posts;
}

add_action('the_posts', 'check_for_shortcode');

function add_react_app_to_footer()
{
    my_react_app_init();
    wp_enqueue_script("my_react_app_js");
    wp_enqueue_style("my_react_app_css");
    echo "<div id=\"my_react_app\"></div>";
}

add_action('wp_footer', 'add_react_app_to_footer');

// Function for the shortcode that calls React app.
function AAA()
{
    wp_enqueue_script("my_react_app_js");
    wp_enqueue_style("my_react_app_css");
    return "<div id=\"my_react_app\"></div>";
}

add_shortcode('my_react_app', 'AAA');