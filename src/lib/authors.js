import data from '../../public/articles/authors/users.yml';

const getAuthorProfile = (userName) => {
    if(!userName) return {};

    return data[userName]
}

export {getAuthorProfile};
