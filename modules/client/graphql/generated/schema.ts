import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  JSON: any;
  Upload: any;
};

export type AuthenticatedItem = User;

export type BooleanFilter = {
  equals?: InputMaybe<Scalars["Boolean"]>;
  not?: InputMaybe<BooleanFilter>;
};

export type CloudImageFieldOutput = ImageFieldOutput & {
  __typename?: "CloudImageFieldOutput";
  extension: ImageExtension;
  filesize: Scalars["Int"];
  height: Scalars["Int"];
  id: Scalars["ID"];
  ref: Scalars["String"];
  url: Scalars["String"];
  width: Scalars["Int"];
};

export type CreateInitialUserInput = {
  email?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  password?: InputMaybe<Scalars["String"]>;
  phone?: InputMaybe<Scalars["String"]>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars["DateTime"]>;
  gt?: InputMaybe<Scalars["DateTime"]>;
  gte?: InputMaybe<Scalars["DateTime"]>;
  in?: InputMaybe<Array<Scalars["DateTime"]>>;
  lt?: InputMaybe<Scalars["DateTime"]>;
  lte?: InputMaybe<Scalars["DateTime"]>;
  not?: InputMaybe<DateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars["DateTime"]>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars["DateTime"]>;
  gt?: InputMaybe<Scalars["DateTime"]>;
  gte?: InputMaybe<Scalars["DateTime"]>;
  in?: InputMaybe<Array<Scalars["DateTime"]>>;
  lt?: InputMaybe<Scalars["DateTime"]>;
  lte?: InputMaybe<Scalars["DateTime"]>;
  not?: InputMaybe<DateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["DateTime"]>>;
};

export type FloatFilter = {
  equals?: InputMaybe<Scalars["Float"]>;
  gt?: InputMaybe<Scalars["Float"]>;
  gte?: InputMaybe<Scalars["Float"]>;
  in?: InputMaybe<Array<Scalars["Float"]>>;
  lt?: InputMaybe<Scalars["Float"]>;
  lte?: InputMaybe<Scalars["Float"]>;
  not?: InputMaybe<FloatFilter>;
  notIn?: InputMaybe<Array<Scalars["Float"]>>;
};

export type IdFilter = {
  equals?: InputMaybe<Scalars["ID"]>;
  gt?: InputMaybe<Scalars["ID"]>;
  gte?: InputMaybe<Scalars["ID"]>;
  in?: InputMaybe<Array<Scalars["ID"]>>;
  lt?: InputMaybe<Scalars["ID"]>;
  lte?: InputMaybe<Scalars["ID"]>;
  not?: InputMaybe<IdFilter>;
  notIn?: InputMaybe<Array<Scalars["ID"]>>;
};

export type Image = {
  __typename?: "Image";
  description?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  image?: Maybe<ImageFieldOutput>;
  name?: Maybe<Scalars["String"]>;
};

export type ImageCreateInput = {
  description?: InputMaybe<Scalars["String"]>;
  image?: InputMaybe<ImageFieldInput>;
  name?: InputMaybe<Scalars["String"]>;
};

export enum ImageExtension {
  Gif = "gif",
  Jpg = "jpg",
  Png = "png",
  Webp = "webp",
}

export type ImageFieldInput = {
  ref?: InputMaybe<Scalars["String"]>;
  upload?: InputMaybe<Scalars["Upload"]>;
};

export type ImageFieldOutput = {
  extension: ImageExtension;
  filesize: Scalars["Int"];
  height: Scalars["Int"];
  id: Scalars["ID"];
  ref: Scalars["String"];
  url: Scalars["String"];
  width: Scalars["Int"];
};

export type ImageManyRelationFilter = {
  every?: InputMaybe<ImageWhereInput>;
  none?: InputMaybe<ImageWhereInput>;
  some?: InputMaybe<ImageWhereInput>;
};

export type ImageOrderByInput = {
  description?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
};

export type ImageRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<ImageWhereUniqueInput>>;
  create?: InputMaybe<Array<ImageCreateInput>>;
};

export type ImageRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<ImageWhereUniqueInput>>;
  create?: InputMaybe<Array<ImageCreateInput>>;
  disconnect?: InputMaybe<Array<ImageWhereUniqueInput>>;
  set?: InputMaybe<Array<ImageWhereUniqueInput>>;
};

export type ImageUpdateArgs = {
  data: ImageUpdateInput;
  where: ImageWhereUniqueInput;
};

export type ImageUpdateInput = {
  description?: InputMaybe<Scalars["String"]>;
  image?: InputMaybe<ImageFieldInput>;
  name?: InputMaybe<Scalars["String"]>;
};

export type ImageWhereInput = {
  AND?: InputMaybe<Array<ImageWhereInput>>;
  NOT?: InputMaybe<Array<ImageWhereInput>>;
  OR?: InputMaybe<Array<ImageWhereInput>>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
};

export type ImageWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars["Int"]>;
  gt?: InputMaybe<Scalars["Int"]>;
  gte?: InputMaybe<Scalars["Int"]>;
  in?: InputMaybe<Array<Scalars["Int"]>>;
  lt?: InputMaybe<Scalars["Int"]>;
  lte?: InputMaybe<Scalars["Int"]>;
  not?: InputMaybe<IntFilter>;
  notIn?: InputMaybe<Array<Scalars["Int"]>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars["Int"]>;
  gt?: InputMaybe<Scalars["Int"]>;
  gte?: InputMaybe<Scalars["Int"]>;
  in?: InputMaybe<Array<Scalars["Int"]>>;
  lt?: InputMaybe<Scalars["Int"]>;
  lte?: InputMaybe<Scalars["Int"]>;
  not?: InputMaybe<IntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["Int"]>>;
};

export type KeystoneAdminMeta = {
  __typename?: "KeystoneAdminMeta";
  enableSessionItem: Scalars["Boolean"];
  enableSignout: Scalars["Boolean"];
  list?: Maybe<KeystoneAdminUiListMeta>;
  lists: Array<KeystoneAdminUiListMeta>;
};

export type KeystoneAdminMetaListArgs = {
  key: Scalars["String"];
};

export type KeystoneAdminUiFieldMeta = {
  __typename?: "KeystoneAdminUIFieldMeta";
  createView: KeystoneAdminUiFieldMetaCreateView;
  customViewsIndex?: Maybe<Scalars["Int"]>;
  fieldMeta?: Maybe<Scalars["JSON"]>;
  isFilterable: Scalars["Boolean"];
  isOrderable: Scalars["Boolean"];
  itemView?: Maybe<KeystoneAdminUiFieldMetaItemView>;
  label: Scalars["String"];
  listView: KeystoneAdminUiFieldMetaListView;
  path: Scalars["String"];
  search?: Maybe<QueryMode>;
  viewsIndex: Scalars["Int"];
};

