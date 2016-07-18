var elixir = require('laravel-elixir');
var del = require('del');
require('laravel-elixir-jade');

// Don't generate map files
elixir.config.sourcemaps = false;

// Remove task
elixir.extend('remove', function(path) {
    new elixir.Task('remove', function() {
        del(path);
    });
});

elixir(function(mix) {
    mix.remove('public/templates/');
    mix.sass('login.scss', 'public/templates/assets/css/login.css');
    mix.sass('dashboard.scss', 'public/templates/assets/css/dashboard.css');
    mix.sass('user.scss', 'public/templates/assets/css/user.css');
    mix.sass('profile.scss', 'public/templates/assets/css/profile.css');
    mix
        .copy('node_modules/font-awesome/fonts', 'public/templates/assets/fonts')
        .copy('node_modules/simple-line-icons/fonts', 'public/templates/assets/fonts')
        .copy('resources/assets/images', 'public/templates/assets/images')
        .copy('node_modules/jquery/dist/jquery.js', 'resources/assets/js/vendor')
        .copy('node_modules/bootstrap-sass/assets/javascripts/bootstrap.js', 'resources/assets/js/vendor')
        .copy('node_modules/amcharts/dist/amcharts/amcharts.js', 'resources/assets/js/vendor')
        .copy('node_modules/amcharts/dist/amcharts/serial.js', 'resources/assets/js/vendor')
        .copy('node_modules/amcharts/dist/amcharts/pie.js', 'resources/assets/js/vendor')
        .copy('node_modules/amcharts/dist/amcharts/radar.js', 'resources/assets/js/vendor')
        .copy('node_modules/amcharts/dist/amcharts/themes/light.js', 'resources/assets/js/vendor')
        .copy('node_modules/jquery-slimscroll/jquery.slimscroll.js', 'resources/assets/js/vendor')
        .copy('node_modules/bootstrap-datepicker/dist/css/bootstrap-datepicker3.css', 'public/templates/assets/css')
        .copy('node_modules/bootstrap-datepicker/dist/locales/bootstrap-datepicker.vi.min.js', 'resources/assets/js/vendor')
        .copy('node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.js', 'resources/assets/js/vendor')
        .copy('node_modules/jasny-bootstrap/js/fileinput.js', 'resources/assets/js/vendor')
    ;
    mix.scripts([
        'vendor/jquery.js',
        'vendor/bootstrap.js',
        'vendor/jquery.slimscroll.js',
        'vendor/amcharts.js',
        'vendor/serial.js',
        'vendor/pie.js',
        'vendor/radar.js',
        'vendor/light.js',
        'common.js',
        'layout.js',
        'dashboard.js'
    ], 'public/templates/assets/js/dashboard.js');

    mix.scripts([
        'vendor/jquery.js',
        'vendor/bootstrap.js',
        'vendor/jquery.slimscroll.js',
        'vendor/bootstrap-datepicker.js',
        'vendor/bootstrap-datepicker.vi.min.js',
        'common.js',
        'layout.js',
        'user.js'
    ], 'public/templates/assets/js/user.js');

    mix.scripts([
        'vendor/jquery.js',
        'vendor/bootstrap.js',
        'vendor/jquery.slimscroll.js',
        'vendor/fileinput.js',
        'common.js',
        'layout.js',
        'profile.js'
    ], 'public/templates/assets/js/profile.js');
    mix.jade({
        blade: false,
        html: true,
        dest: '/../public/templates',
        search: '**/*.jade',
        src: '/assets/jade/',
    });
});