let myTodos = {
    day: 'Monday',
    meetings: 0,
    meetDone: 0,

    addMeeting: function (num) {
        this.meetings = this.meetings + num;
    },

    summary: function () {
        return `You have ${this.meetings} mettings today`;
    }
}


myTodos.addMeeting(5);
console.log(myTodos.summary());

// let myTodosTwo = {
//     day: 'Tuesday',
//     meetings: 12,
//     meetDone: 9,

//     addMeeting: function () {
//         console.log(this);
//     }
// }


// myTodosTwo.addMeeting();