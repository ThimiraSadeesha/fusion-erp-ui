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


interface ProductDetailsDTO {
    productId: number;
    productName: string;
    description: string;
    basePrice: number;
    cost: number;
}


interface VariantDetailsDTO {
    variantId: number;
    weight: number;
    price: number;
}


interface OrderItemDTO {
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
interface ShopDetailsDTO {
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
