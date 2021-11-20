import Head from 'next/head'
import Image from 'next/image'

export default function Nft() {
  return (
      <>

<h4 className="fw-bolder mb-4">Market NFT</h4>
<div className="d-none">
    <div className="d-flex justify-content-between mb-4">
        <div>
            <ul className="nav nav-nft">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">All (25)</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Images (13)</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Videos (12)</a>
                </li>
            </ul>
        </div>
        <div>
            <div className="form-group d-flex">
                <input type="text" className="form-control rounded-cs" placeholder="Search name or id" />
            </div>
        </div>
    </div>
</div>

<div className="row row-cols-1 row-cols-md-3 g-4">
    <div className="col">
        <div className="card shadow">
            <div className="position-relative img-card-top">
                <img src="img/BAF-1.png" width="100%" alt="..." />
                <div className="to-center d-flex align-items-center text-center bg-come rounded-top">
                    <div className="w-100 text-white">
                        <h4 className="title-1">Coming Soon</h4>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <div>
                        <p className="title-1 fw-bold">Images</p>
                    </div>
                    <div>
                        <span className="badge bg-gray">ID : xxx</span>
                    </div>
                </div>
                <div className="d-flex justify-content-between">
                    <div>
                        <h5 className="card-title">BAF 1</h5>
                    </div>
                    <div>
                        <p className="text-primary text-uppercase title-1 fw-bold small">
                            Level 1
                        </p>
                    </div>
                </div>
                {/*
                <div className="text-center title-2 rounded-cs fw-bold p-1 w-100">
                    22,000 BSTS
                </div>
                */}
            </div>
            <div className="card-footer d-flex justify-content-between title-2">
                <div className="badge bg-gray bg-transparent m-1">
                    <img src="img/usd.svg" className="me-2" />
                    xxx USD
                </div>
                <div className="badge bg-gray bg-transparent m-1">
                    <img src="img/bnb.svg" className="me-2" />
                    xxx BNB
                </div>
            </div>
        </div>
    </div>
    <div className="col">
        <div className="card shadow">
            <div className="position-relative img-card-top">
                <img src="img/BAF-2.png" width="100%" alt="..." />
                <div className="to-center d-flex align-items-center text-center bg-come rounded-top">
                    <div className="w-100 text-white">
                        <h4 className="title-1">Coming Soon</h4>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <div>
                        <p className="title-1 fw-bold">Images</p>
                    </div>
                    <div>
                        <span className="badge bg-gray">ID : xxx</span>
                    </div>
                </div>
                <div className="d-flex justify-content-between">
                    <div>
                        <h5 className="card-title">BAF 2</h5>
                    </div>
                    <div>
                        <p className="text-primary text-uppercase title-1 fw-bold small">
                            Level 1
                        </p>
                    </div>
                </div>
                {/*
                <div className="text-center title-2 rounded-cs fw-bold p-1 w-100">
                    22,000 BSTS
                </div>
                */}
            </div>
            <div className="card-footer d-flex justify-content-between title-2">
                <div className="badge bg-gray bg-transparent m-1">
                    <img src="img/usd.svg" className="me-2" />
                    xxx USD
                </div>
                <div className="badge bg-gray bg-transparent m-1">
                    <img src="img/bnb.svg" className="me-2" />
                    xxx BNB
                </div>
            </div>
        </div>
    </div>
    <div className="col">
        <div className="card shadow">
            <div className="position-relative img-card-top">
                <img src="img/BAF-3.png" width="100%" alt="..." />
                <div className="to-center d-flex align-items-center text-center bg-come rounded-top">
                    <div className="w-100 text-white">
                        <h4 className="title-1">Coming Soon</h4>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <div>
                        <p className="title-1 fw-bold">Images</p>
                    </div>
                    <div>
                        <span className="badge bg-gray">ID : xxx</span>
                    </div>
                </div>
                <div className="d-flex justify-content-between">
                    <div>
                        <h5 className="card-title">BAF 3</h5>
                    </div>
                    <div>
                        <p className="text-primary text-uppercase title-1 fw-bold small">
                            Level 1
                        </p>
                    </div>
                </div>
                {/*
                <div className="text-center title-2 rounded-cs fw-bold p-1 w-100">
                    22,000 BSTS
                </div>
                */}
            </div>
            <div className="card-footer d-flex justify-content-between title-2">
                <div className="badge bg-gray bg-transparent m-1">
                    <img src="img/usd.svg" className="me-2" />
                    xxx USD
                </div>
                <div className="badge bg-gray bg-transparent m-1">
                    <img src="img/bnb.svg" className="me-2" />
                    xxx BNB
                </div>
            </div>
        </div>
    </div>
    <div className="col">
        <div className="card shadow">
            <div className="position-relative img-card-top">
                <img src="img/BAF-4.png" width="100%" alt="..." />
                <div className="to-center d-flex align-items-center text-center bg-come rounded-top">
                    <div className="w-100 text-white">
                        <h4 className="title-1">Coming Soon</h4>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <div>
                        <p className="title-1 fw-bold">Images</p>
                    </div>
                    <div>
                        <span className="badge bg-gray">ID : xxx</span>
                    </div>
                </div>
                <div className="d-flex justify-content-between">
                    <div>
                        <h5 className="card-title">BAF 4</h5>
                    </div>
                    <div>
                        <p className="text-primary text-uppercase title-1 fw-bold small">
                            Level 1
                        </p>
                    </div>
                </div>
                {/*
                <div className="text-center title-2 rounded-cs fw-bold p-1 w-100">
                    22,000 BSTS
                </div>
                */}
            </div>
            <div className="card-footer d-flex justify-content-between title-2">
                <div className="badge bg-gray bg-transparent m-1">
                    <img src="img/usd.svg" className="me-2" />
                    xxx USD
                </div>
                <div className="badge bg-gray bg-transparent m-1">
                    <img src="img/bnb.svg" className="me-2" />
                    xxx BNB
                </div>
            </div>
        </div>
    </div>
    <div className="col">
        <div className="card shadow">
            <div className="position-relative img-card-top">
                <img src="img/BAF-5.png" width="100%" alt="..." />
                <div className="to-center d-flex align-items-center text-center bg-come rounded-top">
                    <div className="w-100 text-white">
                        <h4 className="title-1">Coming Soon</h4>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <div>
                        <p className="title-1 fw-bold">Images</p>
                    </div>
                    <div>
                        <span className="badge bg-gray">ID : xxx</span>
                    </div>
                </div>
                <div className="d-flex justify-content-between">
                    <div>
                        <h5 className="card-title">BAF 5</h5>
                    </div>
                    <div>
                        <p className="text-primary text-uppercase title-1 fw-bold small">
                            Level 1
                        </p>
                    </div>
                </div>
                {/*
                <div className="text-center title-2 rounded-cs fw-bold p-1 w-100">
                    22,000 BSTS
                </div>
                */}
            </div>
            <div className="card-footer d-flex justify-content-between title-2">
                <div className="badge bg-gray bg-transparent m-1">
                    <img src="img/usd.svg" className="me-2" />
                    xxx USD
                </div>
                <div className="badge bg-gray bg-transparent m-1">
                    <img src="img/bnb.svg" className="me-2" />
                    xxx BNB
                </div>
            </div>
        </div>
    </div>
    <div className="col">
        <div className="card shadow">
            <div className="position-relative img-card-top">
                <img src="img/BAF-6.png" width="100%" alt="..." />
                <div className="to-center d-flex align-items-center text-center bg-come rounded-top">
                    <div className="w-100 text-white">
                        <h4 className="title-1">Coming Soon</h4>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <div>
                        <p className="title-1 fw-bold">Images</p>
                    </div>
                    <div>
                        <span className="badge bg-gray">ID : xxx</span>
                    </div>
                </div>
                <div className="d-flex justify-content-between">
                    <div>
                        <h5 className="card-title">BAF 6</h5>
                    </div>
                    <div>
                        <p className="text-primary text-uppercase title-1 fw-bold small">
                            Level 1
                        </p>
                    </div>
                </div>
                {/*
                <div className="text-center title-2 rounded-cs fw-bold p-1 w-100">
                    22,000 BSTS
                </div>
                */}
            </div>
            <div className="card-footer d-flex justify-content-between title-2">
                <div className="badge bg-gray bg-transparent m-1">
                    <img src="img/usd.svg" className="me-2" />
                    xxx USD
                </div>
                <div className="badge bg-gray bg-transparent m-1">
                    <img src="img/bnb.svg" className="me-2" />
                    xxx BNB
                </div>
            </div>
        </div>
    </div>

    <div className="col">
        <div className="card shadow">
            <div className="position-relative img-card-top">
                <img src="img/bit/1.png" width="100%" alt="..." />
                <div className="to-center d-flex align-items-center text-center bg-come rounded-top">
                    <div className="w-100 text-white">
                        <h4 className="title-1">Coming Soon</h4>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <div>
                        <p className="title-1 fw-bold">Images</p>
                    </div>
                    <div>
                        <span className="badge bg-gray">ID : xxx</span>
                    </div>
                </div>
                <div className="d-flex justify-content-between">
                    <div>
                        <h5 className="card-title">B.A.F 1</h5>
                    </div>
                    <div>
                        <p className="text-primary text-uppercase title-1 fw-bold small">
                            Level 1
                        </p>
                    </div>
                </div>
                {/*
                <div className="text-center title-2 rounded-cs fw-bold p-1 w-100">
                    22,000 BSTS
                </div>
                */}
            </div>
            <div className="card-footer d-flex justify-content-between title-2">
                <div className="badge bg-gray bg-transparent m-1">
                    <img src="img/usd.svg" className="me-2" />
                    xxx USD
                </div>
                <div className="badge bg-gray bg-transparent m-1">
                    <img src="img/bnb.svg" className="me-2" />
                    xxx BNB
                </div>
            </div>
        </div>
    </div>
    <div className="col">
        <div className="card shadow">
            <div className="position-relative img-card-top">
                <img src="img/bit/2.png" width="100%" alt="..." />
                <div className="to-center d-flex align-items-center text-center bg-come rounded-top">
                    <div className="w-100 text-white">
                        <h4 className="title-1">Coming Soon</h4>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <div>
                        <p className="title-1 fw-bold">Images</p>
                    </div>
                    <div>
                        <span className="badge bg-gray">ID : xxx</span>
                    </div>
                </div>
                <div className="d-flex justify-content-between">
                    <div>
                        <h5 className="card-title">B.A.F 2</h5>
                    </div>
                    <div>
                        <p className="text-primary text-uppercase title-1 fw-bold small">
                            Level 1
                        </p>
                    </div>
                </div>
                {/*
                <div className="text-center title-2 rounded-cs fw-bold p-1 w-100">
                    22,000 BSTS
                </div>
                */}
            </div>
            <div className="card-footer d-flex justify-content-between title-2">
                <div className="badge bg-gray bg-transparent m-1">
                    <img src="img/usd.svg" className="me-2" />
                    xxx USD
                </div>
                <div className="badge bg-gray bg-transparent m-1">
                    <img src="img/bnb.svg" className="me-2" />
                    xxx BNB
                </div>
            </div>
        </div>
    </div>
    <div className="col">
        <div className="card shadow">
            <div className="position-relative img-card-top">
                <img src="img/bit/3.png" width="100%" alt="..." />
                <div className="to-center d-flex align-items-center text-center bg-come rounded-top">
                    <div className="w-100 text-white">
                        <h4 className="title-1">Coming Soon</h4>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <div>
                        <p className="title-1 fw-bold">Images</p>
                    </div>
                    <div>
                        <span className="badge bg-gray">ID : xxx</span>
                    </div>
                </div>
                <div className="d-flex justify-content-between">
                    <div>
                        <h5 className="card-title">B.A.F 3</h5>
                    </div>
                    <div>
                        <p className="text-primary text-uppercase title-1 fw-bold small">
                            Level 1
                        </p>
                    </div>
                </div>
                {/*
                <div className="text-center title-2 rounded-cs fw-bold p-1 w-100">
                    22,000 BSTS
                </div>
                */}
            </div>
            <div className="card-footer d-flex justify-content-between title-2">
                <div className="badge bg-gray bg-transparent m-1">
                    <img src="img/usd.svg" className="me-2" />
                    xxx USD
                </div>
                <div className="badge bg-gray bg-transparent m-1">
                    <img src="img/bnb.svg" className="me-2" />
                    xxx BNB
                </div>
            </div>
        </div>
    </div>

    
        <div className="col">
            <div className="card shadow">
                <div className="position-relative img-card-top">
                    <img src="img/bit/4.png" width="100%" alt="..." />
                    <div className="to-center d-flex align-items-center text-center bg-come rounded-top">
                        <div className="w-100 text-white">
                            <h4 className="title-1">Coming Soon</h4>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <div>
                            <p className="title-1 fw-bold">Images</p>
                        </div>
                        <div>
                            <span className="badge bg-gray">ID : xxx</span>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div>
                            <h5 className="card-title">B.A.F 4</h5>
                        </div>
                        <div>
                            <p className="text-primary text-uppercase title-1 fw-bold small">
                                Level 1
                            </p>
                        </div>
                    </div>
                    {/*
                    <div className="text-center title-2 rounded-cs fw-bold p-1 w-100">
                        22,000 BSTS
                    </div>
                    */}
                </div>
                <div className="card-footer d-flex justify-content-between title-2">
                    <div className="badge bg-gray bg-transparent m-1">
                        <img src="img/usd.svg" className="me-2" />
                        xxx USD
                    </div>
                    <div className="badge bg-gray bg-transparent m-1">
                        <img src="img/bnb.svg" className="me-2" />
                        xxx BNB
                    </div>
                </div>
            </div>
        </div>
        
        <div className="col">
            <div className="card shadow">
                <div className="position-relative img-card-top">
                    <img src="img/bit/5.png" width="100%" alt="..." />
                    <div className="to-center d-flex align-items-center text-center bg-come rounded-top">
                        <div className="w-100 text-white">
                            <h4 className="title-1">Coming Soon</h4>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <div>
                            <p className="title-1 fw-bold">Images</p>
                        </div>
                        <div>
                            <span className="badge bg-gray">ID : xxx</span>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div>
                            <h5 className="card-title">B.A.F 5</h5>
                        </div>
                        <div>
                            <p className="text-primary text-uppercase title-1 fw-bold small">
                                Level 1
                            </p>
                        </div>
                    </div>
                    {/*
                    <div className="text-center title-2 rounded-cs fw-bold p-1 w-100">
                        22,000 BSTS
                    </div>
                    */}
                </div>
                <div className="card-footer d-flex justify-content-between title-2">
                    <div className="badge bg-gray bg-transparent m-1">
                        <img src="img/usd.svg" className="me-2" />
                        xxx USD
                    </div>
                    <div className="badge bg-gray bg-transparent m-1">
                        <img src="img/bnb.svg" className="me-2" />
                        xxx BNB
                    </div>
                </div>
            </div>
        </div>

    </div>

      

      </>
  )
}