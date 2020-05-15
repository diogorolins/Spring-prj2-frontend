import { Injectable } from "@angular/core";
import { StorageService } from "../storage.service";
import { Cart } from "../../models/cart";
import { ProdutoDto } from "../../models/produto.dto";

@Injectable()
export class CartService {
  
  constructor(public storage: StorageService){
  }

  createOrClearCart(): Cart{
    let cart: Cart = {items: []};
    this.storage.setCart(cart);
    return cart;
  }

  getCart(){
    let cart: Cart = this.storage.getCart();    
    
    if(cart == null){
      cart = this.createOrClearCart();
    }
    return cart;
  }

  addProduto(produto: ProdutoDto): Cart {
    let cart: Cart = this.getCart();
    
    let position = cart.items.findIndex(x => x.produto.id ==  produto.id);
    if(position == -1) {
      cart.items.push({quantidade:1, produto: produto});
    } 
    this.storage.setCart(cart);
    return cart;
  }

}