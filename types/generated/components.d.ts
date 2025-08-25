import type { Schema, Struct } from '@strapi/strapi';

export interface ProductsProducts extends Struct.ComponentSchema {
  collectionName: 'components_products_products';
  info: {
    displayName: 'products';
    icon: 'archive';
  };
  attributes: {
    available: Schema.Attribute.Boolean;
    description: Schema.Attribute.Text;
    flower_details: Schema.Attribute.JSON;
    image_url: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    name: Schema.Attribute.String;
    price: Schema.Attribute.Decimal;
    stock: Schema.Attribute.Integer;
    type: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'products.products': ProductsProducts;
    }
  }
}
