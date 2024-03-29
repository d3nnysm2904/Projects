const express = require( "express" );
let axios = require( "axios" );
let app = express();

app.use( express.json() );
app.use( express.urlencoded( { extended: true } ) );

app.post( "/", async ( req, res, next ) =>
{
  try
  {
    let results = req.body.developers.map( async ( d ) =>
    {
      return await axios.get( `https://api.github.com/users/${ d }` );
    } );

    let data = await axios.all( results );
    let out = data.map( ( res ) => ( { name: res.data.name, bio: res.data.bio } ) );

    return res.send( JSON.stringify( out ) );
  } catch ( e )
  {
    next( e );
  }
} );

app.listen( 3000 );