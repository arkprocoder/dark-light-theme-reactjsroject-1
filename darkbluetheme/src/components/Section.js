import React from "react";

export default function Section(props) {
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-4">
            <div className="card m-3">
              <div
                className={`card-body text-${
                  props.mode === "dark" ? "light" : "dark"
                } bg-${props.mode === "light" ? "light" : "dark"}`}
              >
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card m-3">
              <div
                className={`card-body text-${
                  props.mode === "dark" ? "light" : "dark"
                } bg-${props.mode === "light" ? "light" : "dark"}`}
              >
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card m-3">
              <div
                className={`card-body text-${
                  props.mode === "dark" ? "light" : "dark"
                } bg-${props.mode === "light" ? "light" : "dark"}`}
              >
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card m-3">
              <div
                className={`card-body text-${
                  props.mode === "dark" ? "light" : "dark"
                } bg-${props.mode === "light" ? "light" : "dark"}`}
              >
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card m-3">
              <div
                className={`card-body text-${
                  props.mode === "dark" ? "light" : "dark"
                } bg-${props.mode === "light" ? "light" : "dark"}`}
              >
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card m-3">
              <div
                className={`card-body text-${
                  props.mode === "dark" ? "light" : "dark"
                } bg-${props.mode === "light" ? "light" : "dark"}`}
              >
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </>
  );
}
