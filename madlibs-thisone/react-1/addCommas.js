





function addCommas ( nums )
{
    let string = nums.toString();
    let res = [];
    for ( let i = string.length - 3; i > 0; i -= 3 )
    {
        res = string[ i ] += ',';
    }

    return res;
}

// Couldn't finish it