enum WalletKeys {
  ID = "id",
  NAME = "name",
  BASE_CURRENCY = "baseCurrency",
  BASE_CURRENCY_ID = "baseCurrencyId",
  TOTAL_MEMBERS = "totalMembers",
  TOTAL_ACCOUNTS = "totalAccounts",
  TOTAL_BALANCES = "totalBalances",
  ROLE = "role",
  INVITED_MEMBERS = "invitedMembers",
  UPDATED_AT = "updatedAt",
  CREATED_AT = "createdAt",
}

enum InvitedMembersKeys {
  ID = "id",
  EMAIL = "email",
  NAME = "name",
  ROLE = "role",
}

enum AccountsKeys {
  ID = "id",
  WALLET_ID = "walletId",
  NAME = "name",
  CURRENCY = "currency",
  CURRENCY_ID = "currencyId",
  OPENING_BALANCE = "openingBalance",
  CURRENT_BALANCE = "currentBalance",
  TOTAL_TRANSACTIONS = "totalTransactions",
  IS_ACTIVE = "isActive",
  IS_DELETED = "isDeleted",
  DELETED_AT = "deletedAt",
  CREATED_AT = "createdAt",
  UPDATED_AT = "updatedAt",
}

export { AccountsKeys, InvitedMembersKeys, WalletKeys };
