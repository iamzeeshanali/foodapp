export const stringAdjustment = (word: string) => {
  if (word?.includes("-")) {
    return word?.charAt(0).toUpperCase() + word?.slice(1).replaceAll("-", " ");
  } else return word?.charAt(0).toUpperCase() + word?.slice(1);
};
