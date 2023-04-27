import { useRouter } from 'next/router'

import Button from '@/components/Button'
import FeatureSelector from '@/components/FeatureSelector'

const IndexBody = () => {

    const router = useRouter()

    const directToReposPage = () => {
        router.push('/repos')
    }

    return (
        <section className='mt-16'>
            <h1 className='font-bold'><span className='dark:text-blue-500'>LinguaPhrase</span></h1>
            <FeatureSelector></FeatureSelector>
        </section>
    )
}
export default IndexBody