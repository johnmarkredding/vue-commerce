'use strict';
import totalItemsHelper from "./totalItems";
import formatPriceHelper from "./formatPrice";
import createProductHelper from "./createProduct";


export const totalItems = totalItemsHelper;
export const createProduct = createProductHelper;
export const formatPrice = formatPriceHelper;
export default { totalItems, formatPrice, createProduct };