import { useRouter } from 'next/router';

export default function usePath() {
    const router = useRouter();
    return router?.pathname || '/';
}
