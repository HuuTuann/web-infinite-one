import { toast } from "react-toastify";

export const Toastify = {
  Success: (title: string) => {
    toast.success(title);
  },
  Error: (title: string) => {
    toast.error(title);
  },
  Warning: (title: string) => {
    toast.warning(title);
  },
  Info: (title: string) => {
    toast.info(title);
  },
};
