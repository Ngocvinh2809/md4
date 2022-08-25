export interface Product {
    id?:number;
    name:string;
    price:number;
}
/*
  app
    modules
      product
        components: list.component, add.component, edit.component, delete.component
        templates: list.html,add.html,edit.html,delete.html
        product-routing
          product/list
          product/add
          product/edit
          product/delete
          -> forChild
      user
        components: list, add, edit, delete
        templates: list,add,edit,delete
        user-routing
      order
        components: list, add, edit, delete
        templates: list,add,edit,delete
        order-routing
    app.module -> app.component
    app-routing.module
      product => loadModule(product)
      user    => loadModule(user)
      order   => loadModule(order)
      -> forRoot
*/ 