export type KeystoneAdminUiFieldMetaItemViewArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type KeystoneAdminUiFieldMetaCreateView = {
  __typename?: "KeystoneAdminUIFieldMetaCreateView";
  fieldMode: KeystoneAdminUiFieldMetaCreateViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaCreateViewFieldMode {
  Edit = "edit",
  Hidden = "hidden",
}

export type KeystoneAdminUiFieldMetaItemView = {
  __typename?: "KeystoneAdminUIFieldMetaItemView";
  fieldMode?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldMode>;
};

export enum KeystoneAdminUiFieldMetaItemViewFieldMode {
  Edit = "edit",
  Hidden = "hidden",
  Read = "read",
}

export type KeystoneAdminUiFieldMetaListView = {
  __typename?: "KeystoneAdminUIFieldMetaListView";
  fieldMode: KeystoneAdminUiFieldMetaListViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaListViewFieldMode {
  Hidden = "hidden",
  Read = "read",
}

export type KeystoneAdminUiListMeta = {
  __typename?: "KeystoneAdminUIListMeta";
  description?: Maybe<Scalars["String"]>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  hideCreate: Scalars["Boolean"];
  hideDelete: Scalars["Boolean"];
  initialColumns: Array<Scalars["String"]>;
  initialSort?: Maybe<KeystoneAdminUiSort>;
  isHidden: Scalars["Boolean"];
  itemQueryName: Scalars["String"];
  key: Scalars["String"];
  label: Scalars["String"];
  labelField: Scalars["String"];
  listQueryName: Scalars["String"];
  pageSize: Scalars["Int"];
  path: Scalars["String"];
  plural: Scalars["String"];
  singular: Scalars["String"];
};

export type KeystoneAdminUiSort = {
  __typename?: "KeystoneAdminUISort";
  direction: KeystoneAdminUiSortDirection;
  field: Scalars["String"];
};

export enum KeystoneAdminUiSortDirection {
  Asc = "ASC",
  Desc = "DESC",
}

export type KeystoneMeta = {
  __typename?: "KeystoneMeta";
  adminMeta: KeystoneAdminMeta;
};

export type LocalImageFieldOutput = ImageFieldOutput & {
  __typename?: "LocalImageFieldOutput";
  extension: ImageExtension;
  filesize: Scalars["Int"];
  height: Scalars["Int"];
  id: Scalars["ID"];
  ref: Scalars["String"];
  url: Scalars["String"];
  width: Scalars["Int"];
};

export type Mutation = {
  __typename?: "Mutation";
  authenticateUserWithPassword?: Maybe<UserAuthenticationWithPasswordResult>;
  createImage?: Maybe<Image>;
  createImages?: Maybe<Array<Maybe<Image>>>;
  createInitialUser: UserAuthenticationWithPasswordSuccess;
  createReservation?: Maybe<Reservation>;
  createReservations?: Maybe<Array<Maybe<Reservation>>>;
  createRestaurant?: Maybe<Restaurant>;
  createRestaurants?: Maybe<Array<Maybe<Restaurant>>>;
  createReview?: Maybe<Review>;
  createReviews?: Maybe<Array<Maybe<Review>>>;
  createUser?: Maybe<User>;
  createUsers?: Maybe<Array<Maybe<User>>>;
  deleteImage?: Maybe<Image>;
  deleteImages?: Maybe<Array<Maybe<Image>>>;
  deleteReservation?: Maybe<Reservation>;
  deleteReservations?: Maybe<Array<Maybe<Reservation>>>;
  deleteRestaurant?: Maybe<Restaurant>;
  deleteRestaurants?: Maybe<Array<Maybe<Restaurant>>>;
  deleteReview?: Maybe<Review>;
  deleteReviews?: Maybe<Array<Maybe<Review>>>;
  deleteUser?: Maybe<User>;
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  endSession: Scalars["Boolean"];
  updateImage?: Maybe<Image>;
  updateImages?: Maybe<Array<Maybe<Image>>>;
  updateReservation?: Maybe<Reservation>;
  updateReservations?: Maybe<Array<Maybe<Reservation>>>;
  updateRestaurant?: Maybe<Restaurant>;
  updateRestaurants?: Maybe<Array<Maybe<Restaurant>>>;
  updateReview?: Maybe<Review>;
  updateReviews?: Maybe<Array<Maybe<Review>>>;
  updateUser?: Maybe<User>;
  updateUsers?: Maybe<Array<Maybe<User>>>;
};

export type MutationAuthenticateUserWithPasswordArgs = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type MutationCreateImageArgs = {
  data: ImageCreateInput;
};

export type MutationCreateImagesArgs = {
  data: Array<ImageCreateInput>;
};

export type MutationCreateInitialUserArgs = {
  data: CreateInitialUserInput;
};

export type MutationCreateReservationArgs = {
  data: ReservationCreateInput;
};

export type MutationCreateReservationsArgs = {
  data: Array<ReservationCreateInput>;
};

export type MutationCreateRestaurantArgs = {
  data: RestaurantCreateInput;
};

export type MutationCreateRestaurantsArgs = {
  data: Array<RestaurantCreateInput>;
};

export type MutationCreateReviewArgs = {
  data: ReviewCreateInput;
};

export type MutationCreateReviewsArgs = {
  data: Array<ReviewCreateInput>;
};

export type MutationCreateUserArgs = {
  data: UserCreateInput;
};

export type MutationCreateUsersArgs = {
  data: Array<UserCreateInput>;
};

export type MutationDeleteImageArgs = {
  where: ImageWhereUniqueInput;
};

export type MutationDeleteImagesArgs = {
  where: Array<ImageWhereUniqueInput>;
};

export type MutationDeleteReservationArgs = {
  where: ReservationWhereUniqueInput;
};

export type MutationDeleteReservationsArgs = {
  where: Array<ReservationWhereUniqueInput>;
};

export type MutationDeleteRestaurantArgs = {
  where: RestaurantWhereUniqueInput;
};

export type MutationDeleteRestaurantsArgs = {
  where: Array<RestaurantWhereUniqueInput>;
};

export type MutationDeleteReviewArgs = {
  where: ReviewWhereUniqueInput;
};

export type MutationDeleteReviewsArgs = {
  where: Array<ReviewWhereUniqueInput>;
};

export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};

export type MutationDeleteUsersArgs = {
  where: Array<UserWhereUniqueInput>;
};

export type MutationUpdateImageArgs = {
  data: ImageUpdateInput;
  where: ImageWhereUniqueInput;
};

export type MutationUpdateImagesArgs = {
  data: Array<ImageUpdateArgs>;
};

export type MutationUpdateReservationArgs = {
  data: ReservationUpdateInput;
  where: ReservationWhereUniqueInput;
};

export type MutationUpdateReservationsArgs = {
  data: Array<ReservationUpdateArgs>;
};

export type MutationUpdateRestaurantArgs = {
  data: RestaurantUpdateInput;
  where: RestaurantWhereUniqueInput;
};

export type MutationUpdateRestaurantsArgs = {
  data: Array<RestaurantUpdateArgs>;
};

export type MutationUpdateReviewArgs = {
  data: ReviewUpdateInput;
  where: ReviewWhereUniqueInput;
};

export type MutationUpdateReviewsArgs = {
  data: Array<ReviewUpdateArgs>;
};

export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type MutationUpdateUsersArgs = {
  data: Array<UserUpdateArgs>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars["String"]>;
  endsWith?: InputMaybe<Scalars["String"]>;
  equals?: InputMaybe<Scalars["String"]>;
  gt?: InputMaybe<Scalars["String"]>;
  gte?: InputMaybe<Scalars["String"]>;
  in?: InputMaybe<Array<Scalars["String"]>>;
  lt?: InputMaybe<Scalars["String"]>;
  lte?: InputMaybe<Scalars["String"]>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars["String"]>>;
  startsWith?: InputMaybe<Scalars["String"]>;
};

export enum OrderDirection {
  Asc = "asc",
  Desc = "desc",
}

export type PasswordState = {
  __typename?: "PasswordState";
  isSet: Scalars["Boolean"];
};

export type Query = {
  __typename?: "Query";
  authenticatedItem?: Maybe<AuthenticatedItem>;
  image?: Maybe<Image>;
  images?: Maybe<Array<Image>>;
  imagesCount?: Maybe<Scalars["Int"]>;
  keystone: KeystoneMeta;
  reservation?: Maybe<Reservation>;
  reservations?: Maybe<Array<Reservation>>;
  reservationsCount?: Maybe<Scalars["Int"]>;
  restaurant?: Maybe<Restaurant>;
  restaurants?: Maybe<Array<Restaurant>>;
  restaurantsCount?: Maybe<Scalars["Int"]>;
  review?: Maybe<Review>;
  reviews?: Maybe<Array<Review>>;
  reviewsCount?: Maybe<Scalars["Int"]>;
  user?: Maybe<User>;
  users?: Maybe<Array<User>>;
  usersCount?: Maybe<Scalars["Int"]>;
};

export type QueryImageArgs = {
  where: ImageWhereUniqueInput;
};

export type QueryImagesArgs = {
  orderBy?: Array<ImageOrderByInput>;
  skip?: Scalars["Int"];
  take?: InputMaybe<Scalars["Int"]>;
  where?: ImageWhereInput;
};

export type QueryImagesCountArgs = {
  where?: ImageWhereInput;
};

export type QueryReservationArgs = {
  where: ReservationWhereUniqueInput;
};

export type QueryReservationsArgs = {
  orderBy?: Array<ReservationOrderByInput>;
  skip?: Scalars["Int"];
  take?: InputMaybe<Scalars["Int"]>;
  where?: ReservationWhereInput;
};

export type QueryReservationsCountArgs = {
  where?: ReservationWhereInput;
};

export type QueryRestaurantArgs = {
  where: RestaurantWhereUniqueInput;
};

export type QueryRestaurantsArgs = {
  orderBy?: Array<RestaurantOrderByInput>;
  skip?: Scalars["Int"];
  take?: InputMaybe<Scalars["Int"]>;
  where?: RestaurantWhereInput;
};

export type QueryRestaurantsCountArgs = {
  where?: RestaurantWhereInput;
};

export type QueryReviewArgs = {
  where: ReviewWhereUniqueInput;
};

export type QueryReviewsArgs = {
  orderBy?: Array<ReviewOrderByInput>;
  skip?: Scalars["Int"];
  take?: InputMaybe<Scalars["Int"]>;
  where?: ReviewWhereInput;
};

export type QueryReviewsCountArgs = {
  where?: ReviewWhereInput;
};

export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};

