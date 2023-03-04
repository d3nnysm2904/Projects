# Broken App Issues

## Issue  1:

-Had to install dependencies
```sh
npm i -y
npm i express 
npm i axios
```

## Issue 2:
-Changed :
```sh
var app = express()

to

let app = express()
```

## Issue 3:
-Missing :

```sh
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
'''


## Issue 4:

-Missing async keyword :
```sh
app.post( "/", async ( req, res, next ) =>{
    ...
}
```

## Issue 5:
-Result variable was returning unfinished promises so i added 'data'
```sh
let data = await axios.all(results);
```
