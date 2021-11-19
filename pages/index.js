import Image from 'next/image'
import React from 'react'

export default function Home() {
  return (
    <>
            <div className="row mb-4">
              <div className="col-md-6">
                <div className="p-5">
                <h1 className="fw-bolder">About us beasties and friend</h1>
                <p className="my-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam sint odio ad facilis amet quaerat magni assumenda, est blanditiis hic libero </p>
                <a href="javascript:void(0)" className="btn  btn-grad-1 me-3">Trade now</a>
                <a href="javascript:void(0)" className="btn  btn-outline-danger">White Paper</a>
                </div>
              </div>
              <div className="col-md-6">
                <img src="https://dummyimage.com/600x400" alt="" width="100%" className="rounded-cs" />
              </div>
            </div>

            <section className="space-m">
              <div className="contianer">
              {/* <h3 className="fw-bolder">Roadmaps</h3> */}

              <ol className="timeline timeline-content-center timeline-point-sm" id="demo-timeline-size">

              <li className="timeline-block">
            <div className="timeline-detail"></div>
            <div className="timeline-point">
              <span className="bi bi-dot text-danger"></span>
            </div>
            <div className="timeline-content">
              <div className="card card-body">
                <p>You might want to place your content inside a <code>.card</code></p>
              </div>
            </div>
          </li>
              <li className="timeline-block">
            <div className="timeline-detail"></div>
            <div className="timeline-point">
              <span className="bi bi-dot text-danger"></span>
            </div>
            <div className="timeline-content">
              <div className="card card-body">
                <p>You might want to place your content inside a <code>.card</code></p>
              </div>
            </div>
          </li>
              <li className="timeline-block">
            <div className="timeline-detail"></div>
            <div className="timeline-point">
              <span className="bi bi-dot text-danger"></span>
            </div>
            <div className="timeline-content">
              <div className="card card-body">
                <p>You might want to place your content inside a <code>.card</code></p>
              </div>
            </div>
          </li>
              
              </ol>

              </div>
            </section>

        </>
  )
}
