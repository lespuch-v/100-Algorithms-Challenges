function booWho(bool) { 
    return bool === true || bool === false
}

  
  booWho(null); // should return false.
  booWho(true); // should return true.
  booWho(false); // should return true.
  booWho(0); // should return false.
  booWho(1) // should return false.