var elixir = require('laravel-elixir');
require('laravel-elixir-jade');
var del = require('del');
/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir.extend('remove', function(path) {
    new elixir.Task('remove', function() {
        del(path);
    });
});

elixir(function(mix) {
    mix.sass('login.scss', 'public/templates/assets/css/login.css');
    mix.sass('dashboard.scss', 'public/templates/assets/css/dashboard.css');
    mix
        .copy('node_modules/font-awesome/fonts', 'public/templates/assets/font')
        .copy('node_modules/simple-line-icons/fonts', 'public/templates/assets/font');
    mix.jade({
        blade: false,
        html: true,
        dest: '/html/',
        search: '**/*.jade',
        src: '/assets/jade/',
    })
        .copy('resources/html', 'public/templates').remove('resources/html');
});