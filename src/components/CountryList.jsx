import Spinner from './Spinner'
import Message from './Message'
import CountryItem from './CountryItem'

import styles from './CountryList.module.css'
import { useCities } from './contexts/CitiesContext'

function CountryList() {
    const { cities, isLoading } = useCities()

    if (isLoading) return <Spinner />

    if (!cities.length) return (<Message message="Добавьте свой первый город нажав его на карте" />
    )

    const countries = cities.reduce((arr, city) => {
        if (!arr.map(el => el.country).includes(city.country))

            return [...arr, { country: city.country, emoji: city.emoji }]
        else

            return arr

    }, [])

    return (
        <ul className={ styles.countriesList }>
            { countries.map((country) => (
                <CountryItem country={ country } key={ country.country } />

            )) }
        </ul>
    )
}

export default CountryList