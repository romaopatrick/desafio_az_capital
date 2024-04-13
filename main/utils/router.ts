import { useRouter } from 'next/router';
import QueryString from 'qs';

export const updateSearch = (params: object) => {
    const router = useRouter();

    router.replace({ pathname: router.pathname, query: QueryString.stringify(params) }, undefined, { shallow: true });
};