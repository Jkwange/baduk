var test = new Vue({
    el: '#test',
    mounted: function() {
        // 생략
    },
    methods: {
        start: function() {
            $('#intro').hide();
            $('#main').show();
            $('#result').hide();
        },
        prev: function() {
            alert('prev test');
        },
        next: function() {
            $('#intro').hide();
            $('#main').hide();
            $('#result').show();
        }
    }
});