export type QueryUsersArgs = {
  orderBy?: Array<UserOrderByInput>;
  skip?: Scalars["Int"];
  take?: InputMaybe<Scalars["Int"]>;
  where?: UserWhereInput;
};

export type QueryUsersCountArgs = {
  where?: UserWhereInput;
};

export enum QueryMode {
  Default = "default",
  Insensitive = "insensitive",
}

export type Reservation = {
  __typename?: "Reservation";
  id: Scalars["ID"];
  refund?: Maybe<Scalars["Int"]>;
  reservationFee?: Maybe<Scalars["Int"]>;
  restaurant?: Maybe<Restaurant>;
  time?: Maybe<Scalars["DateTime"]>;
  user?: Maybe<User>;
};

export type ReservationCreateInput = {
  refund?: InputMaybe<Scalars["Int"]>;
  reservationFee?: InputMaybe<Scalars["Int"]>;
  restaurant?: InputMaybe<RestaurantRelateToOneForCreateInput>;
  time?: InputMaybe<Scalars["DateTime"]>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type ReservationManyRelationFilter = {
  every?: InputMaybe<ReservationWhereInput>;
  none?: InputMaybe<ReservationWhereInput>;
  some?: InputMaybe<ReservationWhereInput>;
};

export type ReservationOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  refund?: InputMaybe<OrderDirection>;
  reservationFee?: InputMaybe<OrderDirection>;
  time?: InputMaybe<OrderDirection>;
};

export type ReservationRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<ReservationWhereUniqueInput>>;
  create?: InputMaybe<Array<ReservationCreateInput>>;
};

export type ReservationRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<ReservationWhereUniqueInput>>;
  create?: InputMaybe<Array<ReservationCreateInput>>;
  disconnect?: InputMaybe<Array<ReservationWhereUniqueInput>>;
  set?: InputMaybe<Array<ReservationWhereUniqueInput>>;
};

export type ReservationUpdateArgs = {
  data: ReservationUpdateInput;
  where: ReservationWhereUniqueInput;
};

export type ReservationUpdateInput = {
  refund?: InputMaybe<Scalars["Int"]>;
  reservationFee?: InputMaybe<Scalars["Int"]>;
  restaurant?: InputMaybe<RestaurantRelateToOneForUpdateInput>;
  time?: InputMaybe<Scalars["DateTime"]>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type ReservationWhereInput = {
  AND?: InputMaybe<Array<ReservationWhereInput>>;
  NOT?: InputMaybe<Array<ReservationWhereInput>>;
  OR?: InputMaybe<Array<ReservationWhereInput>>;
  id?: InputMaybe<IdFilter>;
  refund?: InputMaybe<IntNullableFilter>;
  reservationFee?: InputMaybe<IntFilter>;
  restaurant?: InputMaybe<RestaurantWhereInput>;
  time?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserWhereInput>;
};

export type ReservationWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type Restaurant = {
  __typename?: "Restaurant";
  category?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  images?: Maybe<Array<Image>>;
  imagesCount?: Maybe<Scalars["Int"]>;
  info?: Maybe<Scalars["String"]>;
  location?: Maybe<Location>;
  locationRaw?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  owner?: Maybe<User>;
  reservationPrice?: Maybe<Scalars["Float"]>;
  reviews?: Maybe<Array<Review>>;
  reviewsCount?: Maybe<Scalars["Int"]>;
};

export type RestaurantImagesArgs = {
  orderBy?: Array<ImageOrderByInput>;
  skip?: Scalars["Int"];
  take?: InputMaybe<Scalars["Int"]>;
  where?: ImageWhereInput;
};

export type RestaurantImagesCountArgs = {
  where?: ImageWhereInput;
};

export type RestaurantReviewsArgs = {
  orderBy?: Array<ReviewOrderByInput>;
  skip?: Scalars["Int"];
  take?: InputMaybe<Scalars["Int"]>;
  where?: ReviewWhereInput;
};

export type RestaurantReviewsCountArgs = {
  where?: ReviewWhereInput;
};

export type RestaurantCreateInput = {
  category?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  images?: InputMaybe<ImageRelateToManyForCreateInput>;
  info?: InputMaybe<Scalars["String"]>;
  locationRaw?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  owner?: InputMaybe<UserRelateToOneForCreateInput>;
  reservationPrice?: InputMaybe<Scalars["Float"]>;
  reviews?: InputMaybe<ReviewRelateToManyForCreateInput>;
};

export type RestaurantManyRelationFilter = {
  every?: InputMaybe<RestaurantWhereInput>;
  none?: InputMaybe<RestaurantWhereInput>;
  some?: InputMaybe<RestaurantWhereInput>;
};

export type RestaurantOrderByInput = {
  category?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  info?: InputMaybe<OrderDirection>;
  locationRaw?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  reservationPrice?: InputMaybe<OrderDirection>;
};

export type RestaurantRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<RestaurantWhereUniqueInput>>;
  create?: InputMaybe<Array<RestaurantCreateInput>>;
};

export type RestaurantRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<RestaurantWhereUniqueInput>>;
  create?: InputMaybe<Array<RestaurantCreateInput>>;
  disconnect?: InputMaybe<Array<RestaurantWhereUniqueInput>>;
  set?: InputMaybe<Array<RestaurantWhereUniqueInput>>;
};

export type RestaurantRelateToOneForCreateInput = {
  connect?: InputMaybe<RestaurantWhereUniqueInput>;
  create?: InputMaybe<RestaurantCreateInput>;
};

export type RestaurantRelateToOneForUpdateInput = {
  connect?: InputMaybe<RestaurantWhereUniqueInput>;
  create?: InputMaybe<RestaurantCreateInput>;
  disconnect?: InputMaybe<Scalars["Boolean"]>;
};

export type RestaurantUpdateArgs = {
  data: RestaurantUpdateInput;
  where: RestaurantWhereUniqueInput;
};

export type RestaurantUpdateInput = {
  category?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  images?: InputMaybe<ImageRelateToManyForUpdateInput>;
  info?: InputMaybe<Scalars["String"]>;
  locationRaw?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  owner?: InputMaybe<UserRelateToOneForUpdateInput>;
  reservationPrice?: InputMaybe<Scalars["Float"]>;
  reviews?: InputMaybe<ReviewRelateToManyForUpdateInput>;
};

