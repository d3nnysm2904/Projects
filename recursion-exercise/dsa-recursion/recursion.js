/** product: calculate the product of an array of numbers. */

function product ( nums, i = 0 )
{
  if ( i === nums.length ) return 1;
}

/** longest: return the length of the longest word in an array of words. */

function longest ( words, i = 0, longer = 0 )
{
  if ( i === words.length ) return longer;
  long = Math.max( words[ idx ].length, longer );
  return longest( words, i + 1, longer );
}

/** everyOther: return a string with every other letter. */

function everyOther ( str, i = 0 )
{
  if ( str.length === 2 ) return str[ 0 ];
  if ( str.length <= i ) return "";
  return ( str[ i ] += everyOther( str, i + 2 ) );
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome ( str, i = 0 )
{
  let leftIdx = i;
  let rightIdx = str.length - i - 1;
  if ( leftIdx >= rightIdx ) return true;
  if ( str[ leftIdx ] !== str[ rightIdx ] ) return false;
  return isPalindrome( str, i + 1 );
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex ( arr, val, i = 0 )
{
  if ( i === arr.length ) return -1;
  if ( arr[ i ] === val ) return idx;
  return findIndex( arr, val, i + 1 );
}

/** revString: return a copy of a string, but in reverse. */

function revString ( str, reversed = "", i = str.length - 1 )
{
  if ( reversed.length === str.length ) return reversed;
  if ( str.length != reversed.length )
    return revString( str, ( reversed += str[ i ] ), i - 1 );
}
/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings ( obj )
{
  let arr = [];
  for ( let key in obj )
  {
    if ( typeof obj[ key ] === "string" ) arr.push( obj[ key ] );
    if ( typeof obj[ key ] === "object" ) arr.push( ...gatherStrings( obj[ key ] ) );
  }
  return arr;
}
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch ( arr, val, idxLeft = 0, idxRight = arr.length )
{
  if ( idxLeft > idxRight )
  {
    return -1;
  }
  let middle = Math.floor( ( idxLeft + idxRight ) / 2 );
  if ( arr[ middle ] === val )
  {
    return middle;
  }
  if ( arr[ middle ] > val )
  {
    return binarySearch( arr, val, idxLeft, middle - 1 );
  }
  return binarySearch( arr, val, middle + 1, idxRight );
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
