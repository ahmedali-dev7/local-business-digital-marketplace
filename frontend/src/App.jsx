
import { useEffect, useState } from 'react'
import './App.css'

const categories = [
  { icon: '🥬', name: 'Groceries' },
  { icon: '🍞', name: 'Bakery' },
  { icon: '👕', name: 'Fashion' },
  { icon: '🌿', name: 'Plants' },
  { icon: '🎁', name: 'Gifts' },
  { icon: '🪑', name: 'Home & Living' },
]


const shops = [
  { name: 'Namma Fresh Market', type: 'Groceries · Local produce', location: 'Indiranagar, Bengaluru', rating: '4.8', icon: '🥑', color: 'green', tag: 'LOCAL FAVOURITE' },
  { name: 'The Daily Loaf', type: 'Bakery · Freshly baked', location: 'Koramangala, Bengaluru', rating: '4.9', icon: '🥐', color: 'peach', tag: 'TOP RATED' },
  { name: 'Earth & Essence', type: 'Plants · Handmade decor', location: 'Jayanagar, Bengaluru', rating: '4.7', icon: '🪴', color: 'sage', tag: 'MADE WITH CARE' },
  { name: 'Bengaluru Basket', type: 'Groceries · Fruits and vegetables', location: 'Malleshwaram, Bengaluru', rating: '4.6', icon: '🥦', color: 'green', tag: 'FRESH PICKS' },
  { name: 'Golden Crust Bakery', type: 'Bakery · Cakes and pastries', location: 'Rajajinagar, Bengaluru', rating: '4.5', icon: '🍰', color: 'peach', tag: 'BAKED FRESH' },
  { name: 'Thread & Needle', type: 'Fashion · Clothing', location: 'Jayanagar, Bengaluru', rating: '4.6', icon: '👕', color: 'sage', tag: 'LOCAL STYLE' },
  { name: 'Little Leaf Nursery', type: 'Plants · Garden supplies', location: 'Banashankari, Bengaluru', rating: '4.8', icon: '🌱', color: 'green', tag: 'GREEN LIVING' },
  { name: 'The Gift Nook', type: 'Gifts · Handmade gifts', location: 'HSR Layout, Bengaluru', rating: '4.7', icon: '🎁', color: 'peach', tag: 'THOUGHTFUL GIFTS' },
  { name: 'Namma Home Store', type: 'Home & Living · Decor', location: 'Basavanagudi, Bengaluru', rating: '4.4', icon: '🪑', color: 'sage', tag: 'HOME FAVOURITES' },
  { name: 'Daily Dairy Corner', type: 'Groceries · Dairy products', location: 'Whitefield, Bengaluru', rating: '4.5', icon: '🥛', color: 'green', tag: 'DAILY ESSENTIALS' },
  { name: 'Buttercup Bakes', type: 'Bakery · Cookies and bread', location: 'BTM Layout, Bengaluru', rating: '4.8', icon: '🍪', color: 'peach', tag: 'BAKED WITH LOVE' },
  { name: 'Indie Threads', type: 'Fashion · Handmade clothing', location: 'Indiranagar, Bengaluru', rating: '4.6', icon: '🧵', color: 'sage', tag: 'MADE LOCALLY' },
  { name: 'Urban Jungle Plants', type: 'Plants · Indoor plants', location: 'Marathahalli, Bengaluru', rating: '4.7', icon: '🪴', color: 'green', tag: 'PLANT PARENTS' },
  { name: 'The Paper Present', type: 'Gifts · Cards and stationery', location: 'Malleshwaram, Bengaluru', rating: '4.5', icon: '💌', color: 'peach', tag: 'LITTLE SURPRISES' },
  { name: 'Cozy Corner Furnishings', type: 'Home & Living · Home decor', location: 'Koramangala, Bengaluru', rating: '4.4', icon: '🛋️', color: 'sage', tag: 'COSY LIVING' },
  { name: 'Fresh Route Organics', type: 'Groceries · Organic produce', location: 'HSR Layout, Bengaluru', rating: '4.8', icon: '🥬', color: 'green', tag: 'GROWN WITH CARE' },
  { name: 'Oven & Oak', type: 'Bakery · Artisan bread', location: 'Whitefield, Bengaluru', rating: '4.7', icon: '🍞', color: 'peach', tag: 'ARTISAN BAKES' },
  { name: 'Everyday Denim', type: 'Fashion · Casual wear', location: 'BTM Layout, Bengaluru', rating: '4.3', icon: '👖', color: 'sage', tag: 'EVERYDAY STYLE' },
  { name: 'Rooted Garden Shop', type: 'Plants · Pots and planters', location: 'Basavanagudi, Bengaluru', rating: '4.6', icon: '🪴', color: 'green', tag: 'GROW SOMETHING' },
  { name: 'Little Joy Gifts', type: 'Gifts · Gift hampers', location: 'Rajajinagar, Bengaluru', rating: '4.5', icon: '🎀', color: 'peach', tag: 'GIVE A LITTLE JOY' },
  { name: 'Willow Home Studio', type: 'Home & Living · Handmade decor', location: 'Jayanagar, Bengaluru', rating: '4.8', icon: '🏡', color: 'sage', tag: 'MADE FOR HOME' },
  { name: 'Market Day Grocers', type: 'Groceries · Pantry essentials', location: 'Marathahalli, Bengaluru', rating: '4.4', icon: '🧺', color: 'green', tag: 'PANTRY PICKS' },
  { name: 'Sweet Slice Patisserie', type: 'Bakery · Desserts', location: 'Indiranagar, Bengaluru', rating: '4.9', icon: '🧁', color: 'peach', tag: 'SOMETHING SWEET' },
  { name: 'Cotton & Colour', type: 'Fashion · Everyday clothing', location: 'Koramangala, Bengaluru', rating: '4.5', icon: '👚', color: 'sage', tag: 'COLOUR YOUR DAY' },
  { name: 'Petal & Pot', type: 'Plants · Plants and flowers', location: 'HSR Layout, Bengaluru', rating: '4.7', icon: '🌷', color: 'green', tag: 'A TOUCH OF GREEN' },
]



