export default function isEmpty(value) {
    if (value === undefined || value === null || value === "" || value.length === 0)
        return false;

    return true;
}

