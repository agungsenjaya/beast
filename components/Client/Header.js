import Head from 'next/head'
import React from 'react'

export default function Header(){
    return(
        <>
        <Head>
        <title>Home | Beasties and friends</title>
         <meta name="description" content="Beasties and friends" />
         <link rel="icon" href="img/BAF-1.png" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.1/font/bootstrap-icons.css"></link>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js"></script>
       </Head>
        
        <header className="sticky-top">
          <div className="position-relative">
      <nav className="navbar navbar-light shadow-sm">
      <div className="container-fluid">
          <ul className="nav me-auto nav-top">
            <li className="nav-item align-self-center">
              <a className="nav-link" href="javascript:void(0)">
                <i className="bi bi-list h3 text-dark"></i>
              </a>
            </li>
            <li className="nav-item align-self-center">
            <a className="navbar-brand title-1" href="javascript:void(0)">
              <img src="img/BAF-1.PNG" alt="" width="60" className="d-inline-block align-text-center me-3" /><span className="fw-bold">Beasties and friend</span>
            </a>
            </li>
          </ul>
          <ul className="nav ms-auto nav-top">
          <li className="nav-item align-self-center">
            <a href="javascript:void(0)" className="nav-link">
              <i className="bi bi-telegram h5"></i>
            </a>
          </li>
          <li className="nav-item align-self-center">
            <a href="javascript:void(0)" className="nav-link">
              <i className="bi bi-twitter h5"></i>
            </a>
          </li>
          <li className="nav-item align-self-center">
            <a href="javascript:void(0)" className="nav-link">
              <i className="bi bi-discord h5"></i>
            </a>
          </li>
          <li className="nav-item align-self-center ms-3">
              <a className="btn btn-grad-1 text-white" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#connectWallet">
                <i className="bi bi-cloud-fog2-fill me-2"></i>
                 Connect Wallet</a>
            </li>
          </ul>
      </div>
    </nav>
    <div id="int_fixed_navbar" className="int-navbar">
    </div>
    </div>
    </header>
<div className="modal fade" id="connectWallet" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="connectWalletLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="connectWalletLabel">Notifications</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body text-center">
        <img src="img/BAF-2.png" alt="" width="50%" />
        <div className="labelledby">
        Comming Soon For Connect Wallet
        </div>
      </div>
      <div className="modal-footer d-flex justify-content-center w-100">
        <button type="button" className="btn btn-grad-1" data-bs-dismiss="modal">Okay, I understand</button>
      </div>
    </div>
  </div>
</div>

    </>
    )
}