export type RestaurantWhereInput = {
  AND?: InputMaybe<Array<RestaurantWhereInput>>;
  NOT?: InputMaybe<Array<RestaurantWhereInput>>;
  OR?: InputMaybe<Array<RestaurantWhereInput>>;
  category?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  images?: InputMaybe<ImageManyRelationFilter>;
  info?: InputMaybe<StringFilter>;
  locationRaw?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  owner?: InputMaybe<UserWhereInput>;
  reservationPrice?: InputMaybe<FloatFilter>;
  reviews?: InputMaybe<ReviewManyRelationFilter>;
};

export type RestaurantWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type Review = {
  __typename?: "Review";
  content?: Maybe<Scalars["String"]>;
  edited?: Maybe<Scalars["Boolean"]>;
  id: Scalars["ID"];
  images?: Maybe<Array<Image>>;
  imagesCount?: Maybe<Scalars["Int"]>;
  likes?: Maybe<Scalars["Int"]>;
  restaurant?: Maybe<Restaurant>;
  timestamp?: Maybe<Scalars["DateTime"]>;
  title?: Maybe<Scalars["String"]>;
  user?: Maybe<User>;
};

export type ReviewImagesArgs = {
  orderBy?: Array<ImageOrderByInput>;
  skip?: Scalars["Int"];
  take?: InputMaybe<Scalars["Int"]>;
  where?: ImageWhereInput;
};

export type ReviewImagesCountArgs = {
  where?: ImageWhereInput;
};

export type ReviewCreateInput = {
  content?: InputMaybe<Scalars["String"]>;
  edited?: InputMaybe<Scalars["Boolean"]>;
  images?: InputMaybe<ImageRelateToManyForCreateInput>;
  likes?: InputMaybe<Scalars["Int"]>;
  restaurant?: InputMaybe<RestaurantRelateToOneForCreateInput>;
  timestamp?: InputMaybe<Scalars["DateTime"]>;
  title?: InputMaybe<Scalars["String"]>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type ReviewManyRelationFilter = {
  every?: InputMaybe<ReviewWhereInput>;
  none?: InputMaybe<ReviewWhereInput>;
  some?: InputMaybe<ReviewWhereInput>;
};

export type ReviewOrderByInput = {
  content?: InputMaybe<OrderDirection>;
  edited?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  likes?: InputMaybe<OrderDirection>;
  timestamp?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
};

export type ReviewRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  create?: InputMaybe<Array<ReviewCreateInput>>;
};

export type ReviewRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  create?: InputMaybe<Array<ReviewCreateInput>>;
  disconnect?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  set?: InputMaybe<Array<ReviewWhereUniqueInput>>;
};

export type ReviewUpdateArgs = {
  data: ReviewUpdateInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewUpdateInput = {
  content?: InputMaybe<Scalars["String"]>;
  edited?: InputMaybe<Scalars["Boolean"]>;
  images?: InputMaybe<ImageRelateToManyForUpdateInput>;
  likes?: InputMaybe<Scalars["Int"]>;
  restaurant?: InputMaybe<RestaurantRelateToOneForUpdateInput>;
  timestamp?: InputMaybe<Scalars["DateTime"]>;
  title?: InputMaybe<Scalars["String"]>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type ReviewWhereInput = {
  AND?: InputMaybe<Array<ReviewWhereInput>>;
  NOT?: InputMaybe<Array<ReviewWhereInput>>;
  OR?: InputMaybe<Array<ReviewWhereInput>>;
  content?: InputMaybe<StringFilter>;
  edited?: InputMaybe<BooleanFilter>;
  id?: InputMaybe<IdFilter>;
  images?: InputMaybe<ImageManyRelationFilter>;
  likes?: InputMaybe<IntNullableFilter>;
  restaurant?: InputMaybe<RestaurantWhereInput>;
  timestamp?: InputMaybe<DateTimeNullableFilter>;
  title?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserWhereInput>;
};

export type ReviewWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars["String"]>;
  endsWith?: InputMaybe<Scalars["String"]>;
  equals?: InputMaybe<Scalars["String"]>;
  gt?: InputMaybe<Scalars["String"]>;
  gte?: InputMaybe<Scalars["String"]>;
  in?: InputMaybe<Array<Scalars["String"]>>;
  lt?: InputMaybe<Scalars["String"]>;
  lte?: InputMaybe<Scalars["String"]>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars["String"]>>;
  startsWith?: InputMaybe<Scalars["String"]>;
};

export type User = {
  __typename?: "User";
  bookmarks?: Maybe<Array<Restaurant>>;
  bookmarksCount?: Maybe<Scalars["Int"]>;
  email?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  isAdmin?: Maybe<Scalars["Boolean"]>;
  name?: Maybe<Scalars["String"]>;
  nickname?: Maybe<Scalars["String"]>;
  password?: Maybe<PasswordState>;
  phone?: Maybe<Scalars["String"]>;
  reservations?: Maybe<Array<Reservation>>;
  reservationsCount?: Maybe<Scalars["Int"]>;
  restaurants?: Maybe<Array<Restaurant>>;
  restaurantsCount?: Maybe<Scalars["Int"]>;
  reviews?: Maybe<Array<Review>>;
  reviewsCount?: Maybe<Scalars["Int"]>;
  role?: Maybe<UserRoleType>;
};

export type UserBookmarksArgs = {
  orderBy?: Array<RestaurantOrderByInput>;
  skip?: Scalars["Int"];
  take?: InputMaybe<Scalars["Int"]>;
  where?: RestaurantWhereInput;
};

export type UserBookmarksCountArgs = {
  where?: RestaurantWhereInput;
};

export type UserReservationsArgs = {
  orderBy?: Array<ReservationOrderByInput>;
  skip?: Scalars["Int"];
  take?: InputMaybe<Scalars["Int"]>;
  where?: ReservationWhereInput;
};

export type UserReservationsCountArgs = {
  where?: ReservationWhereInput;
};

export type UserRestaurantsArgs = {
  orderBy?: Array<RestaurantOrderByInput>;
  skip?: Scalars["Int"];
  take?: InputMaybe<Scalars["Int"]>;
  where?: RestaurantWhereInput;
};

export type UserRestaurantsCountArgs = {
  where?: RestaurantWhereInput;
};

export type UserReviewsArgs = {
  orderBy?: Array<ReviewOrderByInput>;
  skip?: Scalars["Int"];
  take?: InputMaybe<Scalars["Int"]>;
  where?: ReviewWhereInput;
};

export type UserReviewsCountArgs = {
  where?: ReviewWhereInput;
};

export type UserAuthenticationWithPasswordFailure = {
  __typename?: "UserAuthenticationWithPasswordFailure";
  message: Scalars["String"];
};

export type UserAuthenticationWithPasswordResult =
  | UserAuthenticationWithPasswordFailure
  | UserAuthenticationWithPasswordSuccess;

export type UserAuthenticationWithPasswordSuccess = {
  __typename?: "UserAuthenticationWithPasswordSuccess";
  item: User;
  sessionToken: Scalars["String"];
};

export type UserCreateInput = {
  bookmarks?: InputMaybe<RestaurantRelateToManyForCreateInput>;
  email?: InputMaybe<Scalars["String"]>;
  isAdmin?: InputMaybe<Scalars["Boolean"]>;
  name?: InputMaybe<Scalars["String"]>;
  nickname?: InputMaybe<Scalars["String"]>;
  password?: InputMaybe<Scalars["String"]>;
  phone?: InputMaybe<Scalars["String"]>;
  reservations?: InputMaybe<ReservationRelateToManyForCreateInput>;
  restaurants?: InputMaybe<RestaurantRelateToManyForCreateInput>;
  reviews?: InputMaybe<ReviewRelateToManyForCreateInput>;
  role?: InputMaybe<UserRoleType>;
};

export type UserOrderByInput = {
  email?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  isAdmin?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  nickname?: InputMaybe<OrderDirection>;
  phone?: InputMaybe<OrderDirection>;
  role?: InputMaybe<OrderDirection>;
};

export type UserRelateToOneForCreateInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  create?: InputMaybe<UserCreateInput>;
};

export type UserRelateToOneForUpdateInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  create?: InputMaybe<UserCreateInput>;
  disconnect?: InputMaybe<Scalars["Boolean"]>;
};

export enum UserRoleType {
  Customer = "Customer",
  Owner = "Owner",
}

export type UserRoleTypeNullableFilter = {
  equals?: InputMaybe<UserRoleType>;
  in?: InputMaybe<Array<UserRoleType>>;
  not?: InputMaybe<UserRoleTypeNullableFilter>;
  notIn?: InputMaybe<Array<UserRoleType>>;
};

export type UserUpdateArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateInput = {
  bookmarks?: InputMaybe<RestaurantRelateToManyForUpdateInput>;
  email?: InputMaybe<Scalars["String"]>;
  isAdmin?: InputMaybe<Scalars["Boolean"]>;
  name?: InputMaybe<Scalars["String"]>;
  nickname?: InputMaybe<Scalars["String"]>;
  password?: InputMaybe<Scalars["String"]>;
  phone?: InputMaybe<Scalars["String"]>;
  reservations?: InputMaybe<ReservationRelateToManyForUpdateInput>;
  restaurants?: InputMaybe<RestaurantRelateToManyForUpdateInput>;
  reviews?: InputMaybe<ReviewRelateToManyForUpdateInput>;
  role?: InputMaybe<UserRoleType>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  bookmarks?: InputMaybe<RestaurantManyRelationFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  isAdmin?: InputMaybe<BooleanFilter>;
  name?: InputMaybe<StringFilter>;
  nickname?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringFilter>;
  reservations?: InputMaybe<ReservationManyRelationFilter>;
  restaurants?: InputMaybe<RestaurantManyRelationFilter>;
  reviews?: InputMaybe<ReviewManyRelationFilter>;
  role?: InputMaybe<UserRoleTypeNullableFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
};

export type Location = {
  __typename?: "location";
  lat?: Maybe<Scalars["Float"]>;
  lng?: Maybe<Scalars["Float"]>;
};

export type AuthMutationVariables = Exact<{
  email: Scalars["String"];
  password: Scalars["String"];
}>;

export type AuthMutation = {
  __typename?: "Mutation";
  authenticateUserWithPassword?:
    | { __typename: "UserAuthenticationWithPasswordFailure"; message: string }
    | {
        __typename: "UserAuthenticationWithPasswordSuccess";
        sessionToken: string;
        item: { __typename?: "User"; name?: string | null; id: string };
      }
    | null;
};

export type CreateReservationMutationVariables = Exact<{
  data: ReservationCreateInput;
}>;


export type CreateReservationMutation = { __typename?: 'Mutation', createReservation?: { __typename?: 'Reservation', id: string } | null };

export type DeleteReservationMutationVariables = Exact<{
  where: ReservationWhereUniqueInput;
}>;


export type DeleteReservationMutation = { __typename?: 'Mutation', deleteReservation?: { __typename?: 'Reservation', id: string } | null };

export type ReservationQueryVariables = Exact<{
  where: ReservationWhereUniqueInput;
}>;


export type ReservationQuery = { __typename?: 'Query', reservation?: { __typename?: 'Reservation', id: string, time?: any | null, reservationFee?: number | null, refund?: number | null, user?: { __typename?: 'User', id: string, name?: string | null, nickname?: string | null } | null, restaurant?: { __typename?: 'Restaurant', id: string, description?: string | null, info?: string | null } | null } | null };

export type ReservationsQueryVariables = Exact<{
  where?: ReservationWhereInput;
  orderBy?: Array<ReservationOrderByInput> | ReservationOrderByInput;
  take?: InputMaybe<Scalars['Int']>;
  skip?: Scalars['Int'];
}>;


export type ReservationsQuery = { __typename?: 'Query', reservations?: Array<{ __typename?: 'Reservation', id: string, time?: any | null, reservationFee?: number | null, refund?: number | null, user?: { __typename?: 'User', id: string, name?: string | null, nickname?: string | null } | null, restaurant?: { __typename?: 'Restaurant', id: string, description?: string | null, info?: string | null } | null }> | null };

export type UpdateReservationMutationVariables = Exact<{
  where: ReservationWhereUniqueInput;
  data: ReservationUpdateInput;
}>;


export type UpdateReservationMutation = { __typename?: 'Mutation', updateReservation?: { __typename?: 'Reservation', id: string } | null };

export type CreateRestaurantMutationVariables = Exact<{
  data: RestaurantCreateInput;
}>;

export type CreateRestaurantMutation = {
  __typename?: "Mutation";
  createRestaurant?: {
    __typename?: "Restaurant";
    id: string;
    name?: string | null;
  } | null;
};

export type DeleteRestaurantMutationVariables = Exact<{
  where: RestaurantWhereUniqueInput;
}>;

export type DeleteRestaurantMutation = {
  __typename?: "Mutation";
  deleteRestaurant?: {
    __typename?: "Restaurant";
    id: string;
    name?: string | null;
  } | null;
};

export type RestaurantQueryVariables = Exact<{
  where: RestaurantWhereUniqueInput;
}>;

export type RestaurantQuery = { __typename?: 'Query', restaurant?: { __typename?: 'Restaurant', id: string, name?: string | null, description?: string | null, reservationPrice?: number | null, info?: string | null, category?: string | null, imagesCount?: number | null, reviewsCount?: number | null, location?: { __typename?: 'location', lat?: number | null, lng?: number | null } | null, owner?: { __typename?: 'User', id: string, name?: string | null, nickname?: string | null, isAdmin?: boolean | null, phone?: string | null, email?: string | null, role?: UserRoleType | null } | null, images?: Array<{ __typename?: 'Image', id: string, name?: string | null, description?: string | null, image?: { __typename?: 'CloudImageFieldOutput', id: string, filesize: number, width: number, height: number, extension: ImageExtension, ref: string, url: string } | { __typename?: 'LocalImageFieldOutput', id: string, filesize: number, width: number, height: number, extension: ImageExtension, ref: string, url: string } | null }> | null, reviews?: Array<{ __typename?: 'Review', id: string, imagesCount?: number | null, timestamp?: any | null, edited?: boolean | null, title?: string | null, content?: string | null, likes?: number | null }> | null } | null };

export type RestaurantsQueryVariables = Exact<{
  where?: RestaurantWhereInput;
  orderBy?: Array<RestaurantOrderByInput> | RestaurantOrderByInput;
  take?: InputMaybe<Scalars["Int"]>;
  skip?: Scalars["Int"];
}>;

export type RestaurantsQuery = {
  __typename?: "Query";
  restaurants?: Array<{
    __typename?: "Restaurant";
    id: string;
    name?: string | null;
    description?: string | null;
    category?: string | null;
    reservationPrice?: number | null;
    reviewsCount?: number | null;
    info?: string | null;
    location?: {
      __typename?: "location";
      lat?: number | null;
      lng?: number | null;
    } | null;
    owner?: {
      __typename?: "User";
      id: string;
      nickname?: string | null;
    } | null;
    images?: Array<{
      __typename?: "Image";
      id: string;
      name?: string | null;
      image?:
        | {
            __typename?: "CloudImageFieldOutput";
            id: string;
            extension: ImageExtension;
            ref: string;
            url: string;
          }
        | {
            __typename?: "LocalImageFieldOutput";
            id: string;
            extension: ImageExtension;
            ref: string;
            url: string;
          }
        | null;
    }> | null;
  }> | null;
};

export type UpdateRestaurantMutationVariables = Exact<{
  where: RestaurantWhereUniqueInput;
  data: RestaurantUpdateInput;
}>;

export type UpdateRestaurantMutation = {
  __typename?: "Mutation";
  updateRestaurant?: {
    __typename?: "Restaurant";
    id: string;
    name?: string | null;
  } | null;
};

export type CreateReviewMutationVariables = Exact<{
  data: ReviewCreateInput;
}>;

export type CreateReviewMutation = {
  __typename?: "Mutation";
  createReview?: {
    __typename?: "Review";
    id: string;
    title?: string | null;
    content?: string | null;
  } | null;
};

