/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { RestaurantWhereInput, RestaurantOrderByInput, ImageExtension } from "./globalTypes";

// ====================================================
// GraphQL query operation: RestaurantsQuery
// ====================================================

export interface RestaurantsQuery_restaurants_location {
  __typename: "location";
  lat: number | null;
  lng: number | null;
}

export interface RestaurantsQuery_restaurants_owner {
  __typename: "User";
  id: string;
  nickname: string | null;
}

export interface RestaurantsQuery_restaurants_images_image {
  __typename: "LocalImageFieldOutput" | "CloudImageFieldOutput";
  id: string;
  extension: ImageExtension;
  ref: string;
  url: string;
}

export interface RestaurantsQuery_restaurants_images {
  __typename: "Image";
  id: string;
  name: string | null;
  image: RestaurantsQuery_restaurants_images_image | null;
}

export interface RestaurantsQuery_restaurants {
  __typename: "Restaurant";
  id: string;
  name: string | null;
  description: string | null;
  location: RestaurantsQuery_restaurants_location | null;
  category: string | null;
  owner: RestaurantsQuery_restaurants_owner | null;
  reservationPrice: number | null;
  reviewsCount: number | null;
  info: string | null;
  images: RestaurantsQuery_restaurants_images[] | null;
}

export interface RestaurantsQuery {
  restaurants: RestaurantsQuery_restaurants[] | null;
}

export interface RestaurantsQueryVariables {
  where: RestaurantWhereInput;
  orderBy: RestaurantOrderByInput[];
  take?: number | null;
  skip: number;
}
