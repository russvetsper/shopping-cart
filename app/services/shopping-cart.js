import Ember from 'ember';

export default Ember.Service.extend({
  items: [],//{itemName:.qty}
  itemsAndQty:[],
  totalPrice: 0,
  add(item) {
    if(this.contain(item)){
      console.log(item.get('id'));
      var position=this.get('items').indexOf(item);
      var repeateProduct=this.get('itemsAndQty')[position];
      var repeateProductqty=repeateProduct.qty;
      console.log("qty"+repeateProductqty);
      // this.set('itemsAndQty[position].qty',repeateProductqty+1);
      var georgeObjFromModel = this.get("itemsAndQty").objectAt(position);
      Ember.set(georgeObjFromModel, "qty", repeateProductqty+1);
      // this.findItemByItem(item.get('id'));
      console.log("ADD One More Time");
    }else{

      this.get('items').pushObject(item);
      var tempSaveItem={itemProduct:item,qty:1};
      this.get('itemsAndQty').pushObject(tempSaveItem);
    }


    console.log(this.get('itemsAndQty'));
    var currentPrice=this.get('totalPrice');
    this.set('totalPrice',currentPrice+item.get('cost'));
    // this.set('totalPrice',2);
    // console.log(currentPrice);
    // console.log(item.get('cost'));

  },
  remove(item){
    this.get('items').removeObject(item);
    var currentPrice=this.get('totalPrice');
    this.set('totalPrice',currentPrice-item.get('cost'));
  },
  contain(item){
    return this.get('items').includes(item)
  }
  // findItemByItem(id){
  //   this.store.findRecord('product',id);
  // }
});
