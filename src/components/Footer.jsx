import { useFilters } from '../hooks/useFilters'
import './footer.css'
export function Footer () {

    const { filters } = useFilters()
    return (
        <footer className='footer'>
            <h4>Prueba Tecnica</h4>
            <span>Jlls</span>
            <h5>Shooping cart</h5>
            {
                JSON.stringify(filters, null,2)
            }
        </footer>
    )
}