/*function getTempCallback(location, callback) {
    callback(undefined, 78);
    callback('City Not found');
}

getTempCallback('Delhi', function(err, temp) {
    if(err) {
        console.log('Error :', err);
    } else {
        console.log('Success : ', temp);
    }
});

function getTempPromise(location) {
    return new Promise(function(resolve, reject) {
        resolve(79);
        reject('City Not found');
    });
}

getTempPromise('Delhi')
    .then(function(temp) {
        console.log('Promise Succes ', temp);
    }, function(err) {
        console.log('Promise error', err);
    });*/

//Challenge Area
function addPromise(a, b) {
    return new Promise(function(resolve, reject) {
        if(typeof a === 'number' && typeof b === 'number') {
            resolve(a+b);
        } else {
            reject('Please provide two numbers!');
        }
    });
}

addPromise(2,'njnjj')
    .then(function(sum) {
        console.log('sum is ', sum);
    }, function(err) {
        console.log(err);
    });