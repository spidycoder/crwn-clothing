import React from "react";
import "./collection.styles.scss";
// import { connect } from "react-redux";
import { useParams } from "react-router-dom";
// import { selectCollection } from "../../redux/shop/shop.selector";
import CollectionItem from "../../component/collection-item/collection-item";
import SHOP_DATA from "../shop/shop.data";

const CollectionPage = ({ collection }) => {
  console.log("Printing Collection");
  console.log(collection);
  const { collectionId } = useParams();
  const collection1 = SHOP_DATA[collectionId];
  console.log("Printing CollectionId");
  console.log(collectionId);
  const { title, items, routeName,itemId } = collection1;
  console.log("Printing routeName");
  console.log(routeName);
  console.log("Printing Item Id");
  console.log(itemId);
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

// const mapStateToProps = (state, ownProps) => {
//   const { collectionId } = ownProps;
//   return {
//     collection: selectCollection(collectionId)(state),
//   };
// };

// export default connect(mapStateToProps)(CollectionPage);
export default CollectionPage;

