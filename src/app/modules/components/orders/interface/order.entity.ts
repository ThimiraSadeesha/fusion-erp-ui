export interface FindOrderDTO {
    orderId: number
    shopName: string
    orderDate: string
    orderStatus: string
    paymentType: string
    salesRepName: string
    orderReference: string

}

export interface OrderData{
    orderId: number
    shopName: string
    orderDate: string
    orderStatus: string
    paymentType: string
    salesRepName: string
    orderReference: string
}


export interface ProductDetailsDTO {
    productId: number;
    productName: string;
    description: string;
    basePrice: number;
    unit: string;
    cost: number;
}


export interface VariantDetailsDTO {
    variantId: number;
    weight: number;
    price: number;
}


export interface OrderItemDTO {
    orderItemId: number;
    productId: number;
    quantity: number;
    price: number;
    totalPrice: number;
    status: string;
    variantId: number;
    productDetails: ProductDetailsDTO;
    variantDetails: VariantDetailsDTO;
}

// DTO for Shop Details
export interface ShopDetailsDTO {
    shopId: number;
    shopCode: string;
    fullName: string;
    shortName: string;
    address: string;
    mobile: string;
    routeId: number;
    status: string;
}

// DTO for Order
export interface GetOrderDTO {
    orderId: number;
    status: string;
    shopId: number;
    salesRepId: number;
    orderReference: string;
    orderDate: string;
    paymentType: string;
    shopDetails: ShopDetailsDTO;
    orderItems: OrderItemDTO[];
}

export interface ViewData {
    orderId: number;
    status: string;
    shopId: number;
    salesRepId: number;
    orderReference: string;
    orderDate: string;
    paymentType: string;
    shopDetails: ShopDetails;
    orderItems: OrderItem[];
}

export interface ShopDetails {
    shopId: number;
    shopCode: string;
    fullName: string;
    shortName: string;
    address: string;
    mobile: string;
    routeId: number;
    status: string;
}

export interface OrderItem {
    orderItemId: number;
    productId: number;
    quantity: number;
    price: number;
    totalPrice: number;
    status: string; //
    variantId: number;
    productDetails: ProductDetails;
    variantDetails: VariantDetails;
}

export interface ProductDetails {
    productId: number;
    productName: string;
    description: string;
    unit: string;
    basePrice: number;
    cost: number;
}

export interface VariantDetails {
    variantId: number;
    weight: number;
    price: number;
}

export interface OrderItemsData {
    orderItemId: number;
    productId: number;
    quantity: number;
    price: number;
    totalPrice: number;
    status: string; //
    variantId: number;
    productDetails: ProductDetails;
    variantDetails: VariantDetails;
}

export interface ProductDetails {
    productId: number;
    productName: string;
    description: string;
    unit: string;
    basePrice: number;
    cost: number;
}

export interface VariantDetails {
    variantId: number;
    weight: number;
    price: number;
}

