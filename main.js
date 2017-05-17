var url = 'https://tiy-gh-wrapper.herokuapp.com/orgs/tiy-atl-may-2017/members';

var template = _.template('<div class="student"><h3><%= name %></h3><img src="<%= avatar_url %>" /></div>');

$.getJSON(url).then(function (response) {
    response.forEach( function (s){
        $.getJSON('https://tiy-gh-wrapper.herokuapp.com/user/' + s.login).then( function (response) {
            $('.container').append(template(response));
        });
    });
});