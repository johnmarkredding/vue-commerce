'use strict';
import formatPriceHelper from "./formatPrice";
import createProductHelper from "./createProduct";
import fetchFakeApiHelper from "./fetchFakeApi";
import filterProductsHelper from "./filterProducts";

export const createProduct = createProductHelper;
export const formatPrice = formatPriceHelper;
export const fetchFakeApi = fetchFakeApiHelper;
export const filterProducts = filterProductsHelper;
export default { formatPrice, createProduct, fetchFakeApi, filterProducts };