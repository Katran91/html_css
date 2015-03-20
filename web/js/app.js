/**
 * Created by astratii on 12/26/2014.
 */

var app =  angular.module('gemStore',[]);

app.controller('StoreController', function(){
    this.products = gems;
});

var gems = [{
    name: 'Dodecahedron',
    price: 2.95,
    description: '...',
    canPurchase: false,
    soldOut:false
    },
    {
        name: 'Azurite',
        price: 5.95,
        description: '...',
        canPurchase: false,
        soldOut:false
    }];