import Header from './Header'
import Footer from './Footer'

export default function Layout({children}) {
    return (
        <>
        <Header />
        <section>
        <div className="row g-0">
          <div className="col-md-2 min-vh-100 bg-light">
          <div className="list-group list-group-flush nav-res">
          <a href="/" className="list-group-item list-group-item-action"><i className="bi bi-dot me-3"></i>Home</a>
          <a href="javascript:void(0)" className="list-group-item list-group-item-action"><i className="bi bi-dot me-3"></i>Swap</a>
          <a href="javascript:void(0)" className="list-group-item list-group-item-action"><i className="bi bi-dot me-3"></i>Chart</a>
          <a href="javascript:void(0)" className="list-group-item list-group-item-action"><i className="bi bi-dot me-3"></i>Liquidity</a>
          <a href="/nft" className="list-group-item list-group-item-action"><i className="bi bi-dot me-3"></i>NFT</a>
          <a href="javascript:void(0)" className="list-group-item list-group-item-action"><i className="bi bi-dot me-3"></i>Member</a>
          <a href="javascript:void(0)" className="list-group-item list-group-item-action"><i className="bi bi-dot me-3"></i>Info</a>
          <a href="javascript:void(0)" className="list-group-item list-group-item-action"><i className="bi bi-dot me-3"></i>More</a>
        </div>
          </div>
          <div className="col-md">
            <div className="p-4">
                {children}
            </div>
          </div>
          </div>
          </section>
        <Footer />
        </>
        );
}