var AuctionSocket = function(user_id, auction_id, form){
  this.user_id = user_id;
  this.auction_id = auction_id;
  this.form = form;

  this.socket = new WebSocket();
}

AuctionSocket.sendBid = function(value){
  this.value = value;
  var template = "bid {{user_id}} {{auction_id}} {{value}}";
  this.socket.send(Mustache.render(template, {
    user_id: this.user_id,
    auction_id: this.auction_id,
    value: value
  }));
}