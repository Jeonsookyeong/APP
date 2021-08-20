class Product {
  constructor(
    id,
    ownerId,
    createdAt,
    title,
    category,
    imageUrl,
    description,
    price
  ) {
    this.id = id;
    this.ownerId = ownerId;
    this.createdAt = createdAt;
    this.title = title;
    this.category = category;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }
}

export default Product;
