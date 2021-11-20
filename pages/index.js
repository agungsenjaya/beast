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
                <a href="javascript:void(0)" className="btn  btn-grad-1 me-3">Trade now</a>
                <a href="pdf/Beasties-and-Friend.pdf" target="_blank" className="btn  btn-outline-danger">White Paper</a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="position-relative">
                <img src="img/gif/1.png" alt="" width="100%" className="rounded-cs" />
                <div class="to-center">
                <img src="img/gif/2.png" alt="" width="100%" className="rounded-cs" />
                </div>
                <div class="to-center">
                <img src="img/gif/3.png" alt="" width="100%" className="rounded-cs" />
                </div>
                <div class="to-center">
                <img src="img/gif/4.png" alt="" width="100%" className="rounded-cs" />
                </div>
                <div class="to-center">
                <img src="img/gif/5.png" alt="" width="100%" className="rounded-cs" />
                </div>
                <div class="to-center">
                <img src="img/gif/6.png" alt="" width="100%" className="rounded-cs" />
                </div>
                <div class="to-center">
                <img src="img/gif/7.png" alt="" width="100%" className="rounded-cs" />
                </div>
                <div class="to-center">
                <img src="img/gif/8.png" alt="" width="100%" className="rounded-cs" />
                </div>
                </div>
              </div>
            </div>

            <section className="space-m">
              <div className="contianer">
              <h3 className="fw-bolder text-center mb-4">Roadmaps</h3>

              {/* <ol className="timeline timeline-content-center timeline-point-sm" id="demo-timeline-size">

              <li className="timeline-block">
            <div className="timeline-detail"></div>
            <div className="timeline-point">
              <span className="bi bi-dot text-danger"></span>
            </div>
            <div className="timeline-content">
              <div className="card card-body shadow">
                <div className="d-flex justify-content-between">
                  <div>
                    <h4 className="card-title">Pase one</h4>
                  </div>
                  <div>
                    <i className="bi bi-patch-check-fill text-success h4"></i>
                  </div>
                </div>
                <p>lorem ipsum dolor sit amet, consectetur</p>
              </div>
            </div>
          </li>
              <li className="timeline-block">
            <div className="timeline-detail"></div>
            <div className="timeline-point">
              <span className="bi bi-dot text-danger"></span>
            </div>
            <div className="timeline-content">
              <div className="card card-body shadow">
              <div className="d-flex justify-content-between">
                  <div>
                    <h4 className="card-title">Pase two</h4>
                  </div>
                  <div className="">
                    <i className="bi bi-gear-fill text-secondary h4"></i>
                  </div>
                </div>
                <p>lorem ipsum dolor sit amet, consectetur</p>
              </div>
            </div>
          </li>
              <li className="timeline-block">
            <div className="timeline-detail"></div>
            <div className="timeline-point">
              <span className="bi bi-dot text-danger"></span>
            </div>
            <div className="timeline-content">
              <div className="card card-body shadow">
              <div className="d-flex justify-content-between">
                  <div>
                    <h4 className="card-title">Pase three</h4>
                  </div>
                  <div className="">
                    <i className="bi bi-gear-fill text-secondary h4"></i>
                  </div>
                </div>
                <p>lorem ipsum dolor sit amet, consectetur</p>
              </div>
            </div>
          </li>
              
              </ol> */}

