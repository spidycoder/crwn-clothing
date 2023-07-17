import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  collection,
  getFirestore,
  onSnapshot,
  query,
} from "firebase/firestore";
import { app } from "../../firebase/firebase-initialise";
import WithSpinner from "../../component/with-spinner/with-spinner.component";

import CollectionPage from "../collection/collection.component";
import CollectionsOverview from "../../component/collection-overview/collection-overview.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;
  state = {
    loading: true,
    data: [],
  };

  componentDidMount() {
    this.fetchData();
  }

  componentWillUnmount() {
    if (this.unsubscribeFromSnapshot) {
      this.unsubscribeFromSnapshot();
    }
  }

  fetchData = async () => {
    try {
      const db = getFirestore(app);
      const collectionRef = collection(db, "ShopData");
      const q = query(collectionRef);

      this.unsubscribeFromSnapshot = onSnapshot(q, (snapshot) => {
        const newData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        this.setState({ data: newData, loading: false });
      });
      
    } catch (error) {
      console.error("Error retrieving data: ", error);
      this.setState({ loading: false });
    }
  };

  render() {
    const { loading, data } = this.state;

    return (
      <div className="shop-page">
        <Routes>
          {/* this is rendering without WithSpinner */}
          {/* <Route path="/" element={<CollectionsOverview/>}/> */}
          {/* <Route path="/:collectionId" element={<CollectionPage />} /> */}

          {/* this rendering is done with WithSpinner */}
          <Route
            path="/"
            element={
              <CollectionsOverviewWithSpinner isLoading={loading} data={data} />
            }
          />
          <Route
            path="/:collectionId"
            element={
              <CollectionPageWithSpinner isLoading={loading} data={data} />
            }
          />
        </Routes>
      </div>
    );
  }
}

export default ShopPage;
