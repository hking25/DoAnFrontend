import React from 'react';

const ShopSingleSearch = () => {
    return (
        <>
            <div className="align-self-center p-8">
                <div className="mb-3">
                    <h5 className="mb-0 fw-bold">E-Grocery Super Market</h5>
                    <p className="mb-0 text-muted">
                        Whatever the occasion, we've got you covered.
                    </p>
                </div>
                <div className="position-relative">
                    <input
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Search E-Grocery Super Market"
                    />
                    <span className="position-absolute end-0 top-0 mt-2 me-3">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          width={14}
          height={14}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-search"
      >
        <circle cx={11} cy={11} r={8} />
        <line x1={21} y1={21} x2="16.65" y2="16.65" />
      </svg>
    </span>
                </div>
            </div>

        </>
    );
};

export default ShopSingleSearch;