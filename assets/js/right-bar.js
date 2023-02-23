const clearArticles = (baseElem) => {
  baseElem.find("article").remove()
}


const getNewArticles = () => {
    let respData;
    $.ajax("/_static/json/new-articles.json", {
        async: false
    }).done(function (data) {
        respData = data;
    }).fail(function (jqXHR, status, errThrown) {
        respData = {status: "error", thrown: errThrown};
    })
    return respData
}

const sortByNewer = (data) => {
    for (let i = 0; i < data.length; i++) {
        for (let j = data.length-1; j > i; j--) {
            let a = new Date(data[j].update)
            let b = new Date(data[j-1].update)
            if (a < b) {
                let tmp = data[j]
                data[i] = data[j-1]
                data[j-1] = tmp
            }
        }
    }
    return data
}

const displayNewArticles = () => {
    const baseElem = $('.right-bar .rb_cont .new-articles article.list')
    clearArticles(baseElem)
    const data = getNewArticles()
    if (data.status === 'success') {
        const sortData = sortByNewer(data.articles)
        sortData.filter(obj => {
            let artHTML = `<article>
    <a href="/articles/${obj.name}">
        <img src="/assets/img/articles/${obj.thumb}" class="al-thumb" />
        <span class="al-title">${obj.title}</span>
    </a>
</article>`
            baseElem.append(artHTML)
        })
    }
}
