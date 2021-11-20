import Head from 'next/head'
import React from 'react'

export default function Header(){
    return(
        <>
        <header className="sticky-top">
          <div className="position-relative">
      <nav className="navbar navbar-light shadow-sm">
      <div className="container-fluid">
          <ul className="nav me-auto nav-top">
            <li className="nav-item align-self-center">
              <a className="nav-link d-sm-none d-block" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                <i className="bi bi-list h3 text-dark"></i>
              </a>
            </li>
            <li className="nav-item align-self-center">
            <a className="navbar-brand title-1 d-none d-sm-block" href="/">
              <img src="img/BAF-1.PNG" alt="" width="60" className="d-inline-block align-text-center me-3" /><span className="fw-bold">Beasties and friend</span>
            </a>
            <a className="navbar-brand title-1 d-sm-none d-block" href="/">
              <img src="img/BAF-1.PNG" alt="" width="60" className="d-inline-block align-text-center me-3" />
            </a>
            </li>
          </ul>
          <ul className="nav ms-auto nav-top">
          <li className="nav-item align-self-center">
            <a href="https://t.me/BSTSAndFriend" target="_blank" className="nav-link d-none d-sm-block">
              <i className="bi bi-telegram h5"></i>
            </a>
          </li>
          <li className="nav-item align-self-center">
            <a href="https://twitter.com/Bstsandfriend?t=Xmev6Nx0aX3cH-D_mLWroA&s=09" target="_blank" className="nav-link d-none d-sm-block">
              <i className="bi bi-twitter h5"></i>
            </a>
          </li>
          <li className="nav-item align-self-center ms-3">
              <a className="btn btn-grad-1 text-white" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#comeIn">
                <i className="bi bi-cloud-fog2-fill me-2"></i>
                 Connect Wallet</a>
            </li>
          </ul>
      </div>
    </nav>
    <div id="int_fixed_navbar" className="int-navbar"></div>
    </div>
    </header>
<div className="modal fade" id="comeIn" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="comeInLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="comeInLabel">Notifications</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body text-center">
        <img src="img/BAF-2.png" alt="" width="50%" />
        <div className="labelledby">
        Stay Tuned, Coming Soon
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

    // async function entos(){
    //   alert('bosca')
    // }
}