function chain(x, fs) {
    return fs.reduce( function(x,c) {return c(x) }, x);
    }