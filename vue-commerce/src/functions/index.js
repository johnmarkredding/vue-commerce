'use strict';
import totalItemsHelper from "./totalItems";
import formatPriceHelper from "./formatPrice";
import createProductHelper from "./createProduct";
import fetchFakeApiHelper from "./fetchFakeApi";
import filterProductsHelper from "./filterProducts";


export const totalItems = totalItemsHelper;
export const createProduct = createProductHelper;
export const formatPrice = formatPriceHelper;
export const fetchFakeApi = fetchFakeApiHelper;
export const filterProducts = filterProductsHelper;
export default { totalItems, formatPrice, createProduct, fetchFakeApi, filterProducts };