import { takeEvery } from 'redux-saga/effects';
import ShopActionTypes from "./shop.actions"

function* fetchCollectionStart(){
    yield takeEvery(ShopActionTypes.F)
}
