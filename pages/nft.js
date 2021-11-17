import Head from 'next/head'
import Image from 'next/image'

export default function Nft() {
  return (
    <div>
      <Head>
         <title>NFT | Beasties and friends</title>
         <meta name="description" content="Beasties and friends" />
         <link rel="icon" href="img/BAF-1.png" />
       </Head>

       
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"></link>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.1/font/bootstrap-icons.css"></link>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
      <script>
      {/* if (typeof window !== "undefined") {
      (function () {
        window.onload = function () {
          var preloader = document.querySelector('.page-loading');
          preloader.classList.remove('active');
          setTimeout(function () {
            preloader.remove();
          }, 2000);
        }
      })()
    } */}
      </script>

      <header className="sticky-top">
      {/* <nav id="int_fixed_navbar" className="navbar navbar-light int-navbar"> */}
      <nav className="navbar navbar-light bg-white shadow-sm">
      <div className="container-fluid">
          <ul className="nav me-auto mb-2 mb-lg-0 nav-top w-100">
            <li className="nav-item align-self-center">
              <a className="nav-link" href="javascript:void(0)">
                <i className="bi bi-list h3 text-dark"></i>
              </a>
            </li>
            <li className="nav-item align-self-center">
            <a className="navbar-brand" href="javascript:void(0)">
              <img src="img/BAF-1.PNG" alt="" width="60" className="d-inline-block align-text-center me-3" /><span className="fw-bold">Beasties and friend</span>
            </a>
            </li>
            <li className="nav-item align-self-center ms-auto">
              <a className="btn btn-lg btn-grad-1 text-white" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#connectWallet">
                <i className="bi bi-cloud-fog2-fill me-2"></i>
                 Connect Wallet</a>
            </li>
          </ul>
          {/* <div className="the-blur"></div> */}
      </div>
    </nav>
    </header>

    <section>
      <div className="row g-0">
        <div className="col-md-2 min-vh-100 bg-light">
        <div className="list-group list-group-flush nav-res">
        <a href="/" className="list-group-item list-group-item-action"><i className="bi bi-speedometer me-3"></i>Home</a>
        <a href="javascript:void(0)" className="list-group-item list-group-item-action"><i className="bi bi-speedometer me-3"></i>Swap</a>
        <a href="javascript:void(0)" className="list-group-item list-group-item-action"><i className="bi bi-speedometer me-3"></i>Chart</a>
        <a href="javascript:void(0)" className="list-group-item list-group-item-action"><i className="bi bi-speedometer me-3"></i>Liquidity</a>
        <a href="/nft" className="list-group-item list-group-item-action"><i className="bi bi-speedometer me-3"></i>NFT</a>
        <a href="javascript:void(0)" className="list-group-item list-group-item-action"><i className="bi bi-speedometer me-3"></i>Member</a>
        <a href="javascript:void(0)" className="list-group-item list-group-item-action"><i className="bi bi-speedometer me-3"></i>Info</a>
        <a href="javascript:void(0)" className="list-group-item list-group-item-action"><i className="bi bi-speedometer me-3"></i>More</a>
      </div>
        </div>
        <div className="col-md-10">
          <div className="p-4">
          {/* Content */}

          <h2 className="fw-bolder">Market</h2>

          <div class="row row-cols-1 row-cols-md-3 g-5">
  <div class="col">
    <div class="card shadow border-0 rounded-cs">
      <img src="https://dummyimage.com/500x400" class="card-img-top" alt="BAF" />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div class="card-footer">
          <p class="mb-0">$ 100,000</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card shadow border-0 rounded-cs">
      <img src="https://dummyimage.com/500x400" class="card-img-top" alt="BAF" />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div class="card-footer">
          <p class="mb-0">$ 100,000</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card shadow border-0 rounded-cs">
      <img src="https://dummyimage.com/500x400" class="card-img-top" alt="BAF" />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div class="card-footer">
          <p class="mb-0">$ 100,000</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card shadow border-0 rounded-cs">
      <img src="https://dummyimage.com/500x400" class="card-img-top" alt="BAF" />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div class="card-footer">
          <p class="mb-0">$ 100,000</p>
      </div>
    </div>
  </div>
</div>
            
          {/* End Content */}
          </div>
        </div>
      </div>
    </section>


<div className="modal fade" id="connectWallet" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="connectWalletLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title text-danger" id="connectWalletLabel"><i className="bi bi-bell-fill"></i> Notifications</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body text-center">
        <img src="img/BAF-2.png" alt="" width="50%" />
        <div className="labelledby">
        Comming Soon For Connect Wallet
        </div>
      </div>
      <div className="modal-footer d-flex justify-content-center w-100">
        {/* <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal">Close</button> */}
        <button type="button" className="btn btn-grad-1" data-bs-dismiss="modal">Okay, I understand</button>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}