const products = [
  { name: 'Fresh seasonal produce', shop: 'Namma Fresh Market', price: '₹120', unit: 'per basket', icon: '🥦' },
  { name: 'Artisan sourdough loaf', shop: 'The Daily Loaf', price: '₹180', unit: 'per loaf', icon: '🍞' },
  { name: 'Mini indoor plant', shop: 'Earth & Essence', price: '₹249', unit: 'per plant', icon: '🪴' },
  { name: 'Handcrafted gift box', shop: 'The Gift Nook', price: '₹399', unit: 'per box', icon: '🎁' },
  { name: 'Organic vegetable basket', shop: 'Bengaluru Basket', price: '₹150', unit: 'per basket', icon: '🥕' },
  { name: 'Chocolate celebration cake', shop: 'Golden Crust Bakery', price: '₹650', unit: 'per cake', icon: '🎂' },
  { name: 'Everyday cotton T-shirt', shop: 'Thread & Needle', price: '₹499', unit: 'per item', icon: '👕' },
  { name: 'Desk-size leafy plant', shop: 'Little Leaf Nursery', price: '₹199', unit: 'per plant', icon: '🌱' },
  { name: 'Decorative wooden chair', shop: 'Namma Home Store', price: '₹1,499', unit: 'per item', icon: '🪑' },
  { name: 'Fresh milk bottle', shop: 'Daily Dairy Corner', price: '₹35', unit: 'per bottle', icon: '🥛' },
  { name: 'Homemade cookie box', shop: 'Buttercup Bakes', price: '₹220', unit: 'per box', icon: '🍪' },
  { name: 'Handwoven tote bag', shop: 'Indie Threads', price: '₹349', unit: 'per bag', icon: '👜' },
  { name: 'Indoor succulent', shop: 'Urban Jungle Plants', price: '₹179', unit: 'per plant', icon: '🌵' },
  { name: 'Handmade greeting cards', shop: 'The Paper Present', price: '₹99', unit: 'per set', icon: '💌' },
  { name: 'Soft cushion cover', shop: 'Cozy Corner Furnishings', price: '₹299', unit: 'per cover', icon: '🛋️' },
  { name: 'Organic spinach bundle', shop: 'Fresh Route Organics', price: '₹45', unit: 'per bundle', icon: '🥬' },
  { name: 'Rustic farmhouse bread', shop: 'Oven & Oak', price: '₹160', unit: 'per loaf', icon: '🥖' },
  
{ name: 'Fresh butter bread', shop: 'Buttercup Bakes', price: '₹60', unit: 'per loaf', icon: '🍞' },
{ name: 'Whole wheat bread', shop: 'Oven & Oak', price: '₹90', unit: 'per loaf', icon: '🌾' },

  { name: 'Classic blue jeans', shop: 'Everyday Denim', price: '₹899', unit: 'per item', icon: '👖' },
  { name: 'Terracotta plant pot', shop: 'Rooted Garden Shop', price: '₹149', unit: 'per pot', icon: '🪴' },
  { name: 'Festive gift hamper', shop: 'Little Joy Gifts', price: '₹599', unit: 'per hamper', icon: '🎀' },
  { name: 'Handmade ceramic vase', shop: 'Willow Home Studio', price: '₹449', unit: 'per vase', icon: '🏺' },
  { name: 'Monthly pantry essentials', shop: 'Market Day Grocers', price: '₹499', unit: 'per pack', icon: '🧺' },
  { name: 'Assorted cupcake box', shop: 'Sweet Slice Patisserie', price: '₹320', unit: 'per box', icon: '🧁' },
  { name: 'Printed casual shirt', shop: 'Cotton & Colour', price: '₹699', unit: 'per item', icon: '👚' },
  { name: 'Flowering plant pot', shop: 'Petal & Pot', price: '₹279', unit: 'per plant', icon: '🌷' },
]

