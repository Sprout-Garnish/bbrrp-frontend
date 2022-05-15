/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { RestaurantWhereUniqueInput, UserRoleType, ImageExtension } from "./globalTypes";

// ====================================================
// GraphQL query operation: RestaurantQuery
// ====================================================

export interface RestaurantQuery_restaurant_location {
  __typename: "location";
  lat: number | null;
  lng: number | null;
}

export interface RestaurantQuery_restaurant_owner {
  __typename: "User";
  id: string;
  name: string | null;
  nickname: string | null;
  isAdmin: boolean | null;
  phone: string | null;
  email: string | null;
  role: UserRoleType | null;
}

export interface RestaurantQuery_restaurant_images_image {
  __typename: "LocalImageFieldOutput" | "CloudImageFieldOutput";
  id: string;
  filesize: number;
  width: number;
  height: number;
  extension: ImageExtension;
  ref: string;
  url: string;
}

export interface RestaurantQuery_restaurant_images {
  __typename: "Image";
  id: string;
  name: string | null;
  description: string | null;
  image: RestaurantQuery_restaurant_images_image | null;
}

export interface RestaurantQuery_restaurant_reviews_user {
  __typename: "User";
  id: string;
  name: string | null;
  nickname: string | null;
  role: UserRoleType | null;
  isAdmin: boolean | null;
}

export interface RestaurantQuery_restaurant_reviews_images_image {
  __typename: "LocalImageFieldOutput" | "CloudImageFieldOutput";
  id: string;
  filesize: number;
  width: number;
  height: number;
  extension: ImageExtension;
  ref: string;
  url: string;
}

export interface RestaurantQuery_restaurant_reviews_images {
  __typename: "Image";
  id: string;
  name: string | null;
  description: string | null;
  image: RestaurantQuery_restaurant_reviews_images_image | null;
}

export interface RestaurantQuery_restaurant_reviews {
  __typename: "Review";
  id: string;
  user: RestaurantQuery_restaurant_reviews_user | null;
  images: RestaurantQuery_restaurant_reviews_images[] | null;
  imagesCount: number | null;
  timestamp: any | null;
  edited: boolean | null;
  title: string | null;
  content: string | null;
  likes: number | null;
}

export interface RestaurantQuery_restaurant {
  __typename: "Restaurant";
  id: string;
  name: string | null;
  description: string | null;
  location: RestaurantQuery_restaurant_location | null;
  owner: RestaurantQuery_restaurant_owner | null;
  reservationPrice: number | null;
  info: string | null;
  images: RestaurantQuery_restaurant_images[] | null;
  imagesCount: number | null;
  reviews: RestaurantQuery_restaurant_reviews[] | null;
  reviewsCount: number | null;
}

export interface RestaurantQuery {
  restaurant: RestaurantQuery_restaurant | null;
}

export interface RestaurantQueryVariables {
  where: RestaurantWhereUniqueInput;
}
