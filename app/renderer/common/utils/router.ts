// 判断是否为外部链接
export function isHttpOrHttpsUrl(url:string):boolean {
    let regRule = /(http|https):\/\/([\w.]+\/?)\S*/;
    return regRule.test(url.toLowerCase())
}