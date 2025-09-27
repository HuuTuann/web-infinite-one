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

export { InvitedMembersKeys, WalletKeys };