<div class="row">
          <div class="col-md-10 offset-md-1">
          <div class="card-deck">
            <div class="card grad-1 border-0">
              <div class="card-body">
                <div class="">
                  <div class="badge bg-warning text-wd mb-3">Roadmaps</div>
                  <h4 class="card-title title-3 text-white">Phase 1</h4>
                </div>
                <div class="card-text">
                  <ul class="list-group list-group-flush list-road">
                    <li class="list-group-item">
                      <div class="media">
                        <i class="bi bi-check text-warning me-2"></i>
                        <div class="media-body">
                          Launch Social Media Sites (Twitter, Telegram, and More!)
                        </div>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <div class="media">
                        <i class="bi bi-check text-warning me-2"></i>
                        <div class="media-body">
                          Launch Website
                        </div>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <div class="media">
                        <i class="bi bi-x opacity-50 me-2"></i>
                        <div class="media-body">
                          FairLaunch
                        </div>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <div class="media">
                        <i class="bi bi-x opacity-50 me-2"></i>
                        <div class="media-body">
                          1.000 Member Telegram
                        </div>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <div class="media">
                        <i class="bi bi-x opacity-50 me-2"></i>
                        <div class="media-body">
                          $100.000 Market Caps
                        </div>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <div class="media">
                        <i class="bi bi-x opacity-50 me-2"></i>
                        <div class="media-body">
                          MARKETING PLAN
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="card grad-1 border-0">
              <div class="card-body">
                <div class="">
                  <div class="badge bg-warning text-wd mb-3">Roadmaps</div>
                  <h4 class="card-title title-3 text-white">Phase 2</h4>
                </div>
                <div class="card-text">
                  <ul class="list-group list-group-flush list-road">
<li class="list-group-item">
                      <div class="media">
                        <i class="bi bi-x opacity-50 me-2"></i>
                        <div class="media-body">5.000 Member Telegram</div>
                      </div>
                    </li>
<li class="list-group-item">
                      <div class="media">
                        <i class="bi bi-x opacity-50 me-2"></i>
                        <div class="media-body">$500.000 Market Caps</div>
                      </div>
                    </li>
<li class="list-group-item">
                      <div class="media">
                        <i class="bi bi-x opacity-50 me-2"></i>
                        <div class="media-body">BIG MARKETING PROMOTION</div>
                      </div>
                    </li>
<li class="list-group-item">
                      <div class="media">
                        <i class="bi bi-x opacity-50 me-2"></i>
                        <div class="media-body">$1.000.000 Market Caps</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="card grad-1 border-0">
              <div class="card-body">
                <div class="">
                  <div class="badge bg-warning text-wd mb-3">Roadmaps</div>
                  <h4 class="card-title title-3 text-white">Phase 3</h4>
                </div>
                <div class="card-text">
                  <ul class="list-group list-group-flush list-road">
                  <li class="list-group-item">
                      <div class="media">
                        <i class="bi bi-x opacity-50 me-2"></i>
                        <div class="media-body">Listing CG</div>
                      </div>
                    </li>
<li class="list-group-item">
                      <div class="media">
                        <i class="bi bi-x opacity-50 me-2"></i>
                        <div class="media-body">Listing CMC</div>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <div class="media">
                        <i class="bi bi-x me-2 opacity-50"></i>
                        <div class="media-body">Audit Certik</div>
                    </div>
                  </li>
<li class="list-group-item">
                      <div class="media">
                        <i class="bi bi-x me-2 opacity-50"></i>
                        <div class="media-body">Launch Apps</div>
                    </div>
                  </li>
<li class="list-group-item">
                      <div class="media">
                        <i class="bi bi-x me-2 opacity-50"></i>
                        <div class="media-body">Listing CEX</div>
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
                  <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-one" aria-expanded="false" aria-controls="flush-one">
      What is BAF Token?
      </button>
    </h2>
    <div id="flush-one" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
      BAF Token or Beasties and Friend is a community token that supports Magic Beasties in developing their projects.

      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-two" aria-expanded="false" aria-controls="flush-two">
      Where can i buy BAF Token?
      </button>
    </h2>
    <div id="flush-two" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
      You can buy it on Pancakeswap with our Smart Contract on Pinned Message Group
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="three">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      How to get the reward ?
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="three" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
      You can claim manually on Bscscan or just waiting and gifts will be automatically shipped
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="four">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefour" aria-expanded="false" aria-controls="flush-collapsefour">
      Is BAF Token safe?
      </button>
    </h2>
    <div id="flush-collapsefour" class="accordion-collapse collapse" aria-labelledby="four" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
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
