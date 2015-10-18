/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    name: {
      type: 'string'
    },
    email : {
      type: 'string',
      unique: true
    },
    password : {
      type: 'string',
      required: true
    },
    cardType : {
      type: 'string'
    },
    cardNumber: {
      type: 'string'
    },
    cardExpiration : {
      type: 'string'
    },
    token: {
      type: 'string'
    }
  }
};

