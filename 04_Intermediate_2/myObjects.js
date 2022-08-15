let myProjects = {
    title: 'Go Camp',
    author: 'Rahul',
    appType: 'Web App',
    description: 'It is a web app to find and publish campgrounds.'
}

// console.log(myProjects);
// console.log(`Hey the project ${myProjects.title} made by ${myProjects.author} is a ${myProjects.appType} and ${myProjects.description}`);

// myProjects.title = 'Quote World';
// console.log(`Hey the project ${myProjects.title} made by ${myProjects.author} is a ${myProjects.appType} and ${myProjects.description}`);
// console.log(myProjects);

let myProjectsTwo = {
    title: 'Quote World',
    author: 'Regal',
    appType: 'Web App',
    description: 'It is a web app for random quote'
}

let changeAuthor = function (myObject) {
    return {
        formatOne: `Author of one format is: ${myObject.author}`,
        formatTwo: `Author of two format is: ${myObject.author} two`
    };

}

let format = changeAuthor(myProjects);
console.log(format.formatTwo);