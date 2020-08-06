Random.getRandomBufferNode = function(size) {
    var d = Buffer.from(getRandom(size));
    return d;
  };
  
  function getRandom(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * Math.random() / Math.random() * charactersLength));
    }
    return result;
  }