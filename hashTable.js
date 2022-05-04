//Set, Get, Remove, Hash
function HashTable (){
    this.size = 0;
    this.table = new Array(127);
}

HashTable.prototype.hash = function (key) {
    let hash = 0;
    for(let i = 0;i < key.length;i++){
        hash+=key.charCodeAt(i);
    }
    return hash % this.table.length;
};

HashTable.prototype.set = function(key,val){
    let hash = this.hash(key);
    this.table[hash] = [key,val];
    this.size++;
}
HashTable.prototype.get = function (key) {
    let hash = this.hash(key);
    return this.table[hash];
};
HashTable.prototype.remove = function (key) {
    const hash = this.hash(key)
    if(this.table[hash] && this.table.size !== 0){
        this.table[hash] = [];
        this.size--;
    }else {
        return false;
    }
};
const HT = new HashTable();
HT.set('weather','18deg')
HT.set("weathe2r", "18deg");
HT.remove("weather", "18deg");
HT.get("weather", "18deg");
console.log(HT.get("weather"));
console.log(HT.get("weathe2r"));