function App() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [showVendorForm, setShowVendorForm] = useState(false)

  const [selectedProduct, setSelectedProduct] = useState(null)
  const [selectedQuantity, setSelectedQuantity] = useState(1)
  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)
  const [selectedShop, setSelectedShop] = useState(null)
  const [shopList, setShopList] = useState(() => {
    try {
      const savedShops = localStorage.getItem('locallane-shops')
      return savedShops ? JSON.parse(savedShops) : shops
    } catch {
      return shops
    }
  })
  
  useEffect(() => {
    localStorage.setItem('locallane-shops', JSON.stringify(shopList))
  }, [shopList])


  const [vendorName, setVendorName] = useState('')
  const [vendorCategory, setVendorCategory] = useState('Groceries')
  const [vendorLocation, setVendorLocation] = useState('')
  const [vendorDescription, setVendorDescription] = useState('')
  
  const openVendorForm = () => {
    setShowVendorForm(true)
    document.getElementById('vendor-registration')?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    })
  }


  const filteredShops = shopList.filter((shop) => {
    const matchesSearch =
      `${shop.name} ${shop.type} ${shop.location}`
        .toLowerCase()
        .includes(search.toLowerCase())

    const matchesCategory =
      activeCategory === 'All' ||
      shop.type.toLowerCase().includes(activeCategory.toLowerCase())

    return matchesSearch && matchesCategory
  })
  
  

