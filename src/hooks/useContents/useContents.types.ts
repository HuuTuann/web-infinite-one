import { ApiResponse } from "@/lib";

enum ContentKeys {
  ID = "id",
  NAME = "name",
  TYPE = "type",
  DESCRIPTION = "description",
  CREATED_AT = "createdAt",
  UPDATED_AT = "updatedAt",
}

enum ContentTypeKeys {
  WALLET_ROLE = "WALLET_ROLE",
  TX_TYPE = "TX_TYPE",
  CURRENCY = "CURRENCY",
  TIMEZONE = "TIMEZONE",
  LOCALE = "LOCALE",
}

type Content = {
  [ContentKeys.ID]: string;
  [ContentKeys.NAME]: string;
  [ContentKeys.TYPE]: ContentTypeKeys;
  [ContentKeys.DESCRIPTION]: string;
  [ContentKeys.CREATED_AT]: string;
  [ContentKeys.UPDATED_AT]: string;
};

type ContentWrapper = {
  [key in ContentTypeKeys]: Content[];
};

type ContentResponse = ApiResponse<ContentWrapper>;

export type { Content, ContentKeys, ContentResponse, ContentWrapper };
