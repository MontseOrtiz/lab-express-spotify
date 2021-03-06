var SpotifyWebApi = require('spotify-web-api-node');
const express = require('express');
const app = express();
const hbs = require('hbs');

app.use(express.static('public'))

app.set('views', __dirname + '/views')
app.set('view engine', 'hbs')

//conectar routes.js con app, que usare este archivo para todas las rutas
const spotifyRoutes = require('./routes/routes')
app.use('/', spotifyRoutes)

// Remember to paste your credentials here
var clientId = '3197ad10c1284cd1bcf921cf280c12ee',
    clientSecret = 'febf08b7702d400f86df39a54b5dbd41';

var spotifyApi = new SpotifyWebApi({
  clientId : clientId,
  clientSecret : clientSecret
});

// Retrieve an access token.
spotifyApi.clientCredentialsGrant()
  .then(function(data) {
    spotifyApi.setAccessToken(data.body['access_token']);
  }, function(err) {
    console.log('Something went wrong when retrieving an access token', err);
});

//comprobar que funcione el puerto
// app.get('/',(req,res)=>{
//     res.send('Ironhack Spotify')
// })

app.listen(3000, () =>{
    console.log('Conectando')
})