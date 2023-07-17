import React from "react";
import CustomButton from "../custom-button/custom-button";
import "./collection-item.scss";
import { connect } from "react-redux";
import { addItems } from "../../redux/cart/cart.action";
const CollectionItem = ({ item, addItems }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => addItems(item)} inverted>
        Add to Cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItems: (item) => dispatch(addItems(item)),
});
export default connect(null, mapDispatchToProps)(CollectionItem);
