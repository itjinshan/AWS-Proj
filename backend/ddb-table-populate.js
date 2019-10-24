// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Load credentials and set Region from JSON file
AWS.config.loadFromPath('./config.json');

// Create DynamoDB service object
var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

var myTable = 'authUsers';

// Add the four results for spades
var params = {
  TableName: myTable,
  Item: {'slotPosition' : {N: '0'}, 'imageFile' : {S: 'spad_a.png'}
  }
};
post();

var params = {
  TableName: myTable,
  Item: {'slotPosition' : {N: '1'}, 'imageFile' : {S: 'spad_k.png'}
  }
};
post();

var params = {
  TableName: myTable,
  Item: {'slotPosition' : {N: '2'}, 'imageFile' : {S: 'spad_q.png'}
  }
};
post();

var params = {
  TableName: myTable,
  Item: {'slotPosition' : {N: '3'}, 'imageFile' : {S: 'spad_j.png'}
  }
};
post();

// Add the four results for hearts


// Add the four results for diamonds


// Add the four results for clubs
var params = {
  TableName: myTable,
  Item: {'slotPosition' : {N: '12'}, 'imageFile' : {S: 'club_a.png'}
  }
};
post();

var params = {
  TableName: myTable,
  Item: {'slotPosition' : {N: '13'}, 'imageFile' : {S: 'club_k.png'}
  }
};
post();

var params = {
  TableName: myTable,
  Item: {'slotPosition' : {N: '14'}, 'imageFile' : {S: 'club_q.png'}
  }
};
post();

var params = {
  TableName: myTable,
  Item: {'slotPosition' : {N: '15'}, 'imageFile' : {S: 'club_j.png'}
  }
};
post();


function post () {
  ddb.putItem(params, function(err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data);
    }
  });
}