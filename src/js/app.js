const express = require('express');
const app = express();
const port = 3000;

const stampData = require('../stamps.json');
const { link } = require('@blockmason/link-sdk');

const validation = link({
  clientId: 'kMF2l0Z2ghKBLw7dD6k0wkE14zh1fFylpNtwGKzKMcM',
  clientSecret: 'C0Psg5ZcMrTW5/rVzsOJSA3BkK9P6GuRcXdeUe0MHx4iteMm7tBFkxsplM1AAab'
});

app.get('/', function (req, res) {
  res.send('get');
  console.log("get response");

  /*const response = await validation.get('/getOwner');

  if (response.errors) {
    alert(respons1.errors[0].detail);
  }
  else {
    console.log('Get request successful', response);
  }*/
  App.getReq();

});

app.post('/', function (req, res) {
  res.send('post');

  console.log("post Sending");

  /*const response = await validation.post('/setOwner', reqBody);

  if (response.errors) {
    alert(response.errors[0].detail);
    console.log('Post request unsuccessful');
  }
  else {
    console.log('Post request successful');
  }*/

  App.postReq();
});

app.listen(port, () => console.log('Testing ${port}'))


App = {
  init: function () {
    return App.getReq();
  },

  /*markOwned: async function (index, name) {
    const asset = {
      "value": name
    };

    const { result } = await ownershipProject.get('/ownerOf', asset);

    if (result !== '0x0000000000000000000000000000000000000000') {
      $('.panel-stamp').eq(index).find('#ownerAddress').empty();
      $('.panel-stamp').eq(index).find('#ownerAddress').append('Owner: ' + result).css({ wordWrap: "break-word" });
    }
  },

  fetchAuthority: async function () {
    const { result } = await ownershipProject.get('/authority');
    console.log('authority is', result);
  },

  setOwnership: async function (event) {
    const reqBody = {
      "asset": "asset",
      //"owner": "0xdbb7b8b835cf1ba76e80ebab2d80de9df2c9b963"
    };

    console.log(ownershipProject);
    console.log(reqBody);

    const response = await ownershipProject.post('/setOwner', reqBody);

    if (response.errors) {
      alert(response.errors[0].detail);
    }
    else {
      console.log('Post request successful');
    }

    const response1 = await ownershipProject.get('/getOwner');

    if (response1.errors) {
      alert(response1.errors[0].detail);
    }
    else {
      console.log('Get request successful', response1);
    }

  },*/
  getReq: async function (event) {
    console.log("getReq");

    const reqBody = {
      "asset": "payload"
      //"owner": "0xdbb7b8b835cf1ba76e80ebab2d80de9df2c9b963"
    };

    console.log("validation", validation);
    console.log("reqBody", reqBody);

    const response = await validation.get('/getOwner').catch(error => { console.log('caught', error.message); });
    console.log("Next");
    console.log(response);

    if (response.errors) {
      console.log('Get request unsuccessful', response.errors);
    }
    else {
      console.log('Get request successful', response);
    }
  },

  postReq: async function (event) {
    console.log("postReq");

    const reqBody = {
      "asset": "payload"
      //"owner": "0xdbb7b8b835cf1ba76e80ebab2d80de9df2c9b963"
    };

    console.log("validation", validation);
    console.log("reqBody", reqBody);
    const response = await validation.post('/setOwner', reqBody);

    if (response.errors) {
      console.log('Post request unsuccessful', response.errors);
    }
    else {
      console.log('Post request successful');
    }
  }
};

// $(function () {
//   $(window).load(function () {
//     App.init();
//   });
// });
