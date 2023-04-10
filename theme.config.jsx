import {useRouter} from "next/router";

export default {
    logo: <span>Polaris Support</span>,
    project: {
        link: 'https://github.com/DongHieuA7/polaris-support',
    },
    useNextSeoProps() {
        const { asPath } = useRouter()
        if (asPath !== '/') {
            return {
                titleTemplate: '%s – Polaris'
            }
        }
    },
    footer: {
        text: 'Polaris Support Page',
    },
}
