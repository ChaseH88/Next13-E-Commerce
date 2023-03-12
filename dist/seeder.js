'use strict';

var faker = require('@faker-js/faker');

var userFaker = function (number) {
    return Array.from({ length: number }, function () { return ({
        id: faker.faker.database.mongodbObjectId(),
        email: faker.faker.internet.email(),
        password: faker.faker.internet.password(),
        role: faker.faker.helpers.arrayElement(["customer", "manager", "admin"]),
    }); });
};

console.log("Seeding users...");
var users = userFaker(10);
console.log(users);
