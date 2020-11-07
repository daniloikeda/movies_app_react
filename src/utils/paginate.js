import _ from 'lodash';

export function Paginate (items, page, pageSize) {
    var startIndex = (page-1) * pageSize;
    return _(items).slice(startIndex).take(pageSize).value();
}