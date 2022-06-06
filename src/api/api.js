import request from "./request";

export function login(data) {
  return request({
    url: "/login",
    method: "post",
    data,
  });
}
export function getGoodsList() {
  return request({
    url: "/goods/list",
    method: "post",
  });
}
export function getGoodsCategory() {
  return request({
    url: "/category/list",
    method: "post",
  });
}
