
importScripts('sw-toolbox/sw-toolbox.js');

//toolbox.options.debug = true;
//toolbox.options.cache.name = "hi-lombok-v1";

var fileToCaches = [
	'index.html',
	'index.html?homescreen=1',
	'index.html?hs=1',
	'?homescreen=1',

	'css/bootstrap.min.css',
	'css/font-awesome.min.css',
	'css/style.css',
	'css/cm-overlay.css',

	'js/bars.js',
	'js/bootstrap.js',
	'js/easing.js',
	'js/jquery.cm-overlay.js',
	'js/jquery.flexslider.js',
	'js/jquery-2.2.3.min.js',
	'js/move-top.js',
	'js/jquery.mobile.custom.min.js',
	'js/jquery.tools.min.js',
	'js/responsiveslides.min.js',

	'images/arrow.png',
	'images/banner.jpg',
	'images/close.png',
	'images/juna.jpg',
	'images/junaidi.jpg',
	'images/next.png',
	'images/prev.png',
	'images/s1.png',
	'images/s2.png',
	'images/s3.png',
	'images/s4.png',
	'images/search.png',
	'images/serve.jpg',

	'images/works/1.png',
	'images/works/2.png',
	'images/works/3.png',
	'images/works/4.png',
	'images/works/5.png',

	'images/icons/apple-icon.png',
	'images/icons/apple-icon-57x57.png',
	'images/icons/apple-icon-60x60.png',
	'images/icons/apple-icon-72x72.png',
	'images/icons/apple-icon-76x76.png',
	'images/icons/apple-icon-114x114.png',
	'images/icons/apple-icon-120x120.png',
	'images/icons/apple-icon-144x144.png',
	'images/icons/apple-icon-152x152.png',
	'images/icons/apple-icon-180x180.png',
	'images/icons/apple-icon-precomposed.png',
	'images/icons/favicon.ico',
	'images/icons/favicon-16x16.png',
	'images/icons/favicon-32x32.png',
	'images/icons/favicon-96x96.png',
	'images/icons/icon-36x36.png',
	'images/icons/icon-48x48.png',
	'images/icons/icon-72x72.png',
	'images/icons/icon-96x96.png',
	'images/icons/icon-144x144.png',
	'images/icons/icon-192x192.png',
	'images/icons/ms-icon-70x70.png',
	'images/icons/ms-icon-144x144.png',
	'images/icons/ms-icon-150x150.png',
	'images/icons/ms-icon-310x310.png',

	'fonts/FontAwesome.otf',
	'fonts/fontawesome-webfont.eot',
	'fonts/fontawesome-webfont.svg',
	'fonts/fontawesome-webfont.ttf',
	'fonts/fontawesome-webfont.woff',
	'fonts/fontawesome-webfont.woff2',
	'fonts/glyphicons-halflings-regular.eot',
	'fonts/glyphicons-halflings-regular.svg',
	'fonts/glyphicons-halflings-regular.ttf',
	'fonts/glyphicons-halflings-regular.woff',
	'fonts/glyphicons-halflings-regular.woff2',
];

toolbox.precache(fileToCaches);

toolbox.router.get('/(.*)', function(req, vals, opts) {
  return toolbox.networkFirst(req, vals, opts)
    .catch(function(error) {
      if (req.method === 'GET' && req.headers.get('accept').includes('text/html')) {
      	//console.log('You are now offline');
        return toolbox.cacheOnly(new Request('/'), vals, opts);
      }
      throw error;
    });
});