import React, {useState} from "react";
import CommonSection from "../components/ui/Common-section/CommonSection";
import NftCard from "../components/ui/Nft-card/NftCard";
import { NFT__DATA } from "../assets/data/data";
import { Container, Row, Col } from "reactstrap";
import '../styles/market.css';

const Market = () => {

  const [data,setData] = useState(NFT__DATA)

  const handleCategories = () => {

  }

  const handleItems = () => {
    
  }

  // SORTING DATA BY HIGH, MID, LOW RATES
  const handleSort = (e) => {
    const filterValue = e.target.value;
    if(filterValue === 'high') {
      const filterData = NFT__DATA.filter(item => item.currentBid >= 6)
      setData(filterData)
    }
    else if (filterValue === 'mid') {
      const filterData = NFT__DATA.filter(item => item.currentBid >= 5.5 && item.currentBid < 6)
      setData(filterData)
    }
    else {
      const filterData = NFT__DATA.filter(item => item.currentBid >= 4.89 && item.currentBid < 5.5)
      setData(filterData)
    }
  }

  return (
    <>
      <CommonSection title={"Marketplace"} />
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <div className="market__product__filter d-flex align-items-center justify-content-between">
                <div className="filter__left d-flex align-items-center gap-5">
                  <div className="all__category__filter">
                    <select onChange={handleCategories}>
                      <option>All Categories</option>
                      <option value="art">Art</option>
                      <option value="music">Music</option>
                      <option value="domain-name">Domain Name</option>
                      <option value="virtual-world">Virtual World</option>
                      <option value="trending-card">Trending Card</option>
                    </select>
                  </div>
                  <div className="all__items__filter">
                    <select onChange={handleItems}>
                      <option>All Items</option>
                      <option value="single-items">Single Items</option>
                      <option value="bundle-items">Bundle Items</option>
                    </select>
                  </div>
                </div>
                <div className="filter__right">
                  <select onChange={handleSort}>
                    <option>Sort By</option>
                    <option value="high">High Rate</option>
                    <option value="mid">Mid Rate</option>
                    <option value="low">Low Rate</option>
                  </select>
                </div>
              </div>
            </Col>
            {data.map((item) => (
              <Col lg="3" md="4" sm="6" className="mb-4" key={item.id}>
                <NftCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Market;
