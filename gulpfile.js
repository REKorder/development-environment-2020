// Import everything important
const gulp = require('gulp');
const plumber = require("gulp-plumber");
const rename = require("gulp-rename");
const browserSync = require('browser-sync').create();
const gutil = require('gulp-util');
const sourcemaps = require('gulp-sourcemaps');

// For SASS -> CSS
const sass = require('gulp-sass');
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const sassLint = require('gulp-sass-lint');

// HTML
const htmlmin = require('gulp-htmlmin');

// JavaScript/TypeScript
const browserify = require('gulp-browserify');
const babel = require('gulp-babel');
const jshint = require('gulp-jshint');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

// Define Important Varaibles
const src = './src';
const dest = './dest';


// Just build the project
const build = gulp.series();

// Default function
exports.default = build;