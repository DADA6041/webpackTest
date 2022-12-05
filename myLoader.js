module.exports = function myLoader(item){
    console.log('helloloader')
    return item.replace('console.log(', 'alert(');
}