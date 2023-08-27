import { http } from "@/utils/http";

export type TagResult = {
  code: number;
  message: string;
  result: any;
};

/** 获取标签列表 */
export const getTagList = (data?: object) => {
  return http.request<TagResult>("post", "/tag/getTagList", { data });
};

/** 新增标签 */
export const addTag = (data?: object) => {
  return http.request<TagResult>("post", "/tag/add", { data });
};

/** 修改标签 */
export const editTag = (data?: object) => {
  return http.request<TagResult>("put", "/tag/update", { data });
};

/** 删除标签 */
export const deleteTagList = (data?: object) => {
  return http.request<TagResult>("post", "/tag/delete", { data });
};

/** 获取标签字典 */
export const getTagDictionary = () => {
  return http.request<TagResult>("get", "/tag/getTagDictionary", {});
};
