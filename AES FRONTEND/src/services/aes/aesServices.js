import http, { apiUrl } from "../config";

const apiEndpoint = apiUrl
function getUrl(route) {
    return `${apiEndpoint}/${route}`;
}
export function getTodos(filtros) {
    return http.post(getUrl("todos"), filtros);
}
export function getRastreo(filtros) {
    return http.post(getUrl("rastreo"), filtros);
}
export function getReportes(filtros) {
    return http.post(getUrl("reportes"), filtros);
}
export function getAesById(filtros) {
    return http.post(getUrl("codigosbyid"), filtros);
}