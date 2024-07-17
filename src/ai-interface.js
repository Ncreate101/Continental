var __units = {}
var __teams = {}

class Place {
    constructor(x, y) {
        this.pos = {x: x, y: y};
    }
}

class Area {
    constructor(x, y, w, h) {
        this.bounds = Set()
        for (let xn = 0; xn < w; xn++) {
            for (let yn = 0; yn < h; yn++) {
                this.bounds.add(`${x + xn} ${y + yn}`)
            }
        }
    }

    has(x, y) {
        return this.bounds.has(`${x} ${y}`);
    }

    union(_area) {
        this.bounds = this.bounds.union(_area)
    }
}

class City {
    constructor(position, name) {
        this.soldiers = [];
        this.name = name;
        this.pos = position;
    }
}

class Instructor {
    constructor(team) {
        this.team = team 
    }
}

class Character {
    constructor(team, job, position) {
        this.__position = position;
        this.job = job;
        this.team = team;
    }
}

class Country {
    constructor(name, color, funds, area, allies, capital, cities) {
        this.__name = name;
        this.__allies = allies || [];
        this.__color = color;
        this.__funds = funds;
        this.__area = area;
        this.__capital = capital;
        this.__cities = cities || [];
    }

    // gets related to funds
    get fundString() {
        return `${this.funds < 0 ? "-" : ""}$${Math.abs(this.__funds)}`;
    }
    get funds() {
        return this.funds;
    }

    // gets related to allies
    get allies() {
        return this.__allies;
    }

    // gets related to area
    get area() {
        return this.__area;
    }

    // gets related to cities
    get citiesList() {
        let o = []
        this.__cities.forEach(city => {
            o.push(`${city.name} - Population ${city.soldiers.length}`)
        });
    }
}

function nameGenerator() {
    return "Bobert"
}

function makeUnit() {

}