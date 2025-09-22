enum TypographyVariant {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
  H4 = "h4",
  P = "p",
}

const typographyClassNameMap: Record<TypographyVariant, string> = {
  [TypographyVariant.H1]:
    "scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance",
  [TypographyVariant.H2]:
    "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
  [TypographyVariant.H3]: "scroll-m-20 text-2xl font-semibold tracking-tight",
  [TypographyVariant.H4]: "scroll-m-20 text-xl font-semibold tracking-tight",
  [TypographyVariant.P]: "leading-7 [&:not(:first-child)]:mt-6",
};

type TypographyVariantValue = "h1" | "h2" | "h3" | "h4" | "p";

export {
  typographyClassNameMap,
  TypographyVariant,
  type TypographyVariantValue,
};
