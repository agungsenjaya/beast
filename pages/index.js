import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | Beasties and friends</title>
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
            <div className="row mb-4">
              <div className="col-md-6">
                <div className="p-5">
                  {/* <p className="fw-bold">
                  The BAF is just a pit stop for Token
                  </p> */}
                <h1 className="fw-bolder text-danger">About us beasties and friend</h1>
                <p className="my-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam sint odio ad facilis amet quaerat magni assumenda, est blanditiis hic libero </p>
                <a href="javascript:void(0)" className="btn btn-lg btn-grad-1 text-white me-2">Trade now</a>
                <a href="javascript:void(0)" className="btn btn-lg btn-outline-danger">White Paper</a>
                </div>
              </div>
              <div className="col-md-6">
                <img src="https://dummyimage.com/600x400" alt="" width="100%" className="rounded-cs" />
              </div>
            </div>
            
            <div className="row">
              <div className="col-md-12">
              <h3 className="fw-bolder text-danger">Roadmaps</h3>
              <div className="line-divider"></div>
              {/* <main>
  <p className="has">Doggo ipsum long bois lotsa pats blep. What a nice floof ruff super chub very good spot, the neighborhood pupper lotsa pats. Borkdrive shibe shoober what a nice floof, borking doggo.</p>
  <p className="has">Shoober shooberino adorable doggo many pats, heckin good boys many pats pupper wrinkler, corgo maximum borkdrive. A frighten puggo wow very biscit.</p>
  <p className="has">Big ol h*ck adorable doggo vvv smol borking doggo with a long snoot for pats big ol, he made many woofs doing me a frighten puggo wow very biscit, ruff fat boi ruff long doggo. </p>
  <p className="has">Long bois mlem I am bekom fat wrinkler puggo maximum borkdrive big ol pupper I am bekom fat, fluffer vvv adorable doggo lotsa pats snoot. I am bekom fat ur givin me a spook length boy wow very biscit very good spot.</p>
  <p className="has">Doggo ipsum long bois lotsa pats blep. What a nice floof ruff super chub very good spot, the neighborhood pupper lotsa pats. Borkdrive shibe shoober what a nice floof, borking doggo.</p>
</main> */}
                
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
