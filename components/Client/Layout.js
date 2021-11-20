import Header from './Header'
import Footer from './Footer'
import Head from 'next/head'
import React from 'react'

export default function Layout({children}) {
  const hayo = () => {
    // alert('hayo')
    var toastTrigger = document.getElementById('liveToastBtn2')
var toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}
  }
    return (
        <>
        <Head>
        <title>Home | Beasties and friends</title>
         <meta name="description" content="Beasties and friends" />
         <link rel="icon" href="img/BAF-1.png" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.1/font/bootstrap-icons.css"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js"></script>
       </Head>
        <Header />
        <section>
        <div className="row g-0">
          <div className="col-md-3 col-lg-2 d-md-block bg-white sidebar collapse">
          <div className="position-sticky px-3">
          <div className="list-group list-group-flush nav-res">
          <a href="/" className="list-group-item list-group-item-action">
            Home</a>
          <a href="#" data-bs-toggle="modal" data-bs-target="#comeIn" className="list-group-item list-group-item-action">
            Swap</a>
          <a href="#" data-bs-toggle="modal" data-bs-target="#comeIn" className="list-group-item list-group-item-action">
            Liquidity</a>
          <a href="#" data-bs-toggle="modal" data-bs-target="#comeIn" className="list-group-item list-group-item-action">
            Chart</a>
          <a href="/nft" className="list-group-item list-group-item-action">
            NFT</a>
          <a href="#" data-bs-toggle="modal" data-bs-target="#comeIn" className="list-group-item list-group-item-action">
            Member</a>
          <a href="#" data-bs-toggle="modal" data-bs-target="#comeIn" className="list-group-item list-group-item-action">
            Info</a>
        </div>
        </div>
          </div>
          <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="p-4">
                {children}
            </div>
          </div>
          </div>
          </section>
        <Footer />

<div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div className="offcanvas-header grad-1 text-white px-3">
    <h5 className="offcanvas-title title-1" id="offcanvasExampleLabel">Menu</h5>
    <button type="button" className="btn-close btn-close-white text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">

  <div className="list-group list-group-flush nav-res">
          <a href="/" className="list-group-item list-group-item-action">
            Home</a>
          <a href="#" data-bs-toggle="modal" data-bs-target="#comeIn" data-bs-dismiss="offcanvas" className="list-group-item list-group-item-action">
            Swap</a>
          <a href="#" data-bs-toggle="modal" data-bs-target="#comeIn" data-bs-dismiss="offcanvas" className="list-group-item list-group-item-action">
            Liquidity</a>
          <a href="#" data-bs-toggle="modal" data-bs-target="#comeIn" data-bs-dismiss="offcanvas" className="list-group-item list-group-item-action">
            Chart</a>
          <a href="/nft" className="list-group-item list-group-item-action">
            NFT</a>
          <a href="#" data-bs-toggle="modal" data-bs-target="#comeIn" data-bs-dismiss="offcanvas" className="list-group-item list-group-item-action">
            Member</a>
          <a href="#" data-bs-toggle="modal" data-bs-target="#comeIn" data-bs-dismiss="offcanvas" className="list-group-item list-group-item-action">
            Info</a>
        </div>
    
  </div>
</div>

        </>
        );
}