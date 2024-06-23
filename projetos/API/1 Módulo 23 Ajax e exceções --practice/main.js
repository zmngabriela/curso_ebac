$(document).ready(function() {
    const avatar = $('.avatar');
    const nameElement = $('.name');
    const username = $('.username');
    const repositories = $('repositories');
    const followersNumber = $('followers');
    const followingNumber = $('following');
    const link = $('.link');

    fetch('https://api.github.com/users/zmngabriela')
        .then(function(answer) {
            return answer.json();
        })
        .then(function(json) {
            avatar.attr('src', json.avatar_url);
            nameElement.text(json.name);
            username.text(json.login);
            repositories.text(json.public_repos);
            followersNumber.text(json.followers);
            followingNumber.text(json.following);
            link.attr('href', json.html_url);
        })
        .catch(function(error) {
            nameElement.text('An error has occurred. Please try again later.');
        });
});