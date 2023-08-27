import { http } from "@/utils/http";

export type CategoryResult = {
  code: number;
  message: string;
  result: any;
};

/** 获取分类列表 */
export const getCategoryList = (data?: object) => {
  return http.request<CategoryResult>("post", "/category/getCategoryList", {
    data
  });
};

/** 新增分类 */
export const addCategory = (data?: object) => {
  return http.request<CategoryResult>("post", "/category/add", { data });
};

/** 修改分类 */
export const editCategory = (data?: object) => {
  return http.request<CategoryResult>("put", "/category/update", { data });
};

/** 删除分类 */
export const deleteCategoryList = (data?: object) => {
  return http.request<CategoryResult>("post", "/category/delete", { data });
};

/** 获取分类字典 */
export const getCategoryDictionary = () => {
  return http.request<CategoryResult>(
    "get",
    "/Category/getCategoryDictionary",
    {}
  );
};
