/* JSON-------------------------------------------------------
? The keys of JSON object should be with double quotes
* JSON to object -> JSON.parse();
* Object to JSON -> JSON.stringify();
------------------------------------------------------------*/

//JSON.parse()
var text = '{ "name":"Rahul", "age":"21", "city":"Malda"}';
var obj = JSON.parse(text, function (key, value) {
  if (key == "city") {
    console.log(value.toUpperCase());
  } else {
    console.log(value);
  }
}); 

const usersText1 = `{
    "users":[
      {
        "firstName":"Asabeneh",
        "lastName":"Yetayeh",
        "age":250,
        "email":"asab@asb.com"
      },
      {
        "firstName":"Alex",
        "lastName":"James",
        "age":25,
        "email":"alex@alex.com"
      },
      {
      "firstName":"Lidiya",
      "lastName":"Tekle",
      "age":28,
      "email":"lidiya@lidiya.com"
      }
    ]
    }`
    
    const usersObj1 = JSON.parse(usersText1, undefined, 4)
    console.log(usersObj1);


const usersText2 = `{
        "users":[
          {
            "firstName":"Asabeneh",
            "lastName":"Yetayeh",
            "age":250,
            "email":"asab@asb.com"
          },
          {
            "firstName":"Alex",
            "lastName":"James",
            "age":25,
            "email":"alex@alex.com"
          },
          {
          "firstName":"Lidiya",
          "lastName":"Tekle",
          "age":28,
          "email":"lidiya@lidiya.com"
          }
        ]
        }`
        
        const usersObj2 = JSON.parse(usersText2, (key, value) => {
          let newValue = typeof value == 'string' && key != 'email' ? value.toUpperCase() : value
          return newValue
        })
        console.log(usersObj2)

//JSON.stringify()
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'Redux',
        'MongoDB',
        'Express',
        'React',
        'Node'
      ],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'MongoDB',
        'Express',
        'React',
        'Node'
      ],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }
  
  const txt = JSON.stringify(users, undefined, 4);
  console.log(txt);

var obj1 = { name: "John", today: new Date(), city: "New York" };
    var myJSON = JSON.stringify(obj1);
    console.log(myJSON);

var obj2 = { "name":"John", "age":"39", "city":"New York"};
    var text = JSON.stringify(obj2, function (key, value) {
      if (key == "city") {
        return value.toUpperCase();
      } else {
        return value;
      }
    });
    
var obj3 = { "name":"John", "age":"39", "city":"New York"};
var text2 = JSON.stringify(obj3, null,10);
    console.log(text2);