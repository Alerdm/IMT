<?php
  $TEMPLATE_PATH = parse_url(get_template_directory_uri(), PHP_URL_PATH);
?>
<!DOCTYPE html>
<html lang="en">
<head>
<?php $BRC_TEMPLATE_PATH = parse_url(get_template_directory_uri(), PHP_URL_PATH); ?>
<script src='<?php echo $BRC_TEMPLATE_PATH; ?>/react-src/node_modules/@devloco/create-react-wptheme-utils/wpThemeClient.js'></script>

<script src='<?php echo $BRC_TEMPLATE_PATH; ?>/react-src/node_modules/@devloco/create-react-wptheme-utils/wpThemeErrorOverlay.js'></script>

<script> wpThemeClient.start("ws", "127.0.0.1", "8090"); </script>

<meta charset="utf-8" />
    <link rel="shortcut icon" href="/imtwp/wp-content/themes/imt_react_app/images/IMTfavicon.png" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,700,0,200" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@40,200,0,-25" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="Instituto del Mundo del Trabajo" />
    <title>IMT</title>
<link href="/imtwp/wp-content/themes/imt_react_app/static/css/0.chunk.css?bce7c2624763d7f0b4d0" rel="stylesheet"><link href="/imtwp/wp-content/themes/imt_react_app/static/css/main.chunk.css?bce7c2624763d7f0b4d0" rel="stylesheet"></head>
    <body>
      <noscript>
          You need to enable JavaScript to run this app.
      </noscript>
      <div id="root"></div>
      <!--
          This PHP file is a template.
          If you open it directly in the browser, you will see an empty page.

          You can add webfonts, meta tags, or analytics to this file.
          The build step will place the bundled scripts into the <body> tag.

          To begin the development, run `npm run wpstart` or `yarn wpstart`.
          To create a production bundle, use `npm run wpbuild` or `yarn wpbuild`.
      -->
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    <script src="/imtwp/wp-content/themes/imt_react_app/static/js/bundle.js?bce7c2624763d7f0b4d0"></script><script src="/imtwp/wp-content/themes/imt_react_app/static/js/0.chunk.js?bce7c2624763d7f0b4d0"></script><script src="/imtwp/wp-content/themes/imt_react_app/static/js/main.chunk.js?bce7c2624763d7f0b4d0"></script></body>
</html>
