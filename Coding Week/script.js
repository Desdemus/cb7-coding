import { usersCardGen, age18, age36, age64, emptySectionMessage } from "./utils/fn.js";
import { GET } from "./utils/data.js";

GET("/users").then((users) => {
    const firstOp = users.filter(user => user.age >= 18 && user.age <= 35)
    const secondOp = users.filter(user => user.age >= 36 && user.age <= 64)
    const thirdOp = users.filter(user => user.age >= 64 && user.age <= 82)
    if (firstOp.length > 0) {
        firstOp.forEach(user => (usersCardGen(user, '.fascia18')))

    }
    else {
        emptySectionMessage(age18)

    }


    if (secondOp.length > 0) {
        secondOp.forEach(user => (usersCardGen(user, '.fascia36')))

    }
    else {
        emptySectionMessage(age36)

    }
    if (thirdOp.length > 0) {
        thirdOp.forEach(user => (usersCardGen(user, '.fascia64')))

    }
    else {
        emptySectionMessage(age64)
    }
})
