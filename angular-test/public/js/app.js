// Client-Side Code

angular.module('TestApp', []); // Sets up new module

angular.module('TestApp').controller('MainController', ctrlFunc);

function ctrlFunc(){
    this.message = 'MEAN Stack Test';
    this.people = clientPeople;

}
