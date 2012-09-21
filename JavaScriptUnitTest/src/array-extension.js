Array.prototype.removeAt=function(index) {
   this.splice(index,1);
};
Array.prototype.clear= function() {
    this.splice(0,this.length);
};