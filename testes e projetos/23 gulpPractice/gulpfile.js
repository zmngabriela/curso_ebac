const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');

function compilaSass() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'));
}

function compressaImagens() {
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'));
}

// as imagens nao ta sendo possivel minificar. elas passam pra pasta correta, porem o tamanho fica até maior que o original.
// tentei varias soluçoes e nao achei a causa, vi que pode ser por conta do navegador/OS. ja desativei todas as minhas extenções
// quando faço gulp no terminal:
    /*[17:36:07] Using gulpfile C:\cursoEbac\testes e projetos\23 gulpPractice\gulpfile.js
    [17:36:07] Starting 'default'...
    [17:36:07] Starting 'compilaSass'...
    [17:36:07] Starting 'compressaImagens'...
    [17:36:07] Starting 'compressaJs'...
    [17:36:09] Finished 'compilaSass' after 1.62 s
    [17:36:09] Finished 'compressaJs' after 1.63 s
    [17:36:09] gulp-imagemin: Minified 0 images
    [17:36:09] Finished 'compressaImagens' after 1.83 s
    [17:36:09] Finished 'default' after 1.84 s
    PS C:\cursoEbac\testes e projetos\23 gulpPractice>*/ 

function compressaJs() {
    return gulp.src('./source/scripts/*.js')
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/scripts'));
}

exports.watch = function() {
    gulp.watch('./source/styles/*.scss', { ignoreInitial: false}, gulp.series(compilaSass));
    gulp.watch('./source/scripts/*.js', { ignoreInitial: false}, gulp.series(compressaJs));
};

exports.default = gulp.parallel(compilaSass, compressaImagens, compressaJs);