const filteredProducts = products.filter((product) => {
  const searchText = `${product.name} ${product.shop}`.toLowerCase();

  const matchesSearch = searchText.includes(search.trim().toLowerCase());

  const productShop = shopList.find(
    (shop) => shop.name.toLowerCase() === product.shop.toLowerCase()
  );

  const shopType = productShop?.type?.toLowerCase() || '';

  const categoryMap = {
    'groceries': ['groceries'],
    'bakery': ['bakery'],
    'fashion': ['fashion'],
    'plants': ['plants'],
    'gifts': ['gifts'],
    'home & living': ['home & living'],
  };

  const matchesCategory =
    activeCategory === 'All' ||
    (categoryMap[activeCategory.toLowerCase()] || []).some(
      (category) => shopType.includes(category)
    );

  return matchesSearch && matchesCategory;
});




  return (
  <div className="app">
    {selectedProduct && (
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 1000,
          background: 'rgba(0,0,0,0.55)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
        }}
        onClick={() => setSelectedProduct(null)}
      >
        <div
          style={{
            background: '#fffaf3',
            color: '#263b2b',
            borderRadius: '20px',
            padding: '32px',
            width: '100%',
            maxWidth: '440px',
            position: 'relative',
          }}
          onClick={(event) => event.stopPropagation()}
        >
          <button
            onClick={() => setSelectedProduct(null)}
            style={{ float: 'right', cursor: 'pointer' }}
          >
            ✕ Close
          </button>

          <div style={{ fontSize: '64px', marginTop: '24px' }}>
            {selectedProduct.icon}
          </div>

          <h2>{selectedProduct.name}</h2>
          <p>Sold by {selectedProduct.shop}</p>
          <h3>
            {selectedProduct.price} {selectedProduct.unit}
          </h3>
          <p>
            A lovely local find from a neighbourhood business on LocalLane.
          </p>
<div
  style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '18px',
    margin: '20px 0',
  }}
>
  <button
    onClick={() =>
      setSelectedQuantity((quantity) => Math.max(1, quantity - 1))
    }
    style={{ padding: '8px 16px', cursor: 'pointer' }}
  >
    −
  </button>

  <strong style={{ fontSize: '20px' }}>
    {selectedQuantity}
  </strong>

  <button
    onClick={() =>
      setSelectedQuantity((quantity) => quantity + 1)
    }
    style={{ padding: '8px 16px', cursor: 'pointer' }}
  >
    +
  </button>
</div>
          <button
            onClick={() => {
  setCart((currentCart) => {
    const existingItem = currentCart.find(
      (item) => item.name === selectedProduct.name
    )

    if (existingItem) {
      return currentCart.map((item) =>
        item.name === selectedProduct.name
          ? { ...item, quantity: item.quantity + selectedQuantity }
          : item
      )
    }

    return [...currentCart, { ...selectedProduct, quantity: selectedQuantity }]
  })

  setSelectedProduct(null)
}}
            style={{
              background: '#315b3d',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              padding: '14px 20px',
              width: '100%',
              cursor: 'pointer',
              marginTop: '12px',
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    )}
    {showCart && (
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 1100,
          background: 'rgba(0,0,0,0.55)',
          display: 'flex',
          justifyContent: 'flex-end',
        }}
        onClick={() => setShowCart(false)}
      >
        <div
          style={{
            background: '#fffaf3',
            color: '#263b2b',
            width: '100%',
            maxWidth: '440px',
            height: '100%',
            overflowY: 'auto',
            padding: '28px',
            boxSizing: 'border-box',
          }}
          onClick={(event) => event.stopPropagation()}
        >
          <button onClick={() => setShowCart(false)}>✕ Close</button>
          <h2>Your Shopping Cart</h2>
          {cart.length === 0 ? (
  <p>Your cart is empty. Add something you love!</p>
) : (
  cart.map((item) => (
    <div
      key={item.name}
      style={{
        padding: '16px 0',
        borderBottom: '1px solid #ddd5c8',
      }}
    >
      <div style={{ fontSize: '28px' }}>{item.icon}</div>
      <h3>{item.name}</h3>
      <p>{item.shop}</p>
      <strong>
  ₹{(
    Number(String(item.price).replace(/[^\d.]/g, '')) *
    item.quantity
  ).toLocaleString('en-IN')}
</strong>
<p>
  {item.price} each × {item.quantity}
</p>

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '12px' }}>
        <button
          onClick={() =>
            setCart((current) =>
              current
                .map((product) =>
                  product.name === item.name
                    ? { ...product, quantity: product.quantity - 1 }
                    : product
                )
                .filter((product) => product.quantity > 0)
            )
          }
        >
          −
        </button>

        <strong>{item.quantity}</strong>

        <button
          onClick={() =>
            setCart((current) =>
              current.map((product) =>
                product.name === item.name
                  ? { ...product, quantity: product.quantity + 1 }
                  : product
              )
            )
          }
        >
          +
        </button>

        <button
          onClick={() =>
            setCart((current) =>
              current.filter((product) => product.name !== item.name)
            )
          }
        >
          Remove
        </button>
      </div>
    </div>
  ))
)}
{cart.length > 0 && (
  <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '2px solid #ddd5c8' }}>
    <h3>
      Total: ₹{cart.reduce((total, item) => total + Number(String(item.price).replace(/[^\d.]/g, '')) * item.quantity, 0).toLocaleString('en-IN')}
    </h3>
    <button
  onClick={() => {
    alert('Thank you for trying LocalLane! Demo checkout completed.');
    setCart([]);
    setShowCart(false);
  }}
  style={{
    width: '100%',
    padding: '14px',
    marginTop: '12px',
    background: '#263b2b',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '16px'
  }}
