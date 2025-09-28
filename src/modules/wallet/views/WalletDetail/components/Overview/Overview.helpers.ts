enum OverviewTabs {
  OVERVIEW = "overview",
  ACCOUNTS = "accounts",
}

const tabOptions = [
  { value: OverviewTabs.OVERVIEW, label: "Overview" },
  { value: OverviewTabs.ACCOUNTS, label: "Accounts" },
];

const OverviewHelpers = {
  tabOptions,
};

export default OverviewHelpers;
export { OverviewTabs };
