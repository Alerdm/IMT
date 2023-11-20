<?php

//Begin Really Simple SSL session cookie settings
@ini_set('session.cookie_httponly', true);
@ini_set('session.cookie_secure', true);
@ini_set('session.use_only_cookies', true);
//END Really Simple SSL
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'mundod13_wp407' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'sblmnovhzsgnwlkrtkgq5lxkilazl4sbf3knt1ccvbia0mvmthmhftaccdr5ajjs' );
define( 'SECURE_AUTH_KEY',  'wykm9ohpr0eqvwue5jzizzbo07nwohfjpnompmwbsej0xyxj8d9nmm6hlsgjmyvy' );
define( 'LOGGED_IN_KEY',    'knqzysewdblnvuqye4kvbuasth6pzarrsaqllynqhikjlxinzgw3zg9icflhznnm' );
define( 'NONCE_KEY',        '6ahcf0l2cvumwqxfhpwlo1y04z6py4fb6qgadxodztolatg2oist8tmqrw7hr0tr' );
define( 'AUTH_SALT',        'i5czlvglitpvxkv6cv3jz72pofrqyk0a9kc47dujh6nm0nxhwivpgnyidttbei65' );
define( 'SECURE_AUTH_SALT', 'womra7uoowmlslzhzcm77nwmdaqd9s9vzdrtsdjfizbnvsf3shnuadlhngdewu7e' );
define( 'LOGGED_IN_SALT',   'ld7qgavsiotxcd2kcqxtzykimbdanm7iwcsxghnhphjvhkc285kxb7gieuuoptkh' );
define( 'NONCE_SALT',       'xwpyzx5glbqhiu6h2g1lhantogjuauozmjjfiucnfo4mik7vqu9ishqszw7zxela' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wpah_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
