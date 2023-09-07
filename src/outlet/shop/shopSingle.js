import React from 'react';
import ShopSingleDetail from "../../components/shop/shopSingleDetail";
import ShopSingleMenu from "../../components/shop/shopSingleMenu";
import ShopSingleSearch from "../../components/shop/shopSingleSearch";
import ShopSingleView from "../../components/shop/shopSingleView";
import ShopSingleFilterViewLogin from "../../components/shop/shopSingleFilterViewLogin";
import ShopSingleFilterLogin from "../../components/shop/shopSingleFilterLogin";

const ShopSingle = () => {
    return (
        <>
            <section className="mb-lg-14 mb-8 mt-8">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-3 col-md-4 mb-4 mb-md-0">
                            <ShopSingleDetail></ShopSingleDetail>
                            <ShopSingleMenu></ShopSingleMenu>
                        </div>
                        <div className="col-12 col-lg-9 col-md-8">
                            <div className="mb-8 bg-light d-lg-flex justify-content-lg-between rounded">
                                <ShopSingleSearch></ShopSingleSearch>
                                <ShopSingleView></ShopSingleView>
                            </div>
                            <ShopSingleFilterLogin></ShopSingleFilterLogin>
                            <ShopSingleFilterViewLogin></ShopSingleFilterViewLogin>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default ShopSingle;