export type DeleteReviewMutationVariables = Exact<{
  where: ReviewWhereUniqueInput;
}>;

export type DeleteReviewMutation = {
  __typename?: "Mutation";
  deleteReview?: {
    __typename?: "Review";
    id: string;
    title?: string | null;
  } | null;
};

export type ReviewQueryVariables = Exact<{
  where: ReviewWhereUniqueInput;
}>;

export type ReviewQuery = {
  __typename?: "Query";
  review?: {
    __typename?: "Review";
    id: string;
    imagesCount?: number | null;
    timestamp?: any | null;
    edited?: boolean | null;
    title?: string | null;
    content?: string | null;
    likes?: number | null;
    user?: {
      __typename?: "User";
      id: string;
      name?: string | null;
      nickname?: string | null;
      role?: UserRoleType | null;
      isAdmin?: boolean | null;
    } | null;
    images?: Array<{
      __typename?: "Image";
      id: string;
      name?: string | null;
      description?: string | null;
      image?:
        | {
            __typename?: "CloudImageFieldOutput";
            id: string;
            filesize: number;
            width: number;
            height: number;
            extension: ImageExtension;
            ref: string;
            url: string;
          }
        | {
            __typename?: "LocalImageFieldOutput";
            id: string;
            filesize: number;
            width: number;
            height: number;
            extension: ImageExtension;
            ref: string;
            url: string;
          }
        | null;
    }> | null;
  } | null;
};

export type ReviewsQueryVariables = Exact<{
  where?: ReviewWhereInput;
  orderBy?: Array<ReviewOrderByInput> | ReviewOrderByInput;
  take?: InputMaybe<Scalars["Int"]>;
  skip?: Scalars["Int"];
}>;

export type ReviewsQuery = {
  __typename?: "Query";
  reviews?: Array<{
    __typename?: "Review";
    id: string;
    imagesCount?: number | null;
    timestamp?: any | null;
    edited?: boolean | null;
    title?: string | null;
    content?: string | null;
    likes?: number | null;
    user?: {
      __typename?: "User";
      id: string;
      name?: string | null;
      nickname?: string | null;
      role?: UserRoleType | null;
      isAdmin?: boolean | null;
    } | null;
    images?: Array<{
      __typename?: "Image";
      id: string;
      name?: string | null;
      description?: string | null;
      image?:
        | {
            __typename?: "CloudImageFieldOutput";
            id: string;
            filesize: number;
            width: number;
            height: number;
            extension: ImageExtension;
            ref: string;
            url: string;
          }
        | {
            __typename?: "LocalImageFieldOutput";
            id: string;
            filesize: number;
            width: number;
            height: number;
            extension: ImageExtension;
            ref: string;
            url: string;
          }
        | null;
    }> | null;
  }> | null;
};

export type UpdateReviewMutationVariables = Exact<{
  where: ReviewWhereUniqueInput;
  data: ReviewUpdateInput;
}>;



export type UpdateReviewMutation = { __typename?: 'Mutation', updateReview?: { __typename?: 'Review', id: string, title?: string | null } | null };

export type UserQueryVariables = Exact<{
  where?: UserWhereUniqueInput;
}>;


export type UserQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: string, name?: string | null, nickname?: string | null, isAdmin?: boolean | null, phone?: string | null, email?: string | null, role?: UserRoleType | null, restaurants?: Array<{ __typename?: 'Restaurant', id: string, name?: string | null, description?: string | null, category?: string | null, info?: string | null }> | null, reservations?: Array<{ __typename?: 'Reservation', id: string, time?: any | null, reservationFee?: number | null, refund?: number | null, restaurant?: { __typename?: 'Restaurant', id: string, name?: string | null } | null }> | null, bookmarks?: Array<{ __typename?: 'Restaurant', id: string, name?: string | null, description?: string | null, category?: string | null, info?: string | null }> | null, reviews?: Array<{ __typename?: 'Review', id: string, title?: string | null, content?: string | null, likes?: number | null, timestamp?: any | null, restaurant?: { __typename?: 'Restaurant', id: string, name?: string | null } | null }> | null } | null };


export const AuthDocument = gql`
  mutation Auth($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      __typename
      ... on UserAuthenticationWithPasswordSuccess {
        sessionToken
        item {
          name
          id
        }
      }
      ... on UserAuthenticationWithPasswordFailure {
        message
      }
    }
  }
`;
export type AuthMutationFn = Apollo.MutationFunction<
  AuthMutation,
  AuthMutationVariables
>;

