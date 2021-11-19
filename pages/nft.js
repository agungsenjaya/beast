import Head from 'next/head'
import Image from 'next/image'

export default function Nft() {
  return (
      <>

      <h4 className="fw-bolder">Market NFT</h4>

      <div></div>

      <div className="d-flex justify-content-between my-4">
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
            {/* <label class="title-2">Search</label> */}
            <input type="text" class="form-control  rounded-cs" placeholder="Search name or id" />
          </div>

        {/* <div className="input-group">
  <span className="input-group-text" id=""></span>
  <input type="text" className="form-control border-0" aria-label="Sizing example input" aria-describedby="" />
</div> */}

        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4">
  
  <div className="col">
    <div className="card shadow">
      <img src="img/BAF-1.png" className="card-img-top" alt="..." />
      <div className="card-body">
      <div className="d-flex justify-content-between">
      <div>
      <p className="title-1 fw-bold">Images</p>
      </div>
      <div>
      <span className="badge bg-gray">ID : 110</span>
      </div>
      </div>
      <div className="d-flex justify-content-between">
      <div>
      <h5 className="card-title">Beasties Version 1</h5>
      </div>
      <div>
      <p className="text-primary text-uppercase title-1 fw-bold small">
      Level 1
      </p>
      </div>
      </div>
      {/* <div className="text-center title-2 rounded-cs fw-bold p-1 w-100">
        22,000 BSTS
      </div> */}
      </div>
      <div className="card-footer d-flex justify-content-between title-2">
      <div className="badge bg-gray bg-transparent m-1">
      <img src="https://beasties.online/img/icon_usd_color.7bb6611b.svg" className="me-2"/>
      xxx USD
      </div>
      <div className="badge bg-gray bg-transparent m-1">
      <img src="https://beasties.online/img/icon_bnb_color.56f3e09e.svg" className="me-2"/>
      xxx BNB
      </div>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card shadow">
      <img src="img/BAF-2.png" className="card-img-top" alt="..." />
      <div className="card-body">
      <div className="d-flex justify-content-between">
      <div>
      <p className="title-1 fw-bold">Images</p>
      </div>
      <div>
      <span className="badge bg-gray">ID : 110</span>
      </div>
      </div>
      <div className="d-flex justify-content-between">
      <div>
      <h5 className="card-title">Beasties Version 2</h5>
      </div>
      <div>
      <p className="text-primary text-uppercase title-1 fw-bold small">
      Level 1
      </p>
      </div>
      </div>
      {/* <div className="text-center title-2 rounded-cs fw-bold p-1 w-100">
        22,000 BSTS
      </div> */}
      </div>
      <div className="card-footer d-flex justify-content-between title-2">
      <div className="badge bg-gray bg-transparent m-1">
      <img src="https://beasties.online/img/icon_usd_color.7bb6611b.svg" className="me-2"/>
      xxx USD
      </div>
      <div className="badge bg-gray bg-transparent m-1">
      <img src="https://beasties.online/img/icon_bnb_color.56f3e09e.svg" className="me-2"/>
      xxx BNB
      </div>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card shadow">
      <img src="img/BAF-3.png" className="card-img-top" alt="..." />
      <div className="card-body">
      <div className="d-flex justify-content-between">
      <div>
      <p className="title-1 fw-bold">Images</p>
      </div>
      <div>
      <span className="badge bg-gray">ID : 110</span>
      </div>
      </div>
      <div className="d-flex justify-content-between">
      <div>
      <h5 className="card-title">Beasties Version 3</h5>
      </div>
      <div>
      <p className="text-primary text-uppercase title-1 fw-bold small">
      Level 1
      </p>
      </div>
      </div>
      {/* <div className="text-center title-2 rounded-cs fw-bold p-1 w-100">
        22,000 BSTS
      </div> */}
      </div>
      <div className="card-footer d-flex justify-content-between title-2">
      <div className="badge bg-gray bg-transparent m-1">
      <img src="https://beasties.online/img/icon_usd_color.7bb6611b.svg" className="me-2"/>
      xxx USD
      </div>
      <div className="badge bg-gray bg-transparent m-1">
      <img src="https://beasties.online/img/icon_bnb_color.56f3e09e.svg" className="me-2"/>
      xxx BNB
      </div>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card shadow">
      <img src="img/BAF-4.png" className="card-img-top" alt="..." />
      <div className="card-body">
      <div className="d-flex justify-content-between">
      <div>
      <p className="title-1 fw-bold">Images</p>
      </div>
      <div>
      <span className="badge bg-gray">ID : 110</span>
      </div>
      </div>
      <div className="d-flex justify-content-between">
      <div>
      <h5 className="card-title">Beasties Version 4</h5>
      </div>
      <div>
      <p className="text-primary text-uppercase title-1 fw-bold small">
      Level 1
      </p>
      </div>
      </div>
      {/* <div className="text-center title-2 rounded-cs fw-bold p-1 w-100">
        22,000 BSTS
      </div> */}
      </div>
      <div className="card-footer d-flex justify-content-between title-2">
      <div className="badge bg-gray bg-transparent m-1">
      <img src="https://beasties.online/img/icon_usd_color.7bb6611b.svg" className="me-2"/>
      xxx USD
      </div>
      <div className="badge bg-gray bg-transparent m-1">
      <img src="https://beasties.online/img/icon_bnb_color.56f3e09e.svg" className="me-2"/>
      xxx BNB
      </div>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card shadow">
      <img src="img/BAF-5.png" className="card-img-top" alt="..." />
      <div className="card-body">
      <div className="d-flex justify-content-between">
      <div>
      <p className="title-1 fw-bold">Images</p>
      </div>
      <div>
      <span className="badge bg-gray">ID : 110</span>
      </div>
      </div>
      <div className="d-flex justify-content-between">
      <div>
      <h5 className="card-title">Beasties Version 5</h5>
      </div>
      <div>
      <p className="text-primary text-uppercase title-1 fw-bold small">
      Level 1
      </p>
      </div>
      </div>
      {/* <div className="text-center title-2 rounded-cs fw-bold p-1 w-100">
        22,000 BSTS
      </div> */}
      </div>
      <div className="card-footer d-flex justify-content-between title-2">
      <div className="badge bg-gray bg-transparent m-1">
      <img src="https://beasties.online/img/icon_usd_color.7bb6611b.svg" className="me-2"/>
      xxx USD
      </div>
      <div className="badge bg-gray bg-transparent m-1">
      <img src="https://beasties.online/img/icon_bnb_color.56f3e09e.svg" className="me-2"/>
      xxx BNB
      </div>
      </div>
    </div>
  </div>
  
</div>

      </>
  )
}
