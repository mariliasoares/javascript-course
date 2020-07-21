class Product {
  // title = 'DEFAULT'; //asign values with equal sign and end a line with semicolon
  // imageUrl;
  // description;
  // price;

  constructor(title, image, desc, price) {
    this.title = title;
    this.image = image;
    this.desc = desc;
    this.price = price;
  }
}

class ElementAttribute {
  constructor(attrName, attrValue) {
    this.name = attrName;
    this.value = attrValue;
  }
}

class Component {
  constructor(renderHookId, shouldRender = true) {
    this.hookId = renderHookId;
    if (shouldRender) {
      this.render();
    }
  }

  render() {}

  createRootEl(tag, cssClasses, attributes) {
    const rootElement = document.createElement(tag);
    if (cssClasses) {
      rootElement.className = cssClasses;
    }
    if (attributes && attributes.length > 0) {
      for (const attr of attributes) {
        rootElement.setAttribute(attr.name, attr.value);
      }
    }
    document.getElementById(this.hookId).append(rootElement);
    return rootElement;
  }
}

class ShoppingCart extends Component {
  items = [];

  set cartItems(value) {
    this.items = value;
    this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmout.toFixed(
      2,
    )}</h2>`;
  }

  get totalAmout() {
    const sum = this.items.reduce((prevVal, curItem) => {
      return prevVal + curItem.price;
    }, 0);
    return sum;
  }

  constructor(renderHookId) {
    super(renderHookId);
  }

  addProduct(product) {
    const updatedItems = [...this.items];
    updatedItems.push(product);
    this.cartItems = updatedItems;
  }

  orderProducts() {
    console.log('ordering..');
    console.log(this.items);
  }

  render() {
    const cartEl = this.createRootEl('section', 'cart');
    // const cartEl = document.createElement('section');
    cartEl.innerHTML = `
            <h2>Total: \$${0}</h2>
            <button>Order Now!</button>
        `;
    // cartEl.className = 'cart';
    const orderButton = cartEl.querySelector('button');
    orderButton.addEventListener('click', this.orderProducts.bind(this));
    this.totalOutput = cartEl.querySelector('h2');
    // return cartEl;
  }
}

class ProductItem extends Component {
  constructor(product, renderHookId) {
    super(renderHookId, false);
    this.product = product;
    this.render();
  }

  addToCart() {
    App.addProductToCart(this.product);
  }

  render() {
    const prodEl = this.createRootEl('li', 'product-item');
    // const prodEl = document.createElement('li');
    // prodEl.className = 'product-item';
    prodEl.innerHTML = `
            <div>
                <img src="${this.product.image}" alt="${this.product.title}">
                <div class="product-item__content">
                    <h2>${this.product.title}</h2>
                    <h3>\$${this.product.price}</h3>
                    <p>${this.product.desc}</p>
                    <button>Add to Cart</button>
                </div>
            </div>
        `;
    const addCartButton = prodEl.querySelector('button');
    addCartButton.addEventListener('click', this.addToCart.bind(this));
    // return prodEl;
  }
}

class ProductList extends Component {
  products = [];

  constructor(renderHookId) {
    super(renderHookId);
    // this.render();
    this.fetchProducts();
  }

  fetchProducts() {
    this.products = [
      new Product(
        'A Pillow',
        'https://image.jimcdn.com/app/cms/image/transf/dimension=910x10000:format=jpg/path/s3265312c472335cc/image/i9ca4c710c8a1849a/version/1567772580/ginger-cat-monoprint-printmaking-process.jpg',
        'A soft pillow',
        19,
        99,
      ),
      new Product(
        'A Pillow',
        'https://image.jimcdn.com/app/cms/image/transf/dimension=910x10000:format=jpg/path/s3265312c472335cc/image/i9ca4c710c8a1849a/version/1567772580/ginger-cat-monoprint-printmaking-process.jpg',
        'A soft pillow hehe',
        19,
        99,
      ),
    ];
    this.renderProducts();
  }

  renderProducts() {
    for (const prod of this.products) {
      new ProductItem(prod, 'prod-list');
      // productItem.render();
    }
  }

  render() {
    // const prodList = document.createElement('ul', 'product-list');
    this.createRootEl('ul', 'product-list', [
      new ElementAttribute('id', 'prod-list'),
    ]);
    if (this.products && this.products.length > 0) {
      this.renderProducts();
    }
    // prodList.id = 'prod-list';
    // prodList.className = 'product-list';
    // const productItem = new ProductItem(prod);
    // const prodEl = productItem.render();
    // prodList.append(prodEl);
    // const productItem = new ProductItem(prod);
    // const prodEl = productItem.render();
    // prodList.append(prodEl);

    // return prodList;
  }
}

class Shop {
  constructor() {
    this.render();
  }

  render() {
    // const renderHook = document.getElementById('app');

    this.cart = new ShoppingCart('app');
    // const cartEl = this.cart.render();
    // this.cart.render();
    new ProductList('app');
    // const prodListEl = productList.render();
    // productList.render();

    // renderHook.append(cartEl);
    // renderHook.append(prodListEl);
  }
}

class App {
  static cart;

  static init() {
    const shop = new Shop();
    // shop.render();
    this.cart = shop.cart;
  }

  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

App.init();
