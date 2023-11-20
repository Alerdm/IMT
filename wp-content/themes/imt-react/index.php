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
    <link rel="shortcut icon" href="/imtwp/wp-content/themes/imt-react/images/IMTfavicon.png" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="Instituto del Mundo del Trabajo" />
    <title>IMT</title>
<link href="/imtwp/wp-content/themes/imt-react/static/css/0.chunk.css?6750e8f7d088425df9b6" rel="stylesheet"><link href="/imtwp/wp-content/themes/imt-react/static/css/main.chunk.css?6750e8f7d088425df9b6" rel="stylesheet"></head>
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
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <script src="/imtwp/wp-content/themes/imt-react/static/js/bundle.js?6750e8f7d088425df9b6"></script><script src="/imtwp/wp-content/themes/imt-react/static/js/0.chunk.js?6750e8f7d088425df9b6"></script><script src="/imtwp/wp-content/themes/imt-react/static/js/main.chunk.js?6750e8f7d088425df9b6"></script></body>
</html>
