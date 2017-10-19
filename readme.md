# UDACITY Website Optimization project

---

## Objective one:
Optimize the given portfolio site so that each page will get 90 scores or higher on Page Speed Insight. 

## Objective two:
Optimize main.js to get 60fps animation on pizza.html

You can view the live project [Here](http://165.227.76.120/udacity/)


## Optimizations made on index.html


* Adding media attribute to print.css
* (Optional)Inline critical style
* Using Webfont loader to load the font asynchronously 
* load style.css after the page is rendered. 
* Resize pizzaria.jpg using photoshop
* minify HTML,CSS, image, and js using gulp

## Optimizations made on main.js


* Minimize the number of moving pizzas to 30
* Moving scrollTop outside of the for loop in Updatepostions()
* Using transform translateX to update the pizzas' positions

## Gulp

* using gulp-HTML-minifier to minify all my HTML files
* using gulp-CSS to minify all my CSS files
* using gulp-uglify to minify all my js files
* using gulp-imagemin to strip all the meta data from image files
* Creating a task called watch that watches all the files in my project.
