export const authInterceptor = (req, next) => {
    const token = localStorage.getItem('artvista_token');
    return next(token ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } }) : req);
};
