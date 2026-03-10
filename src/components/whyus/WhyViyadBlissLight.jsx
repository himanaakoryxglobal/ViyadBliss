"use client";

export default function WhyViyadBlissLight() {
  return (
    <section className="py-5 bg-light">

      <div className="container text-center">

        <h2 className="fw-bold mb-4">
          Why Stay at <span className="text-warning">Viyad Bliss?</span>
        </h2>

        <p className="lead text-muted mx-auto" style={{maxWidth:"800px"}}>
          The life you’ve been chasing has finally stopped to wait for you.
          In the relentless rush of cities like Pune and Mumbai, we often
          compromise — trading space for proximity and nature for convenience.
        </p>

        <p className="text-muted mx-auto mb-5" style={{maxWidth:"850px"}}>
          At <strong>Viyad Bliss</strong>, we believe life should be lived
          differently. Instead of cramped apartments and concrete views,
          imagine waking up to open skies, fresh air, and nature all around.
          This is not just a place to stay — it is a place to truly live.
        </p>

        <div className="row g-4">

          <div className="col-md-4">
            <div className="p-4 shadow-sm rounded bg-white h-100">
              <h5 className="fw-bold mb-2">Nature First Living</h5>
              <p className="text-muted">
                Surrounded by lush greenery, hills and fresh coastal air.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="p-4 shadow-sm rounded bg-white h-100">
              <h5 className="fw-bold mb-2">Spacious Lifestyle</h5>
              <p className="text-muted">
                Large plots and open spaces instead of crowded city living.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="p-4 shadow-sm rounded bg-white h-100">
              <h5 className="fw-bold mb-2">Peaceful Escape</h5>
              <p className="text-muted">
                A retreat where you reconnect with nature and yourself.
              </p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}