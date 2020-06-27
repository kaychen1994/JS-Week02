const obj = {
    data: {
        uuid: '5859a3a4-28fe-452b-819d-f09834d47d87',
        products: [],
    },
    getData: function () {
        const vm = this;
        const url = `https://course-ec-api.hexschool.io/api/${this.data.uuid}/ec/products`;
        axios.get(url)
            .then(function (res) {
                vm.data.products = res.data.data;
                vm.render();
            })
            .catch(function (err) {
                console.log("error", err);
            })
    },
    render: function () {
        const vm = this;
        const app = document.getElementById('app');
        const products = vm.data.products;
        let string = "";
        products.forEach(function (item) {
            string += `
            <div class="card mb-5">
                <img src="${ item.imageUrl[0] }" class="card-img-top" style="height: 300px; background-size: cover; background-position: center;>
                <div class="card-body">
                    <h3 class="card-title p-3">${ item.title }</h3>
                    <p class="card-text p-3">${ item.content }</p>
                    <div class="text-right p-3" style="color:red;">
                        NT ${item.price} 元
                    </div>
                </div>
            </div>
            `;
        });
        app.innerHTML = string;
    }
}
obj.getData();