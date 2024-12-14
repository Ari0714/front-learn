function my_haha (){
    console.log('hahaa');
}

function my_xixi (){
    console.log('xixix');
}

//m1
module.exports = {
    my_haha,
    my_xixi
    
}

//m2, exports.[expose name] = inner class-name
// exports.my_haha2 = my_haha
// exports.my_xixi2 = my_xixi