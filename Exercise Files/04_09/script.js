/*
var course = new Object();
// course.title = "JavaScript Essential Training";
// course.instructor = "Morten Rand-Hendriksen";
// course.level = 1;
// course.published = true;
// course.views = 0;

// using short hand
var course = {title: "JavaScript Essential Training",
    instructor: "Morten Rand-Hendriksen",
    level: 1,
    published: true,
    views: 0,

    updateViews: function() {
        return ++this.views;
    }
}

// console.log(course);
// console.log(course.title);
// console.log(course.instructor);
// console.log(course.views);


console.log(course.views);
course.updateViews();
console.log(course.views);
*/


// object-constructor
function Course(title, instructor, level, published, views) {
    this.title = title;
    this.instructor = instructor;
    this.level = level;
    this.published = published;
    this.views = views;

    this.updateViews = function() {
        return ++views;
    }
}

console.log(Course);

// var course01 = new Course("JavaScript Essential Training", "Morten Rand-Hendriksen", 1, true, 0);
// console.log(course01);

// var course02 = new Course("JavaScript for Beginners", "Pratyush Raj", 1, true, 11111);
// console.log(course02);

var courses = [
    new Course("JavaScript Essential Training", "Morten Rand-Hendriksen", 1, true, 0),
    new Course("JavaScript for Beginners", "Pratyush Raj", 1, true, 11111)
];

console.log(courses);
console.log(courses[1].updateViews());