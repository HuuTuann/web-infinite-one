enum GridCols {
  _1 = 1,
  _2 = 2,
  _3 = 3,
  _4 = 4,
  _5 = 5,
  _6 = 6,
  _7 = 7,
  _8 = 8,
  _9 = 9,
  _10 = 10,
  _11 = 11,
  _12 = 12,
}

type GridColsValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

const gridColsMap: Record<GridColsValue, string> = {
  [GridCols._1]: "col-span-1",
  [GridCols._2]: "col-span-2",
  [GridCols._3]: "col-span-3",
  [GridCols._4]: "col-span-4",
  [GridCols._5]: "col-span-5",
  [GridCols._6]: "col-span-6",
  [GridCols._7]: "col-span-7",
  [GridCols._8]: "col-span-8",
  [GridCols._9]: "col-span-9",
  [GridCols._10]: "col-span-10",
  [GridCols._11]: "col-span-11",
  [GridCols._12]: "col-span-12",
};

export { GridCols, gridColsMap };
export type { GridColsValue };