>
  Proceed to Checkout
</button>
  </div>
)}
        </div>
      </div>
    )}      
      <div className="announcement">
        Discover the people behind your neighbourhood.
        <span> Shop local. Make a difference. ↗</span>
      </div>

      <header className="navbar">
        <a className="brand" href="#" aria-label="LocalLane home">
          <span className="brand-mark">L</span>
          <span>local<span className="brand-accent">lane</span></span>
        </a>

        <nav className="nav-links">
          <a href="#discover">Discover</a>
          <a href="#shops">Local shops</a>
          <a href="#products">Products</a>
        </nav>
        <button
  className="sell-link"
  onClick={() => setShowCart(true)}
>
  🛒 Cart ({cart.reduce((total, item) => total + item.quantity, 0)})
</button>

        <a
  className="sell-link join-us-link"
  href="#vendor-registration"
  onClick={(event) => {
    event.preventDefault()
    openVendorForm()
  }}
>
          Own a business? <strong style={{ color: '#ffffff', marginLeft: '6px' }}>Join us ↗</strong>
        </a>
      </header>

      <main>
        <section className="hero" id="discover">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              YOUR NEIGHBOURHOOD, REIMAGINED
            </div>

            <h1>
              Good things
              <br />
              are <em>closer</em> than
              <br />
              you think.
            </h1>

            <p className="hero-description">
              Meet the independent shops, passionate makers, and hidden gems
              that make your neighbourhood special.
            </p>

            <div className="search-box">
              <span className="search-icon">⌕</span>
              
<input
  value={search}
  onChange={(event) => setSearch(event.target.value)}
  onKeyDown={(event) => {
    if (event.key === 'Enter') {
  document.getElementById(
    search.trim() ? 'products' : 'shops'
  )?.scrollIntoView({ behavior: 'smooth' })
}
  }}
  placeholder="Search shops, products, or areas..."
  aria-label="Search local businesses"
