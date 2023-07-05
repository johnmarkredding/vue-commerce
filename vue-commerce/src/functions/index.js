'use strict';
import formatPriceHelper from "@/functions/formatPrice";
import createProductHelper from "@/functions/createProduct";
import fetchFakeApiHelper from "@/functions/fetchFakeApi";
import filterProductsHelper from "@/functions/filterProducts";

export const createProduct = createProductHelper;
export const formatPrice = formatPriceHelper;
export const fetchFakeApi = fetchFakeApiHelper;
export const filterProducts = filterProductsHelper;
export default { formatPrice, createProduct, fetchFakeApi, filterProducts };