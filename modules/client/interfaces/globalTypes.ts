/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum ImageExtension {
  gif = "gif",
  jpg = "jpg",
  png = "png",
  webp = "webp",
}

export enum OrderDirection {
  asc = "asc",
  desc = "desc",
}

export enum QueryMode {
  default = "default",
  insensitive = "insensitive",
}

export enum UserRoleType {
  Customer = "Customer",
  Owner = "Owner",
}

export interface BooleanFilter {
  equals?: boolean | null;
  not?: BooleanFilter | null;
}

export interface DateTimeFilter {
  equals?: any | null;
  in?: any[] | null;
  notIn?: any[] | null;
  lt?: any | null;
  lte?: any | null;
  gt?: any | null;
  gte?: any | null;
  not?: DateTimeFilter | null;
}

export interface DateTimeNullableFilter {
  equals?: any | null;
  in?: any[] | null;
  notIn?: any[] | null;
  lt?: any | null;
  lte?: any | null;
  gt?: any | null;
  gte?: any | null;
  not?: DateTimeNullableFilter | null;
}

export interface FloatFilter {
  equals?: number | null;
  in?: number[] | null;
  notIn?: number[] | null;
  lt?: number | null;
  lte?: number | null;
  gt?: number | null;
  gte?: number | null;
  not?: FloatFilter | null;
}

export interface IDFilter {
  equals?: string | null;
  in?: string[] | null;
  notIn?: string[] | null;
  lt?: string | null;
  lte?: string | null;
  gt?: string | null;
  gte?: string | null;
  not?: IDFilter | null;
}

export interface ImageCreateInput {
  name?: string | null;
  description?: string | null;
  image?: ImageFieldInput | null;
}

export interface ImageFieldInput {
  upload?: any | null;
  ref?: string | null;
}

export interface ImageManyRelationFilter {
  every?: ImageWhereInput | null;
  some?: ImageWhereInput | null;
  none?: ImageWhereInput | null;
}

export interface ImageRelateToManyForCreateInput {
  create?: ImageCreateInput[] | null;
  connect?: ImageWhereUniqueInput[] | null;
}

export interface ImageRelateToManyForUpdateInput {
  disconnect?: ImageWhereUniqueInput[] | null;
  set?: ImageWhereUniqueInput[] | null;
  create?: ImageCreateInput[] | null;
  connect?: ImageWhereUniqueInput[] | null;
}

export interface ImageWhereInput {
  AND?: ImageWhereInput[] | null;
  OR?: ImageWhereInput[] | null;
  NOT?: ImageWhereInput[] | null;
  id?: IDFilter | null;
  name?: StringFilter | null;
  description?: StringFilter | null;
}

export interface ImageWhereUniqueInput {
  id?: string | null;
}

export interface IntFilter {
  equals?: number | null;
  in?: number[] | null;
  notIn?: number[] | null;
  lt?: number | null;
  lte?: number | null;
  gt?: number | null;
  gte?: number | null;
  not?: IntFilter | null;
}

export interface IntNullableFilter {
  equals?: number | null;
  in?: number[] | null;
  notIn?: number[] | null;
  lt?: number | null;
  lte?: number | null;
  gt?: number | null;
  gte?: number | null;
  not?: IntNullableFilter | null;
}

export interface NestedStringFilter {
  equals?: string | null;
  in?: string[] | null;
  notIn?: string[] | null;
  lt?: string | null;
  lte?: string | null;
  gt?: string | null;
  gte?: string | null;
  contains?: string | null;
  startsWith?: string | null;
  endsWith?: string | null;
  not?: NestedStringFilter | null;
}

export interface ReservationCreateInput {
  time?: any | null;
  reservationFee?: number | null;
  refund?: number | null;
  user?: UserRelateToOneForCreateInput | null;
  restaurant?: RestaurantRelateToOneForCreateInput | null;
}

export interface ReservationManyRelationFilter {
  every?: ReservationWhereInput | null;
  some?: ReservationWhereInput | null;
  none?: ReservationWhereInput | null;
}

export interface ReservationRelateToManyForCreateInput {
  create?: ReservationCreateInput[] | null;
  connect?: ReservationWhereUniqueInput[] | null;
}

export interface ReservationWhereInput {
  AND?: ReservationWhereInput[] | null;
  OR?: ReservationWhereInput[] | null;
  NOT?: ReservationWhereInput[] | null;
  id?: IDFilter | null;
  time?: DateTimeFilter | null;
  reservationFee?: IntFilter | null;
  refund?: IntNullableFilter | null;
  user?: UserWhereInput | null;
  restaurant?: RestaurantWhereInput | null;
}

export interface ReservationWhereUniqueInput {
  id?: string | null;
}

export interface RestaurantCreateInput {
  name?: string | null;
  description?: string | null;
  locationRaw?: string | null;
  category?: string | null;
  owner?: UserRelateToOneForCreateInput | null;
  reservationPrice?: number | null;
  info?: string | null;
  images?: ImageRelateToManyForCreateInput | null;
  reviews?: ReviewRelateToManyForCreateInput | null;
}

export interface RestaurantManyRelationFilter {
  every?: RestaurantWhereInput | null;
  some?: RestaurantWhereInput | null;
  none?: RestaurantWhereInput | null;
}

