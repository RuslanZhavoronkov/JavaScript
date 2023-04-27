function past(h, m, s){
    //#Happy Coding! ^_^
    var hr = h;
    var mnt = m;
    var sk = s;
    var msk = (hr * 3600000) + (mnt * 60000) + (sk * 1000);
    
    return msk;
    
  }