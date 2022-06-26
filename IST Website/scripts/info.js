let details = [
    {"username": "admin",
     "password": "123"
    },
    {
        "username": "bruce",
        "password": "banner"
    },
    {
        "username": "tony",
        "password": "stark"
    }
]

let flight_details = [
    {}
]

login = false;

let newObject = window.localStorage.getItem("data");

details = JSON.parse(newObject)


console.log(details)

