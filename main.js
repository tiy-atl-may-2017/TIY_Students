var url = 'http://tiy-gh-wrapper.herokuapp.com//orgs/tiy-atl-js-sept-2015/members';

var template = _.template('<div class="student"><h3><%= name %></h3><img src="<%= avatar_url %>" /></div>');

$.getJSON(url).then(function (response) {
    response.forEach( function (s){
        $.getJSON('http://tiy-gh-wrapper.herokuapp.com//user/' + s.login).then( function (response) {
            $('.container').append(template(response));
        });
    });
});