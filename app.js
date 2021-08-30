const app = new Vue({
    el: '#app',
    data: {
        title: 'Tasks TO DO',
        items: [],
        newItem: '',
        dataDB: [],
    },
    methods: {
        addItem: function() {
            this.items.push({
                name: this.newItem,
                state: false
            });
            this.newItem = '';
            localStorage.setItem('local-items', JSON.stringify(this.items));
        },
        removeItem: function(index) {
            this.items.splice(index, 1);
            localStorage.setItem('local-items', JSON.stringify(this.items));
        },
        toggleState: function(index) {
            this.items[index].state = !this.items[index].state;
            localStorage.setItem('local-items', JSON.stringify(this.items));
        }
    },
    created: function () {
        let dataDB = JSON.parse(localStorage.getItem('local-items'));
        if (dataDB) {
            this.items = dataDB;
        }  else {
            this.items = [];
        }
    }
});