import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [page, setPage] = useState('home')
  const [cart, setCart] = useState([])

  useEffect(() => {
    const storedCart = localStorage.getItem('mugArtCart')
    if (storedCart) {
      setCart(JSON.parse(storedCart))
    }
  }, [])

  const addItemToCart = (name, price) => {
    let updatedCart = [...cart]
    let existingItem = updatedCart.find(item => item.name === name)
    if (existingItem) {
      existingItem.qty += 1
    } else {
      updatedCart.push({ name: name, price: price, qty: 1 })
    }
    setCart(updatedCart)
    localStorage.setItem('mugArtCart', JSON.stringify(updatedCart))
  }

  const clearCart = () => {
    setCart([])
    localStorage.removeItem('mugArtCart')
  }

  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0)
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0)

  
const products = [
    { id: 1, name: 'Lavender Mist', price: 15.00, img: '/mug-art-project/mug1.jpeg', desc: 'A soothing lavender ceramic mug, perfect for your morning tea.' },
    { id: 2, name: 'Matcha Mood', price: 18.50, img: '/mug-art-project/mug2.jpeg', desc: 'Artistic floral patterns designed for elegance and style.' },
    { id: 3, name: 'Violet Swirl', price: 12.99, img: '/mug-art-project/mug3.jpeg', desc: 'Unique hand-painted swirls that make every sip special.' },
    { id: 4, name: 'Morning Pink', price: 11.00, img: '/mug-art-project/mug4.jpeg', desc: 'A classic pink mug to start your day with a smile.' },
    { id: 5, name: 'Dreamy Grape', price: 16.00, img: '/mug-art-project/mug5.jpeg', desc: 'Deep grape color ceramic for those who love bold aesthetics.' },
    { id: 6, name: 'Soft Blossom', price: 13.50, img: '/mug-art-project/mug6.jpeg', desc: 'Delicate pink shades inspired by spring blossoms.' },
    { id: 7, name: 'Orchid Sky', price: 14.00, img: '/mug-art-project/mug7.jpeg', desc: 'Bright orchid art that brings energy to your desk.' },
    { id: 8, name: 'Pastel Charm', price: 10.50, img: '/mug-art-project/mug8.jpeg', desc: 'Chic pastel mug with a minimalist and modern touch.' },
    { id: 9, name: 'Magenta Sunset', price: 19.00, img: '/mug-art-project/mug9.jpeg', desc: 'Rich magenta tones that capture the beauty of a sunset.' },
    { id: 10, name: 'Neon Purple', price: 13.00, img: '/mug-art-project/mug10.jpeg', desc: 'Modern neon purple design for a vibrant coffee break.' },
    { id: 11, name: 'Pink Glow', price: 14.99, img: '/mug-art-project/mug11.jpeg', desc: 'Soft pink artwork that glows with elegance.' }
  ]
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light sticky-top shadow-sm">
        <div className="container">
          <span className="navbar-brand custom-logo" style={{ cursor: 'pointer' }} onClick={() => setPage('home')}>
            <span className="text-purple">MUG</span><span className="text-pink">ART</span>
          </span>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><span className="nav-link" onClick={() => setPage('home')}>Home</span></li>
              <li className="nav-item"><span className="nav-link" onClick={() => setPage('collections')}>Collections</span></li>
            </ul>
          </div>
          {page === 'collections' && (
            <div className="ms-auto d-flex align-items-center">
              <a href="#calculator-section" className="nav-link text-decoration-none me-3 position-relative">
                🛒 Shopping Cart 
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{totalQty}</span>
              </a>
              <span className="nav-link text-decoration-none" onClick={() => setPage('home')}>Back Home</span>
            </div>
          )}
        </div>
      </nav>

      {page === 'home' && (
        <>
          <header className="hero-bg d-flex align-items-center justify-content-center text-center text-white">
            <div className="container">
              <h1 className="display-1 fw-bold mb-4">MUG ART</h1>
              <p className="lead fs-3 mb-5">Handcrafted Mugs with Love and Art.</p>
              <span onClick={() => setPage('collections')} className="btn btn-pink btn-lg shadow-lg px-5">Explore Collections</span>
            </div>
          </header>

          <section className="features-section">
            <div className="container text-center">
              <div className="row g-4">
                <div className="col-md-4"><div className="feature-box shadow-sm"><h3>Unique Designs</h3><p>Every mug tells a different story.</p></div></div>
                <div className="col-md-4"><div className="feature-box shadow-sm"><h3>Premium Quality</h3><p>Durable and artistic ceramic.</p></div></div>
                <div className="col-md-4"><div className="feature-box shadow-sm"><h3>Fast Shipping</h3><p>Delivered to your door safely.</p></div></div>
              </div>
            </div>
          </section>

          <section className="contact-section" id="contact">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-7">
                  <div className="contact-form-container shadow-sm text-center">
                    <h2 className="text-purple fw-bold mb-4">Get In Touch</h2>
                    <form onSubmit={(e) => e.preventDefault()}>
                      <div className="row">
                        <div className="col-md-6"><input type="text" className="form-control mb-3 rounded-pill p-3" placeholder="First Name" /></div>
                        <div className="col-md-6"><input type="text" className="form-control mb-3 rounded-pill p-3" placeholder="Last Name" /></div>
                      </div>
                      <input type="email" className="form-control mb-3 rounded-pill p-3" placeholder="Email Address" />
                      <textarea className="form-control mb-4 rounded-4 p-3" rows="4" placeholder="How can we help?"></textarea>
                      <button type="submit" className="btn btn-pink w-100 py-3">Send Message</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {page === 'collections' && (
        <>
          <div className="container my-5 py-4 text-center">
            <h2 className="display-4 fw-bold text-purple">Our Masterpieces</h2>
            <p className="text-muted">Select your favorite mugs to calculate total cost</p>
          </div>

          <main className="container mb-5">
            <div className="row row-cols-1 row-cols-md-3 g-5">
              {products.map((mug) => (
                <div className="col" key={mug.id}>
                  <div className="card h-100 product-card shadow-sm" data-bs-toggle="modal" data-bs-target={`#m${mug.id}`}>
                    <img src={mug.img} className="card-img-top" alt={mug.name} />
                    <div className="card-body text-center">
                      <h5 className="fw-bold">{mug.name}</h5>
                      <p className="text-muted">${mug.price.toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>

          <section className="calculation-section py-5" id="calculator-section">
            <div className="container">
              <div className="row g-5">
                <div className="col-md-6">
                  <div className="calc-box shadow-sm p-4 h-100">
                    <h3 className="text-purple fw-bold mb-4">Items Total Cost</h3>
                    <div>
                      {cart.slice(0, 3).map((item, index) => (
                        <div className="mb-3" key={index}>
                          <label className="form-label fw-bold">Mug {index + 1} Price ($)</label>
                          <input type="text" className="form-control" readonly value={(item.price * item.qty).toFixed(2)} />
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-2 border-top">
                      <label className="form-label fw-bold text-pink fs-5">Total Order Cost ($)</label>
                      <input type="text" className="form-control form-control-lg bg-light fw-bold text-center" readonly value={totalPrice.toFixed(2)} />
                    </div>
                    <button onClick={clearCart} className="btn btn-outline-secondary btn-sm w-100 mt-3">Reset All</button>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="calc-box shadow-sm p-4 h-100">
                    <h3 className="text-purple fw-bold mb-4">Product Order List</h3>
                    <div className="table-responsive">
                      <table className="table table-bordered bg-white text-center">
                        <thead className="table-light">
                          <tr>
                            <th>Product Name</th>
                            <th>Quantity</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cart.map((item, index) => (
                            <tr key={index}>
                              <td>{item.name}</td>
                              <td>{item.qty}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="mt-3 px-2">
                      <span className="fw-bold">Total Quantity Count:</span>
                      <span className="fw-bold text-purple ms-2">{totalQty}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {products.map((mug) => (
            <div className="modal fade" id={`m${mug.id}`} tabIndex="-1" key={mug.id}>
              <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                  <div className="modal-body p-5">
                    <div className="row align-items-center">
                      <div className="col-md-6">
                        <img src={mug.img} className="img-fluid rounded shadow" alt={mug.name} />
                      </div>
                      <div className="col-md-6">
                        <h2 className="text-purple fw-bold">{mug.name}</h2>
                        <h3 className="text-pink my-3">${mug.price.toFixed(2)}</h3>
                        <p className="lead">{mug.desc}</p>
                        <button className="btn btn-pink w-100 mt-4" data-bs-dismiss="modal" onClick={() => addItemToCart(mug.name, mug.price)}>Order Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      )}

      <footer><p>&copy; 2026 MUG ART. Created with passion for art lovers.</p></footer>
    </div>
  )
}

export default App