/>

              <button
                type="button"
                onClick={() =>
  document.getElementById(
    search.trim() ? 'products' : 'shops'
  )?.scrollIntoView({ behavior: 'smooth' })
}
              >
                Explore <span>↗</span>
              </button>
            </div>

            <div className="hero-meta">
              <span>✳ Curated local businesses</span>
              <span>✳ Made for your community</span>
            </div>
          </div>

          <div className="hero-art">
            <div className="hero-circle circle-back" />
            <div className="hero-circle circle-front" />
            <div className="hero-note note-top">
              <span className="note-icon">✳</span>
              <span><strong>Small shops.</strong><br />Big heart.</span>
            </div>
            <div className="hero-illustration">
              <div className="sun" />
              <div className="storefront">
                <div className="store-awning">
                  <span /><span /><span /><span /><span />
                </div>
                <div className="store-sign">LOCAL<br />GOODS</div>
                <div className="store-window"><span>✿</span></div>
                <div className="store-door" />
                <div className="store-base" />
              </div>
              <div className="plant plant-left"><i /><i /><i /><b /></div>
              <div className="plant plant-right"><i /><i /><i /><b /></div>
              <div className="floating-star star-one">✳</div>
              <div className="floating-star star-two">✦</div>
            </div>
            <div className="hero-note note-bottom">
              <span className="rating-star">★</span>
              <span><strong>Neighbourhood</strong><br />favourites, found.</span>
            </div>
          </div>
        </section>

        <section className="category-section" aria-label="Shop by category">
          <div className="section-heading">
            <div>
              <p className="eyebrow">A LITTLE BIT OF EVERYTHING</p>
              <h2>What are you <em>looking for?</em></h2>
            </div>
            <p className="section-side-note">Find something lovely, right around the corner.</p>
          </div>

          <div className="category-list">
            <button
              className={`category-pill ${activeCategory === 'All' ? 'selected' : ''}`}
              onClick={() => setActiveCategory('All')}
            >
              <span>✳</span> Everything
            </button>
            {categories.map((category) => (
              <button
                className={`category-pill ${activeCategory === category.name ? 'selected' : ''}`}
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
              >
                <span>{category.icon}</span> {category.name}
              </button>
            ))}
          </div>
        </section>

        {!search.trim() && (
  <section className="shops-section" id="shops">
          <div className="section-heading">
            <div>
              <p className="eyebrow">GOOD PEOPLE, GREAT PLACES</p>
              <h2>Meet your local <em>favourites.</em></h2>
            </div>
            <span className="result-count">{filteredShops.length} shops found</span>
          </div>

          <div className="shop-grid">
            
{filteredShops.length > 0 && !search.trim() ? (

              filteredShops.map((shop) => (
                <article
  className="shop-card"
  key={shop.name}
 onClick={() => {
    setSelectedShop(shop)
    setSearch('')
    setActiveCategory('All')
    setTimeout(() => {
        document.getElementById('selected-shop-view')?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }, 100)
}}
  style={{ cursor: 'pointer' }}
>
                  <div className={`shop-art ${shop.color}`}>
                    <span className="shop-tag">{shop.tag}</span>
                    <span className="shop-emoji">{shop.icon}</span>
                    <span className="shop-spark">✳</span>
                  </div>
                  <div className="shop-info">
                    <div className="shop-title-row">
                      <h3>{shop.name}</h3>
                      <span className="shop-rating">★ {shop.rating}</span>
                    </div>
                    <p>{shop.type}</p>
                    <div className="shop-location">⌖ {shop.location}</div>
                    <a href="#products" className="shop-visit">
                      Explore shop <span>↗</span>
                    </a>
                  </div>
                </article>
              ))
            ) : (
              <div className="empty-state">
                <span>⌕</span>
                <h3>No shops found just yet</h3>
                <p>Try another search or choose a different category.</p>
                <button
                  onClick={() => {
                    setSearch('')
                    setActiveCategory('All')
                  }}
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </section>
        )}
        
{selectedShop && (
  <section className="products-section" id="selected-shop-view">
    <div className="section-heading">
      <div>
        <p className="eyebrow">LOCAL SHOP</p>
        <h2>{selectedShop.name}</h2>
        <p>{selectedShop.type} · {selectedShop.location}</p>
      </div>
      <button
        type="button"
        onClick={() => {
  setSelectedShop(null)
  setTimeout(() => {
    document.getElementById('shops')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }, 100)
}}
      >
        ← Back to all shops
      </button>
    </div>

    <div className="product-grid">
      {products.filter((product) => product.shop === selectedShop.name).length > 0 ? (
        products
          .filter((product) => product.shop === selectedShop.name)
          .map((product) => (
            <article
              className="product-card"
              key={product.name}
              onClick={() => setSelectedProduct(product)}
              style={{ cursor: 'pointer' }}
            >
              <div className="product-art">
                <span>{product.icon}</span>
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.shop}</p>
                <div className="product-price">
                  <strong>{product.price}</strong>
                  <span>{product.unit}</span>
                </div>
              </div>
            </article>
          ))
      ) : (
        <p>No products listed for this shop yet.</p>
      )}
    </div>
  </section>
)}

        {!selectedShop && (!search.trim() || filteredProducts.length > 0) && (
  <section className="products-section" id="products">
          <div className="section-heading">
            <div>
              <p className="eyebrow">THINGS MADE WITH LOVE</p>
              <h2>Little finds, <em>big joy.</em></h2>
            </div>
            <span className="section-side-note">A peek at what's on offer nearby.</span>
          </div>

          <div className="product-grid">
            {filteredProducts.map((product) => (
              <article
  className="product-card"
  key={product.name}
  onClick={() => setSelectedProduct(product)}
  style={{ cursor: 'pointer' }}
>
                <div className="product-art">
                  <span>{product.icon}</span>
                  <span className="product-heart">♡</span>
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p>{product.shop}</p>
                  <div className="product-price">
                    <strong>{product.price}</strong>
                    <span>{product.unit}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
        )}
        
          {showVendorForm && (
          <section className="vendor-form-section" id="vendor-registration">
            <div className="vendor-form-card">
              <p className="eyebrow">JOIN THE LOCAL COMMUNITY</p>
              <h2>Tell us about your <em>business.</em></h2>
              <p className="form-intro">
                Add your shop details to the LocalLane demo marketplace.
              </p>

              <form
                onSubmit={(event) => {
                  event.preventDefault()

                  const newShop = {
                    name: vendorName,
                    type: `${vendorCategory} · Local business`,
                    location: vendorLocation,
                    rating: 'New',
                    icon: '🏪',
                    color: 'green',
                    tag: 'NEW LISTING',
          }

                  setShopList((current) => [...current, newShop])
                  setVendorName('')
                  setVendorLocation('')
                  setVendorDescription('')
                  setVendorCategory('Groceries')
                  setShowVendorForm(false)
                  setActiveCategory('All')
                  setSearch('')
                  document.getElementById('shops')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                <label>
                  Business name
                  <input
                    required
                    value={vendorName}
                    onChange={(event) => setVendorName(event.target.value)}
                    placeholder="e.g. Namma Corner Store"
                  />
                </label>

                <label>
                  Business category
                  <select
                    value={vendorCategory}
                    onChange={(event) => setVendorCategory(event.target.value)}
                  >
                    <option>Groceries</option>
                    <option>Bakery</option>
                    <option>Fashion</option>
                    <option>Plants</option>
                    <option>Gifts</option>
                    <option>Home & Living</option>
                  </select>
                </label>

                <label>
                  Location
                  <input
                    required
                    value={vendorLocation}
                    onChange={(event) => setVendorLocation(event.target.value)}
                    placeholder="e.g. Jayanagar, Bengaluru"
                  />
                </label>

                <label>
                  Business description
                  <textarea
                    value={vendorDescription}
                    onChange={(event) => setVendorDescription(event.target.value)}
                    placeholder="Tell customers what makes your business special"
                    rows="3"
                  />
                </label>

                <div className="vendor-form-actions">
                  <button type="submit" className="vendor-submit">
                    Add demo listing ↗
                  </button>
                  <button
                    type="button"
                    className="vendor-cancel"
                    onClick={() => setShowVendorForm(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
              <p className="form-disclaimer">
                Demo only: this form currently adds a listing in this browser session.
              </p>
            </div>
          </section>
        )}


        <section className="join-banner">
          <div className="join-symbol">✳</div>
          <div>
            <p className="eyebrow">THIS COMMUNITY HAS ROOM FOR YOU</p>
            <h2>Your business belongs <em>here.</em></h2>
            <p>Get discovered by people who want to support businesses like yours.</p>
          </div>
          
<a
  href="#vendor-registration"
  onClick={(event) => {
    event.preventDefault()
    openVendorForm()
  }}
>
  List your business <span>↗</span>
</a>

        </section>
      </main>

      <footer className="footer">
        <a className="brand" href="#discover">
          <span className="brand-mark">L</span>
          <span>local<span className="brand-accent">lane</span></span>
        </a>
        <p>Made for neighbourhoods. Built for local dreams.</p>
        <span>© 2026 LocalLane · College project demo</span>
      </footer>
    </div>
  )
}

export default App
