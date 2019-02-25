import React, { Component } from 'react';
import ProductItem from './ProductItem';
import AddProduct from './AddProduct';

const products = [
    {
        name: 'ipad',
        price: 200
    },
    {
        name:  'iphone',
        price: 650
    }
];

localStorage.setItem('products', JSON.stringify(products));

export class Product extends Component {
    constructor(props){
        super(props);

        this.state = {
            products: JSON.parse(localStorage.getItem('products'))
        };

        this.onDelete = this.onDelete.bind(this);
        this.onAdd = this.onAdd.bind(this);
        this.onEditSubmit = this.onEditSubmit.bind(this);
    }

    componentWillMount() {
       const products = this.getProducts(); 

       this.setState({ products });
    }

    getProducts() {
       return this.state.products;

        // console.log(products)
    }

    onDelete(name) {
        const products = this.getProducts();

        const filteredProducts = products.filter(product => {
            return product.name !== name;
        });
        //console.log(filteredProducts)
        this.setState({ products: filteredProducts });
    }

    onAdd(name, price){
        //console.log(name, price);
        const products = this.getProducts();

        products.push({
            name,
            price
        });

        this.setState({ products });
    }

    onEditSubmit(name, price, originalName){
        //console.log(name, price)
        let products = this.getProducts();

        products = products.map(product => {
            if(product.name === originalName) {
                product.name = name;
                product.price = price;
            }

            return product;
        });

        this.setState({ products });
    }

  render() {
    return (
      <div>
          <h1>Products Manager</h1>

          <AddProduct 
            onAdd={this.onAdd}
          />
        {
            this.state.products.map(product => {
                return(
                //    <div key={product.name}>
                //     <span>{product.name}</span>
                //     {'|'}
                //     <span>{ product.price }</span>
                //     {'|'}
                //     <button >Delete</button>
                //    </div> 

                <ProductItem  
                    key={product.name} 
                    {...product} 
                    onDelete={this.onDelete}
                    onEditSubmit={this.onEditSubmit}
                />
                );
            })
        }
      </div>
    )
  }
}

export default Product