/**
 * __useAuthMutation__
 *
 * To run a mutation, you first call `useAuthMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authMutation, { data, loading, error }] = useAuthMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useAuthMutation(
  baseOptions?: Apollo.MutationHookOptions<AuthMutation, AuthMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<AuthMutation, AuthMutationVariables>(
    AuthDocument,
    options
  );
}
export type AuthMutationHookResult = ReturnType<typeof useAuthMutation>;
export type AuthMutationResult = Apollo.MutationResult<AuthMutation>;
export type AuthMutationOptions = Apollo.BaseMutationOptions<AuthMutation, AuthMutationVariables>;
export const CreateReservationDocument = gql`
    mutation CreateReservation($data: ReservationCreateInput!) {
  createReservation(data: $data) {
    id
  }
}
    `;
export type CreateReservationMutationFn = Apollo.MutationFunction<CreateReservationMutation, CreateReservationMutationVariables>;

/**
 * __useCreateReservationMutation__
 *
 * To run a mutation, you first call `useCreateReservationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateReservationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createReservationMutation, { data, loading, error }] = useCreateReservationMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateReservationMutation(baseOptions?: Apollo.MutationHookOptions<CreateReservationMutation, CreateReservationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateReservationMutation, CreateReservationMutationVariables>(CreateReservationDocument, options);
      }
export type CreateReservationMutationHookResult = ReturnType<typeof useCreateReservationMutation>;
export type CreateReservationMutationResult = Apollo.MutationResult<CreateReservationMutation>;
export type CreateReservationMutationOptions = Apollo.BaseMutationOptions<CreateReservationMutation, CreateReservationMutationVariables>;
export const DeleteReservationDocument = gql`
    mutation DeleteReservation($where: ReservationWhereUniqueInput!) {
  deleteReservation(where: $where) {
    id
  }
}
    `;
export type DeleteReservationMutationFn = Apollo.MutationFunction<DeleteReservationMutation, DeleteReservationMutationVariables>;

/**
 * __useDeleteReservationMutation__
 *
 * To run a mutation, you first call `useDeleteReservationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteReservationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteReservationMutation, { data, loading, error }] = useDeleteReservationMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteReservationMutation(baseOptions?: Apollo.MutationHookOptions<DeleteReservationMutation, DeleteReservationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteReservationMutation, DeleteReservationMutationVariables>(DeleteReservationDocument, options);
      }
export type DeleteReservationMutationHookResult = ReturnType<typeof useDeleteReservationMutation>;
export type DeleteReservationMutationResult = Apollo.MutationResult<DeleteReservationMutation>;
export type DeleteReservationMutationOptions = Apollo.BaseMutationOptions<DeleteReservationMutation, DeleteReservationMutationVariables>;
export const ReservationDocument = gql`
    query Reservation($where: ReservationWhereUniqueInput!) {
  reservation(where: $where) {
    id
    time
    reservationFee
    refund
    user {
      id
      name
      nickname
    }
    restaurant {
      id
      description
      info
    }
  }
}
    `;

/**
 * __useReservationQuery__
 *
 * To run a query within a React component, call `useReservationQuery` and pass it any options that fit your needs.
 * When your component renders, `useReservationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReservationQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useReservationQuery(baseOptions: Apollo.QueryHookOptions<ReservationQuery, ReservationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ReservationQuery, ReservationQueryVariables>(ReservationDocument, options);
      }
export function useReservationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReservationQuery, ReservationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ReservationQuery, ReservationQueryVariables>(ReservationDocument, options);
        }
export type ReservationQueryHookResult = ReturnType<typeof useReservationQuery>;
export type ReservationLazyQueryHookResult = ReturnType<typeof useReservationLazyQuery>;
export type ReservationQueryResult = Apollo.QueryResult<ReservationQuery, ReservationQueryVariables>;
export const ReservationsDocument = gql`
    query Reservations($where: ReservationWhereInput! = {}, $orderBy: [ReservationOrderByInput!]! = [], $take: Int, $skip: Int! = 0) {
  reservations(where: $where, orderBy: $orderBy, take: $take, skip: $skip) {
    id
    time
    reservationFee
    refund
    user {
      id
      name
      nickname
    }
    restaurant {
      id
      description
      info
    }
  }
}
    `;

/**
 * __useReservationsQuery__
 *
 * To run a query within a React component, call `useReservationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useReservationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReservationsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useReservationsQuery(baseOptions?: Apollo.QueryHookOptions<ReservationsQuery, ReservationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ReservationsQuery, ReservationsQueryVariables>(ReservationsDocument, options);
      }
export function useReservationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReservationsQuery, ReservationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ReservationsQuery, ReservationsQueryVariables>(ReservationsDocument, options);
        }
export type ReservationsQueryHookResult = ReturnType<typeof useReservationsQuery>;
export type ReservationsLazyQueryHookResult = ReturnType<typeof useReservationsLazyQuery>;
export type ReservationsQueryResult = Apollo.QueryResult<ReservationsQuery, ReservationsQueryVariables>;
export const UpdateReservationDocument = gql`
    mutation UpdateReservation($where: ReservationWhereUniqueInput!, $data: ReservationUpdateInput!) {
  updateReservation(where: $where, data: $data) {
    id
  }
}
    `;
export type UpdateReservationMutationFn = Apollo.MutationFunction<UpdateReservationMutation, UpdateReservationMutationVariables>;

/**
 * __useUpdateReservationMutation__
 *
 * To run a mutation, you first call `useUpdateReservationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateReservationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateReservationMutation, { data, loading, error }] = useUpdateReservationMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateReservationMutation(baseOptions?: Apollo.MutationHookOptions<UpdateReservationMutation, UpdateReservationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateReservationMutation, UpdateReservationMutationVariables>(UpdateReservationDocument, options);
      }
export type UpdateReservationMutationHookResult = ReturnType<typeof useUpdateReservationMutation>;
export type UpdateReservationMutationResult = Apollo.MutationResult<UpdateReservationMutation>;
export type UpdateReservationMutationOptions = Apollo.BaseMutationOptions<UpdateReservationMutation, UpdateReservationMutationVariables>;
export const CreateRestaurantDocument = gql`
  mutation CreateRestaurant($data: RestaurantCreateInput!) {
    createRestaurant(data: $data) {
      id
      name
    }
  }
`;
export type CreateRestaurantMutationFn = Apollo.MutationFunction<
  CreateRestaurantMutation,
  CreateRestaurantMutationVariables
>;

/**
 * __useCreateRestaurantMutation__
 *
 * To run a mutation, you first call `useCreateRestaurantMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRestaurantMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRestaurantMutation, { data, loading, error }] = useCreateRestaurantMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateRestaurantMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateRestaurantMutation,
    CreateRestaurantMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateRestaurantMutation,
    CreateRestaurantMutationVariables
  >(CreateRestaurantDocument, options);
}
export type CreateRestaurantMutationHookResult = ReturnType<
  typeof useCreateRestaurantMutation
>;
export type CreateRestaurantMutationResult =
  Apollo.MutationResult<CreateRestaurantMutation>;
export type CreateRestaurantMutationOptions = Apollo.BaseMutationOptions<
  CreateRestaurantMutation,
  CreateRestaurantMutationVariables
>;
export const DeleteRestaurantDocument = gql`
  mutation DeleteRestaurant($where: RestaurantWhereUniqueInput!) {
    deleteRestaurant(where: $where) {
      id
      name
    }
  }
`;
export type DeleteRestaurantMutationFn = Apollo.MutationFunction<
  DeleteRestaurantMutation,
  DeleteRestaurantMutationVariables
>;

/**
 * __useDeleteRestaurantMutation__
 *
 * To run a mutation, you first call `useDeleteRestaurantMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteRestaurantMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteRestaurantMutation, { data, loading, error }] = useDeleteRestaurantMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteRestaurantMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteRestaurantMutation,
    DeleteRestaurantMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteRestaurantMutation,
    DeleteRestaurantMutationVariables
  >(DeleteRestaurantDocument, options);
}
export type DeleteRestaurantMutationHookResult = ReturnType<
  typeof useDeleteRestaurantMutation
>;
export type DeleteRestaurantMutationResult =
  Apollo.MutationResult<DeleteRestaurantMutation>;
export type DeleteRestaurantMutationOptions = Apollo.BaseMutationOptions<
  DeleteRestaurantMutation,
  DeleteRestaurantMutationVariables
>;
export const RestaurantDocument = gql`
    query Restaurant($where: RestaurantWhereUniqueInput!) {
  restaurant(where: $where) {
    id
    name
    description
    location {
      lat
      lng
    }
    owner {
      id
      name
      nickname
      isAdmin
      phone
      email
      role
    }
    reservationPrice
    info
    category
    images {
      id
      name
      description
      location {
        lat
        lng
      }
    }
    imagesCount
    reviews {
      id
      imagesCount
      reviews {
        id
        user {
          id
          name
          nickname
          role
          isAdmin
        }
        images {
          id
          name
          description
          image {
            id
            filesize
            width
            height
            extension
            ref
            url
          }
        }
        imagesCount
        timestamp
        edited
        title
        content
        likes
      }
      reviewsCount
    }
  }
`;

/**
 * __useRestaurantQuery__
 *
 * To run a query within a React component, call `useRestaurantQuery` and pass it any options that fit your needs.
 * When your component renders, `useRestaurantQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRestaurantQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useRestaurantQuery(
  baseOptions: Apollo.QueryHookOptions<
    RestaurantQuery,
    RestaurantQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<RestaurantQuery, RestaurantQueryVariables>(
    RestaurantDocument,
    options
  );
}
export function useRestaurantLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    RestaurantQuery,
    RestaurantQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<RestaurantQuery, RestaurantQueryVariables>(
    RestaurantDocument,
    options
  );
}
export type RestaurantQueryHookResult = ReturnType<typeof useRestaurantQuery>;
export type RestaurantLazyQueryHookResult = ReturnType<
  typeof useRestaurantLazyQuery
>;
export type RestaurantQueryResult = Apollo.QueryResult<
  RestaurantQuery,
  RestaurantQueryVariables
>;
export const RestaurantsDocument = gql`
  query Restaurants(
    $where: RestaurantWhereInput! = {}
    $orderBy: [RestaurantOrderByInput!]! = []
    $take: Int
    $skip: Int! = 0
  ) {
    restaurants(where: $where, orderBy: $orderBy, take: $take, skip: $skip) {
      id
      name
      description
      location {
        lat
        lng
      }
      category
      owner {
        id
        nickname
      }
      reservationPrice
      reviewsCount
      info
      reviewsCount
      images {
        id
        name
        image {
          id
          extension
          ref
          url
        }
      }
    }
  }
`;

/**
 * __useRestaurantsQuery__
 *
 * To run a query within a React component, call `useRestaurantsQuery` and pass it any options that fit your needs.
 * When your component renders, `useRestaurantsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRestaurantsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useRestaurantsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    RestaurantsQuery,
    RestaurantsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<RestaurantsQuery, RestaurantsQueryVariables>(
    RestaurantsDocument,
    options
  );
}
export function useRestaurantsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    RestaurantsQuery,
    RestaurantsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<RestaurantsQuery, RestaurantsQueryVariables>(
    RestaurantsDocument,
    options
  );
}
export type RestaurantsQueryHookResult = ReturnType<typeof useRestaurantsQuery>;
export type RestaurantsLazyQueryHookResult = ReturnType<
  typeof useRestaurantsLazyQuery
>;
export type RestaurantsQueryResult = Apollo.QueryResult<
  RestaurantsQuery,
  RestaurantsQueryVariables
>;
export const UpdateRestaurantDocument = gql`
  mutation UpdateRestaurant(
    $where: RestaurantWhereUniqueInput!
    $data: RestaurantUpdateInput!
  ) {
    updateRestaurant(where: $where, data: $data) {
      id
      name
    }
  }
`;
export type UpdateRestaurantMutationFn = Apollo.MutationFunction<
  UpdateRestaurantMutation,
  UpdateRestaurantMutationVariables
>;

/**
 * __useUpdateRestaurantMutation__
 *
 * To run a mutation, you first call `useUpdateRestaurantMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateRestaurantMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateRestaurantMutation, { data, loading, error }] = useUpdateRestaurantMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateRestaurantMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateRestaurantMutation,
    UpdateRestaurantMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateRestaurantMutation,
    UpdateRestaurantMutationVariables
  >(UpdateRestaurantDocument, options);
}
export type UpdateRestaurantMutationHookResult = ReturnType<
  typeof useUpdateRestaurantMutation
>;
export type UpdateRestaurantMutationResult =
  Apollo.MutationResult<UpdateRestaurantMutation>;
export type UpdateRestaurantMutationOptions = Apollo.BaseMutationOptions<
  UpdateRestaurantMutation,
  UpdateRestaurantMutationVariables
>;
export const CreateReviewDocument = gql`
  mutation CreateReview($data: ReviewCreateInput!) {
    createReview(data: $data) {
      id
      title
      content
    }
  }
`;
export type CreateReviewMutationFn = Apollo.MutationFunction<
  CreateReviewMutation,
  CreateReviewMutationVariables
>;

/**
 * __useCreateReviewMutation__
 *
 * To run a mutation, you first call `useCreateReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createReviewMutation, { data, loading, error }] = useCreateReviewMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateReviewMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateReviewMutation,
    CreateReviewMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateReviewMutation,
    CreateReviewMutationVariables
  >(CreateReviewDocument, options);
}
export type CreateReviewMutationHookResult = ReturnType<
  typeof useCreateReviewMutation
>;
export type CreateReviewMutationResult =
  Apollo.MutationResult<CreateReviewMutation>;
export type CreateReviewMutationOptions = Apollo.BaseMutationOptions<
  CreateReviewMutation,
  CreateReviewMutationVariables
>;
export const DeleteReviewDocument = gql`
  mutation DeleteReview($where: ReviewWhereUniqueInput!) {
    deleteReview(where: $where) {
      id
      title
    }
  }
`;
export type DeleteReviewMutationFn = Apollo.MutationFunction<
  DeleteReviewMutation,
  DeleteReviewMutationVariables
>;

/**
 * __useDeleteReviewMutation__
 *
 * To run a mutation, you first call `useDeleteReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteReviewMutation, { data, loading, error }] = useDeleteReviewMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteReviewMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteReviewMutation,
    DeleteReviewMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteReviewMutation,
    DeleteReviewMutationVariables
  >(DeleteReviewDocument, options);
}
export type DeleteReviewMutationHookResult = ReturnType<
  typeof useDeleteReviewMutation
>;
export type DeleteReviewMutationResult =
  Apollo.MutationResult<DeleteReviewMutation>;
export type DeleteReviewMutationOptions = Apollo.BaseMutationOptions<
  DeleteReviewMutation,
  DeleteReviewMutationVariables
>;
export const ReviewDocument = gql`
  query Review($where: ReviewWhereUniqueInput!) {
    review(where: $where) {
      id
      user {
        id
        name
        nickname
        role
        isAdmin
      }
      images {
        id
        name
        description
        image {
          id
          filesize
          width
          height
          extension
          ref
          url
        }
      }
      imagesCount
      timestamp
      edited
      title
      content
      likes
    }
  }
`;

/**
 * __useReviewQuery__
 *
 * To run a query within a React component, call `useReviewQuery` and pass it any options that fit your needs.
 * When your component renders, `useReviewQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReviewQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useReviewQuery(
  baseOptions: Apollo.QueryHookOptions<ReviewQuery, ReviewQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ReviewQuery, ReviewQueryVariables>(
    ReviewDocument,
    options
  );
}
export function useReviewLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ReviewQuery, ReviewQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ReviewQuery, ReviewQueryVariables>(
    ReviewDocument,
    options
  );
}
export type ReviewQueryHookResult = ReturnType<typeof useReviewQuery>;
export type ReviewLazyQueryHookResult = ReturnType<typeof useReviewLazyQuery>;
export type ReviewQueryResult = Apollo.QueryResult<
  ReviewQuery,
  ReviewQueryVariables
>;
export const ReviewsDocument = gql`
  query Reviews(
    $where: ReviewWhereInput! = {}
    $orderBy: [ReviewOrderByInput!]! = []
    $take: Int
    $skip: Int! = 0
  ) {
    reviews(where: $where, orderBy: $orderBy, take: $take, skip: $skip) {
      id
      user {
        id
        name
        nickname
        role
        isAdmin
      }
      images {
        id
        name
        description
        image {
          id
          filesize
          width
          height
          extension
          ref
          url
        }
      }
      imagesCount
      timestamp
      edited
      title
      content
      likes
    }
  }
`;

/**
 * __useReviewsQuery__
 *
 * To run a query within a React component, call `useReviewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useReviewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReviewsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useReviewsQuery(
  baseOptions?: Apollo.QueryHookOptions<ReviewsQuery, ReviewsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ReviewsQuery, ReviewsQueryVariables>(
    ReviewsDocument,
    options
  );
}
export function useReviewsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ReviewsQuery, ReviewsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ReviewsQuery, ReviewsQueryVariables>(
    ReviewsDocument,
    options
  );
}
export type ReviewsQueryHookResult = ReturnType<typeof useReviewsQuery>;
export type ReviewsLazyQueryHookResult = ReturnType<typeof useReviewsLazyQuery>;
export type ReviewsQueryResult = Apollo.QueryResult<
  ReviewsQuery,
  ReviewsQueryVariables
>;
export const UpdateReviewDocument = gql`
  mutation UpdateReview(
    $where: ReviewWhereUniqueInput!
    $data: ReviewUpdateInput!
  ) {
    updateReview(where: $where, data: $data) {
      id
      title
    }
  }
`;
export type UpdateReviewMutationFn = Apollo.MutationFunction<
  UpdateReviewMutation,
  UpdateReviewMutationVariables
>;

/**
 * __useUpdateReviewMutation__
 *
 * To run a mutation, you first call `useUpdateReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateReviewMutation, { data, loading, error }] = useUpdateReviewMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateReviewMutation(baseOptions?: Apollo.MutationHookOptions<UpdateReviewMutation, UpdateReviewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateReviewMutation, UpdateReviewMutationVariables>(UpdateReviewDocument, options);
      }
export type UpdateReviewMutationHookResult = ReturnType<typeof useUpdateReviewMutation>;
export type UpdateReviewMutationResult = Apollo.MutationResult<UpdateReviewMutation>;
export type UpdateReviewMutationOptions = Apollo.BaseMutationOptions<UpdateReviewMutation, UpdateReviewMutationVariables>;
export const UserDocument = gql`
    query User($where: UserWhereUniqueInput! = {}) {
  user(where: $where) {
    id
    name
    nickname
    isAdmin
    phone
    email
    role
    restaurants {
      id
      name
      description
      category
      info
    }
    reservations {
      id
      time
      reservationFee
      refund
      restaurant {
        id
        name
      }
    }
    bookmarks {
      id
      name
      description
      category
      info
    }
    reviews {
      id
      restaurant {
        id
        name
      }
      title
      content
      likes
      timestamp
    }
  }
}
    `;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUserQuery(baseOptions?: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
