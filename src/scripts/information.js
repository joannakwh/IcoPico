
    let information = ['shinyboi', 'shinyboi', 'shinyboi'];
    var runningScenes = [];
    var newTask = 1;
    
    let currentDate = new Date('2019-05-15T13:41:00'); //last login sample data
    var player = {
        'happiness' :[20, 60, 70],
        
        'activePet' : 0,
        'food':[
            {'foodType': 'icecream' , 'amount' : 2}, 
            {'foodType' : 'moni', 'amount' : 1}
        ],


        'money' : 300,
        'items' : [],
        // 'pet1' : {
        //     'happiness' : 20
        // },
        // 'pet2' : {
        //     'happiness' : 60
        // },
        // 'pet3' : {
        //     'happiness' : 70
        // }
        'lastlogin' : currentDate
    };
var playerPets = {'pet' : [
    {'currentHappiness' : 20,
    'currentHunger' : 40},
    {'currentHappiness' : 60,
    'currentHunger' : 40},
    {'currentHappiness' : 70,
    'currentHunger' : 40}
] 
}
    var pets = {"pet" : [
        {"petName": "shinyboi", "cost" : 100},
        {"petName": "mony", "cost" : 200}
    ]};
    let foodTypes = {'food' : [
        {'type' : 'icecream', 'cost' : 20},
        {'type' : 'moni', 'cost' : 10}
    ]};
    
var updateHappiness = 0;

// console.log('current date '+ currentDate);
// var timeNow = new Date('2019-05-14T18:21:00');
// console.log('time now ' + timeNow);
// console.log((timeNow.getTime() - currentDate.getTime())/3600000);
    