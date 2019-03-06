const menu = {
    _courses: {
        _appetizers: [],
        _mains: [],
        _desserts: [],

        get appetizers() {
            return this._appetizers;
        },
        set appetizers(appetizersInput) {
            return appetizers.push(appetizersInput);
        },
        get mains() {
            return this._mains;
        },
        set mains(mainsInput) {
            return mains.push(mainsInput);
        },
        get desserts() {
            return this._desserts;
        },
        set desserts(dessertsInput) {
            return desserts.push(dessertsInput);
        }
    },
    get courses() {
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts
        }
    },
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice
        }
        this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },
    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        const totalPrice = (appetizer.price + main.price + dessert.price);
        return `Your meal is ${appetizer.name} + ${main.name} + ${dessert.name} and your total price is ${totalPrice}.`
    }
}



menu.addDishToCourse('appetizers', 'Bruchetta', 7.99);
menu.addDishToCourse('appetizers', 'french fries', 6.99);
menu.addDishToCourse('appetizers', 'Garden Salad', 5.99);
menu.addDishToCourse('mains', 'Pesto Pasta', 18.99);
menu.addDishToCourse('mains', 'Chickpea Burger', 16.99);
menu.addDishToCourse('mains', 'Shashuksha', 19.99);
menu.addDishToCourse('desserts', 'Tirimisu', 7.99);
menu.addDishToCourse('desserts', 'Mud Cake', 5.99);
menu.addDishToCourse('desserts', 'Souffle', 8.99);

const meal = menu.generateRandomMeal();

console.log(meal);