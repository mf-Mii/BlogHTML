class Article {

    title_image = [];
    constructor(name, id, title, thumb, hq_thumb, title_image, hq_title_image, updated, tags, category, category_display) {
        this.name = name;
        this.id = id;
        this.title = title;
        this.title_image.normal = title_image;
        this.title_image.high = hq_title_image;
        this.updated = updated instanceof Date ? updated : new Date(updated);
        this.tags = tags;
        this.category = category;
    }

    getTitle() {
        return this.title;
    }

    getName() {
        return this.name;
    }

    getID() {
        return this.id;
    }

    getCategory() {
        return this.category;
    }

    getTags() {
        return this.tags;
    }

    /**
     * 記事の更新日を取得
     * @returns {Date} Returns Updated Date
     * @constructor
     */
    getUpdated() {
        return this.updated;
    }

    static async getArticleByName(name) {
        const resp = await MFBLOG_API.GetRequest('/articles/' + name);
        if (resp.status === 'success') {
            const data = resp.data;
            return {
                result: 'success',
                article: new Article(
                        data.name,
                        data.id,
                        data.title,
                        data.thumb,
                        data.hq_thumb,
                        data.title_image,
                        data.hq_title_image,
                    data.update,
                    data.tags,
                    data.category
                )
            }
        }
        else {
            try {
                const data = JSON.parse(resp.body);
                return {
                    result: 'fail',
                    message: data.message,
                    data
                }
            } catch (e) {
                return {
                    result: 'fail',
                    message: `${resp.status}: ${resp.statusMessage}`
                }
            }
        }
    }
}
