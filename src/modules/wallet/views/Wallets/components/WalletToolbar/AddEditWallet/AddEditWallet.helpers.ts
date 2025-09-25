import { InvitedMembersKeys, WalletKeys } from "../../../../../base";

export const getPrefixInvitedMembers = (
  index: number,
  name: InvitedMembersKeys
) => `${WalletKeys.INVITED_MEMBERS}.${index}.${name}`;