export interface RestaurantOrderByInput {
  id?: OrderDirection | null;
  name?: OrderDirection | null;
  description?: OrderDirection | null;
  locationRaw?: OrderDirection | null;
  category?: OrderDirection | null;
  reservationPrice?: OrderDirection | null;
  info?: OrderDirection | null;
}

export interface RestaurantRelateToManyForCreateInput {
  create?: RestaurantCreateInput[] | null;
  connect?: RestaurantWhereUniqueInput[] | null;
}

export interface RestaurantRelateToOneForCreateInput {
  create?: RestaurantCreateInput | null;
  connect?: RestaurantWhereUniqueInput | null;
}

export interface RestaurantUpdateInput {
  name?: string | null;
  description?: string | null;
  locationRaw?: string | null;
  category?: string | null;
  owner?: UserRelateToOneForUpdateInput | null;
  reservationPrice?: number | null;
  info?: string | null;
  images?: ImageRelateToManyForUpdateInput | null;
  reviews?: ReviewRelateToManyForUpdateInput | null;
}

export interface RestaurantWhereInput {
  AND?: RestaurantWhereInput[] | null;
  OR?: RestaurantWhereInput[] | null;
  NOT?: RestaurantWhereInput[] | null;
  id?: IDFilter | null;
  name?: StringFilter | null;
  description?: StringFilter | null;
  locationRaw?: StringFilter | null;
  category?: StringFilter | null;
  owner?: UserWhereInput | null;
  reservationPrice?: FloatFilter | null;
  info?: StringFilter | null;
  images?: ImageManyRelationFilter | null;
  reviews?: ReviewManyRelationFilter | null;
}

export interface RestaurantWhereUniqueInput {
  id?: string | null;
}

export interface ReviewCreateInput {
  user?: UserRelateToOneForCreateInput | null;
  images?: ImageRelateToManyForCreateInput | null;
  timestamp?: any | null;
  edited?: boolean | null;
  title?: string | null;
  content?: string | null;
  likes?: number | null;
  restaurant?: RestaurantRelateToOneForCreateInput | null;
}

export interface ReviewManyRelationFilter {
  every?: ReviewWhereInput | null;
  some?: ReviewWhereInput | null;
  none?: ReviewWhereInput | null;
}

export interface ReviewRelateToManyForCreateInput {
  create?: ReviewCreateInput[] | null;
  connect?: ReviewWhereUniqueInput[] | null;
}

export interface ReviewRelateToManyForUpdateInput {
  disconnect?: ReviewWhereUniqueInput[] | null;
  set?: ReviewWhereUniqueInput[] | null;
  create?: ReviewCreateInput[] | null;
  connect?: ReviewWhereUniqueInput[] | null;
}

export interface ReviewWhereInput {
  AND?: ReviewWhereInput[] | null;
  OR?: ReviewWhereInput[] | null;
  NOT?: ReviewWhereInput[] | null;
  id?: IDFilter | null;
  user?: UserWhereInput | null;
  images?: ImageManyRelationFilter | null;
  timestamp?: DateTimeNullableFilter | null;
  edited?: BooleanFilter | null;
  title?: StringFilter | null;
  content?: StringFilter | null;
  likes?: IntNullableFilter | null;
  restaurant?: RestaurantWhereInput | null;
}

export interface ReviewWhereUniqueInput {
  id?: string | null;
}

export interface StringFilter {
  equals?: string | null;
  in?: string[] | null;
  notIn?: string[] | null;
  lt?: string | null;
  lte?: string | null;
  gt?: string | null;
  gte?: string | null;
  contains?: string | null;
  startsWith?: string | null;
  endsWith?: string | null;
  mode?: QueryMode | null;
  not?: NestedStringFilter | null;
}

export interface UserCreateInput {
  name?: string | null;
  nickname?: string | null;
  isAdmin?: boolean | null;
  phone?: string | null;
  email?: string | null;
  password?: string | null;
  role?: UserRoleType | null;
  restaurants?: RestaurantRelateToManyForCreateInput | null;
  reservations?: ReservationRelateToManyForCreateInput | null;
  bookmarks?: RestaurantRelateToManyForCreateInput | null;
  reviews?: ReviewRelateToManyForCreateInput | null;
}

export interface UserRelateToOneForCreateInput {
  create?: UserCreateInput | null;
  connect?: UserWhereUniqueInput | null;
}

export interface UserRelateToOneForUpdateInput {
  create?: UserCreateInput | null;
  connect?: UserWhereUniqueInput | null;
  disconnect?: boolean | null;
}

export interface UserRoleTypeNullableFilter {
  equals?: UserRoleType | null;
  in?: UserRoleType[] | null;
  notIn?: UserRoleType[] | null;
  not?: UserRoleTypeNullableFilter | null;
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | null;
  OR?: UserWhereInput[] | null;
  NOT?: UserWhereInput[] | null;
  id?: IDFilter | null;
  name?: StringFilter | null;
  nickname?: StringFilter | null;
  isAdmin?: BooleanFilter | null;
  phone?: StringFilter | null;
  email?: StringFilter | null;
  role?: UserRoleTypeNullableFilter | null;
  restaurants?: RestaurantManyRelationFilter | null;
  reservations?: ReservationManyRelationFilter | null;
  bookmarks?: RestaurantManyRelationFilter | null;
  reviews?: ReviewManyRelationFilter | null;
}

export interface UserWhereUniqueInput {
  id?: string | null;
  email?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================

export {}