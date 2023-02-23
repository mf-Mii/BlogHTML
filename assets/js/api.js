class MFBLOG_API {
    static async GetRequest(path) {
        return $.ajax(WEBSITE_ENV.API_ARTICLE + path).then((data, status, xhr) => {
            return {data,status,xhr}
        });
    }
}
