import Image from 'next/image'
import React from 'react'

export default function Home() {
  return (
    <>
            <div className="row mb-4 flex-column-reverse flex-lg-row">
              <div className="col-md-6 align-self-center">
                <div className="">
                <h1 className="fw-bolder">About us <br/> beasties and friend</h1>
                <p className="my-4">
                Beasties and Friend is a community token that supports Magic Beasties in developing their projects.
<br />
<br />
Do you know something about Magic Beasties?
Magic Beasties is a blockchain game about cute Beasties running on Binance Smart Chain. Collect Ultra-Rare digital monsters, play with them, experience an adventure, trade and earn.
<br />
<br />

In the future, Beasties and Friends 'or you can call it BAF Token' also have the desire to build our own NFT.
Please buy BAF Token and get Magic Beasties as a reward.
<br />
<br />
Let's travel the world of NFT together.

                </p>
                <a href="#" className="btn  btn-grad-1 me-3">Trade now</a>
                <a href="pdf/Beasties-and-Friend.pdf" target="_blank" className="btn  btn-outline-danger">White Paper</a>
                </div>
              </div>
              <div className="col-md-6">
              <video width="100%" className="rounded" autoPlay loop>
                <source src="video/bg-home.mp4" type="video/mp4"/>
                Your browser does not support HTML video.
              </video>
              </div>
            </div>

            <section className="space-m">
              <div className="contianer">
              <h3 className="fw-bolder text-center mb-4">Roadmaps</h3>

<div className="row">
          <div className="col-md-10 offset-md-1">
          <div className="card-deck">
            <div className="card grad-1 border-0">
              <div className="card-body">
                <div className="">
                  <div className="badge bg-warning text-wd mb-3">Roadmaps</div>
                  <h4 className="card-title title-3 text-white">Phase 1</h4>
                </div>
                <div className="card-text">
                  <ul className="list-group list-group-flush list-road">
                    <li className="list-group-item">
                      <div className="media">
                        <i className="bi bi-check text-warning me-2"></i>
                        <div className="media-body">
                          Launch Social Media Sites (Twitter, Telegram, and More!)
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="media">
                        <i className="bi bi-check text-warning me-2"></i>
                        <div className="media-body">
                          Launch Website
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="media">
                        <i className="bi bi-x opacity-50 me-2"></i>
                        <div className="media-body">
                          FairLaunch
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="media">
                        <i className="bi bi-x opacity-50 me-2"></i>
                        <div className="media-body">
                          1.000 Member Telegram
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="media">
                        <i className="bi bi-x opacity-50 me-2"></i>
                        <div className="media-body">
                          $100.000 Market Caps
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="media">
                        <i className="bi bi-x opacity-50 me-2"></i>
                        <div className="media-body">
                          MARKETING PLAN
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card grad-1 border-0">
              <div className="card-body">
                <div className="">
                  <div className="badge bg-warning text-wd mb-3">Roadmaps</div>
                  <h4 className="card-title title-3 text-white">Phase 2</h4>
                </div>
                <div className="card-text">
                  <ul className="list-group list-group-flush list-road">
<li className="list-group-item">
                      <div className="media">
                        <i className="bi bi-x opacity-50 me-2"></i>
                        <div className="media-body">5.000 Member Telegram</div>
                      </div>
                    </li>
<li className="list-group-item">
                      <div className="media">
                        <i className="bi bi-x opacity-50 me-2"></i>
                        <div className="media-body">$500.000 Market Caps</div>
                      </div>
                    </li>
<li className="list-group-item">
                      <div className="media">
                        <i className="bi bi-x opacity-50 me-2"></i>
                        <div className="media-body">BIG MARKETING PROMOTION</div>
                      </div>
                    </li>
<li className="list-group-item">
                      <div className="media">
                        <i className="bi bi-x opacity-50 me-2"></i>
                        <div className="media-body">$1.000.000 Market Caps</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card grad-1 border-0">
              <div className="card-body">
                <div className="">
                  <div className="badge bg-warning text-wd mb-3">Roadmaps</div>
                  <h4 className="card-title title-3 text-white">Phase 3</h4>
                </div>
                <div className="card-text">
                  <ul className="list-group list-group-flush list-road">
                  <li className="list-group-item">
                      <div className="media">
                        <i className="bi bi-x opacity-50 me-2"></i>
                        <div className="media-body">Listing CG</div>
                      </div>
                    </li>
<li className="list-group-item">
                      <div className="media">
                        <i className="bi bi-x opacity-50 me-2"></i>
                        <div className="media-body">Listing CMC</div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="media">
                        <i className="bi bi-x me-2 opacity-50"></i>
                        <div className="media-body">Audit Certik</div>
                    </div>
                  </li>
<li className="list-group-item">
                      <div className="media">
                        <i className="bi bi-x me-2 opacity-50"></i>
                        <div className="media-body">Launch Apps</div>
                    </div>
                  </li>
<li className="list-group-item">
                      <div className="media">
                        <i className="bi bi-x me-2 opacity-50"></i>
                        <div className="media-body">Listing CEX</div>
                    </div>
                  </li>
                  </ul>
                </div>
              </div>
            </div>
            
          </div>
          </div>
          </div>

              </div>
            </section>
            
            <section className="space-m">
              <div className="container">
                <div className="text-center">
                    <h3 className="fw-bolder mb-4">Tokenomics</h3>
                  <img src="img/9.jpg" alt="" width="80%" className="rounded-cs" />
                </div>
              </div>
            </section>
            <section className="space-m">
              <div className="container">
                <h3 className="fw-bolder text-center mb-4">Frequently asked questions</h3>
                <div className="row">
                  <div className="col-md-8 offset-md-2">
                  <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingOne">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-one" aria-expanded="false" aria-controls="flush-one">
      What is BAF Token?
      </button>
    </h2>
    <div id="flush-one" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
      BAF Token or Beasties and Friend is a community token that supports Magic Beasties in developing their projects.

      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-two" aria-expanded="false" aria-controls="flush-two">
      Where can i buy BAF Token?
      </button>
    </h2>
    <div id="flush-two" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
      You can buy it on Pancakeswap with our Smart Contract on Pinned Message Group
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="three">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      How to get the reward ?
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="three" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
      You can claim manually on Bscscan or just waiting and gifts will be automatically shipped
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="four">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefour" aria-expanded="false" aria-controls="flush-collapsefour">
      Is BAF Token safe?
      </button>
    </h2>
    <div id="flush-collapsefour" className="accordion-collapse collapse" aria-labelledby="four" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
      Of course, we lock our LP on Dxsale, so you dont have to worry about rugpull or something bad hapen
      </div>
    </div>
  </div>
</div>
                  </div>
                </div>
              </div>
            </section>

            <section className="spac-m">
              <div className="container">
              <h3 className="fw-bolder text-center mb-4">Our Partner</h3>
              <div className="card card-body grad-4">
              <div className="row">
                <div className="col-md-4 mb-3 col-6">
                    <div className="card-body">
                      <img src="img/partner/1.png" alt="" width="100%" />
                    </div>
                </div>
                <div className="col-md-4 mb-3 col-6 border-start border-white">
                    <div className="card-body">
                      <img src="img/partner/2.png" alt="" width="100%" />
                    </div>
                </div>
                <div className="col-md-4 mb-3 col-6 border-start border-white">
                    <div className="card-body">
                      <img src="img/partner/3.png" alt="" width="100%" />
                    </div>
                </div>
                </div>
                <div className="row">
                <div className="col-md-4 mb-3 col-6 border-start border-white">
                    <div className="card-body">
                      <img src="img/partner/4.png" alt="" width="100%" />
                    </div>
                </div>
                <div className="col-md-4 mb-3 col-6 border-start border-white">
                    <div className="card-body">
                      <img src="img/partner/5.png" alt="" width="100%" />
                    </div>
                </div>
                <div className="col-md-4 mb-3 col-6 border-start border-white">
                    <div className="card-body">
                      <img src="img/partner/6.png" alt="" width="100%" />
                    </div>
                </div>
              </div>
              </div>
              </div>
            </section>

        </>
  )
}
