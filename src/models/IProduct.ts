// Модель товару: описує, які поля є в одного товару з сервера
// Вона потрібна TypeScript для підказок і перевірок, на роботу сайту не впливає
export interface IProduct
{
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: IDimensions;
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: IReviews[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: IMeta;
    images: string[];
    thumbnail: string;
}

// Розміри товару (без export, бо використовується тільки в цьому файлі)
interface IDimensions
{
    width: number;
    height: number;
    depth: number;
}

// Один відгук
interface IReviews
{
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
}

// Додаткова службова інформація про товар
interface IMeta
{
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
}
