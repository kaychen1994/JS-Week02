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
                <img class="card-img-top product-img" style="background-image: url(${ item.imageUrl[0]});>
                <div class="card-body">
                    <h3 class="card-title p-3">${ item.title }</h3>
                    <p class="card-text p-3">${ item.content }</p>
                    <div class="d-flex justify-content-between p-3">
                        <div class="d-flex justify-content-end align-items-center">
                            <span class="lineThrough">NT ${item.origin_price} 元</span>
                            <span class="text-red ml-4">NT ${item.price} 元</span>
                        </div>
                        <div>
                            <a href="#" class="btn btn-danger px-3">立即搶購</a>
                        </div>
                    </div>
                </div>
            </div>
            `;
        });
        app.innerHTML = string;
    }
}
obj.getData();